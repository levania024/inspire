import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class WeatherController {
    constructor() {
        AppState.on('weather', this.drawInspireWeather)

        this.getWeather()
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    drawInspireWeather() {
        const Weather = AppState.weather
        setHTML('weather-of-the-day', Weather.weatherHTMLTemplate)
    }
}