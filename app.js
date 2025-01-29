const express = require("express");

const app = express();
app.use(express.json()); 

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    res.status(201).json({ success: true, message: "User registered successfully", data: { name, email } });
});

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});

