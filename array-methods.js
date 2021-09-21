const products = [
    { name: 'laptop', price: 3200, brand: 'lenvo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 8000, brand: 'casio', color: 'black' },
    { name: 'bottol', price: 50, brand: 'mum', color: 'silver' },
    { name: 'sunglass', price: 300, brand: 'reymond', color: 'silver' }
];

//1. map
const brands = products.map(product => product.brand);
const prices = products.map(product => product.price);
//console.log(brands);
//console.log(prices);

//2. forEach
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {

})

//3. filter
const cheap = products.filter(product => product.price <= 5000);
//console.log(cheap);


const specificName= products.filter(product=>product.name.includes('l'));
//console.log(specificName);


//4.find
const spacial= products.find(product=>product.name.includes('l'));
console.log(spacial);

