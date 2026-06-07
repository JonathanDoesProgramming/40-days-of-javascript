const books = {
    name: 'The Whimpy kid',
    price: '$50',
    availability: true,
    stocks: 5,
    author: 'Unknown'
}
console.log('author' in books); // true 
console.log(Object.hasOwn(books, 'publication')); // false