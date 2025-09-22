// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: Logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Serve static files from 'public' folder
app.use(express.static('public'));

// Simple home route
app.get('/', (req, res) => {
  res.send('Hello from nodejs-app!');
});

// JSON API route
app.get('/api/status', (req, res) => {
  res.json({
    status: 'OK',
    app: 'nodejs-demo-app',
    timestamp: new Date()
  });
});

// Greet route with query parameter
app.get('/greet', (req, res) => {
  const name = req.query.name || 'Guest';
  res.send(`Hello, ${name}! Welcome to ${process.env.APP_NAME || 'Node App'}.`);
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

