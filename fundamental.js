
//1. how to declare a variable using let and const
const fatherName = 'Harun Rashid';
let season = 'rainy';
season = 'winter';

//2.
// 6 basic condition >,<,===,!==,<=,>=
// multiple conditions: || , &&

if (fatherName === 'harun' || season === 'rainy') {
    console.log('hello');
}
else if (fatherName === 'Harun Rashid') {
    console.log('hello father');
}
else {

}

//3. array
//index
//length, push,pop
const numbers = [89, 35, 98, 12];
numbers[0] = 68;

//4. loop
//for , while

for (let i = 0; i < numbers; i++) {
    const number = numbers[i];
    console.log(number);
}

//5. function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const firstResult = multiply(36, 99);
console.log(firstResult);

//6. object
//3 ways to access property by name
 const student={
     name: 'rahim',
     id=18,
     age=35,
     movies:['king khan', 'dhaka alu',' actor']
 }

 const myVariable ='age';

 console.log(student.name);// direct by property
 console.log(student['age']);// access via property name string
 console.log(student[myVariable]); //access via property name in a variable 