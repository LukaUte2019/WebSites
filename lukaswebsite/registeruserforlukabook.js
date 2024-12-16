/**
 * Gets the values of the user's first name, email and password from the registration form
 * and stores them in variables.
 *
 * @return {undefined} Does not return a value, but stores the values in variables.
 */
function signUpForLukabook() {
    let user = document.getElementById('FirstName').value
    let email = document.getElementById('Email').value
    let password = document.getElementById('password').value
    alert(`Create account on Lukabook? Username: ${user}, Email: ${email}`)
    window.AppInventor.setWebViewString(`SignUpForLukabookData:  Username:  ${user}  Email:  ${email}  Password: ${password}`);
}
