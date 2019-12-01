# CLI-Weather
Simple command line application to request forecast data on a given location. Uses Mapbox's Geolocation API and DarkSky's Forecast API. Created with Node.js.

## To get a forecast information on a given location, simply add the desired location like so:
```shell
npm start Boston
npm start "San Francisco"
```
    * Location is required
    * If the location is composed of two or more words, wrap it in quotes ("city name")

_Don't forget to create an **.app-env** file with your Dark Sky and MapBox Geolocation API key. Format:_

``` shell
FORECAST_KEY = your_forecast_api_key
GEO_KEY = your_geolocation_api_key
```