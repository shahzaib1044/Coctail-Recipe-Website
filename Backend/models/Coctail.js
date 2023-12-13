const mongoose = require("mongoose")
const Cocktail = mongoose.model("Cocktail", {
    name: String,
    image: {
        name: String,
        path: String,
      },
    glass: String,
    category: String,
    ingredients: [
      {
        unit: String,
        amount: Number,
        ingredient: String,
      },
    ],
  });

module.exports = Cocktail