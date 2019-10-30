const request = require('request')

const forecast = (longitude, latitude, callback) => {
    url = `https://api.darksky.net/forecast/***REMOVED***/${latitude},${longitude}?units=si`

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback(response.body.error, undefined)
        } else {
            callback(undefined, `${response.body.daily.data[0].summary}\nCurrent temperature: ${response.body.currently.temperature} degrees Celsius.\nMinimum temperature: ${response.body.daily.data[0].temperatureMin} degrees Celsius.\nMaximum temperature: ${response.body.daily.data[0].temperatureMax} degrees Celsius.\nChance of precipitation: ${response.body.currently.precipProbability * 100.0}%.`)
                // {
                //     summary: response.body.daily.data[0].summary,
                //     temperature: response.body.currently.temperature,
                //     minTemperature: response.body.daily.data[0].temperatureMin,
                //     maxTemperature: response.body.daily.data[0].temperatureMax,
                //     precipProbability: response.body.currently.precipProbability
                // }
        }
    })
}

module.exports = forecast