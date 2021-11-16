var apiKey = "bf93e30fb6366640ed7b651b24b47a40";
var cityInput = document.querySelector("#city-input");
var searchButton = document.querySelector("#search-button");
var resultsButton = document.querySelector("#results-button");
//var lat = city.coord.lat;
//var lon = city.coord.lon;

//moment wasn't working properly without redefining as m
const m = moment();
const m1 = moment().add(1, "day");
const m2 = moment().add(2, "day");
const m3 = moment().add(3, "day");
const m4 = moment().add(4, "day");
const m5 = moment().add(5, "day");

searchButton.addEventListener("click", findCity)



//logs city input
//clears innerHTML in all infoBoxes
function findCity() {
    var citySearch = cityInput.value
    document.getElementById("infoBox").innerHTML = ""
    document.getElementById("infoBox1").innerHTML = ""
    document.getElementById("infoBox2").innerHTML = ""
    document.getElementById("infoBox3").innerHTML = ""
    document.getElementById("infoBox4").innerHTML = ""
    document.getElementById("infoBox5").innerHTML = ""

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&units=imperial&appid=" + apiKey)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var cityIcon = document.createElement("h1")
        var cityName = document.createElement("h1")
        var cityTemp = document.createElement("h3")
        var cityWind = document.createElement("h3")
        var cityHumidity = document.createElement("h3")

        cityName.innerText = data.city.name + m.format(" (MM/DD/YY)") //+ data.list[0].weather[0].icon //THIS IS THE WEATHER ICON
        cityTemp.innerText = data.list[0].main.temp + " °F"
        cityWind.innerText = data.list[0].wind.speed + " MPH"
        cityHumidity.innerText = data.list[0].main.humidity + "%"

        document.querySelector("#infoBox").appendChild(cityIcon)
        document.querySelector("#infoBox").appendChild(cityName)
        document.querySelector("#infoBox").appendChild(cityTemp)
        document.querySelector("#infoBox").appendChild(cityWind)
        document.querySelector("#infoBox").appendChild(cityHumidity)
    
        var cityName1 = document.createElement("h5")
        //var cityIcon1 = document.createElement("h5")
        var cityTemp1 = document.createElement("h5")
        var cityWind1 = document.createElement("h5")
        var cityHumidity1 = document.createElement("h5")

        cityName1.innerText = m1.format(" (MM/DD/YY)")
        //cityIcon1.innerText = data.list[7].weather[7].icon
        cityTemp1.innerText = data.list[7].main.temp + " °F"
        cityWind1.innerText = data.list[7].wind.speed + " MPH"
        cityHumidity1.innerText = data.list[7].main.humidity + "%"

        document.querySelector("#infoBox1").appendChild(cityName1)
        document.querySelector("#infoBox1").appendChild(cityTemp1)
        document.querySelector("#infoBox1").appendChild(cityWind1)
        document.querySelector("#infoBox1").appendChild(cityHumidity1)

        var cityName2 = document.createElement("h5")
        var cityTemp2 = document.createElement("h5")
        var cityWind2 = document.createElement("h5")
        var cityHumidity2 = document.createElement("h5")

        cityName2.innerText = m2.format(" (MM/DD/YY)")
        cityTemp2.innerText = data.list[15].main.temp + " °F"
        cityWind2.innerText = data.list[15].wind.speed + " MPH"
        cityHumidity2.innerText = data.list[15].main.humidity + "%"

        document.querySelector("#infoBox2").appendChild(cityName2)
        document.querySelector("#infoBox2").appendChild(cityTemp2)
        document.querySelector("#infoBox2").appendChild(cityWind2)
        document.querySelector("#infoBox2").appendChild(cityHumidity2)

        var cityName3 = document.createElement("h5")
        var cityTemp3 = document.createElement("h5")
        var cityWind3 = document.createElement("h5")
        var cityHumidity3 = document.createElement("h5")

        cityName3.innerText = m3.format(" (MM/DD/YY)")
        cityTemp3.innerText = data.list[23].main.temp + " °F"
        cityWind3.innerText = data.list[23].wind.speed + " MPH"
        cityHumidity3.innerText = data.list[23].main.humidity + "%"

        document.querySelector("#infoBox3").appendChild(cityName3)
        document.querySelector("#infoBox3").appendChild(cityTemp3)
        document.querySelector("#infoBox3").appendChild(cityWind3)
        document.querySelector("#infoBox3").appendChild(cityHumidity3)

        var cityName4 = document.createElement("h5")
        var cityTemp4 = document.createElement("h5")
        var cityWind4 = document.createElement("h5")
        var cityHumidity4 = document.createElement("h5")

        cityName4.innerText = m4.format(" (MM/DD/YY)")
        cityTemp4.innerText = data.list[31].main.temp + " °F"
        cityWind4.innerText = data.list[31].wind.speed + " MPH"
        cityHumidity4.innerText = data.list[31].main.humidity + "%"

        document.querySelector("#infoBox4").appendChild(cityName4)
        document.querySelector("#infoBox4").appendChild(cityTemp4)
        document.querySelector("#infoBox4").appendChild(cityWind4)
        document.querySelector("#infoBox4").appendChild(cityHumidity4)

        var cityName5 = document.createElement("h5")
        var cityTemp5 = document.createElement("h5")
        var cityWind5 = document.createElement("h5")
        var cityHumidity5 = document.createElement("h5")

        cityName5.innerText = m5.format(" (MM/DD/YY)")
        cityTemp5.innerText = data.list[39].main.temp + " °F"
        cityWind5.innerText = data.list[39].wind.speed + " MPH"
        cityHumidity5.innerText = data.list[39].main.humidity + " %"

        document.querySelector("#infoBox5").appendChild(cityName5)
        document.querySelector("#infoBox5").appendChild(cityTemp5)
        document.querySelector("#infoBox5").appendChild(cityWind5)
        document.querySelector("#infoBox5").appendChild(cityHumidity5)       
    })
}

function cityResults () {
    var results = localStorage.getItem("city-input");
    console.log(localStorage);
    cityResults.textContent = (resultsButton);
    console.log(resultsButton.value);
}

searchButton.addEventListener("click", function(event) {
    event.preventDefault();

    var citySearch = document.querySelector("#city-input").value;
    localStorage.setItem("results-button", citySearch)



    for (var i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        console.log(`${key}: ${localStorage.getItem(key)}`);
    }    
})    

//function cityUV () {
//    console.log("testing UV");
//    var lat = response.city.coord.lat;
//    var lon = response.city.coord.lon;
//    fetch("api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon +"&appid=" + apiKey)
//    .then(response => response.json())
//    .then(data => {
//        console.log(cityUV);
//    })
//}
