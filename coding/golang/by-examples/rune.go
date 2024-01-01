package main

import (
	"fmt"
	"unicode/utf8"
)

func main(){
	const str = "Xin chào"

	fmt.Println("Length: ", len(str))

	for i := 0; i < len(str); i++ {
        fmt.Printf("%x ", str[i])
    }
	fmt.Println()

	fmt.Println("Rune count: ", utf8.RuneCountInString(str))


	// Range
	for index, runeValue := range str {
		fmt.Printf("%#U at position %d\n", runeValue, index)
	}

	fmt.Println("\n --- Convert string to rune ---")
	for i, w := 0, 0; i < len(str); i += w {
		runeValue, width := utf8.DecodeRuneInString(str[i:])
		fmt.Printf("%#U starts at byte position %d\n", runeValue, i)
		w = width

		examineRune(runeValue)
	}
}

func examineRune(r rune){
	if r == 'X' {
		fmt.Println("X")
	} else if r == 'i' {
		fmt.Println("i")
	} else if r == 'n' {
		fmt.Println("n")
	} else if r == ' ' {
		fmt.Println("Space")
	} else if r == 'c' {
		fmt.Println("c")
	} else if r == 'h' {
		fmt.Println("h")
	} else if r == 'à' {
		fmt.Println("à")
	} else if r == 'o' {
		fmt.Println("o")
	} else {
		fmt.Println("Unknown")
	}
}