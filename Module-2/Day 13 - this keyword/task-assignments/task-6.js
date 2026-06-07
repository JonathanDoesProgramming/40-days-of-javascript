const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

// 1. Copy the method
car2.describe = car1.describe;
car2.describe();

// 2. call()
car1.describe.call(car2);

// 3. apply()
car1.describe.apply(car2);

// 4. bind()
const car2Describe = car1.describe.bind(car2);
car2Describe();

// Bound 
car2.describe = car1.describe.bind(car2);
car2.describe()