export class Inspire {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.url = data.url
    this.imgUrl = data.imgUrl
    this.query = data.query
    this.author = data.author
    this.unit = 'F'
    this.completed = data.completed || ''
    this.weather = data.weather || ''
    this.description = data.description
    this.largeImgUrl = data.largeImgUrl
    this.quote = data.quote || data.content
    this.main = data.main && data.main.temp ? data.main.temp : ''
  }

  get quoteHTMLTemplate() {
    return `
    <div class="quote-container">
      <p class="quote-text">${this.quote}</p>
      <p class="quote-author">- ${this.author}</p>
    </div>`
  }

  get weatherHTMLTemplate() {
    return `
  <button id="weather-toggle" class="btn btn-dark btn-outline-primary" type="button" onclick="app.Weather.toggleTemperature()">
    <span id="temperature">${this.temperature}</span>
    <i id="weather-icon" class="mdi ${this.weatherIcon()} fs-2 text-end"></i>
    <p id="weather-description" class="mb-0">${this.weather[0]?.description || ''}</p>
  </button>`
  }

  get TodoTemplate() {
    return `
    <div class="d-flex justify-content-between align-items-center m-3">
        <div>
            <input type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.TodoController.toggleTodoStatus('${this.id}')" class="form-check-input">
            <span class="${this.completed ? 'text-decoration-line-through' : ''}">${this.description}</span>
        </div>
        <button class="btn btn-danger btn-sm" onclick="app.TodoController.removeTodo('${this.id}')">
          <i class="mdi mdi-delete"></i>
        </button>
    </div>
    `
  }

  weatherIcon() {
    if (!this.weather || !this.weather[0]) return 'mdi-weather-cloudy';

    const description = this.weather[0].description.toLowerCase();
    if (description.includes('clear')) return 'mdi-weather-sunny';
    if (description.includes('cloud')) return 'mdi-weather-cloudy';
    if (description.includes('rain')) return 'mdi-weather-rainy';
    if (description.includes('snow')) return 'mdi-weather-snowy';
    if (description.includes('thunderstorm')) return 'mdi-weather-lightning';
    if (description.includes('mist') || description.includes('fog')) return 'mdi-weather-fog';
  }

  kelvinToFahrenheit(kelvin) {
    return Math.round((kelvin - 273.15) * 9 / 5 + 32)
  }

  kelvinToCelsius(kelvin) {
    return Math.round(kelvin - 273.15)
  }

  get tempF() {
    return this.main ? this.kelvinToFahrenheit(this.main) : ''
  }

  get tempC() {
    return this.main ? this.kelvinToCelsius(this.main) : ''
  }

  get temperature() {
    if (!this.main) return 'N/A';

    return this.unit == 'F' ? `${this.tempF}°F` : `${this.tempC}°C`;
  }

  getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    // @ts-ignore
    hours = hours.toString().padStart(2, '0');

    return `${hours}:${minutes} ${ampm}`;
  }
}

// const image = {
//     url: String,
//     imgUrl: String,
//     query: String,
//     author: String,
//     largeImgUrl: String,
//     *createdAt: ISO Timestamp(Virtual Added by Database)
//     *updatedAt: ISO Timestamp(Virtual Added by Database)
// }

// const quote = {
//     quote: undefined,
//     description: String, required
// *createdAt: ISO Timestamp(Virtual Added by Database)
// *updatedAt: ISO Timestamp(Virtual Added by Database)
// }

// const todo = {
//     completed: Boolean, required
// description: String, required
// creatorId: SchemaObjectId, required
// *creator: Object (Virtual Added by Database)
//     * createdAt: ISO Timestamp (Virtual Added by Database)
// * updatedAt: ISO Timestamp(Virtual Added by Database)
// }

// const weather = {
//     name: String,
//     main: undefined,
//     weather: undefined,
//     *createdAt: ISO Timestamp(Virtual Added by Database)
// *updatedAt: ISO Timestamp(Virtual Added by Database)
// }