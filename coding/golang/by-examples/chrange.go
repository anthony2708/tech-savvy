package main

import "fmt"

func main() {
	queue := make(chan string, 2)

	queue <- "one"
	queue <- "two"

	close(queue)

	for iter := range queue {
		fmt.Println(iter)
	}
}