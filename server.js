const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database/db');
const cors = require('cors'); 
const app = express();
const feedRoutes = require("./routes/feedRoutes");
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use("/api/feed", feedRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  const port  = process.env.PORT || 4000;

app.listen(port , function(){
    console.log("Server Started");
});