const router = require("express").Router();
const product = require("./productRouter");

router.get("/", (req, res) => {
  res.json({
    msg: "this is product server",
  });
});
router.use("/products", product);
module.exports = router;
