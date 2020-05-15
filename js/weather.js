// Weather Class
class Weather {
    constructor() {
        this.apiKey = '40b8e8060e274669ba510024201505';
    }

    err() {
        alert.style.display = 'block';
        setTimeout(() => {
            alert.style.display = 'none';
        }, 3000)
    }

    async getWeather(city) {

        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${city}&days=10`)
        const resData = await response.json();

        return resData
    }
}
