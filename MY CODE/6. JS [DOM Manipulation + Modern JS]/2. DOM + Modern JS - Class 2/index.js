console.log("Hello Jee, Kya Haal");

// // eventListener not removes
// document.addEventListener('click', function(){
    //     console.log('I click here');
    //     let element = document.querySelector('body');
    //     element.style.background = 'yellow';
    // });
    
// document.removeEventListener('click', function(){
//     console.log('I click here');
//     let element = document.querySelector('body');
//     element.style.background = 'yellow';
// });


// // eventListener removes
// let eventFunc = function(){
//     console.log('I click here');
//     let element = document.querySelector('body');
//     element.style.background = 'yellow';
// }

// document.addEventListener('click', eventFunc);
// document.removeEventListener('click', eventFunc);


// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function(event){
//     console.log(event);
// });


// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('Mja Aaya');
// });


// let mydiv = document.createElement('div');

// for(let i=0; i<100; i++){
//     let newElement =  document.createElement('p');
//     newElement.textContent = 'This is para ' + i;
//     newElement.addEventListener('click', function(){
//         console.log('I have clicked on para ' + i);
//         newElement.style.background = 'yellow';
//     })
//     mydiv.appendChild(newElement);
// }

// // let body = document.querySelector('body');
// // body.appendChild(mydiv);

// document.body.appendChild(mydiv);


// let mydiv = document.createElement('div');

// let paraStatus = function(event){
//     console.log('I have clicked on para');
//     console.log(event.target);
//     console.log(event.target.textContent);
// }

// for(let i=0; i<100; i++){
//     let newElement =  document.createElement('p');
//     newElement.textContent = 'This is para ' + i;
//     newElement.addEventListener('click', paraStatus)
//     mydiv.appendChild(newElement);
// }

// document.body.appendChild(mydiv);



// let element = document.querySelector('#wrapper2');

// element.addEventListener('click', function(event){
//     console.log(event.target.textContent);
// });


// filtering on sprecific tags
// not printing for paragrapgh, only print for span
let element = document.querySelector('#wrapper2');
element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN')
        console.log(event.target.textContent);
});

