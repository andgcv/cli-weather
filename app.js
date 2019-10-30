const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const process = require('process')

const address = process.argv[2]

/*
Take in the address that the user provided
    If the user didn't provide an address, request one
    If there's a low-level error, log it
    If the response returns an error, log it as well
    Else, when all goes well:
        Gather the longitude, latitude and location with Mapbox's Geocoding API
        Use longitude and latitude to gather the forecast from the DarkSky's API
        Display this information to the user
*/
geocode(address, (error, geoData) => {
    if (!address) {
        return console.log('Please provide a location.')
    }
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