const request = require('request')

const geocode = (address, callback) => {
    // Use encodeURIComponent() incase someone searches for an address that contains special characters, like '?', which becomes '%3F' with this function
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=***REMOVED***`

    request({url: url, json: true}, (error, response) => {
        // If theres a low-level error or a response error, return message and pass in undefined for the data parameter
        // Else, pass in undefined for the error parameter and return an object with longitude, latitude and the location of the first result.
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location, try again with a different searching term.', undefined)
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode