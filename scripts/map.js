
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
    await getCenterMap(stateCoords.USER);
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
    let marker = L.marker([obj.coord.latitude, obj.coord.longitude]);
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