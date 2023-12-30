package main

import (
	"fmt"
	"time"
)

func main() {
	ch1 := make(chan string, 1)
	go func() {
		time.Sleep(2 * time.Second)
		ch1 <- "One"
	}()

	select {
	case result := <-ch1:
		fmt.Println(result)
	case <-time.After(1* time.Second):
		fmt.Println("Timeout 1")
	}

	ch2 := make(chan string, 1)
	go func() {
		time.Sleep(2 * time.Second)
		ch2 <- "Two"
	}()

	select {
	case result := <-ch2:
		fmt.Println(result)
	case <-time.After(3 * time.Second):
		fmt.Println("Timeout 2")
	}
}