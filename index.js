const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
const PORT = 89;

//route imports
const recipeRoutes = require("./routes/recipeRoutes");
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());

//inlclude
app.use("/recipes", recipeRoutes);

app.get("/", (req, res) => {
  res.json({ status: "online" });
});

app.listen(PORT, () => {
  console.log("app is listening", PORT);
});
