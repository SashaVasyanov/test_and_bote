package main

import "fmt"

func main() {
	cicl()
}

func cicl() {
	var nextNum int = 1
	var previousNum int = 0
	var sum int
	var allSum int = 0
	for sum < 4000000 {
		sum = previousNum + nextNum
		if sum%2 == 0 {
			allSum += sum
		}
		previousNum = nextNum
		nextNum = sum
	}
	fmt.Println(allSum)
}
