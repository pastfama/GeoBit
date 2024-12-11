async function initMap() {
    const location = await fetchRandomLocation();

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: location.lat, lng: location.lng },
        zoom: 12
    });

    const marker = new google.maps.Marker({
        map: map,
        position: { lat: location.lat, lng: location.lng },
        title: "You are here!"
    });
}

window.onload = initMap;
