package main

import "fmt"

type rectangle struct{
	width, height int
} 

func (r *rectangle) area() int{
	return r.width * r.height
}

func (r rectangle) perim() int{
	return 2*r.width + 2*r.height
}

func main(){
	r := rectangle{width: 10, height: 5}

	fmt.Println("Area: ", r.area())
	fmt.Println("Perimeter: ", r.perim())

	rp := &r
	fmt.Println("Area: ", rp.area())
	fmt.Println("Perimeter: ", rp.perim())
}