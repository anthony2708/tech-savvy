package main

import "fmt"

type Number interface {
	int64 | float64
}

func main(){
	// TODO: implement
	ints := map[string]int64{"a": 34, "b": 12}
	floats := map[string]float64{"a": 35.98, "b": 26.99}

	fmt.Printf("Non-generic sums: %v and %v\n", SumInts(ints), SumFloats(floats))
	fmt.Printf("Generic Sums: %v and %v\n", 
		SumIntsOrFloats[string, int64](ints), 
		SumIntsOrFloats[string, float64](floats))
	fmt.Printf("Generic Sums, remove type: %v and %v\n",
		SumIntsOrFloats(ints),
		SumIntsOrFloats(floats))
	fmt.Printf("Generic Sums with Constraint: %v and %v\n",
		SumNumbers(ints),
		SumNumbers(floats))
}

// SumInts sums the values of m
func SumInts(m map[string]int64) int64 {
	var sum int64
	for _, v := range m {
		sum += v
	}
	return sum
}

// SumFloats sums the values of m
func SumFloats(m map[string]float64) float64 {
	var sum float64
	for _, v := range m {
		sum += v
	}
	return sum
}

// SumIntsOrFloats sums the values of m. Should work for both int64 and float64
func SumIntsOrFloats[K comparable, V int64 | float64](m map[K]V) V {
    var sum V
    for _, v := range m {
        sum += v
    }
    return sum
}

// SumNumbers sums the values of m. Should work for any type that implements Number
func SumNumbers[K comparable, V Number](m map[K]V) V {
	var sum V
	for _, v := range m {
		sum += v
	}
	return sum
}