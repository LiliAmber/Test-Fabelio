function findWordInSentence(sentence, keyword) {
  let status;
  let splitted = wordParser(sentence);

  for (let j = 0; j < splitted.length; j++) {
    if (splitted[j] === keyword) {
      status = true;
      break;
    } else {
      status = false;
    }
  }
  // console.log(splitted, "<<splitted");
  return status;
}
// console.log(findWordInSentence("Sofa 1 dudukan Vienna", "Vienna"));

function wordParser(word) {
  let output = word.split(" ");
  return output;
}

function productSearch(products, keyword) {
  let searched = [];
  for (let i = 0; i < products.length; i++) {
    // console.log(products[i])
    let kata = findWordInSentence(products[i], keyword);
    // console.log(kata);
    if (kata === true) {
      searched[0] = products[i];
    } else {
      searched.push(products[i]);
    }
  }

  return searched;
}

const products = [
  "Sofa 2 dudukan Vienna",
  "Sofa Tempat Tidur Mochi",
  "Sofa 2 dudukan Zelado",
  "Sofa 2 dudukan Toril",
  "Sofa Tempat Tidur Deacon",
  "Sofa Java",
  "Sofa 1 dudukan Hughes",
  "Sofa 1 dudukan Taby",
  "Sofa 1 dudukan Zoey",
  "Sofa 1 dudukan Vienna",
];

// console.log(productSearch(products, "Vienna"));

module.exports = productSearch;
