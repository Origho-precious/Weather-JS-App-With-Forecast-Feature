// Variables 
const w_desc = document.getElementById('w-desc');
const w_loc = document.getElementById('w-location');
const w_temp = document.getElementById('w-temp');
const icon = document.getElementById('icon');
const alert = document.querySelector('#msg');

const forecastDiv = document.getElementById('forecast');

alert.style.display = 'none';

class UI {
    showLocation(data) {
        let name = data.name;
        let country = data.country;
        w_loc.textContent = `${name}, ${country}`;
    }

    showDescription(data) {
        let desc = data.text;
        w_desc.textContent = `${desc}`;
        icon.setAttribute('src', `${data.icon}`);
    }

    showTemp(data) {
        w_temp.innerHTML = `${data}<span>&#8451;</span>`;
    }

    showForecast(data) {
        forecastDiv.innerHTML = '';
        for(let i = 1; i < data.length; i++){
            let date = new Date(data[i].date).getUTCDay();
            let day;
            switch (date) {
                case 0:
                    day = 'Sunday';
                    break;
                case 1:
                    day = 'Monday';
                    break;
                case 2:
                    day = 'Tuesday';
                    break;
                case 3:
                    day = 'Wednesday';
                    break;
                case 4:
                    day = 'Thursday';
                    break;
                case 5:
                    day = 'Friday';
                    break;
                case 6:
                    day = 'Saturday';
                    break;
            }
                let div = `
                <div class="col-md-6 mb-md-5 mb-4">
                    <div class="card bg-dark">
                        <div id="f-date" class="card-header text-center bg-primary text-dark">${day}</div>
                        <ul class="text-left list-group list-group-flush pb-2">
                            <li id="f-temp" class="list-group-item">Temperaure: <span class="badge badge-light"> ${data[1].day.avgtemp_c}<span>&#8451;</span> </span></li>
                            <li class="list-group-item">Description:
                                <span id="f-desc" class="badge badge-light"> ${data[1].day.condition.text}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                `;
    
                forecastDiv.innerHTML += div;
        }
    }
}

