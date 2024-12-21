// there are two parts of creating a element 
// one is creation by using createelement and 
// other one is appending to body or container

const title = document.createElement('h1')
title.innerText = "Mahesh"

document.body.appendChild(title)



const wrapper = document.createElement('div');
console.log(wrapper)
wrapper.id = '34'
wrapper.className = 'first-class' 

// id and className are general attributes 
// to add other attributes 
wrapper.setAttribute('title', 'my first title') // provide key value pair 

// Adding text way 1 
wrapper.innerText = "Wrapper text"
// there is debate that this isn't optimized one 
// first it will overwrite the existing value and then write new one 
// so kind of round trip 

// addding text way 2 

const addText = document.createTextNode("This is second text"); 
wrapper.appendChild(addText);

// but again it's debatable topic, many prefer first one

document.body.appendChild(wrapper);