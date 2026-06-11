/* 
   Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?
*/

// Most efficient: using length
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', ['red orange', 'yellow orange', 'yellow green'], ['brown', 'terracotta'], ['yellow green', 'rust']];

let favoriteColors = [];
for (let outsideIndex = 0; outsideIndex < colors.length; outsideIndex++) {
    if (outsideIndex === 7) {
        for (let insideIndex = 0; insideIndex < colors[outsideIndex].length; insideIndex++) {
            if (colors[outsideIndex][insideIndex] === 'yellow orange') {
                favoriteColors.push(colors[outsideIndex][insideIndex]);
            }
        }
    } else if (outsideIndex === 8) {
        for (let insideIndex = 0; insideIndex < colors[outsideIndex].length; insideIndex++) {
            if (colors[outsideIndex][insideIndex] === 'brown') {
                favoriteColors.push(colors[outsideIndex][insideIndex]);
            }
        }
    } else if (outsideIndex === 9) {
        for (let insideIndex = 0; insideIndex < colors[outsideIndex].length; insideIndex++) {
            if (colors[outsideIndex][insideIndex] === 'rust') {
                favoriteColors.push(colors[outsideIndex][insideIndex]);
            }
        }
    }
}
let emptyFavoriteColors = favoriteColors.length;
emptyFavoriteColors = 0;
console.log('Favorite Colors without using - length property:', favoriteColors);
console.log('Favorite Colors with using - length property:', emptyFavoriteColors);