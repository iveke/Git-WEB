//   Array
// let str = 'abcde';
// if (str.charAt(0) == 'a') {
//     console.log('так');
// } else {
//     console.log('ні');
// }

//1a
// const poem = ["Мороз", "и", "солнце", "день", "чудесный"];
// let numberWord = window.prompt('введіть номер слова який хочете замінити від 1 до 5');
// let word = window.prompt('введіть слово що хочете замінити');
// poem.splice(numberWord - 1, 1, word);
// console.log(poem.join(' '));


// 1b
// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(-2, 1, 'kiln');
// console.log(arr);


//3
// let group1 = ["Агеев", "Дмитренко", "Иванов", "Семенов", "Шаповалов"];
// group1.unshift('Berezin');

// group1.push('Gashenko');

// group1.splice(-2, 1, 'Ковалеву', 'Горобченко');

// let group2 = ["Филонов", "Изюмов", "Кабанов", "Дюдарев"];
// let result = group1.concat(group2);

// result.sort((a, b) => a.localeCompare(b));
// console.log(result);


//   Function
//1
// function comparison(a, b) {
//     if (a > b) {
//         return 1;
//     }
//     return -1
// }
// console.log(comparison(1, 2));

//or  1
// const result = (a, b) => a > b ? 1 : -1;
// console.log(result(5, 4));

// 2
// function myParagraph(backround, color, text) {
//     document.cre
//     document.getElementById("text").innerHTML = text;
//     document.getElementById("text").style.color = color;
//     document.getElementById("text").style.background = backround;
// }
// console.log(myParagraph('red', 'black', 'hello my name is vasy'));

//Function Arguments   NOT RIGHT
// let arrayWords = window.prompt('input your word')
// function createList(arrayWords) {
//     arrayWords.join(' ');
//     document.write(arrayWords);
//     console.log(arrayWords);
// }
// console.log(createList())



// let a = '1';
// console.log(typeof (a));
// console.log(typeof (+a));



// switch tranform in if...else



// function cheakBrowser(browser) {


//     if (typeof (browser) != String) {
//         alert('Can you print right');
//         return;
//     }
//     if (browser == 'Edge') {
//         alert("You've got the Edge!");
//         return;
//     }
//     if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Opera' || browser == 'Safari') {
//         alert('Okay we support these browsers too');
//         return;
//     }

//     return alert('We hope that this page looks ok!');

// }
// console.log(cheakBrowser(prompt('you can print onlu ')));


//search 1)

// let masive = [0, 3, 4, 5, 9, 1, 7];
// function searchLargest(massive) {
//     let result = massive[0];
//     for (i = 1; i < massive.length; i++) {

//         if (massive[i] > result) {
//             result = massive[i];
//         } else {
//             result = result;
//         }


//     }
//     return result;
// }
// console.log(searchLargest(masive));

//with MANGO 2)

// let str = 'mAnGo';
// let result = '';
// for (i = 0; i < str.length; i++) {

//     if (str[i] == str[i].toUpperCase()) {
//         result += str[i].toLowerCase();
//     } else {
//         result += str[i].toUpperCase();
//     }
// }
// console.log(result);


// 3)
// let str = "Amazon was founded by Jeff Bezos from his garage in Bellevue Washington on July 5 1994";
// let result = "";
// for (i = 0; i < str.length; i++) {
//     if (str[i] == ' ') {
//         result += '-';
//     } else {
//         result += str[i].toLowerCase();
//     }
// }

// console.log(result);

// 4)

// 5)
// function addArgument(massive, argument) {
//
//     if (massive.includes(argument) == true) {
//         return console.log('значення вже існує');
//     } else {
//         return console.log(massive.push(argument));
//     }
// }
// addArgument(['hello', 'Pety', 'ivan'], 'Grom'); !!


// function removeArgument(massive, argument) {
//     if (massive.includes(argument) == true) {
//         let index = massive.indexOf(argument);
//         massive.splice(index, 1);
//         return console.log(massive);
//     }
//     return console.log('такого значення не існує')
// }
// removeArgument(['hello', 'Pety', 'ivan', 'Grom'], 'Grom');


// function changeArgument(massive, elem1, elem2) {
//     if (massive.includes(elem2) == true) {
//         let index = massive.indexOf(elem2);
//         massive.splice(index, 1, elem1);
//         return console.log(massive);
//     }
//     return console.log('такого значення не існує');

// }
// changeArgument(['hello', 'Pety', 'ivan', 'Grom'], 'Tkach', 'Grom');


//  6)
// let arr = ['python', 'javascript', 'c++', 'php'];
// arr.sort();
// console.log(arr);

// console.log('Hello world');

// console.log("Hi");

// function User ({name,age} = {}) {
//     this.name = name;
//     this.age = age;
// }

// User.prototype.changeAge = function (newAge){
//     this.age = newAge;
// }


// const userA = new User({name:'Andrew', age:24});

// console.log(userA);
// //console.dir(User);

// userA.changeAge(30);

// console.log(userA);

// function Product(name,price){
// this.name = name;
// this.price = price;
// }
// function Food(name,price){
//     Product.call(this,name,price);
//     this.category = 'food';
// }

// const myFood = new Food('cheese',5);
// console.log(muFood);

// class Car {
//     test = 'my test';
//     #storage = 'Artem';


