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


//  1)
// class Vehicle {
//     constructor(name) {
//         this.name = name;
//     }
//     stop() {
//         console.log(`транспортний засіб ${this.name} зупинився`);
//     }
//     start() {
//         console.log(`транспортний засіб ${this.name} поїхав`);
//     }
// }

// class Car extends Vehicle {
//     constructor({ name, numDoors }) {
//         super(name);
//         this.numDoors = numDoors;

//     }

//     horn() {
//         console.log('пі віу');
//     }
// }
// class Motorcycle extends Vehicle {
//     constructor({ name, numWheels }) {
//         super(name);
//         this.numWheels = numWheels;
//     }

//     wheelie() {
//         console.log(` ${this.name} зробив відкос`);
//     }
// }
// class Boat extends Vehicle {
//     constructor({ name, lenght }) {
//         super(name);
//         this.lenght = lenght;
//     }

//     anchor() {
//         console.log(`Човен ${this.name} зупинився в цій точці`);
//     }

// }

// const car = new Car({ name: 'Audi', numDoors: 4 });
// const motorcycle = new Motorcycle({ name: 'Yamaha', numWheels: 2 });
// const boat = new Boat({ name: 'Manitou', lenght: 20 });
// console.log(car);
// console.log(motorcycle);
// console.log(boat);
// car.stop();
// car.start();
// boat.anchor();
// motorcycle.wheelie();
// car.horn();
// boat.stop();
// motorcycle.start();


//     2)
// class User {

//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     spreadOut() {
//         console.log(`${this.name} розлогінився`);
//     }
//     logIn() {
//         console.log(`${this.name} залогінився`);
//     }

// }
// class Admin extends User {
//     constructor({ name, email, privileges }) {

//         super(name, email);
//         this.privileges = privileges;

//     }
//     delete(name) {
//         console.log(`${name} був видаленний`);
//     }
//     levelUp(name) {
//         console.log(`${name} стає адміном`)
//     }

// }

// class Moderator extends User {
//     constructor({ name, email, deleteMassage }) {
//         super(name, email);
//         this.opportunityDeleteMassage = deleteMassage;
//     }
//     deleteMassage(id) {
//         console.log(`коментар ${id} видалено`);
//     }

// }


// const moderator = new Moderator({ name: 'Andrew', email: 'andrew@gmail.com', deleteMassage: true });
// const admin = new Admin({ name: 'Ivan', email: 'ivan@gmail.com', privileges: true });
// console.log(admin);
// admin.logIn();
// admin.delete('Vanya');
// admin.levelUp('Vanya');
// moderator.deleteMassage(21);

//  HomeWork

// const place = document.querySelector('.place');
// const pitch = document.querySelector('.pitch');
// const ball = document.querySelector('.ball');
// const cordinateTarget = {};
// const cordinateCenterBall = {};


// // let ballNewTop = ball.offsetTop + (cordinateCenterBall.Y - ball.offsetTop);
// // let ballNewLeft = ball.offsetLeft + (cordinateCenterBall.X - ball.offsetLeft);
// // const ballCordinate = ball.getBoundingClientRect();

// pitch.addEventListener('click', function (event) {

//     const coordsItem = {};

//     cordinateTarget.X = event.clientX;
//     cordinateTarget.Y = event.clientY;

//     cordinateCenterBall.X = cordinateTarget.X - (ball.offsetWidth / 2);
//     cordinateCenterBall.Y = cordinateTarget.Y - (ball.offsetHeight / 2);

//     coordsItem.X = cordinateTarget.X - ball.offsetWidth;
//     coordsItem.Y = cordinateTarget.Y - ball.offsetHeight;

//     let ballSize = {
//         width: ball.offsetWidth,
//         height: ball.offsetHeight
//     }
//     let pitchSize = {
//         left: pitch.getBoundingClientRect().left,
//         right: pitch.getBoundingClientRect().left + pitch.offsetWidth,
//         top: pitch.getBoundingClientRect().top,
//         bottom: pitch.getBoundingClientRect().top + pitch.offsetHeight

