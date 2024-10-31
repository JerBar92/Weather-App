import "./styles.css";

const city = document.querySelector("#city");
const search = document.querySelector("#search");

async function getWeather() {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city.value}?unitGroup=metric&key=GV7F6WPRRWGMYPWM38YEFZ8ZF&contentType=json`,
    { mode: "cors" }
  );
  const json = await response.json();

  let temp = json.currentConditions.temp;
  let condition = json.currentConditions.conditions;
  let cityName = json.address;
  console.log(cityName);
  console.log(condition);
  console.log(temp);
}

search.addEventListener("click", () => console.log(getWeather()));
