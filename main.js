// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function calc(a,b) {
//     return a * b;
// }
// let result = calc(2, 5);
// document.write(result);


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function sCircle(r) {
//     return 3.14 * Math.pow(r, 2);
// }
// let result = sCircle(10);
// document.write(result);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function sCylinder(h, r) {
//     return 2 * 3.14 * r * h;
// }
//
// let res = sCylinder(5, 7);
// document.write(res);


// - створити функцію яка приймає масив та виводить кожен його елемент
// function array(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//
//     }
// }
//
// array(['asds','dfsf', 15]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function textP(text) {
//     document.write(`<p>${text}</p>`)
//     }
// textP('dadasdawdawdwad');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ulLi(text) {
//     document.write('<ul>');
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write('</ul>');
// }
//
// ulLi('red');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ulLi(text, n) {
//     document.write('<ul>');
//     for (let i = 0; i < n; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>');
// }
//
// ulLi('red', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function arrSpysok(arr) {
//     document.write('<ul>');
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write('</ul>');
// }
// arrSpysok([15, 'green', false, 99, 'red', true, 16, 'black', 5 < 3]);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function arrayObjects(arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id} - ${arrElement.name} - ${arrElement.age}</div>`);
//     }
// }
// arrayObjects([
//     {id: 98589, name: 'Roman', age: 20},
//     {id: 65243, name: 'Oleg', age: 25},
//     {id: 68524, name: 'Jon', age: 34}
// ])