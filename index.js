// Import packages
const express = require("express");
const home = require("./routes/app");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/", home);

// connection
const port = 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
