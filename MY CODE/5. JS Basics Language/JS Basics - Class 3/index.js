console.log('Hello Jee');

// // builtin method
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.PI);
// console.log(Math.round(1.46));
// console.log(Math.round(1.66));
// console.log(Math.max(1,2,3,6,4));
// console.log(Math.min(1,2,3,6,4));
// console.log(Math.abs(2));
// console.log(Math.abs(-2));


// // strings
// // primitive (string)
// let lastName = ' Babbar ';
// console.log(lastName);
// console.log(typeof(lastName));
// console.log(typeof lastName);
// // object
// let firstName = new String('Love');
// console.log(firstName);
// console.log(typeof(firstName));
// console.log(typeof firstName);


// // convert string to object and string inbuilt methods
// let lastName = ' Babbar ';
// console.log(lastName.length);
// console.log(lastName[2]);
// console.log(lastName.includes('ba'));
// console.log(lastName.startsWith('ba'));
// console.log(lastName.endsWith('bar '));
// console.log(lastName.indexOf('a'));
// console.log(lastName.toUpperCase());
// console.log(lastName.toLowerCase());
// console.log(lastName.trim());
// console.log(lastName.replace('Babb', 'car'));
// console.log('');

// let msg = 'this is my first message';
// let words = msg.split(' ');
// console.log(words);
// console.log(typeof words);


// // template literal ``
// let msg = 'this is "my" \n first \' \' " " message ';
// console.log(msg);
// let lastName = 'Babbar';
// msg = `Hello ${lastName}

//     Thanks for the opportunity

// regards,
// Love`;
// console.log(msg);


// // date and time
// // current date
// let date = new Date();
// console.log(date);
// console.log(typeof date);
// console.log('');

// // fixed date
// let date2 = new Date('June 20 1998 07:15 ')
// console.log(date2);
// console.log('');

// // month indexing starts from 0 -> jan
// // year month date hour
// let date3 = new Date(1998, 5, 20, 7);
// console.log(date3);
// console.log('');

// // getter- setter
// // setter
// date3.setFullYear(1947);
// console.log(date3);
// console.log('');

// // getter
// console.log(date3.getDate());
// console.log(date3.getMonth());



// // arrays
// let nums = [1,3,5,7];
// console.log(nums);
// console.log(nums[2]);
// console.log('');


// // insertion
// // at end
// nums.push(9);
// console.log(nums);

// // at start
// nums.unshift(8);
// console.log(nums);

// // at middle
// // index, deleteCount, elements to add
// nums.splice(2, 0, 20, 'a', 'b', 'c', 'Babbar');
// console.log(nums);


// // searching
// // primitives
// console.log(nums);
// console.log(nums.indexOf(5));
// console.log(nums.indexOf(100));

// // check whether item presents in an array or not
// // bad practice
// if(nums.indexOf(5)!=-1){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }

// // .includes returns true or false  (good practice)
// console.log(nums.includes(5));
// console.log(nums.includes(6));

// // start searching from 2nd index
// console.log(nums.indexOf(3, 2));


// // searching in reference
// let courses = [
//     {no:1, name:'Love'},
//     {no:2, name:'Rahul'}
// ];
// console.log(courses);
// console.log('');

// // both below and above objects have different references, so both objects are different, both are at different address
// console.log(courses.indexOf({no:1, name:'Love'}));
// console.log(courses.includes({no:1, name:'Love'}));
// console.log('');

// // searching in objects in array will be done by callback functions
// // find a course with name 'Rahul
// console.log('callback function');
// // here course represents element in array courses
// let course1 = courses.find(function(course){
//     return course.name === 'Rahul';
// });
// console.log(course1);
// console.log('');

// let course2 = courses.find(function(course){
//     return course.name === 'Kilwish';
// });
// console.log(course2);
// console.log('');
// console.log('');


// // arrow functions
// console.log('arrow functions');
// let course3 = courses.find((course)=>{
//     return course.name === 'Rahul';
// });
// console.log(course3);
// console.log('');

// let course4 = courses.find(course=>{
//     return course.name === 'Rahul';
// });
// console.log(course4);
// console.log('');

// let course5 = courses.find(course=> course.name === 'Rahul');
// console.log(course5);
// console.log('');


// // removing element
// nums = [1,2,3,4,5,6,7];
// console.log(nums);

// // at end
// nums.pop();
// console.log(nums);

// // at begin
// nums.shift();
// console.log(nums);

// // at middle
// nums.splice(2,1)
// console.log(nums);



