$(document).ready(function () {
  const urlCountries = "https://disease.sh/v3/covid-19/countries";
  const urlGlobalCases = "https://disease.sh/v3/covid-19/all";
  let countryList = [];
  let chart;
  const ctx = document.getElementById("chart-cases").getContext("2d");

  // Defines option for the graph
  const options = {
    legend: {
      display: false,
    },
    tooltips: { 
      enabled: false,
      callbacks: {
        label: function(tooltipItem, data) {
            return numeral(tooltipItem.yLabel).format("0,0");
        }              
      }
    },
    maintainAspectRatio: true,
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            fontColor: 'rgb(255, 255, 255)',
            callback: function (value, index, values) {
              return numeral(value).format("0a");
            }
          }
        }
      ]
    }
  };

  // Creates the dropdown with all countries
  function createDropdownCountries() {
    let dropdown = document.getElementById("dropdownCountries");
    dropdown.length = 0;
    let option;

    // Set default option to global stats
    let defaultOption = document.createElement("option");
    defaultOption.text = "Global";
    defaultOption.value = 0;
    dropdown.add(defaultOption);
    $(".selectpicker").selectpicker("refresh");
    dropdown.selectedIndex = 0;
    updateUI(defaultOption.value);

    // Populate the dropdown
    countryList.forEach((entry) => {
      option = document.createElement("option");
      option.text = entry.country;
      option.value = entry.countryInfo._id;
      dropdown.add(option);
    });
    $(".selectpicker").selectpicker("refresh");
  }

  // Creates table with cases by country
  function createTableCountries() {

    var countryCases = "";

    countryList.forEach((entry) => {
      //Construction of rows
      countryCases += "<tr><td>" + entry.country + "</td><td>" + numeral(entry.cases).format("0,0") + "</td></tr>";
    });
    //Insert rows into table
    $("#table-cases").append(countryCases);
  }

  // Creates the cases graph 
  function createGraph(data){
    if(chart)
    {chart.destroy();}
    Chart.defaults.global.defaultFontColor = "#fff";
    Chart.defaults.global.defaultFontFamily = "Roboto";
    Chart.defaults.global.defaultFontSize = "15";

    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Confirmed', 'Recovered', 'Deaths'],
        datasets: [{
            data: [data.cases, data.recovered, data.deaths],
            backgroundColor: [
                'rgba(254, 127, 45)',
                'rgba(252, 202, 70)',
                'rgb(251, 63, 0)'
            ]
        }]
      },
      options: options
    });
  }

  // Updates cards with country information
  function updateUI(id) {
    
    let newUrl = getUrl(id);
    let cardConfirmedToday = document.getElementById("card-confirmed-today"),
      cardConfirmedAll = document.getElementById("card-confirmed-all"),
      cardRecoveredToday = document.getElementById("card-recovered-today"),
      cardRecoveredAll = document.getElementById("card-recovered-all"),
      cardDeathsToday = document.getElementById("card-deaths-today"),
      cardDeathsAll = document.getElementById("card-deaths-all");

    fetch(newUrl)
      .then(function (response) {
        if (response.status !== 200) {
          console.warn(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
        response.json().then(function (data) {
          cardConfirmedToday.innerHTML =
            numeral(data.todayCases).format("0,0") + " New Cases";
          cardConfirmedAll.innerHTML =
            numeral(data.cases).format("0,0") + " Total Cases";
          cardRecoveredToday.innerHTML =
            numeral(data.todayRecovered).format("0,0") + " New Cases";
          cardRecoveredAll.innerHTML =
            numeral(data.recovered).format("0,0") + " Total Cases";
          cardDeathsToday.innerHTML =
            numeral(data.todayDeaths).format("0,0") + " New Cases";
          cardDeathsAll.innerHTML =
            numeral(data.deaths).format("0,0") + " Total Cases";
            createGraph(data)
        });
      })
      .catch(function (err) {
        console.error("Fetch Error -", err);
      });
  }

  // Changes the url to global or countries stats
  function getUrl(id) {
    
    let newUrl = id === "0" ? urlGlobalCases : (urlCountries + "/" + id)

    return newUrl;
  }

  // Fetch API data
  function fetchData(){
      
    fetch(urlCountries)
      .then(function (response) {
        if (response.status !== 200) {
          console.warn(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
        response.json().then(function (data) {

          $.each(data, function () {
            countryList = data;
          });
          createTableCountries();
          createDropdownCountries();
        });
      })
      .catch(function (err) {
        console.error("Fetch Error -", err);
      });
      return countryList;
  }

  // Get selected country from dropdownCountries
  $("#dropdownCountries").on("change", function () {
    let countryId = this.options[this.selectedIndex].value;
    updateUI(countryId);
  });
  fetchData();
});
