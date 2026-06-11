/* 
    Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
*/
const favoriteFoods = new Array('Pork Sinigang','Honey Glaze Chicken Wings','Pares', 'Tocino','Sweet & Sour Chicken Wings','Mango Salad Tapioca','Adobong Pusit','Sinigang na Hipon ', 'Hukba');
const [, ,...sixthFood] = [...favoriteFoods];
console.log(sixthFood);