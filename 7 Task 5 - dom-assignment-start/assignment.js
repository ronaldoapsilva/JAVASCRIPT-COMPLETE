//1
const task1El1 = document.getElementById('task-1');
const task1El2 = document.querySelector('#task-1');

task1El1.style.color = 'white';
task1El2.style.background = 'black';

// 2
const docTitle1 = document.querySelector('title');
docTitle1.textContent = 'Assignment - Solved!'

const docHead = document.head;
const docTitle2 = docHead.querySelector('title');
docTitle2.textContent = 'Assignment - Solved2!'

// 3
const h1 = document.getElementsByTagName('h1');
h1[0].textContent = 'Assignment - Solved!';