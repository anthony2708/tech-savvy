package main

import (
	"fmt"
	"log"
	"example.com/greetings"
)
// import "rsc.io/quote"

func main(){
	// Set properties of the predefined Logger, including
	// the log entry prefix and a flag to disable printing
	// the time, source file, and line number.
	log.SetPrefix("greetings: ")
	log.SetFlags(0)

	// Get a greeting message and print it.
	// message, err := greetings.Hello("Anthony")
	names := []string{"Anthony", "Julia", "Anna"}
	messages, err := greetings.Hellos(names)
	if err != nil{
		log.Fatal(err)
	}

	// fmt.Println("Hello, World!")
	// fmt.Println(quote.Go())
	// message := greetings.Hello("Gladys")
	// fmt.Println(message)
	fmt.Println(messages)
}