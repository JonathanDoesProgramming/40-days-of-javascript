/*
    Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element
    from the array using destructuring.
*/

const favoriteFoods = new Array('Pork Sinigang','Honey Glaze Chicken Wings','Pares', 'Tocino','Sweet & Sour Chicken Wings','Mango Salad Tapioca','Adobong Pusit','Sinigang na Hipon', 'Hukba', 'Tocilog');
const [, , , , , sixthFood] = [...favoriteFoods];
console.log(sixthFood);