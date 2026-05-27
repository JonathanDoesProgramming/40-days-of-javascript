const student = {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['maths', 'English', 'EVS'],
    'parents': {
        'father': 'Brown Williamson',
        'mother': 'Sophia',
        'email': 'john-parents@abcde.com'
    },
    'address': {
        'street': '65/2, brookly road',
        'city': 'Carterton',
        'country': 'New Zealand',
        'zip': 5791
    }
}
// Destructuring using function
// Nested Objects
function sendEmail({ parents: { email } }) {
    console.log(`Sent an email to ${email}`);
}
sendEmail(student);
// Another Example
const getStudent = () => {
    return {
        'name': 'John Williamson',
        'age': 9,
        'std': 3,
        'subjects': ['maths', 'English', 'EVS'],
        'parents': {
            'father': 'Brown Williamson',
            'mother': 'Sophia',
            'email': 'john-parents@abcde.com'
        },
        'address': {
            'street': '65/2, brookly road',
            'city': 'Carterton',
            'country': 'New Zealand',
            'zip': 5791
        }
    }
}
const {name: anotherName, subjects: anotherSubjs} = getStudent();
console.log(anotherName, anotherSubjs);