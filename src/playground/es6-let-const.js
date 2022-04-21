// What are the differences between var/let/const = explanation below

var nameVar = 'Brent';
var nameVar = 'Mike';
console.log('nameVar', nameVar);
// var can be renamed and reassinged

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);
// let can be reassinged but not renamed

const nameConst = 'Frank';
console.log('nameConst', nameConst);
// const cannot be renamed nor reassinged

// other examples
// variable are function scoped - meaning that a variable (any of var/let/const) defined within a funcion will result as not defined meaning that we can refer to it
function getPetName() {
	var petName = 'Hal';
	return petName;
}

getPetName();
// console.log(petName); // this will not work as we can call petName here as it's defined inside the function

// Block Scope
const fullName = 'Jen Brentan'; // assigning a string to a variable
let firstName; // purposely left empty so then we can refer it outside of the if statement

if (fullName) {
	firstName = fullName.split(' ')[0]; // split will create an array by splitting the string into two elements of an array and we access the first element using [0]
	console.log(firstName); // here we console log that first element
}

console.log(firstName);
