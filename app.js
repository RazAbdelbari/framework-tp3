const express = require('express'); 
const app = express(); 
const port = 3000; 

// Middleware function to log requests
const loggerMiddleware = (req, res, next) => {
   const now = new Date();
   const date = now.toLocaleDateString();
   const time = now.toLocaleTimeString();
   console.log(`[${date} ${time}] ${req.method} ${req.path}`);
   next();
};

// Use the logger middleware
app.use(loggerMiddleware);

// Define a route
app.get('/', (req, res) => {
   res.send('SALAMANKA');
});

// Start the server
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
