async function getCoordsUser() {
    let getLocationPromise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success, error, {
            enableHighAccuracy: true
        })
        function success({ coords }) {
            const { latitude, longitude } = coords
            const currentPosition = { latitude, longitude };
            coordToMap.user = currentPosition;
            resolve(currentPosition);
        }
        function error({ message }) {
            reject(message)
        }
    })
    return getLocationPromise.then(coord => {
        if(!ownMarker){
            setOnlyMarker({ coord });
            ownMarker = true;
        }
            return coord
    }).then(coord => {
        console.log(coord);
        installMap(coord);
    }).catch(err => console.log(err))
}