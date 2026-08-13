document.getElementById("studentForm").addEventListener("submit", async function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let branch = document.getElementById("branch").value.trim();
    let password = document.getElementById("password").value;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";
    document.getElementById("branchError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    let valid = true;

    if(name == ""){
        document.getElementById("nameError").innerHTML = "Name must not be empty";
        valid = false;
    }

    if(!email.includes("@")){
        document.getElementById("emailError").innerHTML = "Email must contain @";
        valid = false;
    }

    if(!/^[0-9]{10}$/.test(mobile)){
        document.getElementById("mobileError").innerHTML = "Mobile number must be 10 digits";
        valid = false;
    }

    if(branch == ""){
        document.getElementById("branchError").innerHTML = "Branch must not be empty";
        valid = false;
    }

    if(password.length < 6){
        document.getElementById("passwordError").innerHTML = "Password must not be less than 6 characters";
        valid = false;
    }

    // If all validation is successful
    if(valid){

        const studentData = {
            name: name,
            email: email,
            mobile: mobile,
            branch: branch,
            password: password
        };

        try {

            const response = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(studentData)
            });

            const result = await response.json();

            if(result.success){
                alert("Registration Successful!");
                document.getElementById("studentForm").reset();
            } else {
                alert("Registration failed!");
            }

        } catch(error) {

            console.error("Error:", error);
            alert("Unable to connect to server!");

        }
    }

});