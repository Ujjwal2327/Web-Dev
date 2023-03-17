console.log('Kya Haal');

// // adding 100 paras in body
// const t1 = performance.now();
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;
//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log('this took ' + (t2-t1) + ' milliseconds' );


// // optimising a bit
// const t1 = performance.now();
// let myDiv = document.createElement('div');
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// const t2 = performance.now();
// console.log('this took ' + (t2-t1) + ' milliseconds' );


// // optimising a bit more
// // 1 reflow and 1 repaint
// const t1 = performance.now();

// let fragment = document.createDocumentFragment();
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;
//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);

// const t2 = performance.now();
// console.log('this took ' + (t2-t1) + ' milliseconds' );


// function addPara(){
//     let para = document.createElement('p');
//     para.textContent = 'JS is single';
//     document.body.appendChild(para);
// }

// function addNewPara(){
//     let para = document.createElement('p');
//     para.textContent = 'Kya Haal Chaal';
//     document.body.appendChild(para);
// }

// addPara();
// addNewPara();


setTimeout(function(){
    console.log('Hello Everyone')
}, 2000);
console.log('hi Everyone')

