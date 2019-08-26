let p = document.getElementById("interagieremitmir");

navigator.geolocation.getCurrentPosition((location) => {
    console.log(location);
    p.textContent = "lat: " + location.coords.latitude + " lon: " + location.coords.longitude;
});