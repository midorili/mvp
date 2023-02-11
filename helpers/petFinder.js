const axios = require('axios');
const save = require('../database/index.js')


const petFinder = (pet, zip) => {
  let token = ''
  axios.request({
    method: "POST",
    url: 'https://api.petfinder.com/v2/oauth2/token',
    data: {
      "grant_type": "client_credentials",
      'client_id': 'qMvjcuiNdrpkeU8tn0UETb2CnnJRg7dR8sElofoAYa3gJs1uvn',
      'client_secret': 'PTlGI1B37rOkmPRHS0Z0CKBWBA8tYJTujmKPxmh4'
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }).then(function (res) {
    // console.log('r', res.data.access_token);
    token = res.data.access_token
  }).then(() => {
    axios.request({
      method: "GET",
      url: `https://api.petfinder.com/v2/animals?type=${pet}&location=${zip}`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(function (res) {
      console.log('phone', res.data.animals[3].contact.phone)
      var data = res.data.animals
      for (var i = 0; i < data.length; i++) {
        // console.log('data@i', data[i].photos)
        if (data[i].contact.email === null) {
          data[i].contact.email = 'midorili998@gmail.com'
        }
        if (data[i].contact.phone === null) {
          data[i].contact.phone = '415-123-4567'
        }
        if (data[i].photos.length === 0) {
          // if (data[i].type === 'Cat') {
          //   data[i].photos = 'https://i.imgur.com/ij5imiv.png'
          // }
          // if (data[i].type === 'Dog') {
          //   data[i].photos = 'https://i.imgur.com/7EsUCvC.png'
          // }
          continue;
        } else {
          data[i].photos = data[i].photos[0].small;
          save.save(data[i])

        }

      }
    })
      .catch(err => {
        console.log('error', err)
      })
  })
}

module.exports.petFinder = petFinder;