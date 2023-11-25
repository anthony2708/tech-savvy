package main

import "fmt"

func main(){
	var a [5]int
	fmt.Println("Empty:", a)
	
	a[4] = 100
	fmt.Println("Set:", a)
	fmt.Println("Get:", a[4])
	fmt.Println("Length:", len(a))

	b := [5]int{1, 2, 3, 4, 5}
	fmt.Println("Declare:", b)

	var twoDim [2][3]int
	for i := 0; i < 2; i++{
		for j := 0; j < 3; j++{
			twoDim[i][j] = i + j
		}
	}
	fmt.Println("2D:", twoDim)
}