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
            countryCases += "<td>" + value.cases + "</td>";
            countryCases += "<td>" + value.recovered + "</td>";
            countryCases += "<td>" + value.deaths + "</td>";
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
  createTableCountries();
  createDropdownCountries();
});
