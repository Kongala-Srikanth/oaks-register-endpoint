const express = require("express");

const app = express();
app.use(express.json()); 

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    try{
        if (!name || !email || !password) {
            return res.status(400).json({message: "All fields are required" });
        }
    
        res.status(201).json({message: "User registered successfully"});
    } catch (e) {
        res.status(500).json({message: "Something went wrong. Please try again"})
    }

    
});

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});

