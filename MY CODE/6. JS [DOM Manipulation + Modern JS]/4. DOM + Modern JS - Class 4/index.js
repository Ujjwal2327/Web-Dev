console.log('Hello Jee');

// // synchronous code
// let meraPromise = new Promise(function(resolve, reject){
//     console.log('I am inside promise');
//     resolve(1998);
// })
// console.log(meraPromise);
// console.log('Pehla');

// // asynchronous code
// let meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise')
//     }, 5000);
//     resolve(2233);
// })
// console.log(meraPromise);
// console.log('Pehla');


// let meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise')
//     }, 5000);
    
//     reject(new Error('Bhaishahab error aaye hain'));
// })
// console.log(meraPromise);
// console.log('Pehla');


// let meraPromise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise 1')
//     }, 5000);
// })

// let meraPromise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise 2')
//     }, 3000);
// })

// console.log('Pehla');


// let meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise 1')
//     }, 5000);
//     // resolve(2233);
//     reject(new Error('Bhaishahab error aaye hain'));
// })

// meraPromise.then((value) => {console.log(value)});

// meraPromise.catch((error) => {console.log('Recieved an error')});

// meraPromise.then((value) => {console.log(value)}, (error) => {console.log('recieved an error')});


// let wada1 = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('setTimeout 1 started');
//     }, 2000);
//     resolve(true);
// })

// let wada3 = wada1.then(()=>{
//     let wada2 = new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             console.log('setTimeout 2 started');
//         }, 2000);
//         resolve('wada2 resolved');
//     })
//     return wada2;
// })

// wada3.then((value)=>{console.log(value);})


// // async function
// async function abcd(){
//     return "babbar";
// }
// console.log(abcd());        // async function returns promise


// // async
// async function utility(){
//     let delhiMosam = new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             resolve('Delhi me bahut garmi hai');
//         }, 3000);
//     });

//     let hydMosam = new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             resolve('Hyderabad is cool');
//         }, 8000);
//     });

//     let dM = delhiMosam;
//     let hM = hydMosam;
//     let arr = [dM, hM]
//     console.log(typeof arr);

//     return arr;
// }
// console.log(utility());


// // async and await
// async function utility(){
//     let delhiMosam = new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             resolve('Delhi me bahut garmi hai');
//         }, 3000);
//     });

//     let hydMosam = new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             resolve('Hyderabad is cool');
//         }, 8000);
//     });

//     let dM = await delhiMosam;      // below code will not execute until it does not execute completely
//     let hM = await hydMosam;
//     let arr = [dM, hM]
//     console.log(typeof arr);

//     return arr;
// }
// console.log(utility());


// // fetch API
// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     console.log(content);
//     console.log('');

//     let output = await content.json();
//     console.log(output);
//     console.log('');

//     let output2 = await content.status;
//     console.log(output2);
//     console.log('');

//     let output3 = await content.headers;
//     console.log(output3);
//     console.log('');

// }
// utility();


// // post API
// async function helper(){
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'babbar',
//             body: 'tagri body',
//             userId: 1998,
//             weight: 90
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
    
//     console.log(options);
//     console.log('');

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;
// }

// async function utility(){
//     let ans = await helper();
//     console.log(ans);
// }

// utility();


// closures
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    return displayName;
}
let func1 = init();
func1();
console.log(func1);
