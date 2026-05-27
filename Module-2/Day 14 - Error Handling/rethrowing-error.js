// Rethrow
function validateForm(formData) {
    try {
        if (!formData.username) throw new Error('Username is Mandatory');
        if (!formData.email.includes('@')) throw new Error('Invalid email format!');
    } catch (err) {
        console.error('Validation issues found', err.message)
        throw err; // rethrow
    }
}
// Since be rethrowing we need this to catch it
try {
    validateForm({username: 'Tapas', email: 'bademail'});
} catch (err) {
    console.log('Showing error message for user creation', error.message);
}