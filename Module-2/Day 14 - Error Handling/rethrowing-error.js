// Rethrow
function validateForm(formData) {
    try {
        if (!formData.username) throw new Error('Username is Mandatory');
        if (!formData.email.includes('@')) throw new Error('Invalid email format!');
    } catch (err) {
        /*
        We dont need to do throw new Error(), 
        since the err parameter in catch points to the new Error() in the try above.
        */
        console.error('Validation issues found', err.message)
        throw err; /*
        when rethrowing, at this point if we create another try..catch 
        it will point this 'throw err' to another created try..catch
        */
    }
}
// the throw err , points at this try..catch block
try {
    validateForm({username: 'Tapas', email: 'bademail'});
} catch (err) {
    console.log('Showing error message for user creation', error.message);
}