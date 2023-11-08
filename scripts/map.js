
async function installMap(coord) {
    console.log('start to install map');
    map = await L.map('map').setView([coord.latitude, coord.longitude], 12);
    return await L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}
async function initialMap() {
    let address = await getAddress();
    await getCenterMap(stateCoords.CITY);
    setMarkers(address);
    map.addLayer(markers)
}
// устанавливаем все маркеры согласно переданным адресам
function setMarkers(addr) {
    if (addr.length)
        return addr.forEach(obj => { setOnlyMarker(obj) })
}
// //отмечаем отдельный маркер
async function setOnlyMarker(obj) {
    let logo = L.icon({
        iconUrl: obj.logo,
        // shadowUrl: 'imag/food.svg',
    
        iconSize:     [38, 95], // size of the icon
        // shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        // shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -66] // point from which the popup should open relative to the iconAnchor
    });
    let marker = L.marker([obj.coord.latitude, obj.coord.longitude], {icon: logo});
    paintPopup(obj, marker);
    markers.addLayer(marker);
}
//устанавливаем центр отображения карты
async function getCenterMap(coord) {
    console.log('get center start');
    // let resultCoord = [];
    switch (coord) {
        case stateCoords.CITY:
            // resultCoord = coordToMap.coco;
            installMap(coordToMap.coco);
            break;
        case stateCoords.USER:
            return getCoordsUser();
            break;
        case stateCoords.PLACE:

            break;

        default:
            break;
    }
}