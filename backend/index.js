const express = require("express");
const app = express();
const port = 3001;
var cors = require('cors');

app.use(cors())
app.use(express.json());

const dishes = require("./routes/dishesRoutes")
const userRoutes = require("./routes/userRoutes")

const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/food-app')
mongoose.connect('mongodb+srv://vinayjose1510:s4LTPG22eGuo7EyZ@cluster0.npntelu.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
  console.log("Connected");
})
.catch((err) => {
  console.log(err);
});

app.use("/api", dishes)
app.use("/api/user", userRoutes)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });