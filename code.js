document.addEventListener("DOMContentLoaded", () => {
  const apiKey = 'f2ee48b1843341f083762954250802';

  const fetchData = async (cityName) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru`);
    const responseJSON = await response.json();
    return responseJSON;
  }
  
  fetchData('Yaroslavl');
  fetchData('Moscow');
  fetchData('Sochi');
});
