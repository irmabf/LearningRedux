// Object destructuring

// const person = {
//   name: 'Jon',
//   age: 37,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// };

//1. Example of set default values with destructuring
// const { name = 'Anonymous' , age } = person;


// console.log(`${name} is ${age}`);


//2.  Just as location is an object, person.location is also an object,
//so is perfectly valid to destructure of a nested object

//3 .Example of how to change the object name in desctructuring
// const { city, temp: temperature } = person.location;

// console.log(`It's ${temperature} F in ${city}`)

//4. We can also do renaming and defaulting at the same time

// const { name: firstName = 'Anonymous' , age } = person;


// console.log(`${firstName} is ${age}`);

//Array destructuring

const address =
 [];

const [ , , state = 'New York', zip ] = address;


console.log(`You are in  ${state}`);

