const geocode = require ('./utils/geocode.js')

// const url = 'https://api.darksky.net/forecast/***REMOVED***/37.8267,-122.4233'

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees fahrenheit.')
//     }
// })


// On the callback function, we either get an error, or we get a response with data (this can be the response we want or an error response)
geocode('Lisbon', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})