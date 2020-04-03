# Weather-API-DarkSky

The project was a part of the Udemy course "The complete node.js developer course". I have done some modifications to the HTML, CSS & JS part with the API information from DarkSky and we are using Geocode to get the lat, long and description of the location.

# Important information!
Darksky is now bough by Apple. From the blog: https://blog.darksky.net/ they are writing the following:

Our API service for existing customers is not changing today, but we will no longer accept new signups. The API will continue to function through the end of 2021.

This means that you cant sign up for the API anymore, but if you have a user there already you can use this project.

![Preview of the page](https://i.imgur.com/d0Umi64.png)

## You need to edit the following for DarkSky and Geocode.

Inside the folder `./src/utils` you will find geocode.js. Edit the following with GeoCode token:

```js
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.<YOUR-TOKEN-FROM-GEOCODE>&limit=1'
```
inside the folder `./src/utils` you will find forecast.js. Edit the following with DarkSky token:

```js
const url = 'https://api.darksky.net/forecast/"YOUR-API-KEY"/' + latitude + ',' + longitude + '?lang=no&units=ca'
```

## Quick Start

```bash
# Install dependencies
npm install

# Developer mode
npm run dev

# Serve on localhost:3000
npm start

```
