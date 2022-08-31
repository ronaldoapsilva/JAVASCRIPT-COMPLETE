const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

let finished = false;

while (!finished) {
  const randomNumber = Math.random();
  if (randomNumber > 0.7) {
    alert(`The number is ${randomNumber}`);
    finished = true;
  }
}
console.log("#2")
let mynumbers = [29, 22, 2, 6];
for (const i in mynumbers) {
  console.log(mynumbers[i]);
}
for (let i = 0; i < mynumbers.length; i++) {
  console.log(mynumbers[i]);
}

for (const i of mynumbers) {
  console.log(i);
}

let counter = 0;
while (counter < mynumbers.length) {
  console.log(mynumbers[counter]);
  counter++;
}

console.log("#3")
for (let i = mynumbers.length - 1; i >= 0; i--) {
  console.log(mynumbers[i]);
  }



console.log("#4")
finished = false;
while (!finished){
  const randomNumber1 = Math.random();
  const randomNumber2 = Math.random();
  if (randomNumber1 > 0.7 && randomNumber2 > 0.7){
    alert(`both numbers are greater then 0.7: number 1 => ${randomNumber1} | number 2 => ${randomNumber2}`);
    finished = true;
  } else if (randomNumber1 < 0.2 || randomNumber2 < 0.2){
    alert(`one of numbers are less then 0.2: number 1 => ${randomNumber1} | number 2 => ${randomNumber2}`);
    finished = true;
  }
}
