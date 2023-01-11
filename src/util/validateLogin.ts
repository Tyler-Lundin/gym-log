import validatePassword from "./validatePassword";

// I am not going to check for the validity of the email address
// because the username can be used in place of the email address
// on the login form. The username is not validated client side either.
//
const validateLogin = (emailOrUsername: string, password: string):boolean => {
    if (emailOrUsername.length < 1 || password.length < 1) return false
    if (validatePassword(password)) return true
    return false;
};

export default validateLogin;
