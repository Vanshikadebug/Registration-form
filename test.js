function validateStudent(name,email,mobile,branch,password){

    if(name==="") return "Name must not be empty";

    if(!email.includes("@")) return "Email must contain @";

    if(!/^[0-9]{10}$/.test(mobile))
        return "Mobile number must be 10 digits";

    if(branch==="") return "Branch must not be empty";

    if(password.length<6)
        return "Password must not be less than 6 characters";

    return "Registration Successful!";
}

console.log(validateStudent(
    "Vanshika",
    "vanshika@gmail.com",
    "9876543210",
    "CSE",
    "abcdef"
));