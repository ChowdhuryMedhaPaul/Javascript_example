// my javascrpt code
console.log('Hello Aninda'); 

let age=25;

let booliean= false;
let firstname=undefined;
let lastName=null;

let name='Medha';
console.log(name);

let variable=10;
variable=10.2
console.log(variable);

const pai=3.14;
//pai=3;    constant value can not change
console.log(pai);

// javascript object

let person={
    fullName:'Aninda Medha',
    age:30,
    address:'Dhaka'
};

console.log(person);

person.firstname='Paul Chowdhury';
console.log(person.firstname);

//javascript arrays

let colors=['red','green','blue'];
console.log(colors);
console.log(colors[1]);

colors[3]=1;
colors[4]='yellow';
console.log(colors);
console.log(colors.length);

//javascript functions

function greet(name){
    console.log('hello'+ name);
}

greet('Aninda');
greet('Medha');

function greet(fname,lname){
    console.log('hello'+ ' '+fname +' '+ lname);
}

greet('Aninda','Bhattacharjee');


function square(number)
{
    return number*number;
}

console.log(square(2));
console.log();