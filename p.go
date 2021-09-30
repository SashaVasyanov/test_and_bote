package main

import "fmt"

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
}
