function processInformation(information) {
    try {
        console.log('Processing Information...')
        if (!information) throw new Error('No information available to process');
        console.log('Infomation processed')
    } catch (err) {
        console.log('Error:', err.message)
    } finally {
        console.log('Cleanup: Closing database connection')
    }
}
processInformation('tapas is teaching JS');

// Creating Custom Error: using constructor function
function ValidationError(message) {
    this.name = 'Validation Error';
    this.message = message;
}

function validateCitizen(age) {
    if (age < 60) throw new ValidationError('You are not a senior citizen');
    return 'You are a senior citizen';
}

try {
    const message = validateCitizen(45);
    console.log(message);
} catch (err) {
    console.error(`${err.name}: ${err.message}`);
}