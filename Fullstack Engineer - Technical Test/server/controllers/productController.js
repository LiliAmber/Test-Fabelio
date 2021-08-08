const { Product } = require("../models");
const productSearch = require("../helper/finder");

class ProductController {
  static async getProducts(req, res, next) {
    try {
      //==initial data==
      let data = await Product.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }

  static async getAll(req, res, next) {
    try {
      //==initial data==
      let data = await Product.findAll();
      //==randomizer to display data===
      let randomizer = Math.floor(Math.random() * data.length);
      console.log(randomizer);
      //==set data to display==
      let display = await Product.findOne({ where: { id: randomizer } });
      if (display) {
        res.status(200).json(display);
      } else {
        res.status(400).json({ message: "click again to see our products :)" });
      }
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }

  static async getSearch(req, res, next) {
    try {
      let keywords = req.body.productName;
      if (keywords) {
        let found = await Product.findOne({ where: { productName: keywords } });
        if (found) {
          res.status(200).send(found);
        } else {
          res.status(404).json({ message: "data not found" });
        }
      } else {
        res.status(400).json({ message: "input can't be empty!" });
      }
    } catch (error) {
      // console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  }

  static async getSimiliar(req, res, next) {
    try {
      //==get the keywords==
      let words = req.body.productName.split(" ");
      let keyword = "";
      if (words.length === 1) {
        keyword = words.join("");
      } else {
        keyword = words[words.length - 1];
      }

      //==set initial data
      let dictionary = [];
      let data = await Product.findAll();
      data.forEach((el) => {
        dictionary.push(el.productName);
      });

      let recommendation = productSearch(dictionary, keyword);
      //==get the recommendation==
      const [display] = await Promise.All([
        recommendation.forEach((el) => {
          Product.findAll({ where: { productName: el } });
        }),
      ]);
      // console.log(display);
      res.status(200).json(display);
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }
}

module.exports = ProductController;
