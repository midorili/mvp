const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/pets', { useNewUrlParser: true, useUnifiedTopology: true })



const Schema = mongoose.Schema;

const PetSearch = new Schema({
  name: String,
  type: String,
  description: String,
  id: {
    type: Number,
    unique: true
  },
  city: String,
  postcode: String,
  photo: {
    type: String,
    unique: true
  },
  phone: String,
  email: String
});

let PetModel = mongoose.model('PetModel', PetSearch)

let newSearch = new PetModel({ name: "Midori", type: "dog", description: "hi!", id: 123, city: 'san francisco', postcode: '94122', photo: 'https://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=100' })

let save = (pet) => {

  let newSearch = new PetModel({ name: pet.name, type: pet.type, description: pet.description, id: pet.id, city: pet.contact.address.city, postcode: pet.contact.address.postcode, photo: pet.photos, phone: pet.contact.phone, email: pet.contact.email }).save((err, data) => {
    if (err) {
      console.log('error in saving pet search', err)
    } else {
      console.log('saved!')
    }
  })


}

module.exports.save = save;
module.exports.PetModel = PetModel;