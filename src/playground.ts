const fruits = ["mango", "pineapple"];

const filledArray = new Array(100).fill(null).map((_, i) => {
	//elements inside map can change type
	return i;
}); // _ unused value null and i for index

console.log(filledArray);
const numbers = [1, 2, 3];
const lastElement = numbers[numbers.length - 1];
const indexOfValue2 = numbers.indexOf(2);

for (let index = 0; index < array.length; index++) {
	//for loop says less to the reader what the code is doing but it is better to use methods
	const element = array[index];
}

const person = [{ name: "Marcus" }]
                    .map((person) => {
                        return { ...person, name: person.name.toUpperCase() };
                    })
                    .forEach(() => {
                        console.log({ person });
                    });

//map is made for pure functions
// forEach is made for side effects

// splice mutates
//  default is not mutating data
// slice is default

// forEach and map second argument is index

//predicate function is a func that returns true or false
