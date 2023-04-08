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

console.log('Hello world');

