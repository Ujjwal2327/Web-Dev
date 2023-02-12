console.log('Chaliye shuru karte hain');

// empty object
// let a={};

// // object
// let rect = {
//  // properties
//     length: 1,
//     breadth: 2,
//  // method
//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };

// console.log(rect);
// console.log(rect.length);
// console.log(rect.breadth);
// console.log(rect.draw);
// console.log(rect.draw());


// // factory function
// function createRect(len, bre){
//     let rect = {
//         length: len,
//         breadth: bre,
//         // same as above
//         // len,
//         // bre,

//         draw: function(){
//             console.log('drawing rectangle');
//         }
        
//         // same as above
//         // draw(){
//         //     console.log('drawing rectangle');
//         // }
//     };
//     return rect;
// }

// let rect1 = createRect(5,4);
// console.log(rect1);
// let rect2 = createRect(2,3);
// console.log(rect2);


// // constructor function
// function Rect(len, bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw=function (){
//         console.log('');
//     };
// }

// let rect1 = new Rect(4,6);
// // now this will be rect1 in function Rect

// console.log(rect1);
// console.log(typeof(rect1));


// // dynamic nature of objects
// rect1.color='red';
// console.log(rect1);

// delete rect1.color;
// console.log(rect1);

// // constructor property
// console.log(rect1.constructor);


// // functions are also objects
// // constructor of constructor function
// console.log(Rect.constructor);
// // internally implementation of (constructor of Rect) / Rect.constructor
// let Rect1 = new Function(`length`, `breadth`,
//     `    
//     this.length=len;
//     this.breadth=bre;
//     this.draw=function (){
//         console.log('');
//     };
//     `
// )

// // some function properties
// Rect.bind;
// Rect.arguments;
// Rect.name


// // types in JS
// // primitive
// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

// // reference
// let a={
//     value:10
// };
// // address passes, not value
// let b=a;
// a.value++;
// console.log(a.value);
// console.log(b.value);


// // pass in functions
// // primitive     pass by value
// let a=10;
// let b=a;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);
// console.log(b);

// // reference     pass by reference
// let a={
//     value:10
// };
// // address passes, not value
// let b=a;
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a.value);
// console.log(b.value);


// // loops
// let rect = {
//     length:2,
//     breadth:4
// };

// // for in loop
// for(let key in rect){
//     // key    value(rect[key])
//     console.log(key, rect[key]);
// }

// // for of loop
// for(let key of rect){
//     console.log(key, rect[key]);
// }
// // for(let key of rect){
// //     console.log(key, rect[key]);
// // }
// for(let key of Object.keys(rect)){
//     console.log(key, rect[key]);
// }
// for(let key of Object.entries(rect)){
//     console.log(key);
// }


// // find whether particular property present or not
// if('color' in rect){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }


// OBJECT CLONING
// let src = {
//     a:10,
//     b:20,
//     c:30,
// };

// let src2 = {
//     value:25
// };

// let dest1={};

// // method 1  for in loop
// for(key in src){
//     dest1[key] = src[key];
// }
// console.log(src);
// console.log(dest1);

// // method 2 Object.assign
// let dest2 = Object.assign({}, src);
// let dest2_2 = Object.assign({}, src, src2);
// console.log(src);
// console.log(dest2);

// // method 3
// // spread
// let dest3 = {...src};
// console.log(src);
// console.log(dest3);

