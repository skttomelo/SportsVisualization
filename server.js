const express = require("express");
const dotenv = require("dotenv");

//This is the file that will contain our API keys and private information
//Should not be uploaded to GitHub
dotenv.config({ path: "./config.env" });

//Default backend port is 8000 unless specified otherwise in our env file.
const port = process.env.PORT || 8000;

const app = express();

//Routes
app.use("/api/soccer/", require("./routes/soccer"));

//start express server on port provided.
app.listen(port, console.log(`Server is running on port ${port}`));