//     }

//     ballMove();

//     function ballMove() {

//         // console.log(coordsItem.X, coordsItem.Y);
//         // console.log(ballSize.width, ballSize.height);
//         // console.log(pitchSize.right, pitchSize.top);
//         // console.log(pitchSize.left, pitchSize.bottom);


//         if (coordsItem.X + ballSize.width <= pitchSize.right &&
//             coordsItem.X >= pitchSize.left) {
//             ball.style.left = ball.offsetLeft + (cordinateCenterBall.X - ball.offsetLeft) + "px";
//         }
//         // else {
//         //     if (coordsItem.X + ballSize.width > pitchSize.right) {
//         //         ball.style.left = (pitchSize.right - ballSize.width) + "px";
//         //     }
//         //     if (coordsItem.X < pitchSize.left) {
//         //         ball.style.left = pitchSize.left + "px";
//         //     }
//         // }
//         if (coordsItem.Y + ballSize.height <= pitchSize.bottom &&
//             coordsItem.Y >= pitchSize.top) {
//             ball.style.top = ball.offsetTop + (cordinateCenterBall.Y - ball.offsetTop) + "px";
//         }
//         // else {
//         //     if (coordsItem.Y + ballSize.height > pitchSize.top) {
//         //         ball.style.top = (pitchSize.top - ballSize.height) + "px";
//         //     }
//         //     if (coordsItem.Y < pitchSize.bottom) {
//         //         ball.style.top = pitchSize.bottom + "px";
//         //     }
//         // }



//     }

// })





// // -----------------------------------------------------------
// /*
// const gragField = document.querySelector('.drag-field');
// const gragItem = document.querySelector('.drag-field__item');

// gragItem.addEventListener("mousedown", function (event) {

//     let coordsItemX = event.clientX - gragItem.getBoundingClientRect().left;
//     let coordsItemY = event.clientY - gragItem.getBoundingClientRect().top;

//     let gragItemSizes = {
//         width: gragItem.offsetWidth,
//         height: gragItem.offsetHeight
//     }
//     let gragFieldSizes = {
//         left: gragField.getBoundingClientRect().left + scrollX,
//         top: gragField.getBoundingClientRect().top + scrollY,
//         right: gragField.getBoundingClientRect().left + scrollX + gragField.offsetWidth,
//         bottom: gragField.getBoundingClientRect().top + scrollY + gragField.offsetHeight
//     }

//     gragItem.style.position = 'absolute';
//     gragItem.style.zIndex = 1000;
//     document.body.append(gragItem);

//     moveItem(event.pageX, event.pageY);

//     function moveItem(pageX, pageY) {
//         let currentX = pageX - coordsItemX;
//         let currentY = pageY - coordsItemY;

//         if (
//             currentX + gragItemSizes.width <= gragFieldSizes.right &&
//             currentX >= gragFieldSizes.left
//         ) {
//             gragItem.style.left = `${currentX}px`;
//         } else {
//             if (currentX + gragItemSizes.width > gragFieldSizes.right) {
//                 gragItem.style.left = `${gragFieldSizes.right - gragItemSizes.width}px`;
//             }
//             if (currentX < gragFieldSizes.left) {
//                 gragItem.style.left = `${gragFieldSizes.left}px`;
//             }
//         }
//         if (
//             currentY + gragItemSizes.height <= gragFieldSizes.bottom &&
//             currentY >= gragFieldSizes.top
//         ) {
//             gragItem.style.top = `${currentY}px`;
//         } else {
//             if (currentY + gragItemSizes.height > gragFieldSizes.bottom) {
//                 gragItem.style.top = `${gragFieldSizes.bottom - gragItemSizes.height}px`;
//             }
//             if (currentY < gragFieldSizes.top) {
//                 gragItem.style.top = `${gragFieldSizes.top}px`;
//             }
//         }
//     }

