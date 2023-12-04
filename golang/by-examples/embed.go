package main

import "fmt"

type base struct {
	number int
}

type container struct {
	base
	str string
}

func (b base) describe() string {
	return fmt.Sprintf("Base with number=%v", b.number)
}

func main()  {
	con := container{
		base: base {
			number: 1,
		},
		str: "Hello",
	}

	fmt.Printf("Container {number: %v, string: %v}\n", con.number, con.str)
	fmt.Println("Also number: ", con.base.number)
	fmt.Println("Describe: ", con.describe())	

	type describer interface {
		describe() string
	}

	var des describer = con
	fmt.Println("Describer: ", des.describe())
}