// console.log(getLargestExpressionResultOfThree(10, 5));

// function getLargestExpressionResultOfThree(a, b) {
//     let addition = a + b;
//     let subtration = a - b;
//     let multiplication = a * b;

//     if (addition > subtration && addition > multiplication) {
//         return addition;
//     }
//     if (subtration > addition && subtration > multiplication) {
//         return subtration;
//     }
//     if (multiplication > addition && multiplication > subtration);
//     return multiplication;
// }



// function getLargestExpressionResultOfThree(a, b) {
//     let result = a + b;

//     if ((a - b) > result) {
//         result = a - b;
//     }

//     if ((a * b) > result) {
//         result = a * b;
//     }

//     return result;
// }



// if (i === 0){
//     let totalPortion = 0;
//     return console.log(totalPortion);
//   }
//   if (i === 1){
//     let totalPortion = 1;
//     return console.log(totalPortion);
//   }
//   if (i > 1){
// console.log(getDrinks(5, 2));

// function getDrinks(numberOfGuests) {
//     if (numberOfGuests === 0) {
//         let totalPortionds = 0
//         return totalPortionds;
//     } else {
//         let numberOfPortions = 0;
//         for (let nowGuets = 1; nowGuets <= numberOfGuests; nowGuets++) {

//             numberOfPortions = numberOfPortions + nowGuets;
//         }

//         return numberOfPortions;

//     }


// }
// console.log(getDrinks(0, 5))
// function getDrinks(numberOfGuests, step) {
//     let count = 0;
//     for (let nowGuets = 1; nowGuets <= numberOfGuests; nowGuets += step) {
//         count += nowGuets
//     }
//     return count;
// }

// function getDrinks(numberOfGuests, step) {
//     if (numberOfGuests === 0) {
//         let totalPortionds = 0
//         return totalPortionds;
//     }
//     if (step === 1) {
//         let numberOfPortions = 0;
//         for (let nowGuets = 1; nowGuets <= numberOfGuests; nowGuets++) {

//             numberOfPortions = numberOfPortions + nowGuets;
//         }

//         return numberOfPortions;

//     } else {
//         let numberOfPortions = 0;
//         for (let nowGuets = 1; nowGuets <= numberOfGuests; nowGuets += step) {
//             numberOfPortions = numberOfPortions + nowGuets;
//         }
//         return numberOfPortions;
//     }


// }

// console.log(calculateProfit(10000, 4, 3));

// function calculateProfit(amount, percent, period) {

//     let totalAmount = amount;
//     for (initialPeriod = 0; initialPeriod < period; period--) {

//         totalincome = amount + (totalAmount * (percent / 100));
//         let profit = totalincome - amount;
//         totalAmount = totalAmount + profit;

//     }
//     let totalProfit = totalAmount - amount;
//     return totalProfit;

// }


// console.log(Math.floor(12.6));
// console.log(calculateProfit(12500, 3, 12));

// function calculateProfit(amount, percent, period) {
//     let total = amount;
//     for (initialPeriod = 1; initialPeriod <= period; initialPeriod++) {

//         total += total * (percent / 100);
//     }
//     return Math.round(total - amount);

// }



// const name = 'Misha';

// for (const letter of name) {
//     console.log(letter);
// }

// const word = 'abrakadabra';

// console.log(word.includes('b', -100));



// console.log(countMs('mmM'));

// function countMs(text) {

//     let result = 0;
//     for (const letter of text) {
//         if (letter === 'm') {
//             result += 1;
//         }

//     }
//     return result;
// }



// let result = ' ';
// let doc = 'MAEhHIm'
// doc.toLowerCase()
// for (const ch of doc) {

//     if (ch === 'a' || ch === 'A') {
//         result += '';
//     } else if (ch === 'e' || ch === 'E') {
//         result += '';
//     } else if (ch === 'o' || ch === 'O') {
//         result += '';
//     } else if (ch === 'i' || ch === 'I') {
//         result += '';
//     } else if (ch === 'u' || ch === 'U') {
//         result += '';
//     } else if (ch === 'y' || ch === 'Y') {
//         result += '';
//     } else {
//         result += ch;
//     }
// }
// console.log(result);



// console.log(removeVowels("Hello"));
// function removeVowels(doc) {
//     let result = '';
//     for (const ch of doc) {
//         if (!'aeiuoy'.includes(ch.toLowerCase())) {
//             result += ch;
//         }
//     }
//     return result;
// }



// console.log(makeAbbr('national avish university'))
// function makeAbbr(words) {


//     let abbreviatour = words[0];


//     for (let indexNowCh = 0; indexNowCh < words.length; indexNowCh++) {
//         if (words[indexNowCh] === ' ') {
//             abbreviatour = abbreviatour + words[indexNowCh + 1];
//             // words.replace(' ', '');
//         }

//     }
//     return abbreviatour.toUpperCase();
// }




// console.log(isWerewolf('rota tor?'));
// function isWerewolf(target) {

//     let targetJust = '';
//     let targetReversd = '';
//     let result = '';
//     for (let ch of target.toLowerCase()) {
//         if (!'!? '.includes(ch)) {
//             targetReversd = ch + targetReversd;
//             targetJust += ch;
//         }
//     }
//     return targetReversd === targetJust;

// }



// console.log(getSuccessRate('011011110001'));
// function getSuccessRate(statistic) {


//     if (String(statistic) === '') {
//         return 0;
//     }

