let total = 0;

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);

// mistake is that we can put the total variable as parameter and we should use return.
function add(total, num) {
    return total + num;
}

let total = 0;
total = add(total, 5);
total = add(total, 10);
console.log(total); 