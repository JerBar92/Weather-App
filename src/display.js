import { weather } from "./weather.js";

export const display = (function () {
  async function cityDisplay() {
    const city = document.querySelector("#cityName");
    const weatherInfo = await weather.getWeather();
    city.textContent = weatherInfo.address;
  }

  async function conditionDisplay() {
    const condition = document.querySelector("#condition");
    const weatherInfo = await weather.getWeather();
    condition.textContent = weatherInfo.currentConditions.conditions;
  }

  async function tempDisplay() {
    const temp = document.querySelector("#temperature");
    const weatherInfo = await weather.getWeather();
    temp.textContent = weatherInfo.currentConditions.temp;
  }

  return { cityDisplay, conditionDisplay, tempDisplay };
})();
