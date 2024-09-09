import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"

export class WeatherController {
    constructor() {
        AppState.on('weather', this.drawInspireWeather)

        this.getWeather()
        this.startClock()
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
        const weatherElm = document.getElementById('weather-of-the-day')
        if (weatherElm) {
            weatherElm.innerHTML = Weather.weatherHTMLTemplate
        }
    }

    toggleTemperature() {
        const weather = AppState.weather
        weather.unit = weather.unit === 'F' ? 'C' : 'F'
        this.drawInspireWeather()
    }

    startClock() {
        this.updateClock()
        setInterval(() => this.updateClock(), 1000)
    }

    updateClock() {
        const clockElm = document.getElementById('clock')
        if (clockElm && AppState.weather) {
            clockElm.innerText = AppState.weather.getCurrentTime()
        }
    }
}