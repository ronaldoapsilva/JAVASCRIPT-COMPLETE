const task3Element = document.getElementById('task-3');


function myName () {
    alert('Ronaldo Aparecido da Silva');
}

function lastName(name) {
    alert(name);
}

function fullName(name, middleName, lastName) {
    let joinName = `${name} ${middleName} ${lastName}`;
    alert(joinName);
}

myName();

lastName('Silva');

fullName('Ronaldo', 'Aparecido', 'Silva');

task3Element.addEventListener('click', myName);