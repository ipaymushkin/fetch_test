document.addEventListener("DOMContentLoaded", () => {
  const apiKey = 'f2ee48b1843341f083762954250802';

  const fetchData = (cityName) => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log('error', error);
      })
  }
  
  fetchData('Yaroslavl');
  fetchData('Moscow');
  fetchData('Sochi');
});
