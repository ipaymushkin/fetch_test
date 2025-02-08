document.addEventListener("DOMContentLoaded", () => {
  const apiKey = 'f2ee48b1843341f083762954250802';

  const searchText = document.getElementById('searchText');
  const buttonSearch = document.getElementById('buttonSearch');
  const tableData = document.getElementById('tableData');

  const fetchData = async (cityName) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru`);
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      console.log('error', error);
    }
  }
  
  buttonSearch.addEventListener('click', async () => {
      const name = searchText.value;
      if (!name) {
        alert('Введите название города');
      } else {
        const data = await fetchData(name);
        console.log(data);
      }
  })
});
