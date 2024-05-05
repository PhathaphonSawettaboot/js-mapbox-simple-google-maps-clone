const MAPBOX_ACCESS_TOKEN = 'ADD_YOUR_TOKEN_HERE';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true})

function setupMap(centerPosition) {
    const map = new mapboxgl.Map({
        accessToken: MAPBOX_ACCESS_TOKEN,
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
        center: centerPosition
    });

    const navigationControls = new mapboxgl.NavigationControl();
    map.addControl(navigationControls);

    const dierectionControls = new MapboxDirections({
        accessToken: MAPBOX_ACCESS_TOKEN
    })
    map.addControl(dierectionControls, 'top-left')
}

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
    console.assert.log(position)
}

function errorLocation() {
    setupMap([-2.24, 53.48])
}