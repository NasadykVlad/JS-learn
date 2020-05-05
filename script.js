
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







switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}





var ca = prompt('Go text:', '');
if (ca == 'Edge') {
  console.log("You've got the Edge!");
} else if (ca == 'Chrome', ca == 'Firepox', ca == 'Safari', ca == 'Opera') {
  console.log('Okay, we support these browsers too');
} else {
  console.log('We hope that this page looks ok!');
}







const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}





const number = +prompt('Введите число между 0 и 3', '');
switch(number) {
  case 0:
    console.log('Вы ввели число 0');
  break;

  case 1:
    console.log('Вы ввели число 1');
  break;

  case 2:
  case 3:
    console.log('Вы ввели число 2, а может и 3');
    break;
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






let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );






var author = {     // Задання і вивід об'єкту
	name: "Vlad",
	lastname: "Nasadyk"
}
console.log(author);
var d = author.name;
console.log(d);






var a = [1,2,3,4,51,52,31,55]; // Задання масиву
a.length; // Довжина масиву
a[1] = 81; // Змінити 1 елемент
var value = a[1]; // Прочитати елемент 
console.log(a);





var a = [1,3,55]; // Задання масиву
console.log(a.reverse().join("-")); // Використання методів join та reversed



var a = ["Vlad", "Alina", "Nasadyk", "Boykiv"]; // Метод сортування
console.log(a.sort());
var b = [1,3,4,51,52,8,21,111,51,6]; // Сортування чисел
console.log(b.sort(function(y,u){return y-u}));




var a = [1,2,3];
console.log(a.concat(4,5)); // Робота методу concat()
console.log(a.concat(7, 21, [26,[3,1]]));




var a =[1,2,3,4,5,6,7,8]; // Метод splice()
console.log(a.splice(1,1));
console.log(a);



var a = [1,2,3];
console.log(a.push(4,5)); // Методи push та pop
console.log(a.pop());
console.log(a);






var a = [1,2,3];
console.log(a.unshift(22,4)); // Методи unsift( ) and shift( )
console.log(a.shift(22));
console.log(a);




// Выводит имена и значения всех свойств объектав. Возвращает undefined.
function printprops(o) {
for(var p in o)
console.log(p + ": " + o[p] + "\n");
}


// Вычисляет Декартово расстояние между точками (x1,y1) и (x2,y2).
function distance(x1, y1, x2, y2) {
var dx = x2 - x1;
var dy = y2 - y1;
return Math.sqrt(dx*dx + dy*dy);
}



// Рекурсивная функция вызывающая сама себя ),вычисляющая факториал
// Напомню,что x! - это произведениеx и всех положительных целых чисел, меньше x.
function factorial(x) {
if (x <= 1) return 1;
return x * factorial(x-1);
}





var scope = "global scope";
function checkscope() {
	var scope = "local scope";
	function f()  {return scope}; // Замикання!
	return(f);
}
checkscope();




var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

// Функцию выше можно записать как стрелочную функцию:
elements.map((element) => {
  return element.length;
}); 
 



function Vlad_Operator () {
  console.log('Privet');
}
Vlad_Operator();

function pow (x,n) {
  var v = prompt('Введите x:', '');
  var vv = prompt('Введите n:', '');
  console.log(v**vv);
}
pow();





for(var i = 0; i < 10; i++) {
  if(i %3 == 0 && i != 0) continue; 
  if(i == 3) break;
  console.log(i)
};



var x = 0;
while (x < 10) {
  console.log(x);
  x++;
};



var y = 1000;
do {
    console.log("Vlad");
} while (y < 100);



var array = new Array("Vlad", 13, 23, 1.41);
console.log(array[2]);



let Denis = {
  year: 17,
  rozum: false,
  friend: "Vlad"
};

Denis.divchyna = false;
delete Denis.rozum;
Denis["Tanya Scherba"] = true;
console.log(Denis["Tanya Scherba"]);
delete Denis["Tanya Scherba"];
console.log(Denis);
console.log(Denis.year);







