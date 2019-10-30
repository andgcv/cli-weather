const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
 
// On the callback function, we either get an error, or we get a response with data (this can be the response we want or an error response)
geocode('Belas Portugal', (error, geoData) => {
    if (error) {
        return console.log('Error:', error)
    }
    // Callback chaining
    forecast(geoData.longitude, geoData.latitude, (error, forecastData) => {
        if (error) {
            return console.log('Error:', error)
        }
        console.log(geoData.location)
        console.log(forecastData)
    })
})