function paintPopup(obj, marker) {
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