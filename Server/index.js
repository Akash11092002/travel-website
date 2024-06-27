const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Here you would normally handle the form submission,
  // e.g., save to a database, send an email, etc.
  console.log(`Received a request : ${name}, ${email}, ${message}`);
  res.render('contact-confirmation', { name, email, message });

  
  res.status(200).json({ message: 'Form submitted successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
