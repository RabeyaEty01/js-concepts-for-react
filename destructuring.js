//1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

const [x, y] = numbers;
function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

//const [first, second] = [90, 34];
const [first, second] = boxify(90, 34);
//console.log(boxify(90, 34));

const student = {
    name: 'rahim',
    id: 18,
    age: 35,
    movies: ['king khan', 'dhaka alu', ' actor']
}

const [firstMovie, secondMovie] = student.movies;
console.log(firstMovie, secondMovie);

//object destructuring
//const {name,age} ={ name:'alu', age:14};
const { name, age } = { id: 19, salary: 30000, name: 'balu', age: 24 };
console.log(name, age);

const emplyee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'alubagh',
        drink: 'water',
        watch:{
            color:'black',
            price:500,
            brand:'garmin'
        }
    }
}
const { machine, ide } = emplyee;
const { weight, address } = emplyee.specification;
const { brand} = emplyee?.specification?.watch;
const [a,b,c] = emplyee.languages;
console.log(machine,ide);
console.log(a,b,c);
console.log(brand);