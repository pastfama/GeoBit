// Store the random location globally
let randomLocation = {};

// Fetch a random location from the server
async function fetchRandomLocation() {
    try {
        const response = await fetch('/locations');
        const data = await response.json();
        console.log('Fetched location data:', data);  // Log the fetched data
        randomLocation = { lat: data.lat, lng: data.lng }; // Store the random location globally
        return randomLocation;
    } catch (error) {
        console.error('Error fetching random location:', error);
        return { lat: 0, lng: 0 }; // Default location in case of an error
    }
}

// Calculate the distance between two points (Haversine formula)
function calculateDistance(loc1, loc2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (loc2.lat - loc1.lat) * Math.PI / 180;
    const dLng = (loc2.lng - loc1.lng) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(loc1.lat * Math.PI / 180) * Math.cos(loc2.lat * Math.PI / 180) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
}
