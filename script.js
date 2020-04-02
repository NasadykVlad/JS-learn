
"use strict"; // Строгий режим

/*

alert ('Hello, world!'); // Вивід повідомлення



let Vlad; // Задання змінної
Vlad = 'Nasadyk'; // Збереження змінної
alert(Vlad); // Вивід змінної



let Olya = 'Dyak'; // Спрощення двох дій з змінними



const myBirthday = '06.09.2020'; // Створення константи



let vlad = 18;
vlad++; // Інкремент/Декремент
alert(vlad); 



result = prompt ('Скільки тобі років?'); // Прийом інформації від користувача (prompt)
alert (`Мені ${result} років!`);



let voss = confirm("Ви тут головні?"); // Підтвердження питання. Якшо нажато ОК, тоді True.
alert (voss);



let year = prompt ("В якому році з'явився КоронаВірус?", ""); // Правльний блок if/else
if (year == 2020) {
    alert ('Та ви знаток!');
} else {
    alert ('А, от і неправильно!');
}  



let year = prompt ("В якому році з'явився КоронаВірус?", ""); // Вказано, декілька умов if/else if/else
if (year < 2020) {
    alert ('Зарано ще!');
} else if (year > 2020) {
    alert ('А, вже запізно');
} else {
    alert ('Та, ви знаток!');
}





let login = prompt("Кто вы?", ""); // Правильне використання контрукцій "?"
let message = (login == "Сотрудник") ? 'Привет':
    (login == "Директор") ? 'Здравствуйте': 
    (login == "") ? 'Нет логина' :
    '';
alert(message);





let book = { // Задання об'єкту
	topic: "JavaScript",
	fat: true
};
book.topic; // Отримання даних із об'єкту
book["fat"] // Другий спосіб отримання значення властивості
book.author = "Flanagan"; // Створити нову властивість привоєнням
book.contents = {}; // { } - Пустий об'єкт без власивості







let primes = [2, 3, 6]; // Задання масиву
primes[0]; // Перший елемент масиву
primes.length; // Довжиеа масиву
primes[primes.length-1]; // Останній елемент
primes[3] = 9; // Добавити новий елемент в масив
primes[3] = 11;







let points = [  // Масив, який містить 2 елементи, кожний елемент - це ОБ'ЄКТ!
	{x:0, y:0},
	{x:1, Y:1}
];






let data = {   // Об'єкт з 2 властивостями, значення з кожної властивості - це МАСИВ, елементи масива являються МАСИВАМИ!
	trial1: [[1,2], [3,4]],
	trial2: [[2,3], [4,5]]
};


3+2 // Додавання
3-2 // Віднімання
3*2 // Множення
3/2 // Ділення
"3" + "2" // + складає числа та об'єднує строки





count++ // Збільшує значення змінної на 1
count-- // Зменшує значення зміноої на 1
count += 2; // Добавити 2, те ж, що count = count  + 2
count *= 3; // Помножити на 3, те ж, що count = count * 3;




x == y // рівність
x != y // нерівність
x < y // менше
x <= y // менше або рівне
x > y // більше 
x => y // більше або рівне
"two" == "three" // дві різні строки
"two" > "three" // tw більше за th
false (x > y) // false = false





(x == 2) && (y == 3) // TRUE: && - AND
(x > 3) || ( y < 3) // FALSE: || - OR
!(x == y) // TRUE: ! - NO





function plus1(x) {     // Функція з іменем plus1 та паремтром x
	return x+1;        // Повернути значення на 1 більше від попереднього  
}





Math.pow(2,53) // => 9007199254740992: 2 в степени 53
Math.round(.6) // => 1.0: округление до ближайшего целого
Math.ceil(.6) // => 1.0: округление вверх
Math.floor(.6) // => 0.0: округление вниз
Math.abs(-5) // => 5: абсолютное значение
Math.max(x,y,z) // Возвращает наибольший аргумент
Math.min(x,y,z) // Возвращаетнаименьшийаргумент
Math.random() // Псевдослучайное число x, где 0 <= x < 1.0
Math.PI // π: длина окружности / диаметр
Math.E // e: Основание натурального логарифма
Math.sqrt(3) // Корень квадратный из 3
Math.pow(3, 1/3) // Корень кубический из 3
Math.sin(0) // Тригонометрия: имеются также
Math.cos, Math.atan и другие.
Math.log(10) // Натуральный логарифм 10
Math.log(100)/Math.LN10 // Логарифм 100 по основанию 10 (десятичный)
Math.log(512)/Math.LN2 // Логарифм 512 по основанию 2
Math.exp(3) // Math.E в кубе





var vlad = "global"; // Об'являємо глобальну змінну
function checkscope() {
var vlad = "local"; // Об'явлення локальної змінної
return vlad; // Повернення змінної (локальної, а не глобальної)
}
console.log(checkscope()); // => local




var a = typeof('i'); // Визначення типу
console.log(a);





var Ruslan = 'dsad';
if (Ruslan == 18) {
	console.log('Руслану 18 років!');
} else if(Ruslan < 18) {
	console.log('Руслану менше 18 років!');
} else if(Ruslan > 18) {
	console.log('Руслану більше 18 років!');
} else {
	console.log('Я вас не розумію!');
}





var count = 0;
while (count < 10) {
	console.log(count);
	count++;	
}






let i = 0;
do {
  console.log( i );
  i++;
} while (i < 3);






for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
  alert(i);
}




for (var count = 0; count < 10; count++)
console.log(count);




*/

let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );



