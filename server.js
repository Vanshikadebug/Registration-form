const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(__dirname));

// Save registration data
app.post("/register", (req, res) => {
    const { name, email, mobile, branch, password } = req.body;

    const filePath = path.join(__dirname, "students.json");

    let students = [];

    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf8");

        if (data.trim()) {
            students = JSON.parse(data);
        }
    }

    const newStudent = {
        id: students.length + 1,
        name,
        email,
        mobile,
        branch,
        password
    };

    students.push(newStudent);

    fs.writeFileSync(
        filePath,
        JSON.stringify(students, null, 2)
    );

    res.json({
        success: true,
        message: "Registration Successful!"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});