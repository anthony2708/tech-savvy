package main

import "fmt"

func main() {
	
	i := 1
	for i <= 3 {
		fmt.Println(i)
		i = i + 1
	}

	for j := 4; j <= 6; j++ {
		fmt.Println(j)
	}

	for {
		fmt.Println("loop")
		break
	}

	for n := 7; n <= 12; n++ {
		if n % 2 == 0 {
			continue
		}
		fmt.Println(n)
	}
}