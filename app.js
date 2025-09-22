// app.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set app name from env
const APP_NAME = process.env.APP_NAME || 'Node App';

// Middleware: Logging requests with timestamp
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Middleware: Parse JSON body for POST requests
app.use(express.json());

// Serve static files from 'public' folder
app.use(express.static('public'));

// Simple home route with styled HTML
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${APP_NAME}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #f0f8ff, #d1ecf1);
            color: #333;
            text-align: center;
            padding: 50px;
          }
          h1 {
            color: #007bff;
          }
          p {
            font-size: 18px;
          }
          a {
            display: inline-block;
            margin: 10px;
            text-decoration: none;
            color: white;
            background-color: #007bff;
            padding: 10px 20px;
            border-radius: 5px;
          }
          a:hover {
            background-color: #0056b3;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to ${APP_NAME}!</h1>
        <p>This is a styled Node.js demo application 🚀</p>
        <a href="/api/status">Check API Status</a>
        <a href="/greet?name=Zahra">Greet Me</a>
      </body>
    </html>
  `);
});

// JSON API route
app.get('/api/status', (req, res) => {
  res.json({
    status: 'OK',
    app: APP_NAME,
    timestamp: new Date()
  });
});

// Greet route with query parameter
app.get('/greet', (req, res) => {
  const name = req.query.name || 'Guest';
  res.send(`
    <h2>Hello, ${name}!</h2>
    <p>Welcome to ${APP_NAME}.</p>
  `);
});

// Simple counter API
let counter = 0;
app.post('/api/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

