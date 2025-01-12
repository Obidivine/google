const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Handle form submission from page2.html
app.post('/submit-form', (req, res) => {
  const { email, password } = req.body;

  // Log the user's input (replace this with database storage if needed)
  console.log(`Email: ${email}, Password: ${password}`);

  // Redirect to page3.html after form submission
  res.redirect('/page3.html');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
