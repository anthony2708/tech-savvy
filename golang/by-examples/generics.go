package main

import "fmt"

func MapKeys[K comparable, V any](m map[K]V) []K {
	r := make([]K, 0, len(m))
	for K := range m {
		r = append(r, K)
	}
	return r
}

type List[T any] struct {
	head, tail *element[T]
}

type element[T any] struct {
	next *element[T]
	value T
}

func (lst *List[T]) Push(value T) {
	if lst.tail == nil {
		lst.head = &element[T]{value: value}
		lst.tail = lst.head
	} else{
		lst.tail.next = &element[T]{value: value}
		lst.tail = lst.tail.next
	}
}

func (lst *List[T]) getAll() []T {
	var elems []T
	for e := lst.head; e != nil; e = e.next {
		elems = append(elems, e.value)
	}
	return elems
}

func main()  {
	var m = map[int]string{1 : "a", 2 : "b", 3 : "c"}
	fmt.Println("Keys: ", MapKeys(m))

	_ = MapKeys[int, string](m)

	lst := List[int]{}
	lst.Push(1)
	lst.Push(2)
	lst.Push(3)
	fmt.Println("List: ", lst.getAll())
}