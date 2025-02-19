let navigationService = {
    navItems: document.getElementsByClassName("nav-link"),
    navSearch: document.getElementById("citySearchInput"),
    searchBtn: document.getElementById("citySearchBtn"),
    pages: document.getElementById("pages").children,

    activateItem: function (item) {
        for (let element of this.navItems) {
            element.classList.remove("active");
        }
        item.classList.add("active");
    },
    showPage: function (page)
 {
        for (const element of this.pages) {
            element.style.display = "none";
        }
        page.style.display = "block";
    },
    registerNavListeners() {
        for (let i = 0; i < this.navItems.length; i++) {
            this.navItems[i].addEventListener("click", function () {
                navigationService.activateItem(this);
                navigationService.showPage(navigationService.pages[i]);
            })
        }

        this.searchBtn.addEventListener("click", function (e) {
            e.preventDefault();
            weatherService.city = navigationService.navSearch.value;
            weatherService.getData();
        })
    }
}

let weatherService = {
    apiKey: "74e59f6374abe0d9b758877616ae444c",
    city: "Skopje",
    apiUrl: "https://api.openweathermap.org/data/2.5/forecast",

    getData: function () {
        fetch(`${this.apiUrl}?q=${this.city}&units=metric&APPID=${this.apiKey}`)
            .then((resp) => {
                return resp.json()
            })
            .then((response) => {
                
                uiService.loadStatistic(response);

                uiService.loadHourlyStatistics(response);
             
            })
    },

    aggregateStatistics: function (data) {
        let temperatureSum = 0;
        let highestTemp = data.list[0];
        let lowestTemp = data.list[0];
        let humiditySum = 0;
        let highestHum = data.list[0];
        let lowestHum = data.list[0];

        for (let reading of data.list) {
            temperatureSum += reading.main.temp;
            humiditySum += reading.main.humidity;

            if (highestTemp.main.temp < reading.main.temp) highestTemp = reading;
            if (lowestTemp.main.temp > reading.main.temp) lowestTemp = reading;
            if (highestHum.main.humidity < reading.main.humidity) highestHum = reading;
            if (lowestHum.main.humidity > reading.main.humidity) lowestHum = reading;
        }

        return {
            temperature: {
                highest: highestTemp.main.temp,
                average: temperatureSum / data.list.length,
                lowest: lowestTemp.main.temp,
            },
            humidity: {
                highest: highestHum.main.humidity,
                average: humiditySum / data.list.length,
                lowest: lowestHum.main.humidity,
            },
            warmestTime: helperService.unixTimeStampToDate(highestTemp.dt),
            coldestTime: helperService.unixTimeStampToDate(lowestTemp.dt)
        }
    }
}


let uiService = {
    statisticResult: document.getElementById("statisticsResult"),
    tableResult: document.getElementById("tableResult"),

    clearElement: function (element) {
        element.innerHTML = "";
    },

    appendColumn: function (row, text) {
        let column = document.createElement("div");
        column.classList.add("col");
        column.innerText = text;
        row.appendChild(column);
    },

    createStatisticRow: function (firstColumnText, secondColumnText) {
        let row = document.createElement("div");
        row.classList.add("row");

        this.appendColumn(row, firstColumnText);
        this.appendColumn(row, secondColumnText);

        return row;
    },

    loadStatistic: function (data) {
        this.clearElement(this.statisticResult);
        let statisticData = weatherService.aggregateStatistics(data);

        this.statisticResult.appendChild(
            this.createStatisticRow(
                `MAX TEMP: ${statisticData.temperature.highest} C`,
                `MAX HUMD: ${statisticData.humidity.highest} %`,
            )
        );
        this.statisticResult.appendChild(
            this.createStatisticRow(
                `AVG TEMP: ${statisticData.temperature.average} C`,
                `AVG HUMD: ${statisticData.humidity.average} %`,
            )
        );
        this.statisticResult.appendChild(
            this.createStatisticRow(
                `MIN TEMP: ${statisticData.temperature.lowest} C`,
                `MIN HUMD: ${statisticData.humidity.lowest} %`,
            )
        );

        let warmestTimeElement = document.createElement("h3");
        warmestTimeElement.innerText =  `Warmest time of the following period: ${statisticData.warmestTime.toDateString()}`;
        this.statisticResult.appendChild(warmestTimeElement);

        let coldestTimeELement = document.createElement("h3");
        coldestTimeELement.innerText =  `Coldest time of the following period: ${statisticData.coldestTime.toDateString()}`;
        this.statisticResult.appendChild(coldestTimeELement);

    },

    createHourlyRow: function(reading) {

        let row = document.createElement("div");
        row.classList.add("row");
        
        let imgCol = document.createElement("div");
        imgCol.classList.add("col");

        let img = document.createElement("img");
        img.src = `http://openweathermap.org/img/w/${reading.weather[0].icon}.png`;
        imgCol.append(img);
        row.append(imgCol);

        this.appendColumn(row, `${reading.weather[0].description}`);
        this.appendColumn(row, `${helperService.unixTimeStampToDate(reading.dt).toDateString()}`);
        this.appendColumn(row, `${reading.main.temp} C (${reading.main.feels_like} C)`);
        this.appendColumn(row, `${reading.main.humidity} %`);
        this.appendColumn(row, `${reading.wind.speed} km/h`);

        return row;
    },
  
   loadHourlyStatistics: function(data) {
   let readings = data.list;

   this.clearElement(this.tableResult);

   for (let element of readings) {
    this.tableResult.appendChild(this.createHourlyRow(element))
   }
   

   }



}


let helperService = {
    unixTimeStampToDate: function (date) {
        return new Date(date * 1000);
    }
}


weatherService.getData();
navigationService.registerNavListeners();