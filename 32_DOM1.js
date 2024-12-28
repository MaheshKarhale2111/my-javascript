// read difference between inntertext and textContent 
// innerText : Excludes text inside hidden elements (e.g., elements styled with display: none). 
// textContent : Includes all text content, even from hidden elements.
 

// PRACTICE DOM ONLINE - FIND RESOURCES 
// 1. https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php 


// careful while using queryselectorall, it gives you nodelist and not array 
// it looks like array but it's html collection 


const items = document.querySelectorAll('.days');
// Iterate over the NodeList, mostly this is used
// items.forEach(item => console.log(item.textContent));
// Output: 
// "Item 1"
// "Item 2"
// "Item 3"

// or you can Convert NodeList to Array and then use all the array properties
const itemsArray = Array.from(items);
// console.log(itemsArray); // Output: [div.item, div.item, div.item]



// Nodelist vs HTMLcollection 
// you can use foreach on NodeList but not on HTMLCollection 
// nodelist returned by -> queryselectorall and childnodes 
//HTMLCollection returned by getElementsByTagName, getElementsByClassName

// you can convert HTMLCollection by using Array.from()
// there are no inbuilt methods for iteration in htmlCollection 
// but you can still use standard for loop, that still works

//------------------------------------- 
// Creating new elements using DOM 


const parent = document.querySelector('.parent');
// parent.style.backgroundColor = 'green';
// console.log(parent.children); // gives html collection as discussed above 
// iterate using for loop 

// for(let i = 0; i < parent.children.length ; i++){
//     console.log(parent.children[i]);
// }

const dayone = document.querySelector('.days')
// you can also print parent element directly 
// it comes in optimization, imagine a big dom tree, to find parent you don't need to travel tree again. 
console.log(dayone.parentElement) 
console.log(dayone.nextElementSibling) 


// how powerful is query selector 
// you can use css in queryselector as well 

const secondChild = document.querySelector(".days:nth-child(2)")
// important fact about nthchild 
// it selects siblings and not direct childs 
// say we have 4 divs with class .days 
// .days:nth-child(2) will select 2nd one with class .days

console.log(secondChild);
// to delete you can use remove()
secondChild.remove(); 