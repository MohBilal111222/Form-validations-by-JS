
function validateUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
   
    return usernameRegex.test(username);
}
const username = "user123";

console.log(validateUsername(username)); 



function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
const email = "example@test.com";

console.log(validateEmail(email)); 



function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
}
const password = 'abcd'

console.log(validatePassword(password));



function validateCNIC(cnic) {
    const cnicRegex = /^\d{5}-\d{7}-\d{1}$/;
    return cnicRegex.test(cnic);
}
const cnic = "12345-1234567-1";

console.log(validateCNIC(cnic)); 

function validateAge(age) {
    return age >= 18 && age <= 60;
}
const age = 25;

console.log(validateAge(age)); 




