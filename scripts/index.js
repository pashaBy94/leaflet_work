var map = L.map('map').setView([10.548110581095356, -85.69627558119473], 12);
var markers = L.markerClusterGroup();

async function iitialMap() {
    let address = await getAddress();
    await L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    setMarkers(address);
    map.addLayer(markers)
}

function paintPopup(obj, marker){
    marker.bindPopup(`
    <style> 
    .popup__img{
        background-image: url(${obj.photo});
    }</style>
    <div class="popup__img"></div>
    <div class="popup__description">
        <h2 class="popup__title">${obj.name}</h2>
        <p class="popup__text">${obj.description}ood.</p>
        <p class="popup__addres">${obj.address}</p>
        <button class="popup__letsgo">want to go</button>
    </div>`);
}

function setMarkers(addr){
    async function setOnlyMarker(obj){
        let marker = await L.marker([obj.coord.lef, obj.coord.lot]);
        paintPopup(obj, marker);
        markers.addLayer(marker);

    }
    if(addr.length)
    return addr.forEach(obj=>{setOnlyMarker(obj)})
}
function getAddress() {
    return [
        {
            name: 'Zi Lounge', address: '151, Provincia de Guanacaste, Coco, Коста-Рика', description: 'The restouran is very good.', category: 'restouran', coord: {
                lef: '10.550159645790062', lot: '-85.6972451429635'
            },
            photo: 'https://fastly.4sqi.net/img/general/600x600/6658923_n7Zuf9_ZV60Xcz1PX7eKPT7rqtK8TJu-nIqPwjFwkQ4.jpg'
        },
        {
            name: 'The Palms At Coco Beach', address: 'Next to soccer field Provincia de Guanacaste Playas del Guanacaste Playas del, Coco, 50503, Коста-Рика', description: 'The houtel is very good.', category: 'houtel', coord: {
                lef: '10.55057916416866', lot: '-85.69865894425615'
            },
            photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/09/5c/a0/restaurante-coco-palms--v10175248.jpg?w=1200&h=-1&s=1'
        },
        {
            name: 'Toro Blanco Hotel', address: '25 m Sur Iglesia Catolica Guanacaste playas del, Coco, 50503, Коста-Рика', description: 'The restouran is very good.', category: 'restouran', coord: {
                lef: '10.55017082888226', lot: '-85.69825875994522'
            },
            photo:'https://media-cdn.tripadvisor.com/media/photo-s/24/e5/c7/16/toro-blanco-hotel.jpg'
        },
        {
            name: 'Bar El Ancla', address: 'H822+PXH, Provincia de Guanacaste, Coco, Коста-Рика', description: 'The restouran is very good.', category: 'restouran', coord: {
                lef: '10.551807526272988', lot: '-85.69748481530598'
            },
            photo: 'https://fastly.4sqi.net/img/general/600x600/J0lajPURGum5SgPSOB9BxjqkELgHD2yp0fm4a72FlOo.jpg'
        },
        {
            name: 'Summer Salt Dive Center', address: 'La Chorrera, Provincia de Guanacaste, Coco, Коста-Рика', description: 'The diving is very good.', category: 'rest', coord: {
                lef: '10.550623577391153', lot: '-85.69699933547598'
            },
            photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/71/ce/c6/scuba-diving-at-summer.jpg?w=1200&amp;h=1200&amp;s=1'
        },
        {
            name: 'Coco Beach Hotel', address: 'G8X3+RG9, Provincia de Guanacaste, Coco, Коста-Рика', description: 'The houtel is very good.', category: 'houtel', coord: {
                lef: '10.549489724526344', lot: '-85.69615980405096'
            },
            photo:'https://www.reefcocobeach.com/images/gallery/gallery-2.jpg'

        },
        {
            name: 'Вилла Каскада, Плайяс дель Коко', address: 'G7VH+9QP, Provincia de Guanacaste, Coco, Коста-Рика', description: 'The houtel is very good.', category: 'houtel', coord: {
                lef: '10.543349247075135', lot: '-85.72051071361133'
            },
            photo:'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/210268051.jpg?k=90ce12d5f1abd354adc7fb8c262586ad703c5dce382bb29864f8fade104c2582&o='
        }]
}

iitialMap();