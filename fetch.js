//1. JSON (stringify,parse)

const student = {
    name: 'rahim',
    id: 18,
    age: 35,
    movies: ['king khan', 'dhaka alu', ' actor']
}
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);
const studentObject = JSON.parse(studentJSON);
// console.log(studentObject);

//2. fetch
/*
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));
*/

//3. object keys ,values

const keys = Object.keys(student);
const values = Object.values(student);

//for 
const numbers = [23, 45, 78, 12, 57];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

//for of on array like object
//loop on an object using for in 


//add or remove from an array

const products = [
    { name: 'laptop', price: 3200, brand: 'lenvo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 8000, brand: 'casio', color: 'black' },
    { name: 'bottol', price: 50, brand: 'mum', color: 'silver' },
    { name: 'sunglass', price: 300, brand: 'reymond', color: 'silver' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'canva', color: 'black' };
// copy products array and then add newProduct

const newProducts = [...products, newProduct];

//create a new array without one specific item
//remove phone means create a new array without the phone

const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);
