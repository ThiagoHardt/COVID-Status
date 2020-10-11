$(document).ready(function () {
  const url = "https://disease.sh/v3/covid-19/countries";

  // Creates the dropdown with all countries
  function createDropdownCountries() {
    let dropdown = document.getElementById("dropdownCountries");
    dropdown.length = 0;

    let defaultOption = document.createElement("option");
    defaultOption.text = "Choose Country";

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

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
            option.value = data[i].countryInfo.iso2;
            dropdown.add(option);
          }
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
            //CONSTRUCTION OF ROWS HAVING
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
  // Updates cars with country information
  function updateCards(id) {
    let cardConfirmedToday = document.getElementById("card-confirmed-today"),
      cardConfirmedAll = document.getElementById("card-confirmed-all"),
      cardRecoveredToday = document.getElementById("card-recovered-today"),
      cardRecoveredAll = document.getElementById("card-recovered-all"),
      cardDeathsToday = document.getElementById("card-deaths-today"),
      cardDeathsAll = document.getElementById("card-deaths-all");

    fetch(url + "/" + id)
      .then(function (response) {
        if (response.status !== 200) {
          console.warn(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        response.json().then(function (data) {
          cardConfirmedToday.innerHTML = data.todayCases + " Today";
          cardConfirmedAll.innerHTML = data.cases + " Cases";
          cardRecoveredToday.innerHTML = data.todayRecovered + " Today";
          cardRecoveredAll.innerHTML = data.recovered + " Cases";
          cardDeathsToday.innerHTML = data.todayDeaths + " Today";
          cardDeathsAll.innerHTML = data.deaths + " Cases";
        });
      })
      .catch(function (err) {
        console.error("Fetch Error -", err);
      });
  }
  // Get selected country from dropdownCountries
  $("#dropdownCountries").on("change", function () {
    var countryId = this.options[this.selectedIndex].value;
    updateCards(countryId);
  });

  createTableCountries();
  createDropdownCountries();
});
