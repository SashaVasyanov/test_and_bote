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
	paintNeed(4.2, 1.2)
	paintNeed(5.2, 7.9)
	paintNeed(3.3, 5.6)
	functionD("Su", 2)
	functionD("Su", 2)
}

func repeatLine(line string, repeats int) {
	for i := 0; i < repeats; i++ {
		fmt.Println(line)
	}
}

func paintNeed(width float64, height float64) {
	area := width * height
	fmt.Printf("%.2f %s \n", area/10, "Необходимое количество литров краски")
}

func functionD(a string, b int) {
	for i := 0; i < b; i++ {
		fmt.Print(a)
	}
	fmt.Println()
}
