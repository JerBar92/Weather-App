export const weather = (function () {
  async function getWeather() {
    const city = document.querySelector("#city");
    const key = "GV7F6WPRRWGMYPWM38YEFZ8ZF";
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city.value}?unitGroup=metric&key=${key}&contentType=json`,
        { mode: "cors" }
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("Error :", error);
    }
  }

  return { getWeather };
})();
