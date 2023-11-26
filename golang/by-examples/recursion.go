package main

import "fmt"

func fact(n int) int {
	if n == 0 {
		return 1
	}
	return n * fact(n-1) // recursion
}

func main() {
	fmt.Println(fact(7))

	var fibonacci func(n int) int

	fibonacci = func(n int) int {
		if n < 2 {
			return n
		}
		return fibonacci(n-1) + fibonacci(n-2) // recursion
	}
	
	fmt.Println(fibonacci(7))
}