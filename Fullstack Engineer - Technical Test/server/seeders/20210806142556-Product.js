'use strict';
const fs = require('fs')
let dataProducts = fs.readFileSync('./test-data.csv', 'utf8').split("\n")
.slice(1)
.map((el) => {
  return el.split(",");
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let products = []
   for(let i = 0; i < dataProducts.length; i++) {
     let obj = {
       productName: dataProducts[i][0],
       price: dataProducts[i][1],
       dimension: dataProducts[i][2],
       colours:dataProducts[i][3],
       material:dataProducts[i][4],
       image: dataProducts[i][5],
       createdAt: new Date(),
        updatedAt: new Date(),
     }

     products.push(obj)
   }
   await queryInterface.bulkInsert("Products", products, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete("Products", null, {})
  }
};
