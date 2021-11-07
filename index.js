console.log("Finally!")

fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + "Seattle" + "&units=imperial&appid=bf93e30fb6366640ed7b651b24b47a40")
.then(response => response.json())

.then(data => {
    console.log(data)
    var cityName = document.createElement("h1")
    var cityTemp = document.createElement("h3")
    var cityWind = document.createElement("h3")
    var cityHumidity = document.createElement("h3")
    var cityUv = document.createElement("h3")
    cityName.innerText = data.city.name
    cityTemp.innerText = data.list[0].main.temp + " °F"
    cityWind.innerText = data.list[0].wind.speed + " mph"
    cityHumidity.innerText = data.list[0].main.humidity + " %"
    cityUv.innerText = data.city.Uv
    document.querySelector("#infoBox").appendChild(cityName)
    document.querySelector("#infoBox").appendChild(cityTemp)
    document.querySelector("#infoBox").appendChild(cityWind)
    document.querySelector("#infoBox").appendChild(cityHumidity)
    document.querySelector("#infoBox").appendChild(cityUv)
//    var lat = response.data.coord.lat;
//    var lon = response.data.coord.lon;
//    var UVQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + bf93e30fb6366640ed7b651b24b47a40 + "&cnt=1";
//    axios.get(UVQueryURL)
//    .then(function(response){
//        let UVIndex = document.createElement("span");
//        UVIndex.setAttribute("class","badge badge-danger");
//        UVIndex.innerHTML = response.data[0].value;
//        currentUVEl.innerHTML = "UV Index: ";
//        currentUVEl.append(UVIndex);
//    }
//    )

});
