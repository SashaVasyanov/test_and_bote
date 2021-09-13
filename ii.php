<!DOCTYPE html>
<html>

<body>

    <?php
    // $color = "red";
    // echo "My car is " . $color . "<br>";
    // echo "My house is " . $color . "<br>";
    // echo "My boat is " . $color . "<br>";
    // $z = "i love my anime girl";
    // echo "$z";

    // $a = 12;
    // $v = 10;
    // function my(){
    //     global $a, $v;
    //     $v = $a - $v;
    // }
    // my();
    // echo $v;

    // $y = "14";
    // $x = "88";
    // function praid() {
    //     $GLOBALS['y'] = $GLOBALS['y'] + $GLOBALS['x'];
    // }
    // praid();
    // echo "$y";
    // echo "<br>";
    // $num = 14;
    // $num2 = 88;
    // echo "My favorite number is " . $num . $num2;

    // function tryOut() {
    //     static $i = 14;
    //     echo $i;
    //     $i++;
    // }
    // echo "<br>";
    // tryOut();
    // echo "<br>";
    // tryOut();
    // echo "<br>";
    // tryOut();
    // echo "<br>";
    // tryOut();
    // echo "<br>";
    // tryOut();
    // echo "<br>";
    // tryOut();
    // echo "<br>";
    // echo "Сегодня ", "я ", "пытаюсь ", "выучить ", "синтаксис ", "языка программирования ", "<br>",
    // "под названием PHP";

    // $o = 1.2222;
    // $p = "cma";
    // $e = 12;
    // $z = true;
    // var_dump($o);
    // echo "<br>";
    // var_dump($p);
    // echo "<br>";
    // var_dump($e);
    // echo "<br>";
    // var_dump($z);
    // echo "<br>";
    // $i = array('I', 'me', 'he', 'she');
    // var_dump($i);

    // class House {
    //     public $color;
    //     public $haveGarage;
    //     public function __construct($color, $haveGarage) {
    //         $this->color = $color;
    //         $this->haveGarage = $haveGarage;
    //     }
    //     public function message() {
    //         return "My house is " . $this -> color . ", " . $this -> haveGarage;
    //     }
    // }
    // // echo House;
    // echo "<br>";
    // $myHouse = new House("White", "Have");
    // echo $myHouse -> message();
    // echo "<br>";
    // $yourHouse = new House('Black', 'Havent');
    // echo $yourHouse -> message();

    // class Car {
    //     public $color;
    //     public $model;
    //     public function __construct($color, $model) {
    //       $this->color = $color;
    //       $this->model = $model;
    //     }
    //     public function message() {
    //       return "My car is a " . $this->color . " " . $this->model . "!";
    //     }
    //   }

    //   $myCar = new Car("black", "Volvo");
    //   echo $myCar -> message();
    //   echo "<br>";
    //   $myCar = new Car("red", "Toyota");
    //   echo $myCar -> message();
    // echo ('Количество символов в строке - ');
    // echo strlen('я гуляю каждый д');
    // echo '<br>';
    // echo 'Количество слов в строке - ';
    // echo str_word_count('i have a cap cake');
    // echo '<br>';
    // echo 'Строка ниже будет отражена: ';
    // echo '<br>';
    // echo strrev('i have mom');
    // echo '<br>';
    // echo strpos('I have coke', 'coke');
    // echo '<br>';
    // echo str_replace('Day', 'Of', 'God`S Day');

    class Knight
    {
        public $Armor;
        public $colorOfBanner;
        public $order;
        public function __construct($Armor, $colorOfBanner, $order)
        {
            $this->Armor = $Armor;
            $this->colorOfBanner = $colorOfBanner;
            $this->order = $order;
        }
        public function depecha()
        {
            return 'This bless knight has ' . $this->Armor . $this->colorOfBanner . $this->order;
        }
    }
    $greenKnight = new Knight('Тяжёлую, ', 'green, ', 'glorian ');
    echo  "<h1>" . $greenKnight->depecha() . "</h1>";
    echo '<br>';
    $Gallahad = new Knight('light, ', 'red, ', 'the best ');
    echo "<h2>" . $Gallahad->depecha() . "</h2>";
    $DomKixot = new Knight('Плохую броню, ', 'жёлтный флаг, ', 'ордена и подавно нет');
    echo "<h3>" . $DomKixot->depecha() . "</h3>";
    ?>

</body>

</html>


<!-- ANCHOR ИНСТРУКЦИИ И КЛЮЧЕВЫЕ СЛОВА -->
<!-- strlen() - ВОЗВРАЩАЕТ lengt string 
echo strlen('chma world') -->
<!-- str_word_count() - Метод, который считает количество слов в строке -->
<!-- strrev() - МЕТОД, который отражает строку -->
<!-- strpos() -- МЕТОД, который находит индивидуальный текст в строке и выводит позицию его начала. -->
<!-- str_replace() -- МЕТОД, который заменяет некоторые символы в строке на другие символы находящиеся в строке -->