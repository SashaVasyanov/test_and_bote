package main

import (
	"fmt"
	"math"
	"strconv"
)

func main() {

	var notes [7]string
	notes[0] = "Do"
	notes[1] = "Re"
	notes[2] = "Mi"
	notes[3] = "Fa"
	notes[4] = "Sol"
	notes[5] = "La"
	notes[6] = "Si"
	fmt.Println(notes[6])
	fmt.Println(notes[2])

	var meat [4]string = [4]string{"chicken", "beaf", "fish", "blood steak"}
	fmt.Println(meat[3])

	musique := [3]string{"classique", "simphonique", "pop"}
	fmt.Println(musique[2])

	redSpeak := [2]string{
		"Aime la famille et la patrie",
		"Tue les ennemie et les Allemands",
	}
	fmt.Println(redSpeak[1])
	fmt.Println(notes)
	fmt.Printf("%#v\n", notes)
	index := 2
	fmt.Println(notes[index])

	for i := 0; i < 7; i++ {
		fmt.Println(i, notes[i])
	}
	fmt.Println(len(notes))
	for i := 0; i < 4; i++ {
		fmt.Println(i, meat[i])
	}

	for i := 0; i < 2; i++ {
		fmt.Println(i, redSpeak[i])
	}
	for index, note := range notes {
		fmt.Println(index, note)
	}

	lettres := [5]string{"une", "deux", "trois", "quatre", "cinq"}
	for index, lettre := range lettres {
		fmt.Println(index, lettre)
	}
	for _, letre := range lettres {
		fmt.Println(letre)
	}
	for index, _ := range lettres {
		fmt.Println(index)
	}
	var num int = 123
	var count int = 0

	if num >= 100 && num <= 999 {
		fmt.Println("Три символа")

	} else if num >= 1 && num <= 9 {
		fmt.Println("Один символ")

	} else if num >= 10 && num <= 99 {
		fmt.Println("Два символа")

	} else if num >= 1000 && num <= 9999 {
		fmt.Println("Четыре символа")

	} else if num <= -1 && num >= -9 {
		fmt.Println("Один символ")

	} else if num <= -10 && num >= -99 {
		fmt.Println("Два символа")

	} else if num <= -100 && num >= -999 {
		fmt.Println("Три символа")
	}

	for num > 0 {
		num = num / 10
		count = count + 1
	}
	fmt.Println(count)
	cmoxNeCmox := [5]string{"Ded", "Redish", "Bredish", "Vadim", "Vladislav"}
	for index, cma := range cmoxNeCmox {
		fmt.Println(index, cma)
	}

	numbers := [4]float64{3.5, 7.17, 4.7, 8.113}
	var sum float64 = 0
	for _, number := range numbers {
		sum += number
	}
	sampleCount := float64(len(numbers))
	fmt.Printf("Среднее значение: %.2f\n", sum/sampleCount)

	dr := [6]float64{1.23, 5.123, 0.231, 42.1, 51.1, 8.12}
	var summus float64 = 0
	for _, number := range dr {
		summus += number
	}
	counts := float64(len(dr))
	fmt.Printf("Среднее число: %.2f\n", summus/counts)
	var summmum int = 0
	for i := 0; i < 1000; i++ {
		if i%5 == 0 || i%3 == 0 {
			summmum += i
		}
	}
	fmt.Println(summmum)

	var segment []string
	segment = make([]string, 7)
	segment[0] = "my first segment"
	segment[1] = "my second segment"
	segment[2] = "my third segment"
	segment[3] = "my fourth segment"
	segment[4] = "my fifth segment"
	segment[5] = "my sixth segment"
	segment[6] = "my seventh segment"
	fmt.Println(segment[5])
	newSeg := make([]int, 2)
	newSeg[0] = 15
	newSeg[1] = 12
	fmt.Println(newSeg[1])
	fmt.Println(len(newSeg))
	fmt.Println(len(segment))
	for index, seg := range segment {
		fmt.Println(index, ":", seg)
	}
	for index, seg2 := range newSeg {
		fmt.Println(index, ":", seg2)
	}

	name := []string{"Egeuni", "Aleksandr", "Alisa", "Alina"}
	fmt.Println(name[0], name[1], name[2], name[3])
	numberOfGo := []int{
		1,
		3,
		4,
		5,
		6,
	}
	fmt.Println(numberOfGo[0], numberOfGo[1], numberOfGo[4])
	a := 10
	str := "i love this nomber " + strconv.Itoa(a)

	fmt.Println(str)
	fmt.Printf("%T	\n", a)
	itoa(5, "Свиней ")
	newArray := [3]string{"a", "b", "c"}
	slice1 := newArray[0:2]
	fmt.Println(slice1)
	arr1 := [4]string{"a", "b", "c", "d"}
	slice := arr1[3:4]
	slice3 := arr1[:3]
	slice4 := arr1[1:]
	slice4 = append(slice4, "g", "q", "f")
	fmt.Println(slice)
	fmt.Println(slice3)
	fmt.Println(slice4)
	fmt.Println(slice3, slice4)
	pluralisNum(1, 2, 3, 4, 5, 6, 7, 345435)
	pluralisStr("vasya plays dota,", "i hate smt,", "you love always all")
	plur(false, 5, "games", "drames")
	fmt.Println(maximum(123.123, 2.41, 1.5, 123.12124, 5.1, 8.123123))
	fmt.Println(inRange(-14, 1488, 12, -124214, 12421421, 63464363, 54, 12, 53, 645, 6))
	fmt.Println(average(5, 1, 6, 123, 35, 643, 214, 15))
}

func itoa(i int, s string) {
	tm := i
	fmt.Println(s + strconv.Itoa(tm))

}
func pluralisNum(num1 ...int) {
	fmt.Println(num1)
}
func pluralisStr(strings ...string) {
	fmt.Println(strings)
}
func plur(boolean bool, num int, strings ...string) {
	fmt.Println(boolean, num, strings)
}
func maximum(numbers ...float64) float64 {
	max := math.Inf(-1)
	for _, number := range numbers {
		if number > max {
			max = number
		}
	}
	return max
}
func inRange(min float64, max float64, numbers ...float64) []float64 {
	var result []float64
	for _, number := range numbers {
		if number >= min && number <= max {
			result = append(result, number)
		}
	}
	return result
}
func average(numbers ...float64) float64 {
	var sum float64 = 0
	for _, num := range numbers {
		sum += num
	}
	return sum / float64(len(numbers))
}
