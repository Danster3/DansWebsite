function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(-40.914696, 175.005941),
        zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
   // var location = new google.map.location("Winnetka, IL, USA");

}
const api_key = process.env.API_KEY;