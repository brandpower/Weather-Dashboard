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

            //trying to figure out the bloody UV stuff
            var lat = data['coord']['lat'];
            var lon = data['coord']['lon'];
            var uvValue = ['http://api.openweathermap.org/data/2.5/uvi?lat=' + lat + '&lon=' + lon + '&appid=ec41a690aab2e096888cb601121894e5'];
            var uvReal = (uvValue = data['value']);
            // this above UV links takes us to a page where value equals the UV Index. Dont quite know how to get tehre yet but I mean, pretty good. Coming up as undefined. Close though. 
            //Cant quite figure out how to traverse through this new link ive created? Can I even do that? SO far no but imma leave this here so we all know I gave it a red hot crack. I really did.


            main.innerHTML = nameValue;
            icon.innerHTML = ("<img src='http://openweathermap.org/img/w/" + iconValue + ".png'/>");
            temp.innerHTML = "Temperature: " + tempValue + '°C';
            humid.innerHTML = "Humidity: " + humidValue + '%';
            wind.innerHTML = "Wind Speed: " + windValue + 'm/s';
            uv.innerHTML = "UV Index: " + uvReal;
            input.value = "";

        })


})