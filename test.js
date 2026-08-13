const fs = require("fs");
let passed = true;

console.log("Registration Test\n");

// TC-01: Check index.html

if (fs.existsSync("index.html")) {
    console.log("TC-01: index.html exists: PASS");
} else {
    console.log("TC-01: index.html exists: FAIL");
    passed = false;
}
// TC 02
if(fs.existsSync("style.css"))
{
    console.log("TC 02 : style.css exist : Pass");
}
else{
      console.log("TC 02 : style.css exist :fail");
    passed = false;

}
// // TC 03
// if(fs.existsSync("data.json"))
// {
//     console.log("TC 03 : data.json file exist : Pass");
// }
// else
// {
//     console.log("TC 03 : data.json file exist : Fail");
//     passed = false;
// }
//TC 04
if(fs.existsSync("students.json")){

    console.log("TC-04: students.json exists: PASS");
} else {
    console.log("TC-04: students.json exists: FAIL");
    passed = false;
}


const students = JSON.parse(

fs.readFileSync("students.json")

);
const student = students[0];
//TC 05
if(student.name.trim()!==""){

console.log("TC-05: Name Validation: PASS");

} else {

console.log("TC-05: Name Validation: FAIL");
 passed = false;
}

// TC-06: Email Validation

if (student.email.includes("@")) {

console.log("TC-06: Email Validation: PASS");

} else {

console.log("TC-06: Email Validation: FAIL");
 passed= false;
}
//TC-07
if(student.mobile.length===10){
    console.log("TC-07: Mobile Validation: PASS");
}
else{
    console.log("TC-07: Mobile Validation: FAIL");
    passed = false;
}
//TC-08
if(student.branch.trim()!==""){
    console.log("TC-08: Branch Validation: PASS");
}
else{
    console.log("TC-08: Branch Validation: FAIL");
    passed = false;
}
//TC-09
if(student.password.length>=6){ 
    console.log("TC-09: Password Validation: PASS");    
}else{
    console.log("TC-09: Password Validation: FAIL");
    passed = false;
}
//TC-10
if(passed){
    console.log("TC-10: Registration Successful: PASS");
    console.log("\nBuild SUCCESS");
    process.exit(0);
}
