const apiKey = process.env.GATSBY_OPENWEATHER_API_KEY;
export const getForecastDataByCoordinates = async (coords) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${coords.lat}&lon=${coords.lon}&units=metric&cnt=8&appid=${apiKey}`);
    const json = await response.json();
    return json;
}

export const getForecastDataByCity = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=8&appid=${apiKey}`);
    const json = await response.json();
    return json;
}

export default { getForecastDataByCoordinates, getForecastDataByCity};