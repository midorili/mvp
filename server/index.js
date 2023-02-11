const express = require('express');
let app = express();
const petFinder = require('../helpers/petFinder.js')
const bodyParser = require('body-parser');
const PetModel = require('../database/index.js')

app.use(express.static(__dirname + '/../client/dist/compiled'));
app.use(bodyParser.urlencoded({ extended: true }))

let port = 9500;

let searchedPet = ''
let zipCode;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

app.post('/pets', (req, res) => {
  console.log('rb', req.body)
  let pet = req.body.pet
  searchedPet = pet.charAt(0).toUpperCase() + pet.slice(1);
  let zip = req.body.term
  zipCode = zip;
  // console.log('z', typeof (zipCode))
  // console.log('s', searchedPet)
  petFinder.petFinder(pet, zip, (err) => {
    if (err) {
      console.log('error has occured', err)
    }
  })
  // res.send(pet, zip)
  //req to get term that was searched
})

app.get('/pets', (req, res) => {
  //query mongodb and send data back to client
  PetModel.PetModel.find({ type: searchedPet })
    .then(query => {
      // console.log('q', query)
      res.send(query)
    })
    .catch(err => {
      console.log('error', err)
    })
})