// const { latLng } = require("leaflet");

async function buildRoutes(ev) {
    ev.preventDefault();
    await getCoordsUser().then(obj => {
        let point1 = coordToMap.user;
        let point2 = {};
        map.addEventListener('click', (e) => {
            console.log(e.latlng);
            point2.latitude = e.latlng.lat;
            point2.longitude = e.latlng.lng;
            L.Routing.control({
                waypoints: [
                    L.latLng(point1.latitude, point1.longitude),
                    L.latLng(point2.latitude, point2.longitude)
                ]
            }).addTo(map);
        })
    }).catch(err => console.log(err));

}

