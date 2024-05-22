// Create web server.

// Import the 'express' module.
const express = require('express');

// Create an express application.
const app = express();

// Set the port number.
const port = 3000;

// Set the view engine.
app.set('view engine', 'ejs');

// Set the views directory.
app.set('views', './views');

// Set the static directory.
app.use(express.static('public'));

// Set the data for the comments.
const comments = [
  {
    name: 'John',
    message: 'I am a developer.'
  },
  {
    name: 'Jane',
    message: 'I am a designer.'
  }
];

// Set the route for the comments.
app.get('/comments', (req, res) => {
  res.render('comments', { comments: comments });
});

// Listen on the port.
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});





