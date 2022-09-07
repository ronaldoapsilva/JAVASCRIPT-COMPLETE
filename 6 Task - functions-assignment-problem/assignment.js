// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

// const sayHello = name => console.log('Hi ' + name);
//
// sayHello('Ronaldo');

const sayHello = (greeting , name) => {
  if (greeting == undefined) {
    return 'Sorry!'
  }

  let welcomeMessage;
  greeting = greeting == undefined ? 'Hello' :greeting
  name = name == undefined ? 'there' :name
  welcomeMessage = `${greeting} ${name}!`;
  return welcomeMessage;
}

console.log(sayHello('Hi', 'Ronaldo'));
console.log(sayHello());

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
  console.log('All not empty!');
  },
  'Hello',
  '12',
  'adsg',
  )
