$(document).ready(function () {
  const url = "https://disease.sh/v3/covid-19/countries";
  let countryList = [];

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
            countryCases += "<tr>";
            countryCases += "<td>" + entry.country + "</td>";
            countryCases +=
              "<td>" + numeral(entry.cases).format("0 a") + "</td>";
            countryCases +=
              "<td>" + numeral(entry.recovered).format("0 a") + "</td>";
            countryCases +=
              "<td>" + numeral(entry.deaths).format("0 a") + "</td>";
            countryCases += "</tr>";
          });
          //Insert rows into table
          $("#table-cases").append(countryCases);
  }

  // Updates cards with country information
  function updateUI(id) {
    let cardConfirmedToday = document.getElementById("card-confirmed-today"),
      cardConfirmedAll = document.getElementById("card-confirmed-all"),
      cardRecoveredToday = document.getElementById("card-recovered-today"),
      cardRecoveredAll = document.getElementById("card-recovered-all"),
      cardDeathsToday = document.getElementById("card-deaths-today"),
      cardDeathsAll = document.getElementById("card-deaths-all");
    let newUrl = getUrl(id);

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
            numeral(data.todayCases).format("0,0") + " Today";
          cardConfirmedAll.innerHTML =
            numeral(data.cases).format("0,0") + " Cases";
          cardRecoveredToday.innerHTML =
            numeral(data.todayRecovered).format("0,0") + " Today";
          cardRecoveredAll.innerHTML =
            numeral(data.recovered).format("0,0") + " Cases";
          cardDeathsToday.innerHTML =
            numeral(data.todayDeaths).format("0,0") + " Today";
          cardDeathsAll.innerHTML =
            numeral(data.deaths).format("0,0") + " Cases";
            if (id !== "0"){
              createMap([data.countryInfo.lat, data.countryInfo.long], 4);
            }
            else {
              createMap([0, 0], 3);
            }
        });
      })
      .catch(function (err) {
        console.error("Fetch Error -", err);
      });
  }

  // Changes the url to global or countries stats
  function getUrl(id) {
    let newUrl;
    if (id === "0") {
      newUrl = "https://disease.sh/v3/covid-19/all";
    } else {
      newUrl = url + "/" + id;
    }
    return newUrl;
  }

  // Fetch API data
  function fetchData(){
      
    fetch(url)
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

  // Creates map
  function createMap([lat, long], zoom){
    var container = L.DomUtil.get('map'); 
    if(container != null){ container._leaflet_id = null; }

    let map = L.map('map', {
      center: [lat, long],
      zoom: zoom,
      maxBounds: [
        [90,-180],
        [-90, 180]
      ]
    });
      
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      noWrap: true
    }).addTo(map);
  }

  // Get selected country from dropdownCountries
  $("#dropdownCountries").on("change", function () {
    let countryId = this.options[this.selectedIndex].value;
    updateUI(countryId);
  });

  fetchData();
});
