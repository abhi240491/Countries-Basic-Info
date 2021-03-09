var countriesdata = fetch("https://restcountries.eu/rest/v2/all");
// console.log(countriesdata);
countriesdata
    .then(response => {
        return response.json();
    })
    .then(data => {
        constructData(data);
    })

.catch((err) => {
    console.log(err);
});

function constructData(data) {
    for (var i in data) {
        displayData(i, data)
    }
}

function displayData(i, data) {
    //var contain = document.getElementsByClassName("div");
    //contain.setAttribute("class", "container");

    var rowId = document.getElementById("rowId");

    var col = document.createElement("div");
    col.setAttribute("class", "col-4", "row", "card-deck");

    var card = document.createElement("div");
    card.setAttribute("class", "card text-dark bg-light mb-3", "h-100");
    card.setAttribute("style", "width: 18rem");

    var img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("alt", "...");
    img.src = data[i].flag;

    var cardbody = document.createElement("div");
    cardbody.setAttribute("class", "card-body");

    var countrydetails = document.createElement("h5");
    countrydetails.setAttribute("class", "card-title");
    countrydetails.innerText = data[i].name;

    var lists = document.createElement("ul");

    var li2 = document.createElement("li");
    li2.setAttribute("id", "capital");
    li2.setAttribute("class", "card-text");
    li2.innerText = "Capital " + data[i].capital;


    var li3 = document.createElement("li");
    li3.setAttribute("id", "region");
    li3.setAttribute("class", "card-text");
    li3.innerText = "Region: " + data[i].region;
    //console.log("Region: " + data[i].region)

    var li4 = document.createElement("li");
    li4.setAttribute("id", "population");
    li4.setAttribute("class", "card-text");
    li4.innerText = "Population: " + data[i].population;
    console.log("Population: " + data[i].population)

    var cardbut = document.createElement("button");
    cardbut.setAttribute("class", "btn btn-primary text-center");
    cardbut.innerText = "Click for weather";
    cardbut.addEventListener("click", function() {
        getWeather(data[i].name);
    });

    col.appendChild(card);
    card.appendChild(img);
    card.appendChild(cardbody);
    lists.append(li2, li3, li4);
    cardbody.append(countrydetails, lists, cardbut);
    rowId.append(col);
}

function getWeather(name) {
    var weather = fetch("https://api.openweathermap.org/data/2.5/weather?q=" + name + "&appid=a711b58ec2532e05b1c119fddda6570e");

    weather
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            swal("Weather Data", "lon =" + data.coord.lon + " , lat =" + data.coord.lat + "\n temp = " + data.main.temp);
        })
        .catch((err) => {
            console.log(err);
        });
}