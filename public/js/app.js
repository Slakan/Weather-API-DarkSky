console.log('Client side js file is loaded')
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const location_forecast = document.querySelector('#location-weather-output')
const summary_forecast = document.querySelector('#summary-weather-output')
const rain_forecast = document.querySelector('#rain-weather-output')
const temp_forecast = document.querySelector('#temp-weather-output')
const loading_box = document.querySelector('#loading_box')
const change_image = document.getElementById('weather-pic-summary')




weatherForm.addEventListener('submit', (event)=>{
    event.preventDefault()

    const location = search.value

    loading_box.textContent = ''
    summary_forecast.textContent = ''
    rain_forecast.textContent = ''
    temp_forecast.textContent = ''
    location_forecast.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response)=>{
        response.json().then((data)=>{
            if (data.error) {
                loading_box.textContent = data.error
                location_forecast.textContent = 'Unable to update'
                temp_forecast.textContent = 'Unable to update'
                summary_forecast.textContent = 'Unable to update'
                rain_forecast.textContent = 'Unable to update'
            } else {
                location_forecast.textContent = data.location
                temp_forecast.textContent = data.forecast.temperature + '°C'
                summary_forecast.textContent = data.forecast.summary
                rain_forecast.textContent = data.forecast.precipProbability + '%'
                loading_box.textContent = ''

            }
        })
    })
    
})