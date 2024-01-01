package main

import "fmt"

func zeroVal(iVal int){
	iVal = 0
}

func zeroPtr(iPtr *int){
	*iPtr = 0
}

func main(){
	i := 1
	fmt.Println("Initial:", i)

	zeroVal(i)
	fmt.Println("zeroVal:", i)

	zeroPtr(&i)
	fmt.Println("zeroPtr:", i)

	fmt.Println("Pointer:", &i)
}