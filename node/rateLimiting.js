const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();

// Create a rate limiter middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                 // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

// Apply rate limiter to all requests
app.use(limiter);

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
