// merging two arrays

const arr1 = [1, 2, 3],
  arr2 = [4, 5, 6];
// Method 1 -> by usign concat
const newarr1 = arr1.concat(arr2);
// console.log(newarr1)

// by using spread operator
const newarr2 = [...arr1, ...arr2];
// console.log(newarr2)

// flating array
const arr3 = [1, 2, [4, 5], [9, 10, [5, 9]]];

const newarr3 = arr3.flat(Infinity); // infitiniy is basically level ,
// newarr3.sort((a,b) => a-b)
console.log(newarr3);

// check if array
console.log(Array.isArray("Mahesh")); // returns false

// convert to array
console.log(Array.from("Mahesh")); // returns [ 'M', 'a', 'h', 'e', 's', 'h' ]

// more about array.from()
// Array.from(referece, mapfunction)
// mapfunction is function that is called on every element of referece

const arr4 = Array.from([1, 2, 3], (x) => x + x);
console.log(arr4); // returns [ 2, 4, 6 ]

// sometimes we need to create array of keys in map

const mymap = new Map([
  ["1", "a"],
  ["2", "b"],
]);


console.log(Array.from(mymap)); // returns [ [ '1', 'a' ], [ '2', 'b' ] ] 
console.log(Array.from(mymap.keys())) // returns [ '1', '2' ] 
console.log(Array.from(mymap.values())) // returns [ 'a', 'b' ]