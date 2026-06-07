const person = {
    name: 'Tapas',
    company: {
        name: 'tapascript',
        location: {
            city: 'Bangalore',
            zip: '94107'
        }
    },
}
// Solution 1:
const {name, company} = person;
const {city} = person.company.location;
console.log(name);
console.log(company);
console.log(city);

// Solution 2: 
const {
  name,
  company: {
    name: companyName,
    location: { city }
  }
} = person;

console.log(name);        // Tapas
console.log(companyName); // tapascript
console.log(city);        // Bangalore
