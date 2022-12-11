const mongoose = require("mongoose")

const pokemonSchemas = new mongoose.Schema({
    name: { type: String, required: true },
    // img: { type: String, required: true },
})

const Pokemon = mongoose.model("Pokemon", pokemonSchemas);

module.exports = Pokemon