const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend
app.use(express.static(__dirname));

// Login API
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const filePath = path.join(__dirname, "students.json");

    if (!fs.existsSync(filePath)) {
        return res.status(500).json({
            success: false,
            message: "Student data not found"
        });
    }

    try {
        const data = fs.readFileSync(filePath, "utf8");
        const students = data.trim() ? JSON.parse(data) : [];

        const student = students.find(
            user =>
                user.email === email &&
                user.password === password
        );

        if (student) {
            return res.status(200).json({
                success: true,
                message: "Login Successful!"
            });
        }

        return res.status(401).json({
            success: false,
            message: "Invalid email or password!"
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
});

// Health check for Jenkins + Docker
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Node.js + Express server is running"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});