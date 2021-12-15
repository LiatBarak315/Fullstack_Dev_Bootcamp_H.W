const canvasChart = document.querySelector(".data_container_chart");
const selectCountry = document.querySelector(".data_container-select");
const selectAsia = document.querySelector(".Asia-button");
const continentButtons = document.querySelector(".data_container-continent");
const countryData = document.querySelector(".data_container-selectd-country");
const worldButton = document.querySelector(".world-btn");
const africaButton = document.querySelector(".Africa-btn");
const americasButton = document.querySelector(".Americas-btn");
const europeButton = document.querySelector(".Europe-btn");
const australiaButton = document.querySelector(".Australia-btn");

let asiaArray = [];

let DataContinentArray = [];

selectCountry.style.visibility = "hidden";
var myChart = "";

var TotalWorldDeaths = 0;
var TotalWorldConfirm = 0;
var TotalWorldRec = 0;
var TotalWorldCri = 0;

worldButton.addEventListener("click", (event) => {
  myChart.destroy();
  buildChart(worldData, "world");
});

async function getFetchWorld() {
  const worldData = await axios.get(`https://corona-api.com/countries`, [
    {
      Headers: "application/json",
    },
  ]);
  console.log(worldData.data.data);
  calcWorldData(worldData.data.data);
}
//calculate the world covid data
function calcWorldData(worldDataArray) {
  for (let i = 0; i < worldDataArray.length; i++) {
    TotalWorldDeaths += worldDataArray[i].latest_data.deaths;
    TotalWorldConfirm += worldDataArray[i].latest_data.confirmed;
    TotalWorldRec += worldDataArray[i].latest_data.recovered;
    TotalWorldCri += worldDataArray[i].latest_data.critical;
  }
  worldData = [
    TotalWorldDeaths,
    TotalWorldRec,
    TotalWorldConfirm,
    TotalWorldCri,
  ];
  buildChart(worldData, "world");
  console.log(TotalWorldDeaths);
}

getFetchWorld();
// pressing a button of a contient
continentButtons.addEventListener("click", (event) => {
  resetCountriesSelection();
  asiaArray = [];
  const country = event.target.innerText;
  if (country === "Australia") getFetch("Oceania");
  else getFetch(country);
  selectCountry.style.visibility = "visible";
  myChart.destroy();
});

//add the countries in the selectd contient
function resetCountriesSelection() {
  selectCountry.innerHTML = " ";
  const holderOption = document.createElement("option");
  holderOption.setAttribute("disabled", null);
  holderOption.setAttribute("selected", null);
  holderOption.innerText = "select country";
  selectCountry.appendChild(holderOption);
}

//geting the continent api
async function getFetch(contientName) {
  const continent = await axios.get(
    `https://intense-mesa-62220.herokuapp.com/https://restcountries.herokuapp.com/api/v1/region/${contientName}`,
    [
      {
        Headers: "application/json",
      },
    ]
  );
  addCountries(continent.data);
}

// add the countries of the contient to an array
function addCountries(continentData) {
  for (let i = 0; i < continentData.length; i++) {
    const obj = {};
    obj.country = continentData[i].name.common;
    obj.code = continentData[i].cca2;
    asiaArray[i] = obj;
    addSelectionCountry(obj.country);
  }
  addCovidData();
}

// add the covid19 data from covid19 api for each country in the array and clac the total of each el at this contient
async function addCovidData() {
  let TotalDeaths = 0;
  let TotalRecovered = 0;
  let TotalConfirmed = 0;
  let TotalCritical = 0;

  for (let i = 0; i < asiaArray.length; i++) {
    if (i !== 40) {
      //if the country not Kosovo

      const data = await axios.get(
        `https:///corona-api.com/countries/${asiaArray[i].code}`,
        [
          {
            Headers: "application/json",
          },
        ]
      );

      asiaArray[i].confirmed = data.data.data.latest_data.confirmed;
      TotalConfirmed += asiaArray[i].confirmed;
      asiaArray[i].deaths = data.data.data.latest_data.deaths;
      TotalDeaths += asiaArray[i].deaths;
      asiaArray[i].recovered = data.data.data.latest_data.recovered;
      TotalRecovered += asiaArray[i].recovered;
      asiaArray[i].critical = data.data.data.latest_data.critical;
      TotalCritical += asiaArray[i].critical;
    }
  }

  DataContinentArray = [
    TotalDeaths,
    TotalRecovered,
    TotalConfirmed,
    TotalCritical,
  ];

  buildChart(DataContinentArray, "asia");
  console.log("the array", asiaArray);
}

// add an opition of the country on html
function addSelectionCountry(addCountry) {
  const selection = document.createElement("option");
  selection.innerText = addCountry;
  selectCountry.appendChild(selection);
}

// select a spicific country
selectCountry.addEventListener("click", (event) => {
  console.dir(event.target.value);

  if (event.target.value !== "select country") {
    let country = findTheSelectedCountry(event.target.value);
    countryData.innerHTML = "";
    showCountryData(country);
  }
});

// find the spicific country in the array
function findTheSelectedCountry(selectedCountry) {
  let countryFound = {};
  for (let i = 0; i < asiaArray.length; i++) {
    if (asiaArray[i].country == selectedCountry) {
      countryFound = asiaArray[i];
      return countryFound;
    }
  }
  return countryFound;
}

//show the country covid data
function showCountryData(countryToShow) {
  const title = document.createElement("h2");
  title.innerText = countryToShow.country;
  countryData.appendChild(title);

  const confirmedCases = document.createElement("p");
  confirmedCases.innerText = `The number of Confirmed Cases is: ${countryToShow.confirmed}`;
  countryData.appendChild(confirmedCases);

  const deathsCases = document.createElement("p");
  deathsCases.innerText = `The number of deaths is: ${countryToShow.deaths}`;
  countryData.appendChild(deathsCases);

  const criticalCases = document.createElement("p");
  criticalCases.innerText = `The number of Critical Cases is: ${countryToShow.critical}`;
  countryData.appendChild(criticalCases);

  const recoveredCases = document.createElement("p");
  recoveredCases.innerText = `The number of Recovered Cases is: ${countryToShow.recovered}`;
  countryData.appendChild(recoveredCases);
}

//creating the contient chart
function buildChart(dataArray, nameOfcontient) {
  // myChart.destroy();
  myChart = new Chart(canvasChart, {
    type: "bar",
    data: {
      labels: [
        "Deaths",
        "Recovered Cases",
        "Confirmed Cases",
        "Critical Cases",
      ],
      datasets: [
        {
          label: `${nameOfcontient}`,
          data: dataArray,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// buildChart([2, 4, 6, 5], "Asia");
