console.log('Hello Jee, Kya Haal');


// // function call / invoke before declaration
//     // it will also run due to hoisting
//     // js engine automatically moves all function declarations (not function assignments) to top of file, this is known as hoisting
// run();
// console.log('');

// // function definition
// function run(){
//     console.log('running run function');
// }

// // function call / invoke after declaration
// run();


// // function assignment
// // named function assignment

// // stand()   // will not work

// let stand = function walk (){
//     console.log('walking');
// }

// stand();
// console.log('');
// // walk()   // give error
// console.log('stand');
// console.log(stand);
// console.log('');
// console.log('stand()');
// console.log(stand());
// console.log('');

// let jump = stand;
// console.log('jump');
// jump();
// console.log('');

// // anonymous function assignment
// let stand2 = function (){
//     console.log('walking 2')
// }
// console.log('stand2()');
// stand2()


// // static function
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,2));
// console.log(sum(1));                // second number will be undefined and 1+undefined is NaN not a number
// console.log(sum());
// console.log(sum(1,2,3,4,5,6));      // only 1 and 2 are used


// // dynamic functions (arguments)
// // object forms in function parameter
// // dynamic number of inputs
// function sum(){
//     console.log('arguments');
//     console.log(arguments);
//         // this is an object, not an array
//         // dynamic number of inputs

//     let total = 0;

//     // why not for in loop
//     for(let value of arguments){
//         total = total + value;
//     }
//     return total;
// }

// console.log(sum(1,2));
// console.log('');

// console.log(sum(1));
// console.log('');

// console.log(sum());
// console.log('');

// console.log(sum(1,2,3,4,5,6));


// // rest operator
// // array form in function parameter
// // rest parameter but be last parameter
// // rest mtlb bache kuche
// function sum(num, value, ...argum){
//     console.log(argum);         // argum is array
//     console.log(arguments);     // arguments is object
// }
// sum(1,2,3,4,5,6);
// let a = [1,2,3,4,5];


// // default parameters
// // must present in righmost side
// function interest (p,r=5,t=10){
//     return p*r*t/100;
// }

// console.log(interest(1000,5,10));
// console.log(interest(1000,8));
// console.log(interest(1000));
// console.log('');

// // not recommanded, bad practice, but hack
// console.log(interest(1000, undefined, 8));
// console.log(interest(1000, 8, undefined));
// console.log(interest(1000, undefined, undefined));
// console.log('');

// function interest2 (p,r=10,t){
//     return p*r*t/100;
// }
// console.log(interest2(1000, undefined, 8));


// // getter outside object     readonly function
// let person = {
//     fName:'Love',
//     lName:'Babbar'
// };

// function fullName(){
//     // // 1st method
//     // let str = person.fName.concat(person.lName);
//     // return person.fName.concat(' ').concat(person.lName);
    
//     // // 2nd method
//     // return person.fName + ' ' + person.lName;

//     // 3rd method
//     return `${person.fName} ${person.lName}`;
// }
// console.log(fullName());


// // getter and setter in object
// let person = {
//     fName:'Love',
//     lName:'Babbar',

//     // getter
//     get fullName(){
//         return `${person.fName}     ${person.lName}`;
//     },

//     // setter
//     set fullName(value){
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
//     // 2 functions with same name by using get and set keyword
// };

// // getter in function
// console.log(person.fullName);

// // setter
// person.fullName = 'Rahul Kumar';        // Rahul Kumar is value and this keyword refers to function
// console.log(person.fullName);

// // person.fullName('Rahul Kumar');  // will give ERROR


// // try and catch    error handeling
// // try -> setter -> (throw new error) to try -> catch(error as input parameter)
// let person = {
//     fName:'Love',
//     lName:'Babbar',
//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value){
//         if(typeof(value)!='string'){
//             throw new Error('You have not sent a STRING');
//             // this error is thrown to try which then will goto catch as input parameter
//         }
//         let parts = value.split(' ');
//         console.log(parts);
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// // person.fullName = true;
// try{
//     console.log('hello');
//     person.fullName = 'Rahul Kumar';
//     person.fullName = true;
//     // it will go to setter of person and then check
// }
// catch (e){
//     alert('Something is wrong');
//     alert(e);
//     throw new Error('You have not sent a STRING');
// }


// // scope
// {
//     let a=5;
//     var b=5;
//     console.log(a);
//     console.log(b);
// }
// console.log('outside');
// // console.log(a);      // ERROR
// console.log(b);

// function walk(){
//     var a=5;
// }
// // console.log(a);      // ERROR

// function walk(){
//     const a=5;
// }
// // console.log(a);      // ERROR

// for(let i=0; i<5; i++){
    
// }
// // console.log(i);      // ERROR

// for(var j=0; j<5; j++){
//     // var a = 10;      // ERROR    a is already defined at 195
//     var b = 10;
// }
// console.log(j);
// console.log(b);

// function A(){
//     const a=10;
// }
// const a=5;
// console.log(a);
// function B(){
//     const a=5;
// }


// // reducing an array
// let arr = [1,2,3,4];
// let total = 0;
// for(key of arr){
//     total = total + key;
// }
// console.log(total);

// // reducing an array to a sum value
// // 0 is initial value of totalSum
// // if not initialize, total will start first value and key starts with 2nd value
// let totalSum = arr.reduce((total, key)=>total+key, 0);
// console.log(totalSum);


// // sort with manual allback function
// let a = [10,-2,-7,4,5,20];
// a.sort(function(a,b){
//     return a-b;
// });
// // if a.sort(-ve)   a<b     a comes first before b
// // if a.sort(+ve)   a>b     b comes first before a
// // if a.sort(0)   a=b     any can come at any position

// console.log(a);
