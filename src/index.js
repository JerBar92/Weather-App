import "./styles.css";
import { weather } from "./weather.js";
import { display } from "./display.js";

const search = document.querySelector("#search");

search.addEventListener("click", () => weather.getWeather());
