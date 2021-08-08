const router = require("express").Router();
const ProductController = require("../controllers/productController");
router.get("/", ProductController.getAll);
router.get("/all", ProductController.getProducts);
router.post("/", ProductController.getSearch);
router.post("/recommendation", ProductController.getSimiliar);

module.exports = router;