//     static autor = 'Andrew';


//     constructor ({brand,model,price,color = 'blue'} = {} ){
//         console.log('first run')
//         this.brand = brand;
//         this.model= model;
//         this.price = price;
//         this.color = color;
//     }
//     changePrice (newPrice){
//         this.price = newPrice
//     }
//     myStorage(){
//     return this.#storage;
//     }
// }

// console.dir(Car);

// const myCarA = new Car ({brand:'Audi', model:'Q3', price:35000});

// console.dir(myCarA);


// class Car {
//     #brand;
//     constructor({brand,model,price,color} = {}){
//         console.log('first run');
//         this.#brand = brand;
//         this._model = model;
//         this.price = price;
//         this.color = color;

//     }
//         changePrice (newPrice){
//         this.price = newPrice
//     }

// get brand() {
//     return this.#brand;
// }
// set brand(brand){
//     this.#brand = brand;
// }
// get model() {
//     return this._model;
// }
// set model(_model){
//     this.model = _model;
// }



// }


// console.log(typeof Object);
// console.log(Object);
// console.dir(Object);
// // console.log(typeof Object.prototype);
// // console.dir(Object.prototype);
// console.log(Object.__proto__);
// console.log(typeof Object.__proto__);
// console.dir(Object.__proto__);
// console.dir(Object.prototype.__proto__);
// console.log(Object.prototype.__proto__);
// console.log(Object.__proto__.prototype);
// console.dir(Object.__proto__.prototype);


// class Samurai {
//     constructor(name) {
//         this.name = name;
//     }
//     hello() {
//         alert(this.name);
//     }

// }
// let shogun = new Samurai("Dimyich");

// // console.dir(shogun.__proto__.__proto__);
// // console.dir(shogun.__proto__.constructor.__proto__);
// // console.log(shogun.__proto__.__proto__.__proto__);
// // console.log(typeof shogun.__proto__.prototype);
// console.log(typeof Samurai.prototype);
// console.log(typeof Samurai.__proto__.prototype);
// console.log(Samurai.__proto__);
// console.dir(Samurai.__proto__);
// console.dir(typeof Samurai.__proto__.__proto__.__proto__);
// console.dir(Samurai.__proto__.__proto__)

// console.dir(Samurai);
// console.dir(shogun);



// class Product {
//     constructor ({name, price, quantity,} = {}){
//         this.name = name;
//         this.prrice = price;
//         this.quantity = quantity;
//     }
//      get amount(){
//         return this.prrice*this.quantity;

//     }
// }

// const product = new Product({name: 'bear',price: 1000,quantity:25});
// console.log(product);
// console.log(product.amount());


// class Product{

// constructor ({id, name, price} = {}) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     }
// get getPriceWithTax(){
//     return this.price + this.price * 0.2;
// }
// get getPriceWithDiscount() {
//     return this.price - this.price * 0.1;
// }

// }

// const product = new Product({id:1, name:'car', price:1000});
// const product2 = new Product({id:2, name:'box', price:100});
// const product3 = new Product({id:3, name:'bitcoin', price:30000});


// class Basket extends Product {
//     products = [];
//     total = 0
//     set addProduct(product){
//         products.push(product);
//     }
//     get getTotalPriceWithTax(){
//         for (i = 0;i<this.products.length ;i++){
//             total += 1 ;
//         }
//         return total * this.price.getPriceWithTax();
//     }
//     get getTotalPriceWithDiscount(){
//         for (i = 0;i<this.products.length ;i++){
//             total += 1 ;
//         }
//         return total * this.price.getPriceWithDiscount();
//     }

// }


// console.dir(Basket);
// console.dir(Product);
// console.log(product);



// const arr = [1, 2, 3];

// const newArr = arr.map(e => e * 2);
// console.log(newArr)


// class Basket {
//     products = [];
//     addProduct(product){
//         this.products.push(product);
//     }
//     get totalPriceWithTax(){
//         return this.products.reduce((total, product) => total * product.getPriceWithTax, 0);
//     }
//     get totalPriceWithDiscount(){
//         return this.products.reduce((total, product) => total * product.getPriceWithDiscount, 0);
//     }

// }
// const basket = new Basket();
// console.log(basket);
// basket.addProduct(product1);
// basket.addProduct(product2);
// basket.addProduct(product3);

// console.log(basket.totalPriceWithTax);
// console.log(basket.totalPriceWithDiscount);

// class Warriors {
//     constructor({ name, health, xp, wearon } = {}) {
//         this.name = name;
//         this.health = health;
//         this.xp = xp;
//         this._weapon = '';
//     }
//     set wearon(value) {
//         this._weapon = value;
//     }
//     get wearon() {
//         return this_weapon;
//     }
//     gainXp(amout) {
//         console.log(`${this.name} отримує ${amout} досвіду`);
//         this.xp += amout;
//     }
// }

// class Mage {
//     constructor({ name, health, xp, spels } = {}) {
//         this.name = name;
//         this.health = health;
//         this.xp = xp;
//         this._spels = [];
//     }
//     get spels() {
//         return this._spels;
//     }
//     set spels(value) {
//         this._spels.push(value);
//     }
//     gainXp(amout) {
//         console.log(`${this.name} отримує ${amout} досвіду`);
//         this.xp += amout;
//     }
// }



