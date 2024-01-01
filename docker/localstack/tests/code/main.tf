# Create an EC2 instance
resource "aws_instance" "example" {
  ami                    = var.ami
  instance_type          = var.instance_type
  user_data              = templatefile("${path.module}/user-data.sh", { server_port = var.server_port })
  vpc_security_group_ids = [aws_security_group.example.id]

  tags = {
    Name = "${var.instance_name}"
  }
}

# Create a Launch Configuration
resource "aws_launch_configuration" "example" {
  image_id        = var.ami
  instance_type   = var.instance_type
  security_groups = ["${aws_security_group.example.id}"]
  user_data = templatefile("${path.module}/user-data.sh", {
    server_port = var.server_port,
    server_text = var.server_text,
    db_address  = data.terraform_remote_state.db.address,
    db_port     = data.terraform_remote_state.db.port
  })

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_autoscaling_group" "example" {
  launch_configuration = aws_launch_configuration.example.id
  availability_zones = [
    "${data.aws_availability_zones.all.names[0]}",
    "${data.aws_availability_zones.all.names[1]}",
    "${data.aws_availability_zones.all.names[2]}"
  ]

  load_balancers    = ["${aws_elb.example.name}"]
  health_check_type = "ELB"

  min_size = var.min_size
  max_size = var.max_size
  min_elb_capacity = var.min_size

  tag {
    key                 = "Name"
    value               = "${var.instance_name}-asg"
    propagate_at_launch = true
  }
}

# Create an ELB
resource "aws_elb" "example" {
  name = "${var.instance_name}-elb"
  availability_zones = [
    "${data.aws_availability_zones.all.names[0]}",
    "${data.aws_availability_zones.all.names[1]}",
    "${data.aws_availability_zones.all.names[2]}"
  ]
  security_groups = ["${aws_security_group.elb.id}"]

  listener {
    lb_port           = 80
    lb_protocol       = "http"
    instance_port     = var.server_port
    instance_protocol = "http"
  }

  health_check {
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 3
    interval            = 30
    target              = "HTTP:${var.server_port}/"
  }

  lifecycle {
    create_before_destroy = true
  }
}



# Create a security group
resource "aws_security_group" "example" {
  name = var.instance_name

  ingress {
    from_port   = var.server_port
    to_port     = var.server_port
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_security_group" "elb" {
  name = "${var.instance_name}-elb"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 12345
    to_port     = 12345
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Create an IAM user
resource "aws_iam_user" "example" {
  count = length(var.user_names)
  name  = element(var.user_names, count.index)
}

# Create an IAM policy
resource "aws_iam_policy" "ec2_read_only" {
  name   = "ec2-read-only"
  policy = data.aws_iam_policy_document.ec2_read_only.json
}

# Create an IAM user policy attachement
resource "aws_iam_user_policy_attachment" "ec2_access" {
  count      = length(var.user_names)
  user       = element(aws_iam_user.example.*.name, count.index)
  policy_arn = aws_iam_policy.ec2_read_only.arn
}

# Create an IAM policy
resource "aws_iam_policy" "cloudwatch_read_only" {
  name   = "cloudwatch-read-only"
  policy = data.aws_iam_policy_document.cloudwatch_read_only.json
}

# Data source: IAM policy document
data "aws_iam_policy_document" "cloudwatch_read_only" {
  statement {
    effect    = "Allow"
    actions   = ["cloudwatch:Describe*", "cloudwatch:Get*", "cloudwatch:List*"]
    resources = ["*"]
  }
}

# Create an Autoscaling Schedule
resource "aws_autoscaling_schedule" "scale_out_during_business_hours" {
  count = "${var.enable_autoscaling == "true" ? 1 : 0}"

  scheduled_action_name = "scale-out-during-business-hours"
  min_size              = 2
  max_size              = 10
  desired_capacity      = 4
  recurrence            = "0 9 * * *"

  autoscaling_group_name = aws_autoscaling_group.example.name
}

# Create an Autoscaling Schedule
resource "aws_autoscaling_schedule" "scale_in_at_night" {
  count = "${var.enable_autoscaling == "true" ? 1 : 0}"

  scheduled_action_name = "scale-in-at-night"
  min_size              = 2
  max_size              = 10
  desired_capacity      = 2
  recurrence            = "0 17 * * *"

  autoscaling_group_name = aws_autoscaling_group.example.name
}

# Create an Autoscaling Metric Alarm
resource "aws_cloudwatch_metric_alarm" "high_cpu_utilisation" {
  alarm_name  = "${var.instance_name}-high-cpu-utilisation"
  namespace   = "AWS/EC2"
  metric_name = "CPUUtilization"

  dimensions = {
    AutoScalingGroupName = "${aws_autoscaling_group.example.name}"
  }

  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 1
  period              = 300
  statistic           = "Average"
  threshold           = 90
  unit                = "Percent"
}

# Create an Autoscaling Metric Alarm
resource "aws_cloudwatch_metric_alarm" "low_cpu_credit_balance" {
  count = format("%.1s", var.instance_type) == "t" ? 1 : 0

  alarm_name  = "${var.instance_name}-low-cpu-credit-balance"
  namespace   = "AWS/EC2"
  metric_name = "CPUCreditBalance"

  dimensions = {
    AutoScalingGroupName = "${aws_autoscaling_group.example.name}"
  }

  comparison_operator = "LessThanThreshold"
  evaluation_periods  = 1
  period              = 300
  statistic           = "Minimum"
  threshold           = 10
  unit                = "Count"
}