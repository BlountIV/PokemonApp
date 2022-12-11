require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 3000;
const Pokemon = require("./models/pokemon")

// Global config
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection

app.use(express.static('public'))

// Connect to mongo
mongoose.connect(mongoURI)
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

//set up middleware
app.use((_req, _res, next) => {
  console.log("I run for all routes");
  next()
})


app.use(express.urlencoded({ extended: false }));
mongoose.set("strictQuery", true);

// View engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine())

// routes
app.get("/", (_req, res) => {
  res.send('Welcome to the Pokemon App!')
})

// Route to Pokemon found while on an adventure
app.get("/pokemon", (_req, res) => {
  Pokemon.find({}, (_error, allPokemon) => {
    res.render("Index", {
      allPokemon: allPokemon, // getting all pokemon from db to pass as props
    })
  })
})

// Route to Find New Pokemon
app.get("/pokemon/new", (_req, res) => {
  res.render("New")
})

// Used in New route
app.post('/pokemon/', (req, res) => { 
  Pokemon.create(req.body, (err, createdPokemon) => {
    console.log(createdPokemon)
    res.redirect('/pokemon');
  })

});

// app.post("/pokemon", (req, res) => {
//   let pokemonBody = req.body
//   pokemonBody.img = pokemonBody.name
//   Pokemon.create(pokemonBody, (_error, _foundPokemon) => {
//     res.redirect("/pokemon")
//   })
// })

// Route showing pokemon name and image
app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.params.id, (_err, foundPokemon) => {
    res.render("Show", {
      pokemon: foundPokemon,
    })
  })
})
app.get("/pokemon/:indexOfPokemonArray", (_err, foundPokemon) => {
  res.render("Show", {
    pokemon: foundPokemon
  })
})



app.listen(port, () => {
  console.log("listening");
});