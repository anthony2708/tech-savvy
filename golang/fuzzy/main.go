package main

import (
	"fmt"
	"errors"
	"unicode/utf8"
)

func main(){
	input := "The quick brown fox jumped over the lazy dog"
	rev, revErr := Reverse(input)
	doubleRev, doubleRevErr := Reverse(rev)

	fmt.Printf("Input: %v\n", input)
	fmt.Printf("Reverse: %v, Error: %v\n", rev, revErr)
	fmt.Printf("Double Reverse: %v, Error: %v\n", doubleRev, doubleRevErr)
}

func Reverse(s string) (string, error) {
	if !utf8.ValidString(s) {
		return s, errors.New("Invalid UTF-8 string")
	}

	// b := []byte(s)
	// fmt.Printf("Input: %q\n", s)
	r := []rune(s)
	// fmt.Printf("Runes: %q\n", r)

	// for i, j := 0, len(b)-1; i < len(b)/2; i, j = i+1, j-1 {
	// 	b[i], b[j] = b[j], b[i]
	// }
	// return string(b)

	for i, j := 0, len(r)-1; i < len(r)/2; i, j = i+1, j-1 {
		r[i], r[j] = r[j], r[i]
	}
	return string(r), nil
}