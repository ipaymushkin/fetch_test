document.addEventListener("DOMContentLoaded", async () => {
  const apiKey = 'f2ee48b1843341f083762954250802';

  const fetchData = (cityName) => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru`);
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }

  fetchData('Yaroslavl');
  fetchData('Moscow');
  fetchData('Sochi');
});
