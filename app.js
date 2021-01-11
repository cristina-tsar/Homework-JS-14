fetch("http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
.then(data => data.json())
.then(json => console.log(json))

function myWeather() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
    .then(data => data.json())
    .then(main => {
        let text = document.createElement("text");
        let temp = main.main.temp;
        text.setAttribute("src",temp);
        document.body.append(text);
    })
    fetch("http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
    .then(data => data.json())
    .then(main => {
        let text = document.createElement("text");
        let pressere =main.main.pressure;
        text.setAttribute("src",pressere);
        document.body.append(text);
    })
    fetch("http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
    .then(data => data.json())
    .then(wind => {
        let text = document.createElement("text");
        let p = wind.wind.speed;
        text.setAttribute("src",p);
        document.body.append(text);
    })
    fetch("http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
    .then(data => data.json())
    .then(wind => {
        let div = document.createElement("div");
        let windSp = wind.wind.deg;
        div.setAttribute("src",windSp);
        document.body.append(div);
    })
    fetch("http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
    .then(data => data.json())
    .then(wind => {
        let div = document.createElement("div");
        let windSp = wind.wind.deg;
        div.setAttribute("src",windSp);
        document.body.append(div);
    })
    fetch("http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
    .then(data => data.json())
    .then(main => {
        let div = document.createElement("div");
        let humidity = main.main.humidity;
        div.setAttribute("src",humidity);
        document.body.append(div);
    })
   
    fetch("http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
    .then(data => data.json())
    .then(weather => {
        let p = document.createElement("p");
        let description = weather.weather.description;
        p.setAttribute("src",description);
        document.body.append(p);
    })

    fetch("http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
    .then(data => data.json())
    .then(weather => {
        let img = document.createElement("img");
        let icon = weather.weather.icon;
        img.setAttribute("src",icon);
        document.body.append(img);
    })
}
document.querySelector(".btn").addEventListener("click",myWeather)


