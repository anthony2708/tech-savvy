package main

import (
	"fmt"
	"maps"
)

func main(){
	m := make(map[string]int)

	m["k1"]=8
	m["k2"]=27
	fmt.Println("Map:",m)

	v1 := m["k1"]
	v3 := m["k3"]
	fmt.Println("v1:",v1)
	fmt.Println("v3:",v3)

	fmt.Println("Length:",len(m))
	delete(m, "k2")
	fmt.Println("Map:",m)

	clear(m)
	fmt.Println("Map:",m)

	_, present := m["k2"]
	fmt.Println("Presented:",present)

	n := map[string]int{"foo":1,"bar":2}
	fmt.Println("Map:",n)

	n2 := map[string]int{"foo":1,"bar":2}
	if maps.Equal(n,n2){
		fmt.Println("Maps are equal")
	}
}