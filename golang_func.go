package main

import (
	"fmt"
	"log"
)

func main() {

	fmt.Printf("%12s | %s\n", "Product", "Cost in Cents")
	fmt.Println("-----------------------------")
	fmt.Printf("%12s | %2d\n", "Stamps", 50)
	fmt.Printf("%12s | %2d\n", "Paper Clips", 5)
	fmt.Printf("%12s | %2d\n", "Tape", 99)

	fmt.Print("\n")

	fmt.Printf("%15s || %s\n", "I am anime", "You are cringe")
	fmt.Println("-------------------------------")
	fmt.Printf("%15s || %3d\n", "Top anime", 501)
	fmt.Printf("%15s || %3d\n", "My top", 12)
	fmt.Printf("%15s || %3d\n", "Her top", 9)
	repeatLine("I am JMA", 4)
	fmt.Print("\n")
	functionD("Su", 2)
	functionD("Su", 2)

	var amount, total float64
	amount, err := paintNeed(4.2, 3.0)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(err)
	fmt.Printf("%0.2f необходимо литров краски\n", amount)
	total += amount
	amount, err = paintNeed(5.2, 3.5)
	fmt.Println(err)
	fmt.Printf("%0.2f необходимо литров краски", amount)
	total += amount
	fmt.Print("\n")
	fmt.Printf("Всего: %0.2f литров необходимо\n", total)

	myInt := 42
	myIntPointer := &myInt
	*myIntPointer = 8
	fmt.Println(myInt)
	fmt.Println(*myIntPointer)
	fmt.Println(myIntPointer)
}

func repeatLine(line string, repeats int) {
	for i := 0; i < repeats; i++ {
		fmt.Println(line)
	}
}

func paintNeed(width float64, height float64) (float64, error) {
	if width < 0 {
		return 0, fmt.Errorf("Значение width %0.2f, не может быть отрицательным", width)
	}
	if height < 0 {
		return 0, fmt.Errorf("Значение height %0.2f, не может быть отрицательным", height)
	}
	area := width * height
	return area / 10.0, nil
}

func functionD(a string, b int) {
	for i := 0; i < b; i++ {
		fmt.Print(a)
	}
	fmt.Println()
}
