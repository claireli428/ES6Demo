var Module1 = require('./module1');
Module1();

import Module2 from './module2';
Module2();


// import Module2 from './module2';


// Module2();
// {
//     let a = 10;
//     var b = 1;
// }
//
// console.log(a);
// console.log(b);
//
//
// var arr1 = [];
// for (var i = 0; i < 10; i++) {
//     arr1[i] = function () {
//         console.log(i);
//     };
// }
// arr1[6]();
//
// var arr2 = [];
// for (let j = 0; j < 10; j++) {
//     arr2[j] = function () {
//         console.log(j);
//     };
// }
// arr2[6]();
//
// for (let j = 0; j < 3; j++) {
//     let j = 'abc';
//     console.log(j);
// }

// console.log(foo);
// var foo = 2;
//
// console.log(bar);
// let bar = 2;

// var tmp = 123;
// if (true) {
//     tmp = 'abc'; // ReferenceError
//     console.log(tmp); // ReferenceError
//
//     let tmp;
//     console.log(tmp); // undefined
//
//     tmp = 123;
//     console.log(tmp); // 123
// }

// var tmp = new Date();
//
// function f() {
//     console.log(tmp);
//     if (false) {
//         var tmp = 'hello world';
//     }
// }
//
// f();


// const foo = {};
// foo.prop = 456;
//
// const a = [];
// a.push('Hello');
// a.length = 0;

// const foo = Object.freeze({});
// foo.prop = 123;
// console.log(foo);

// var a = 1;
// window.a
//
// let b = 1;
// window.b
