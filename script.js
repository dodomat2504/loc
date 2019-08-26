let p = document.getElementById("interagieremitmir");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((location) => {
        console.log(location);
        p.textContent = "lat: " + location.coords.latitude + " lon: " + location.coords.longitude;
    });
} else {
    p.textContent = "mooooin";
}