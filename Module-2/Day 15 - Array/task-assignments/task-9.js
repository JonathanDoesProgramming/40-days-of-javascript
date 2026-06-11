/* Clone an Array(Shallow cloning) */

const numArray = new Array(12, 2, 5, 1, 10);
const exampleShadowCloning = numArray.slice();
console.log('Shadow Cloning 1 - using splice(): ', exampleShadowCloning);  

const [...exampleShadowCloning2] = [...numArray];
console.log('Shadow Cloning 2 - using rest operator: ' ,exampleShadowCloning2);

const exampleShadowCloning3 = Array.from(numArray);
console.log('Shadow Cloning 3 - using Array.from(): ' ,exampleShadowCloning2);