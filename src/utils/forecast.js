const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/"YOUR-API-KEY"/' + latitude + ',' + longitude + '?lang=no&units=ca'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                time: body.currently.time,
                summary: body.currently.summary,
                icon: body.currently.icon,
                nearestStormDistance: body.currently.nearestStormDistance,
                nearestStormBearing: body.currently.nearestStormBearing,
                precipIntensity: body.currently.precipIntensity,
                precipProbability: body.currently.precipProbability,
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
                dewpoint: body.currently.dewpoint,
                humidity: body.currently.humidity,
                pressure: body.currently.pressure,
                windSpeed: body.currently.windSpeed,
                windGust: body.currently.windGust,
                windBearing: body.currently.windBearing,
                cloudCover: body.currently.cloudCover,
                uvIndex: body.currently.uvIndex,
                visibility: body.currently.visibility,
                ozone: body.currently.ozone
            })
        }
    })
}

module.exports = forecast