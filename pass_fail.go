package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {

	fmt.Print("Enter a grade: ")
	reader := bufio.NewReader(os.Stdin)
	input, err := reader.ReadString('\n')

	if err != nil {
		log.Fatal(err)
	}

	input = strings.TrimSpace(input)
	grade, err := strconv.ParseFloat(input, 64)

	if err != nil {
		log.Fatal(err)
	}
	var status string

	if grade >= 60 {
		status = "you'r passing"
	} else {
		status = "you'r lose"
	}
	fmt.Println("A grade of", grade, status)
	goG()
}

func goG() {
	fmt.Print("Введите вашу оценку: ")
	reading := bufio.NewReader(os.Stdin)
	input, err := reading.ReadString('\n')
	if err != nil {
		log.Fatal(err)
	}
	input = strings.TrimSpace(input)
	grade, err := strconv.ParseFloat(input, 64)
	if err != nil {
		log.Fatal(err)
	}
	var status string
	if grade >= 60 {
		status = "вы сдали"
	} else {
		status = "вы не сдали "
	}
	fmt.Println("Ваша оценка -", grade, ",", status)
}
