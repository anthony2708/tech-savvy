package main 

import (
	"testing"
	"unicode/utf8"
)

// func TestReverse(t *testing.T) {
// 	testCases := []struct {
// 		in, want string
// 	}{
// 		{"Hello, world!", "!dlrow ,olleH"},
// 		{"", ""},
// 		{"!12345", "54321!"},
// 	}

// 	for _, tc := range testCases {
// 		rev := Reverse(tc.in)
// 		if rev != tc.want {
// 			t.Errorf("Reverse: %q; want %q", rev, tc.want)
// 		}
// 	}
// }

func FuzzReverse(f *testing.F) {
	testCases := []string {"Hello, world!", "", "!12345"}
	for _, tc := range testCases {
		f.Add(tc) // Add test case to fuzzer
	}

	f.Fuzz(func(t *testing.T, input string) {
		rev,err1 := Reverse(input)
		if err1 != nil {
			// 
			t.Skip()
		}

		doubleRev, err2 := Reverse(rev)
		// t.Logf("Number of runes: input=%d, rev=%d, doubleRev=%d", utf8.RuneCountInString(input), utf8.RuneCountInString(rev), utf8.RuneCountInString(doubleRev))
		if err2 != nil {
			// return
			t.Skip()
		}

		if doubleRev != input {
			t.Errorf("Double Reverse: %q; want %q", doubleRev, input)
		}

		if utf8.ValidString(input) && !utf8.ValidString(rev) {
			t.Errorf("Reverse produced invalid UTF-8 string %q", input)
		}
	})
}