// ************     OOP         ***************






// 1) 
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  getFullName() {
    return this.firstName + ' ' + this.lastName
  }
}





// 2)
let person = new Person('Denys', 'Romanchuk');
console.log(person.getFullName()); 
console.log(person.firstName);
console.log(person.lastName);

class User extends Person {
  constructor(firstName, lastName, email, password) {
    super(firstName, lastName)
    this.email = email
    this.password = password
   }
   getEmail() {
     return this.email
   }
   getPassword() {
     return this.password
   }
}




// 3)
let user = new User('Tanysha', 'Scherba', 'tanyascherba@gmail.com', 'denis2020');
console.log(user.firstName);
console.log(user.lastName);
console.log(user.email);
console.log(user.password);





// 4)
var MYAPP = MYAPP || {}; // Створення глоабального простору імен




// 5)
var p = {x: 1;}; // Оприділити об'єкт прототип
var o = Object.create(p); // Створити об'єкт із цим прототипом
p.isPrototypeOf(o); // TRUE => o наслідує p
Object.prototype.isPrototypeOf(p); // TRUE => p наслідує Object.prototype





// 6)
var user = {
  name: "Sofia",
  lastname: "Tkachuk"
};

var clone = {};

for (var key in user){ // Копіювання об'єктів
clone[key] = user[key];
};
console.log(clone.name)




Объекты – это ассоциативные массивы с рядом дополнительных возможностей.

Они хранят свойства (пары ключ-значение), где:

Ключи свойств должны быть строками или символами (обычно строками).
Значения могут быть любого типа.
Чтобы получить доступ к свойству, мы можем использовать:

Запись через точку: obj.property.
Квадратные скобки obj["property"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].
Дополнительные операторы:

Удаление свойства: delete obj.prop.
Проверка существования свойства: "key" in obj.
Перебор свойств объекта: цикл for for (let key in obj).
Объекты присваиваются и копируются по ссылке. Другими словами, переменная хранит не «значение объекта», а «ссылку» (адрес в памяти) на это значение. Поэтому копирование такой переменной или передача её в качестве аргумента функции приводит к копированию этой ссылки, а не самого объекта. Все операции с использованием скопированных ссылок (например, добавление или удаление свойств) выполняются с одним и тем же объектом.

Чтобы сделать «настоящую копию» (клон), мы можем использовать Object.assign или _.cloneDeep(obj).

То, что мы изучали в этой главе, называется «простым объектом» («plain object») или просто Object.

В JavaScript есть много других типов объектов:

Array для хранения упорядоченных коллекций данных,
Date для хранения информации о дате и времени,
Error для хранения информации об ошибке.
… и так далее.
У них есть свои особенности, которые мы изучим позже. Иногда люди говорят что-то вроде «тип данных Array» или «тип данных Date», но формально они не являются отдельными типами, а относятся к типу данных Object. Они лишь расширяют его различными способами.

Объекты в JavaScript очень мощные. Здесь мы только немного углубились в действительно огромную тему. Мы будем плотно работать с объектами и узнаем о них больше в следующих частях учебника.





// 7)
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
console.log(menu.width * 2);
console.log(menu.height * 2);

*/

// 8)
var Person = function () { // Об'явлення нового конструктору класу.
  console.log('instance created'); // Виводить в консоль повідомлення в момент створення новго екземпляру
};
var person1 = new Person(); // Створення нового еземпляру





// 9)
var Person = function (firstName, lastName) { // Об'являємо новий конструктор класу
  this.firstName = firstName; // Вказуємо, що перше ім'я буде дорівнювати 1 значенюю
  this.lastName = lastName;
  console.log('instance created'); 
};

var person1 = new Person("Tanyshka", " Scherba."); // Створюємо обє'кти по класу Person
var person2 = new Person("Sofka", " Tkachuk.");

console.log("1 person is " + person1.firstName + person1.lastName); 
console.log("2 person is " + person2.firstName + person2.lastName);