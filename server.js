const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv")

const app = express();
const PORT = process.env.PORT || 3000;


app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./controllers/htmlRoutes")(app);
require("./controllers/apiRoutes")(app);

dotenv.config();
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ephbh.mongodb.net/workoutDB?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });