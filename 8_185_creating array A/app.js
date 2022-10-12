/* const number = [1, 2, 3];
console.log(number)

const moreNumbers = Array(5, 2); // []
console.log(moreNumbers);

const yetMoreNumber = Array.of(1, 2);
console.log(yetMoreNumber)

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ['Cooking', 'Sports'];
const personalData = [30, 'Max', {moreDetail: []}];

const analyticsData = [[1, 1.6], [-5,4, 2.1]];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint)
  }
}

console.log(personalData[1]);

const hobbies = ['Cooking', 'Sports'];
console.log(hobbies);

hobbies.push('Reading');
hobbies.unshift('Coding');
console.log(hobbies);

const poppedValue = hobbies.pop();
console.log(hobbies);

hobbies.shift();
console.log(hobbies);

hobbies[1] = 'Play soccer';
console.log(hobbies);

hobbies[5] = 'Craft'
console.log(hobbies);

hobbies.splice(0, 0, 'Good Food');
console.log(hobbies)

hobbies.splice(1, 0, 'Good Sports');
console.log(hobbies)

hobbies.splice(1, 2, 'Good Books');
console.log(hobbies)

hobbies.splice(1);
console.log(hobbies)

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number.splice(0, 0, "A"); // add to postion 0, delete 0 items after added item, item to be added
console.log(number);

number.splice(1, 0, "B"); // add to postion 1, delete 0 items after added item, item to be added
console.log(number);

number.splice(2, 2, "C"); // add to postion 2, delete 2 items after added item, item to be added
console.log(number);

number.splice(-1, 1); // select the last item of array, since the last item of array was selected we can delete 1 item
console.log(number);

// select the last two item of array, and then delete two items (if pass more then two, only two item selecte would be deleted)
number.splice(-2, 2);
console.log(number);

number.splice(5); // delete all item after position 5
console.log(number); */

/////////////////////////////////////////////////////////////////////////////////
/* const testResults = [1, 5.3 , 1.5, 10.99, -5, 1.5, 10];
// const storedResults = testResults;

// testResults.push(5.91);

// console.log(testResults, storedResults);

// const storedResults2 = testResults.slice(0, 2);

// testResults.push(5.92);

// console.log(testResults, storedResults2);


const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(storedResults, testResults);
console.log(testResults.indexOf(1.5));
console.log(testResults.lastIndexOf(1.5));

console.log(testResults.includes(10.99))
 */

/////////////////////////////////////////////////////////////////////////////////
/*
const personData = [{name: 'Max'}, {name: 'Manuel'}];
console.log(personData.indexOf({name: 'Manuel'}));

// find method takes an argument but the argument it takes is actually another function
// this function will be anonymous function: () => {}
// the anonymous function can accept up to three arguments
// the first argument will always be a single object of that array:  (person) => {}
// the second argument wil always be the index of that single element:  (person, idx) => {}
// the third argument will be the full array:  (person, idx, persons) => {}
const manuel = personData.find((person, idx, persons ) => {
  return person.name === 'Manuel';
});
console.log(manuel, personData);

manuel.name = 'Ronaldo' // find does not create a copy of object, it make reference to object, so we can still see max on array
console.log(personData);

const maxIndex = personData.findIndex((person, idx, persons ) => {
  return person.name === 'Max';
});
console.log(maxIndex);
 */
/////////////////////////////////////////////////////////////////////// 195
/*
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxadjustedPrices = [];

// for (const price of prices) {
//   taxadjustedPrices.push(price * (1 + tax));
// }

prices.forEach((price, idx, prices) => {
  const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
  // taxadjustedPrices.push(price * (1 + tax))
  taxadjustedPrices.push(priceObj)
});


console.log(taxadjustedPrices);
 */
/////////////////////////////////////////////////////////////////////// 196
/*
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
  return priceObj;
});

// console.log(prices, taxAdjustedPrices)

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    // return 1; // use for sort
    return -1; // use for reverse
  } else if (a === b) {
    return 0;
  } else {
    // return -1; // use for sort
    return 1; // use for reverse
  }
});
// console.log(sortedPrices)

/////////////////////////////////////////////////////////////////////// 197

const filteredArray = prices.filter((price, idx, prices) => {
  return price > 6;
});
// console.log(filteredArray)

/////////////////////////////////////////////////////////////////////// 198
const filteredArray2 = prices.filter(price => price > 6);

// console.log(filteredArray2)
 */
/////////////////////////////////////////////////////////////////////// 199

/* const newPrices = [10.99, 5.99, 3.99, 6.59];
let sum = 0;

newPrices.forEach((price) => {
  sum += price
});

console.log(sum)


const sum2 = newPrices.reduce((prevValue, curValue, curIndex, prices) => {
  console.log(prevValue)
  return prevValue + curValue;
}, 0);

console.log(sum2) */

/////////////////////////////////////////////////////////////////////// 201

const data = 'new york;10.99;2000';

const transformedData = data.split(';');

console.log(transformedData)

const nameFragments = ['Ronaldo', 'Silva'];
const nameUser = nameFragments.join(' ');
console.log(nameUser)

/////////////////////////////////////////////////////////////////////// 202

const copiedNameFragments = [...nameFragments];
nameFragments.push('Mr')
console.log(copiedNameFragments, nameFragments)


const prices202 = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(prices202));
console.log(Math.min(...prices202));

const persons = [{name: 'Ronaldo', age: 37}, {name: 'Natalia', age: 35}];
const copiedPersons = [...persons];

persons.push({name: 'Antonio', age:6})
persons[0].age = 38;

console.log(persons, copiedPersons);