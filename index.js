const express = require("express");
const app = express();
const router = express.Router();

// Middleware function
const middlewareFunction = (req, res, next) => {
    // Your middleware logic here
    next();
};

// Correct usage of Router.use()
router.use(middlewareFunction);

// Importing and using the router from app.js
const apiRouter = require('./routes/app');
app.use('/api', apiRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