//     let howManyStudentsUnderstand = 0;

//     for (const number of statistic) {
//         if (number === '1') {
//             howManyStudentsUnderstand += 1;
//         }
//     }


//     return Math.round((howManyStudentsUnderstand / statistic.length) * 100);
// }



// console.log(makeStickers(2, 'body   '))
// function makeStickers(detailsCount, robotPart) {
//     let stickers = [];
//     if (detailsCount === 0) {
//         return stickers;
//     }

//     for (let i = 1; i <= detailsCount; i++) {
//         stickers.push(`${robotPart} detail #${i}`)
//     }

//     return stickers;
// }




// console.log(doublePower([200, 100, 300]));
// function doublePower(currentPowers) {

//     const newArrey = [];
//     for (let i = 0; i < currentPowers.length; i++) {
//         newArrey.push(currentPowers[i] * 2);
//     }
//     return newArrey;
// }




// console.log(isSorted([0, 3, 1, 2, 2, 2]));

// function isSorted(boxNumbers) {

//     let result;
//     if (boxNumbers.length === 0) {
//         return true;
//     }
//     if (boxNumbers.length === 1) {
//         return true;
//     } else {
//         for (let i = 0; i < boxNumbers.length; i++) {
//             if (boxNumbers[i] > boxNumbers[i + 1]) {
//                 return false;
//             } else {
//                 result = true;
//             }

//         }
//     }
//     return result;

// }





// console.log(getLocation([5, 3], ['left', 'left', 'back']))
// function getLocation(coordinates, commands) {
//     for (let i = 0; i < commands.length; i++) {
//         if (commands[i] === 'left') {
//             coordinates[0] -= 1;
//         }
//         if (commands[i] === 'right') {
//             coordinates[0] += 1;
//         }
//         if (commands[i] === 'back') {
//             coordinates[1] -= 1;
//         }
//         if (commands[i] === 'forward') {
//             coordinates[1] += 1;
//         }
//     }
//     return coordinates;
// }



// console.log(getPlan(1000, 6, 20));
// function getPlan(startProduction, numberOfMonths, percent) {

//     let result = [];
//     for (let i = 1; i <= numberOfMonths; i++) {

//         startProduction = startProduction + Math.floor((startProduction * (percent / 100)));
//         result.push(Math.floor(startProduction));
//     }
//     return result;
// }



// console.log(getSpeedStatistic([]))
// function getSpeedStatistic(testResults) {
//     if (testResults.length === 0) {
//         return [0, 0, 0];
//     } else {
//         let minSpeed = testResults[0];
//         let maxSpeed = testResults[0];

//         let sum = testResults[0];
//         for (let i = 1; i < testResults.length; i++) {

//             if (testResults[i] > maxSpeed) {
//                 maxSpeed = testResults[i];

//             } if (testResults[i] < minSpeed) {
//                 minSpeed = testResults[i];

//             }
//             sum += testResults[i];
//         }
//         const avarageSpeed = sum / testResults.length;
//         return [minSpeed, maxSpeed, Math.floor(avarageSpeed)];
//     }

// }



// console.log(compareRobots([5, 6, 10, 15, 10], [5, 6, 10, 15, 20]));
// function compareRobots(firstRobotResults, secondRobotResults) {
//     let allWeightFirst = 0;
//     let allWeightSecond = 0;
//     for (let weightFirst of firstRobotResults) {
//         allWeightFirst += weightFirst;
//     }

//     for (let weightSecond of secondRobotResults) {
//         allWeightSecond += weightSecond;
//     }
//     if (allWeightFirst > allWeightSecond) {
//         return 'First robot for sale!';
//     } if (allWeightSecond > allWeightFirst) {
//         return 'Second robot for sale!';
//     } if (allWeightFirst === allWeightSecond) {
//         return 'Both robots for sale!';
//     }

// }




// Practice   class


// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(this.price)
//     },
// }
// product.showPrice();

//--------------------

// Виправте помилки, щоб код працював
// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(this.price)
//     },
// }

// function callAction(action) {


// }
// callAction(product.showPrice);


// const name = 'Andrew';

// const obj = {
//     name
// }

// console.log(obj)

// const fnA = function () {
//     console.log('Hi');
// }
// fnA()

// const fnB = fnA;

// console.log(fnA === fnB)
// console.log(fnA);
// в змінну fnB зберігають вказівник на комірку пам'яті де лежить ця функція
// змінна fnA також зберігає вказівник на комірку пам'яті де лежить ця функція
// коли ми передаємо функцію ми передаємо не копію а посилання

//---------------------
//контекст функції

// const user = {
//     fnA() {
//         console.log(this);
//     }
// }

// user.fnA();//контекст об'єкту

// // function fnB() {
// //     console.log(this);
// // }

// const fnB = user.fnA;
// console.log(fnB);
// console.log(fnB === user.fnA);
// fnB();

//виклик без контексту в строгому режимі = undefined
//без строгого = window

// де і як була оголошена функція не має ніякого впливу на контекст
// визначається контекст в момент виклику функції(якщо він не прив'язаний явно)

//---------------------
//як метод об'єкту але оголошена як зовнішня функція

// const showName = function () {
//     console.log('this', this);
//     console.log('this.name', this.name);
// }

// showName();

// const user = {
//     name: 'Andrew',
// }

// user.showUserName = showName;

// user.showUserName();//тут визначився контекст

//-------------------