var apiKey = "bf93e30fb6366640ed7b651b24b47a40";
var cityInput = document.querySelector("#city-input");
var searchButton = document.querySelector("#search-button")

searchButton.addEventListener("click", findCity)

function findCity() {
    var citySearch = cityInput.value
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&units=imperial&appid=" + apiKey)
    .then(response => response.json())

    .then(data => {
        console.log(data)
        var cityName = document.createElement("h1")
        var cityTemp = document.createElement("h3")
        var cityWind = document.createElement("h3")
        var cityHumidity = document.createElement("h3")

        cityName.innerText = data.city.name
        cityTemp.innerText = data.list[0].main.temp + " °F"
        cityWind.innerText = data.list[0].wind.speed + " MPH"
        cityHumidity.innerText = data.list[0].main.humidity + " %"

        document.querySelector("#infoBox").appendChild(cityName)
        document.querySelector("#infoBox").appendChild(cityTemp)
        document.querySelector("#infoBox").appendChild(cityWind)
        document.querySelector("#infoBox").appendChild(cityHumidity)
        console.log("Current Weather")

        //var cityName1 = document.createElement("h1")
        var cityTemp1 = document.createElement("h5")
        var cityWind1 = document.createElement("h5")
        var cityHumidity1 = document.createElement("h5")

        //cityName1.innerText = data.city.name
        cityTemp1.innerText = data.list[7].main.temp + " °F"
        cityWind1.innerText = data.list[7].wind.speed + " MPH"
        cityHumidity1.innerText = data.list[7].main.humidity + " %"

        //document.querySelector("#infoBox1").appendChild(cityName1)
        document.querySelector("#infoBox1").appendChild(cityTemp1)
        document.querySelector("#infoBox1").appendChild(cityWind1)
        document.querySelector("#infoBox1").appendChild(cityHumidity1)
        console.log("Day 1 Weather")

        //var cityName2 = document.createElement("h1")
        var cityTemp2 = document.createElement("h5")
        var cityWind2 = document.createElement("h5")
        var cityHumidity2 = document.createElement("h5")

        //cityName2.innerText = data.city.name
        cityTemp2.innerText = data.list[15].main.temp + " °F"
        cityWind2.innerText = data.list[15].wind.speed + " MPH"
        cityHumidity2.innerText = data.list[15].main.humidity + " %"

        //document.querySelector("#infoBox2").appendChild(cityName2)
        document.querySelector("#infoBox2").appendChild(cityTemp2)
        document.querySelector("#infoBox2").appendChild(cityWind2)
        document.querySelector("#infoBox2").appendChild(cityHumidity2)
        console.log("Day 2 Weather")

        //var cityName3 = document.createElement("h1")
        var cityTemp3 = document.createElement("h5")
        var cityWind3 = document.createElement("h5")
        var cityHumidity3 = document.createElement("h5")

        //cityName3.innerText = data.city.name
        cityTemp3.innerText = data.list[23].main.temp + " °F"
        cityWind3.innerText = data.list[23].wind.speed + " MPH"
        cityHumidity3.innerText = data.list[23].main.humidity + " %"

        //document.querySelector("#infoBox3").appendChild(cityName3)
        document.querySelector("#infoBox3").appendChild(cityTemp3)
        document.querySelector("#infoBox3").appendChild(cityWind3)
        document.querySelector("#infoBox3").appendChild(cityHumidity3)
        console.log("Day 3 Weather")

        //var cityName4 = document.createElement("h1")
        var cityTemp4 = document.createElement("h5")
        var cityWind4 = document.createElement("h5")
        var cityHumidity4 = document.createElement("h5")

        //cityName4.innerText = data.city.name
        cityTemp4.innerText = data.list[31].main.temp + " °F"
        cityWind4.innerText = data.list[31].wind.speed + " MPH"
        cityHumidity4.innerText = data.list[31].main.humidity + " %"

        //document.querySelector("#infoBox4").appendChild(cityName4)
        document.querySelector("#infoBox4").appendChild(cityTemp4)
        document.querySelector("#infoBox4").appendChild(cityWind4)
        document.querySelector("#infoBox4").appendChild(cityHumidity4)
        console.log("Day 4 Weather")


        //var cityName5 = document.createElement("h1")
        var cityTemp5 = document.createElement("h5")
        var cityWind5 = document.createElement("h5")
        var cityHumidity5 = document.createElement("h5")

        //cityName5.innerText = data.city.name
        cityTemp5.innerText = data.list[39].main.temp + " °F"
        cityWind5.innerText = data.list[39].wind.speed + " MPH"
        cityHumidity5.innerText = data.list[39].main.humidity + " %"

        //document.querySelector("#infoBox5").appendChild(cityName5)
        document.querySelector("#infoBox5").appendChild(cityTemp5)
        document.querySelector("#infoBox5").appendChild(cityWind5)
        document.querySelector("#infoBox5").appendChild(cityHumidity5)
        console.log("Day 5 Weather")
    })
}