package main

import (
	"fmt"
	"greeting"
	"keyboard"
	"log"
)

func main() {
	greeting.Hi()
	greeting.Hello()
	fmt.Printf("Введите ваш бал: ")
	grade, err := keyboard.GetFloat()
	if err != nil {
		log.Fatal(err)
	}
	var status string
	if grade >= 60 {
		status = "passing"
	} else {
		status = "falling"
	}
	fmt.Println("Ваш бал:", grade, status)
}
