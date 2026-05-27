// var name = 'Tom';

// function sayName() {
//     console.log(this.name);
// }

var name = 'Tom';

function tom() {
    console.log(this.name + 'RUNS');
}

// Invoke the function tom()
tom();