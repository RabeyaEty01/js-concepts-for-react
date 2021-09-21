const numbers = [89, 35, 98, 12];
const student = {
    name: 'rahim',
    studentId: 18,
    age: 35,
    movies: ['king khan', 'dhaka alu', ' actor']
};

//1. template string
const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

//2. arrow function

const getFiftyFive = () => 55;
console.log(getFiftyFive());
const addSixtyFive = num => {
    num = num + 65;
    return num;
}
const firstResult = addSixtyFive(25);
console.log(firstResult);

const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

//spread operator
const newNumbers = [...numbers];
//create a new array from an older array and add an element
const currentNumbers =[...numbers,55];

numbers.push(99);
numbers.push(399);
numbers.push(64);



console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
