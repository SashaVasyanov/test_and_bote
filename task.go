package main

import "fmt"

func main() {
	count := 600851475143
	maxDivided := 0
	for i := 2; maxDivided == 0; i++ {
		if count%i == 0 {
			maxDivided = count / i
		}
	}
	fmt.Println(maxDivided)
}
