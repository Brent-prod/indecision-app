// arguments object - no longer bound with arrow functions

const add = (a, b) => {
	// console.log(arguments); // this will only work with es5 style functions NOT with arrow functions because arguments are not bound
	return a + b;
};
console.log(add(35, 1));

// this keyword - no longer bound with arrow functions

const user = {
	name: 'Brent',
	cities: [ 'Padova', 'London', 'Sydney' ],
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city);
	}
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
	// numbers - array of numbers
	numbers: [ 1, 2, 3 ],
	// multiplyBy - single number
	multiplyBy: 2,
	// multiply - return a new array where the number have been multiplied
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy);
	}
};

console.log(multiplier.multiply()); // [1, 2, 3] multiply by 2 should give me [2, 4, 6] in the console
