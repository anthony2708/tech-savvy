package main

import (
	"fmt"
	"slices"
)

func main() {
	var s []string
	fmt.Println("Uninitialized:", s, s==nil, len(s) == 0)

	s = make([]string, 3)
	fmt.Println("Empty:", s, "Length:", len(s), "Capacity:", cap(s))

	s[0] = "a"
	s[1] = "b"
	s[2] = "c"
	fmt.Println("Set:", s)
	fmt.Println("Get:", s[2])
	fmt.Println("Length:", len(s))
	s = append(s, "d")
	s = append(s, "e", "f")
	fmt.Println("Append:", s)

	c := make([]string, len(s))
	copy(c, s)
	fmt.Println("Copy:", c)

	l := s[2:5]
	fmt.Println("Slice:", l)

	l = s[:5]
	fmt.Println("Slice:", l)

	l = s[2:]
	fmt.Println("Slice:", l)

	t1 := []string{"g", "h", "i"}
	fmt.Println("Declare:", t1)

	t2 := []string{"g", "h", "i"}
	if slices.Equal(t1, t2) {
		fmt.Println("Equal: t1 and t2")
	}

	twoDim := make([][]int, 3)
	for i := 0; i < 3; i++{
		innerLen := i + 1
		twoDim[i] = make([]int, innerLen)
		for j := 0; j < innerLen; j++{
			twoDim[i][j] = i + j
		}
	}
	fmt.Println("2D:", twoDim)
}