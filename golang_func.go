package main

import "fmt"

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
	amount = paintNeed(4.2, 3.0)
	fmt.Printf("%0.2f необходимо литров краски\n", amount)
	total += amount
	amount = paintNeed(5.2, 3.5)
	fmt.Printf("%0.2f необходимо литров краски", amount)
	total += amount
	fmt.Print("\n")
	fmt.Printf("Всего: %0.2f литров необходимо\n", total)
}

func repeatLine(line string, repeats int) {
	for i := 0; i < repeats; i++ {
		fmt.Println(line)
	}
}

func paintNeed(width float64, height float64) float64 {
	area := width * height
	return area / 10.0
}

func functionD(a string, b int) {
	for i := 0; i < b; i++ {
		fmt.Print(a)
	}
	fmt.Println()
}
