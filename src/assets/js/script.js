$(document).ready(function () {
  const url = "https://disease.sh/v3/covid-19/countries";

  // Creates the dropdown with all countries
  function createDropdownCountries() {
    let dropdown = document.getElementById("dropdownCountries");
    dropdown.length = 0;

    // Set default option to global stats
    let defaultOption = document.createElement("option");
    defaultOption.text = "Global";
    defaultOption.value = 0;
    dropdown.add(defaultOption);
    $(".selectpicker").selectpicker("refresh");
    dropdown.selectedIndex = 0;
    updateCards(defaultOption.value);

    fetch(url)
      .then(function (response) {
        if (response.status !== 200) {
          console.warn(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        response.json().then(function (data) {
          let option;

          for (let i = 0; i < data.length; i++) {
            option = document.createElement("option");
            option.text = data[i].country;
            option.value = data[i].countryInfo._id;
            dropdown.add(option);
          }
          $(".selectpicker").selectpicker("refresh");
        });
      })
      .catch(function (err) {
        console.error("Fetch Error -", err);
      });
  }

  // Creates table with cases by country
  function createTableCountries() {
    let tbody = document.getElementById("table-body");

    fetch(url)
      .then(function (response) {
        if (response.status !== 200) {
          console.warn(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        response.json().then(function (data) {
          var countryCases = "";

          // ITERATING THROUGH OBJECTS
          $.each(data, function (key, value) {
            //CONSTRUCTION OF ROWS
            countryCases += "<tr>";
            countryCases += "<td>" + value.country + "</td>";
            countryCases +=
              "<td>" + numeral(value.cases).format("0 a") + "</td>";
            countryCases +=
              "<td>" + numeral(value.recovered).format("0 a") + "</td>";
            countryCases +=
              "<td>" + numeral(value.deaths).format("0 a") + "</td>";
            countryCases += "</tr>";
          });

          //INSERTING ROWS INTO TABLE
          $("#table-cases").append(countryCases);
        });
      })
      .catch(function (err) {
        console.error("Fetch Error -", err);
      });
  }

  // Updates cards with country information
  function updateCards(id) {
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

  // Get selected country from dropdownCountries
  $("#dropdownCountries").on("change", function () {
    var countryId = this.options[this.selectedIndex].value;
    updateCards(countryId);
  });

  createTableCountries();
  createDropdownCountries();
});
