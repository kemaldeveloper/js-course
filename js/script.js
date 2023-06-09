"use strict";

// 1)
// console.log((String(null)));
// console.log(null);

// // 2)

// console.log(typeof(5 + ''));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number
// 1)
// console.log(typeof(Number('4')));

// 2)
// console.log(typeof(+'5'));

// 3)

// console.log(typeof(parseInt("15px", 10)));

// let answer = +prompt("Hello", "");

// To boolean
// 0, '',  null, undefined, false, Nan;

// 1)
let swithcer = null;
if (swithcer) {
  console.log('Working...');
}

swithcer = 1;

if (swithcer) {
  console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!"44444"));