const request = require('request')

// const url = 'https://api.darksky.net/forecast/658a65f9b897b3be4678fa10003712ac/37.8267,-122.4233'

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees fahrenheit.')
//     }
// })



// const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&access_token=pk.eyJ1IjoiYW5kZ2N2IiwiYSI6ImNrMjdqam84ZDBhOWMzbG9icDMxdTBkM2cifQ._fy5QQ3lrAq1TIu5i4vQ6A'

// request({url: geoUrl, json: true}, (error, response) => {
    // if (error) {
        // console.log('Unable to connect to location service!')
    // } else if (response.body.features.length === 0) {
        // console.log("Unable to find location, try again with a different searching term.")
    // } else {
        // longitude = response.body.features[0].center[0]
        // latitude = response.body.features[0].center[1]
        // console.log(`Longitude: ${longitude}; Latitude: ${latitude}`)
    // }
// })

const geocode = (address, callback) => {
    // Use encodeURIComponent() incase someone searches for an address that contains special characters, like '?', which becomes '%3F' with this function
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=pk.eyJ1IjoiYW5kZ2N2IiwiYSI6ImNrMjdqam84ZDBhOWMzbG9icDMxdTBkM2cifQ._fy5QQ3lrAq1TIu5i4vQ6A`

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location, try again with a different searching term.', undefined)
        } else {
            longitude = response.body.features[0].center[0]
            latitude = response.body.features[0].center[1]
            
        }
    })
}

// On the callback function, we either get an error, or we get a response with data (this can be the response we want or an error response)
geocode('Lisbon', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})