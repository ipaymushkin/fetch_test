document.addEventListener("DOMContentLoaded", async () => {
  const apiKey = 'f2ee48b1843341f083762954250802';

  try {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=f2ee48b1843341f083762954250802&q=London&aqi=no');
    console.log(response);
  } catch (error) {
    console.log(error)
  }
});
