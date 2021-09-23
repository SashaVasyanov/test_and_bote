package main

import (
	"fmt"
	"strings"
	"time"
)

func main() {
	for i := 1; i <= 10; i++ {
		if i%2 == 0 {
			fmt.Println(i, "even")
		} else {
			fmt.Println(i, "odd")
		}

	}
	var now time.Time = time.Now()
	var year int = now.Year()
	fmt.Println(year)

	broken := "G# r#cks"
	replacer := strings.NewReplacer("#", "o")
	fixed := replacer.Replace(broken)
	fmt.Println(fixed)

	NowaDays := "Нэт большэ ни свэта, ни тэни мрачной"
	correctLettre := strings.NewReplacer("э", "e")
	fix := correctLettre.Replace(NowaDays)
	fmt.Println(fix)

	errorStr := "Je va.s manger ma.ntenant et v.vre bon"
	correctStr := strings.NewReplacer(".", "i")
	fix1 := correctStr.Replace(errorStr)
	fmt.Println(fix1)

}

// func main() {
// 	for i := 1; i <= 100; i++ {
// 		if i % 3 == 0 {
// 			fmt.Println(i, "Делится на три,", "Fizz")
// 		} else if i % 5 == 0 {
// 			fmt.Println(i, "Делится на пять,", "FizzBizz")
// 		}
// 	}
// }

// func main() {
// var x [5]int
// x[4] = 100
// fmt.Println(x)
// }