//     let currentDroppable = null;

//     function onDragItem(event) {
//         moveItem(event.pageX, event.pageY);

//         gragItem.hidden = true;
//         let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
//         gragItem.hidden = false;

//         if (!elemBelow) return;
//         let droppableBelow = elemBelow.closest('.drag-field__point');

//         if (currentDroppable !== droppableBelow) {
//             if (currentDroppable) {
//                 currentDroppable.classList.remove('_active');
//                 gragItem.classList.remove('_active');
//             }
//             currentDroppable = droppableBelow;
//             if (currentDroppable) {
//                 currentDroppable.classList.add('_active');
//                 gragItem.classList.add('_active');
//             }
//         }
//     }
//     document.addEventListener('mousemove', onDragItem);

//     document.addEventListener("mouseup", function (event) {
//         document.removeEventListener('mousemove', onDragItem);
//     }, { "once": true });
// });
// gragItem.addEventListener("dragstart", function (event) {
//     event.preventDefault();
// });
// */


// const place = document.querySelector('.place');
// const pitch = document.querySelector('.pitch');
// const ball = document.querySelector('.ball');

// pitch.onclick = function (event) {
//     let fieldCoords = this.getBoundingClientRect();

//     let ballCoords = {
//         top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
//         left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
//     };
//     if (ballCoords.top < 0) ballCoords.top = 0;

//     if (ballCoords.left < 0) ballCoords.left = 0;

//     if (ballCoords.left + ball.clientWidth > field.clientWidth) {
//         ballCoords.left = field.clientWidth - ball.clientWidth;
//     }

//     if (ballCoords.top + ball.clientHeight > field.clientHeight) {
//         ballCoords.top = field.clientHeight - ball.clientHeight;
//     }
//     ball.style.left = ballCoords.left + 'px';
//     ball.style.top = ballCoords.top + 'px';
// }


// const values = [
//     {name:"HTML"},
//     {name:"CSS"},
//     {name:"JavaScript"},
//     {name:"Node.js"},
//     {name:"React"},
//     {name:"Vue"},
//     {name:"Next.js"},
// ]

// const refs = {
//     listEl: document.querySelector(".js-list"),
//     input: document.querySelector(".js-input"),
//     addBtn: document.querySelector(".js-add")
// }


// refs.listEl.append(...createListItems(values));
// refs.addBtn.addEventListener('click', onAddBtnClick);
// refs.input.addEventListener('input', filter)

// function filter(event){
// const filter = event.currentTarget.value    ;
// const filterArr = values.filter((e) => e.name.toLowerCase().includes(filter.toLowerCase()));
// console.log(filterArr);
// refs.listEl.innerHTML = '';
// refs.listEl.append(...createListItems(filterArr));
// }

// function createListItems(values){
//     return values.map((value => {
//         const itemEl = document.createElement("li");
//         itemEl.classList.add("lesson");
//         itemEl.textContent = value.name;
//         return itemEl;
//     }))
// }

// function onAddBtnClick(event){
//     const itemEl = document.createElement("li");
//         itemEl.classList.add("lesson");
//         itemEl.textContent = refs.input.value;
//         refs.input.value = '';
//         refs.listEl.append(itemEl);

// }


// const div = document.querySelectorAll("div");
// const btn = document.querySelectorAll(".btn");

// for (let button of btn) {
//     button.addEventListener('click', clearDiv);
// }

// function clearDiv(e) {
//     for (let elem of div) {
//         elem.style.display = 'none';

//     }
// }

// function getRandomHexColor() {
//     return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
// }
// console.log(getRandomHexColor());

const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const btn = document.querySelector('.btn');

btn.addEventListener('click', changeValue);
input1.addEventListener('input', currentValue);

function changeValue(event) {
    input2.value = `${inputValue}`;

}

function currentValue(event) {
    const inputValue = event.currentTarget.value;
    console.log(inputValue);
}
