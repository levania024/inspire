import { AppState } from "../AppState.js";
import { Inspire } from "../models/Inspire.js";
import { api } from "./AxiosService.js";

class WeatherService {
    async getWeather() {
        const response = await api.get('api/weather')
        console.log(response.data);

        const newQuote = new Inspire(response.data)
        AppState.weather = newQuote
    }
}
export const weatherService = new WeatherService()