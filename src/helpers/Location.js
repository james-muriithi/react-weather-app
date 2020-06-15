export default async function getUserLocation(){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            resolve({
                lat: position.coords.latitude,
                lon: position.coords.longitude
            })
        }, (error) => reject(new Error(showError(error)))
    )});
}

const showError = (error) => {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            return "Geolocation Permission is not granted";
        case error.POSITION_UNAVAILABLE:
            return "Location information is unavailable.";
        case error.TIMEOUT:
            return "The request to get user location timed out.";
        case error.UNKNOWN_ERROR:
            return "An unknown error occurred.";
        default:
            return "An unknown error occurred.";
    }
}