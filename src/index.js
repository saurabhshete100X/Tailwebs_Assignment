const express = require("express");
const bodyParser = require("body-parser");

const route = require("../src/routes/route");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://saurabhshete281:JBmRPjzC58VOejIX@cluster0.jih1tjw.mongodb.net/Tailwebs-DB2",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port" + (process.env.PORT || 3000));
});


