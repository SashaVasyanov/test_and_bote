package main

import "fmt"

func main() {
	amount := 6
	double(&amount)
	var myFloatPointer = creatPoint()
	fmt.Println(*myFloatPointer)
	fmt.Println(amount)
	truth := true
	cal(&truth)
	fmt.Println(truth)
}

func creatPoint() *float64 {

	var myFloat = 98.5
	return &myFloat
}
func double(number *int) {
	*number *= 2
}
func cal(myCal *bool) {
	*myCal = !*myCal
}
