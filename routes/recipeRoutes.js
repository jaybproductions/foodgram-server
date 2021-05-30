const router = require("express").Router();
const recipes = require("../testRecipes");

router.get("/", (req, res) => {
  res.json({ status: "recipe routes" });
});

router.get("/all", (req, res) => {
  console.log(recipes);
  res.json(recipes);
});

module.exports = router;
