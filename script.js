// array methods

const arr = [1, 2, 3, 4, 5];


//push()

// adds an element to the end of an array and returns the new length

console.log(arr.push(6)); // Output: 6

console.log(arr); // Output: [1, 2, 3, 4, 5, 6]


// pop()


// removes the last element from an array and returns that element

console.log(arr.pop()); // Output: 6

console.log(arr); // Output: [1, 2, 3, 4, 5]


//shift()


// removes the first element from an array and returns that element

console.log(arr.shift()); // Output: 1

console.log(arr); // Output: [2, 3, 4, 5]


//unshift()

// adds one or more elements to the beginning of an array and returns the new length

console.log(arr.unshift(1));

console.log(arr); // Output: [1, 2, 3, 4, 5]


// splice()



// changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

// arr.splice(index, deleteCount, item1, item2, ...)

console.log(arr.splice(2, 2, 7, 8)); // Output: []

console.log(arr); // Output: [1, 2, 7, 8, 3, 4, 5]

//slice

// creates a new array with a shallow copy of a portion of an array into a new array object

// arr.slice(start, end)

console.log(arr.slice(2, 4)); // Output: [7, 8]

console.log(arr); // Output: [1, 2, 7, 8, 3, 4, 5]

arr.unshift(5)

console.log(arr)

// returns the last index at which a given element can be found in the array, or -1 if it is not present

console.log(arr.lastIndexOf(5)); // Output: 5

console.log(arr.indexOf(5)); // Output: 4

console.log(arr.lastIndexOf(6)); // Output: -1

console.log(arr.indexOf(6)); // Output: -1

console.log(arr.includes(5)); // Output: true


console.log(arr.includes(6)); // Output: false


// type coercion

console.log('5' == 5);         // true, because '5' is coerced to 5
console.log(0 == false);      // true, because false is coerced to 0
console.log(null == undefined); // true, special case for null and undefined
console.log('' == 0);         // true, '' is coerced to 0
console.log([] == 0);         // true, [] is coerced to 0
console.log('5' === 5);       // false, different types (string vs. number)
console.log(0 === false);    // false, different types (number vs. boolean)
console.log(null === undefined); // false, different types
console.log('' === 0);       // false, different types (string vs. number)
// console.log([] === 0);       // false, different types (object vs. number)
// console.log([] === []);      // false, different references (two distinct empty arrays)

// array es6 methods 

// forEach

// executes a provided function once for each array element

// 5, 1, 2, 7, 8, 5

arr.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`);
});


// map

// creates a new array with the results of calling a provided function on every element in the calling array


// [5, 6, 7, 8, 9]

console.log(arr.map(x => x * 2));
console.log(arr)


// filter


// creates a new array with all elements that pass the test implemented by the provided function

// [5, 6, 7, 8, 9]

console.log(arr.filter(x => x % 2 === 0));

console.log(arr)

//MRF - map reduce and filter

// reduce

// applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value

// HALTED for now

// reduceRight

// applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single output value

// [5, 6, 7, 8, 9]

console.log(arr.reduce((acc, cur) => acc + cur, 0));

console.log(arr)

// concat

// creates a new array by concatenating all of the provided arrays

// [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(arr.concat([6, 7, 8, 9]));

console.log(arr)

// join

// joins all elements of an array into a string, separated by commas


// "1,2,3,4,5,6,7,8,9"

console.log(arr.join(','));

console.log(arr)

// object variations

// Object.keys()

// returns an array of a given object's own enumerable property names

// ['0', '1', '2', '3', '4', '5']

console.log(Object.keys(arr));

console.log(arr)

// Object.values()

(function() {
    // IIFE code block
    var localVar = 'This is a local variable';
    console.log(localVar); // Output: This is a local variable
})();



























