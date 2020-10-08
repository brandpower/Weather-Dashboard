var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var icon = document.querySelector('.icon')
var temp = document.querySelector('.temp');
var humid = document.querySelector('.humid');
var wind = document.querySelector('.wind');
var uv = document.querySelector('.uv');
var button = document.querySelector('.submit');


button.addEventListener('click', function (name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric&appid=ec41a690aab2e096888cb601121894e5')
        .then(response => response.json())
        .then(data => {
            console.log(data)

            var nameValue = data['name'];
            var iconValue = data['weather'][0]['icon'];
            var tempValue = data['main']['temp'];
            var humidValue = data['main']['humidity'];
            var windValue = data['wind']['speed'];
            var lat = data['coord']['lat'];
            var lon = data['coord']['lon'];
            //trying to figure out the bloody UV stuff

            var uvValue = ['http://api.openweathermap.org/data/2.5/uvi?appid=ec41a690aab2e096888cb601121894e5&lat=' + lat + '&lon=' + lon]
            // this above UV links takes us to a page where value equals the UV Index. Dont quite know how to get tehre yet but I mean, pretty good. Coming up as undefined. Close though. 
            //Cant quite figure out how to traverse through this new link ive created? Can I even do that? SO far no but imma leave this here so we all know I gave it a red hot crack. I really did.
            //I've tried lots of different variations but none of thems seem to work.

            main.innerHTML = nameValue + ' Today';
            icon.innerHTML = ("<img src='http://openweathermap.org/img/w/" + iconValue + ".png'/>");
            temp.innerHTML = "Temperature: " + tempValue + '°C';
            humid.innerHTML = "Humidity: " + humidValue + '%';
            wind.innerHTML = "Wind Speed: " + windValue + 'm/s';
            uv.innerHTML = "UV Index: " + uvValue['value'];
            input.value = "";

        })

})

// // This is not working and I can't for the life of me figure out why so I think it's time to move on before I go insane
// function getForecast(five) {
//     var forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + input.value + "&APPID=62fca606199df2afea0a32e25faffdc5";;
//     $.ajax({
//         url: forecastQueryURL,
//         method: "GET"
//     }).then(displayFiveDays)

// }

// function displayFiveDays(forecastResponse) {
//     var list = forecastResponse.list;
//     var count = 1;
//     for (var i = 0; i < list.length; i++) {

//         if (list[i].dt_txt.includes("15:00:00")) {

//             $("#date-" + count).text(new Date(list[i].dt_txt).toLocaleDateString());

//             var iconURL = "https://openweathermap.org/img/w/" + list[i].weather[0].icon + ".png";
//             $("#icon-" + count).attr("src", iconURL);

//             $("#tempDay-" + count).text(((list[i].main.temp - 273.15) * 1.80 + 32).toFixed(0));

//             $("#humid-" + count).text(list[i].main.humidity);
//             count++;
//         }
//     }
// }
