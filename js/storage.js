class Storage {
    store() {
        let value;
        if (localStorage.getItem('city').length > 0) {
            value = JSON.parse(localStorage.getItem('city'));
            weather.getWeather(value)
                .then(data => {
                    ui.showLocation(data.location);  
                    ui.showDescription(data.current.condition); 
                    ui.showTemp(data.current.temp_c);
                    ui.showForecast(data.forecast.forecastday);
                })
        } else {
            value = '';
        }
    }
}