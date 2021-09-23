package main

import (
	"bufio"
	"fmt"
	"log"
	"math/rand"
	"os"
	"strconv"
	"strings"
	"time"
)

func main() {
	seconds := time.Now().Unix()
	rand.Seed(seconds)
	target := rand.Intn(100) + 1
	fmt.Println("Выберете случайно число от 0 до 100")
	// fmt.Println("Число выбрано")
	// fmt.Println(target)

	reader := bufio.NewReader(os.Stdin)

	success := false
	for popitka := 0; popitka < 10; popitka++ {
		fmt.Println("У вас осталось", 10-popitka, "попыток,", "попытка потеряна")
		fmt.Print("Введите число, которое считайте верным: ")
		input, err := reader.ReadString('\n')
		if err != nil {
			log.Fatal(err)
		}
		input = strings.TrimSpace(input)
		guess, err := strconv.Atoi(input) //преобразование входной строки в целое число
		if err != nil {
			log.Fatal(err)
		}
		if guess > target {
			fmt.Println("Ошибка, число слишком большое")
		} else if guess < target {
			fmt.Println("Ошибка, число слишком маленькое")
		} else {
			success = true
			fmt.Println("Отлично! Вы угадали число!")
			break
		}
	}
	if !success {
		fmt.Println("Вы проиграли(", ", числом было:", target)
	}

}
