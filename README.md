
# COVID-19 Tracker

Hello there!

![Website](https://img.shields.io/website?style=for-the-badge&url=https://thiagohardt.github.io/COVID-Tracker/) ![GitHub last commit](https://img.shields.io/github/last-commit/thiagohardt/covid-tracker?style=for-the-badge) ![enter image description here](https://img.shields.io/github/languages/count/thiagohardt/covid-tracker?style=for-the-badge)
 
 ![enter image description here](https://iili.io/3cktCg.png)
A live version can be found [here](https://thiagohardt.github.io/COVID-Tracker/).

# UX

This is a website for a beginner full-stack software developer.
The main goal of the page is to track cases of COVID-19.

The page shows simple information in the form of graphs and tables so the user can 
easily find what he is looking for.
The cases can be filtered by Global data or by a specific country.
The main data displayed shows new cases, total cases, recovered cases, and deaths by the virus..

## User Story

 **As a visitor**
 - As a Visitor, I want to easily understand the main purpose of the site.
 - As a Visitor, I want to be shown live data of COVID-19 Cases around the world.
 - As a visitor, I want to be able to find statistcs about a selected country or worldwide cases. 
  - As a visitor, I want to be able to find total cases. 
  - As a visitor, I want to be able to find new cases.
  - As a visitor, I want to be able to find recovered cases.
  - As a visitor, I want to be able to find deaths by the virus.

## MVP
The page consists of 4 main sections. **Country selector**, **Data chart**, **Cases cards**, **Table of cases**.
  

:white_check_mark: Fully responsive.<br>
:white_check_mark: Graph/Chart showing cases by country. <br>
:white_check_mark: Filter data by country.  <br>
:white_check_mark: Global statistcs. <br>
:white_check_mark: Table with total cases globally. <br>

### Existing Features

- **Country selector**
Gives the user the ability of filtering the data by desired country.

- **Data chart**
Shows the data in the form of a chart of confirmed cases, recovered cases and deaths .

- **Cases cards**
Show **New** and **Total** for **Confirmed Cases**, **Recovered Cases** and **Deaths**..

- **Table of cases**
Shows **Confirmed** cases for all countries.

## Design

### Wireframe
The wireframe for the project can be found [here](https://www.figma.com/proto/QCZBjDGhDjVzLoxiJDTtds/COVID-Tracker---Wireframe?node-id=11%3A59&scaling=min-zoom).

### Color Scheme
![3cjMZb.md.png](https://iili.io/3cjMZb.md.png)

### Typography

**Body:** Roboto<br>


## Technologies Used

Throughout the project, the following technologies were used.

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
  - The project uses **HTML5**
- [CSS3](https://developer.mozilla.org/en-US/docs/Archive/CSS3)
  - The project uses **CSS3** to create styles for the page.
- [jQuery](https://jquery.com/)
  - The project uses **jQuery** for DOM manipulation.
- [Bootstrap 4.5.x](https://getbootstrap.com/)
  - The project uses **Bootstrap 4.5** for quick responsiveness and pre-made components.
 - [Bootstrap-Select](https://github.com/heimrichhannot/bootstrap-select)
	  - The project uses **Bootstrap-Select**  jQuery plugin that utilizes Bootstrap's dropdown.js to style and bring additional functionality to standard select elements.
- [Dillinger](https://dillinger.io/)
  - The project uses **Dillinger** to write the README file.
- [Numeral.js](http://numeraljs.com/)
  - The project uses **Numeral.js** to help with number formating.
 - [Chart.js](https://www.chartjs.org/)
	  - The project uses **Chart.js** to quickly make graphs and charts.
	 
### API
- [Open Disease Data](https://disease.sh/)
  - The project uses **Open Disease Data** to get all the data.



## Testing

![W3C Validation](https://img.shields.io/w3c-validation/html?style=for-the-badge&targetUrl=https://thiagohardt.github.io/COVID-Tracker/) ![CSS3 Validator](https://img.shields.io/badge/CSS3-validated-success?style=for-the-badge) ![CSS3 Validator](https://img.shields.io/badge/TEsts-passed-success?style=for-the-badge)<br> 
![FireFox](https://img.shields.io/badge/firefox-passed-success?style=for-the-badge) ![Chrome](https://img.shields.io/badge/Chrome-passed-success?style=for-the-badge) ![Edge](https://img.shields.io/badge/edge-passed-success?style=for-the-badge)
![Mobile](https://img.shields.io/badge/Mobile-passed-success?style=for-the-badge)

### Testing User Stories 
 - **As a Visitor, I want to easily understand the main purpose of the site**
Upon entering the page I can easily identify what the page is trying to inform.
The data is presented in an easy and clear way.

 - **As a Visitor, I want to be shown live data of COVID-19 Cases around the world**.
The data showed matches the live number of cases according to the Open Disease Data API.

 - **As a visitor, I want to be able to find statistcs about a selected country or worldwide cases**. 
 When I select a country from the dropdown menu I am presented with graphs and data that match what I selected.
If nothing is selected I am presented with Global data instead.

  - **As a visitor, I want to be able to find total cases**. 
  I can see the number of total cases for the selected country in the cards.
  The total number of cases is shown on every card and also on the table.
  I can also see the number of total cases on the graph.
  
  - **As a visitor, I want to be able to find new cases**.
I can see the number of new cases for the selected country in the cards.
The total number of cases is shown on every card.

- **As a visitor, I want to be able to find Confirmed cases**.
The card “Confirmed” shows me the new and total confirmed cases for the selected country.
If nothing is selected it shows Global by default.

 - **As a visitor, I want to be able to find recovered cases**.
The card “Recovered” shows me the new and total recovered cases for the selected country.
If nothing is selected it shows Global by default.

  - **As a visitor, I want to be able to find deaths by the virus**.
The card “Deaths” shows me the new and total number of deaths for the selected country.
If nothing is selected it shows Global by default.

### General Testing
**Country Selector:**

✅  Selects "Global" as default.  <br>
✅  Shows all 216 available countries.  <br>

**Graph/Chart**

✅  "Shows "Global" data as default.  <br>
✅  "Shows data acording to what is selected in the "Country Selector".  <br>
✅  Animates when data is changed.<br>

 **Cards Cases**
 
   :white_check_mark:  Show "Global" data as default.<br>
   :white_check_mark:  Show **New** and **Total** for **Confirmed Cases**, **Recovered Cases** and **Deaths** data correctly.<br>
   ✅  Shows data acording to what is selected in the "Country Selector".  <br>
    
**Table**

   :white_check_mark:  Shows **Confirmed total** cases for all countries.<br>


### Browsers

**Fire Fox**

 :white_check_mark: Links <br>
 :white_check_mark: Animations<br>
 :white_check_mark: Responsiveness<br>
 :white_check_mark: Data<br>

**Chrome**

 :white_check_mark: Links <br>
 :white_check_mark: Animations<br>
 :white_check_mark: Responsiveness<br>
 :white_check_mark: Data<br>

**Edge**

 :white_check_mark: Links <br>
 :white_check_mark: Animations<br>
 :white_check_mark: Responsiveness<br>
  :white_check_mark: Data<br>

 

## Deployment

The website is hosted and deployed by [Github Pages](https://pages.github.com/).
Everything is deployed from the master branch and updates automatically whenever the branch is updated.

1.  Log in GitHub and find the desired repo;
2. Above your repository name you should see a bar with the option settings on the right-hand side;
3.  Scroll all the way down until you find “GitHub Pages” section;
4.  Under “Source” select Branch Master;
5.  After the message the page should be published.

### Forking
If you want to fork the repository to your own GitHub account you can by clicking on the “fork” button under the navbar with your profile.

### Cloning

 1. If you want to clone the repository into a local file you can by:
 2. Clicking on the green button “Code” and copying the url showed.
 3. Open GitBash
 4. Change directory to the desired location where you want to clone the
    files to.
 5. Type “git clone” and paste the copied URL
 6. Press enter and you should have your local file cloned and ready.

## Credits

### Content

- All content on the page was created by me. 
- All data was retrieved from the API - [disease.sh](https://disease.sh/)

### Media

- Background image from [Unsplash ](https://unsplash.com/photos/k0KRNtqcjfw)

### Acknowledgements

-   My Mentor, **Oluwafemi Medale** for continuous helpful feedback.
- The inspiration for this project came from the YouTube channel [Clever Programmer](https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ) and can be found [here](https://youtu.be/cF3pIMJUZxM).


