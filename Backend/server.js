const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); // Import CORS
const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the CU Campus Portal API');
});

// Read data from `data.json`
const readData = () => {
    const data = fs.readFileSync('data.json');
    return JSON.parse(data);
};

// Write data to `data.json`
const writeData = (data) => {
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
};

// Register route
app.post('/register', (req, res) => {
    const { uid, firstName, lastName, email, phoneNumber, department, password, confirmPassword, userType } = req.body;

    // Validate password match
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    const data = readData();
    const userArray = userType === "Student" ? data.students : data.admins;

    // Check if UID already exists
    const userExists = userArray.find(user => user.uid === uid);
    if (userExists) {
        return res.status(400).json({ message: "UID already exists" });
    }

    // Add new user to appropriate array
    userArray.push({
        uid,
        firstName,
        lastName,
        email,
        phoneNumber,
        department,
        password
    });

    writeData(data);
    res.status(200).json({ message: "Registration successful" });
});

// Login route
app.post('/login', (req, res) => {
    const { uid, password, userType } = req.body;
    const data = readData();
    const userArray = userType === "Student" ? data.students : data.admins;

    // Find user by UID and password
    const user = userArray.find(user => user.uid === uid && user.password === password);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
