package main

import "fmt"

func plus(a int, b int) int {
	return a+b
}

func plus3(a,b,c int) int {
	return a+b+c
}

func main(){
	result := plus(1,2)
	fmt.Println("1+2 =",result)

	result = plus3(1,2,3)
	fmt.Println("1+2+3 =",result)
}