// // emptying an array
// let nums = [1,2,3,4,5];
// // address copy
// let nums2 = nums;
// console.log(nums);
// console.log(nums2);
// console.log('');

// nums = [];
// console.log(nums);
// console.log(nums2);
// // nums is not deleted, just pointed to new array
// // old array will remove by garbage collector automatically if not pointing this by another variable

// let nums = [1,2,3,4,5];
// let nums2 = nums;
// console.log(nums);
// console.log(nums2);
// console.log('');
// nums.length=0;
// console.log(nums);
// console.log(nums2);

// let nums = [1,2,3,4,5];
// let nums2 = nums;
// console.log(nums);
// console.log(nums2);
// nums.splice(0, nums.length);
// console.log(nums);
// console.log(nums2);

// let nums = [1,2,3,4,5];
// let nums2 = nums;
// console.log(nums);
// console.log(nums2);
// while(nums.length!=0){
//     nums.pop();
// }
// console.log(nums);
// console.log(nums2);


// // combining and slicing arrays
// // combining arrays
// let first = [1,3,5];
// let second = [2,4,6];
// let combined = first.concat(second);
// console.log(combined);
// console.log('');

// // slicing arrays
// // [starting index, ending index)
// let sliced = combined.slice(2,4);
// console.log(sliced);

// let sliced2 = combined.slice(2);
// console.log(sliced2);

// // full slicing (make copy of original array)
// let sliced3 = combined.slice();
// console.log(sliced3);


// // spread operator
// let first = [1,3,5];
// let second = [2,4,6];
// let combined = [...first, ...second,];
// console.log(combined);
// combined = [...first, 'a', ...second, 'bb', true, false];
// console.log(combined);

// // creating a copy method 2
// let another = [...first];
// console.log(another);


// // iterating an array
// // for of loop
// let arr = [10,20,30,40,50];
// for (let val of arr){
//     console.log(val);
// }
    
// // for each loop
// let arr = [10,20,30,40,50];
// arr.forEach(function(num){
//     console.log(num);
// })
// console.log('');
// console.log('using arrow function');
// arr.forEach(num => console.log(num));


// // joining arrays
// let nums = [10,20,30,40,50];
// let joined = nums.join('');
// console.log(joined);
// joined = nums.join(',.,');
// console.log(joined);
// joined = nums.join(' ');
// console.log(joined);


// // split and making an array
// let msg = 'this is my first message';
// let words = msg.split('');
// console.log(words);
// console.log('');

// words = msg.split(' ');
// console.log(words);
// console.log(typeof words);
// console.log('');
// console.log('');

// let joined = words.join('');
// console.log(joined);
// console.log('');
// joined = words.join('_');
// console.log(joined);


// // sorting an array
// // sort function convet all values to string
// let nums = [20,10,30,40,'Babbar',true,false,undefined, NaN];
// nums.sort();
// console.log(nums);
// console.log('');

// // not working as sort convert all elements as strings and alphabatically 10 comes before 4 and 40 comes before 5
// nums = [5,10,4,40,'Babbar',true,false,undefined, NaN];
// nums.sort();
// console.log(nums);


// // reverse an array
// nums = [5,10,4,40,'Babbar',true,false,undefined, NaN];
// nums.reverse();
// console.log(nums);


// // filtering an array
// let nums = [1,2,0,-2,0,-4];
// let filtered = nums.filter( function(value){
//         return value>=0;
//     }
// );
// console.log(filtered);
// let filtered2 = nums.filter( value => value>=0);
// console.log(filtered2);
// let filtered3 = nums.filter( value => value==0);
// console.log(filtered3);
// let filtered4 = nums.filter( value => value<0);
// console.log(filtered4);

// let filtered5 = nums.find( value => value<0);
// console.log(filtered5);


// // mapping in an array
// // mapping with parameters
// let nums = [7,8,9,10];
// let mapping = nums.map(value =>'student no. ' + value);
// console.log(nums);
// console.log(mapping);
// console.log(typeof mapping);


// // mapping with objects
// let nums = [1,2,-6,-9];
// let filtered = nums.filter(value => value>=0);
// console.log(filtered);
// console.log('');

// let items = filtered.map(function(num){
//     let obj = {
//         value : num,
//         name : 'Love'
//     }
//     return obj;
// });
// console.log(items);
// console.log('');

// let items2 = filtered.map(num => obj = {value:num, name:'Love'});
// console.log(items2);


// chaning
let nums = [1,2,-6,-9];
let chaning = nums.filter(value => value>=0).map(num => obj = {value:num, name:'Love'});
console.log(chaning);
