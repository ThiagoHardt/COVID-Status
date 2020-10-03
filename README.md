# COVID-19 Tracker

Hello there!

This project aims to create a fully functional static front-end site using technologies learned throughout Code Institute full stack web developer course.

![Website](https://img.shields.io/website?style=for-the-badge&url=https%3A%2F%2Fthiagohardt.github.io%2Fthiago-hardt-portfolio%2) ![GitHub last commit](https://img.shields.io/github/last-commit/thiagohardt/covid-tracker?style=for-the-badge) ![enter image description here](https://img.shields.io/github/languages/count/thiagohardt/covid-tracker?style=for-the-badge)
 
![2zIyxV.md.png](https://iili.io/2zIyxV.md.png)

A live version can be found [here](https://thiagohardt.github.io/#/).

# UX

This is a website for a beginner full-stack software developer.
The main goal of the page is to create a web presence and act as a link between the developer and potential employers and or clients.

One of the most important aspects of the website is to keep the navigation simple and as straight-forward as possible. To achieve that I have opted to use a one-page structure, with the main information being the “hero” image followed by the developer’s name and a quick access button linking to the “about” section and another to a downloadable _CV_. Utilizing this structure I make that the most critical information will be not more than 3 clicks away from the user.

## User Story

 **As a visitor**
 - As a Visitor, I want to easily understand the main purpose of the site and learn more about the developer.
 -  As a Visitor, I want to be able to easily navigate throughout the site to find content. 
 - As a visitor, I want to find previous projects that the developer has been part of. 
 - As a visitor, I want to download the developer’s CV. 
 - As a visitor, I want to contact the developer.


## MVP
The page consists of 4 main sections: Home, About, Projects, and Contact.
  

:white_check_mark: Fully responsive<br>
:white_check_mark: Downloadable CV <br>
:white_check_mark: About section <br>
:white_check_mark: Projects section <br>
:white_check_mark: Contact Form section<br>

### Existing Features

- **Home:**
Contains the main information and it’s where you first land.

- **About:**
Quickly brief about the developer’s background and skills, with an option to download CV for further information.

- **Projects:**
The main projects the developer worked on. Every project contains a short brief to describe it and two buttons, One for a live view of the project and one for the source code.

- **Contact:**
Contact form and social links.
- **Download CV Button:** This feature enables the user to directly download a .pdf version of the developer’s CV.

### Features Left to Implement

- Possibly a **Blog** feature where the user can showcase interests and IT related content.

## Design

### Wireframe
The wireframe for the project can be found [here](https://www.figma.com/file/IaVtu8YZM7oZCzBSSpasxd/personal-portfolio-wirerame?node-id=11:287).

### Color Scheme
![2Iaxbn.md.png](https://iili.io/2Iaxbn.md.png)

### Typography

**Body:** Roboto<br>
**Header:** Oswald


## Technologies Used

Throughout the project, the following technologies were used.

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
  - The project uses **HTML5**
- [CSS3](https://developer.mozilla.org/en-US/docs/Archive/CSS3)
  - The project uses **CSS3** to create styles for the page.
- [Bootstrap 4.5.x](https://getbootstrap.com/)
  - The project uses **Bootstrap 4.5** for quick responsiveness and pre-made components.
- [StackEdit](https://stackedit.io/)
  - The project uses **StackEdit** to write the README file.
- [Hover](https://ianlunn.github.io/Hover/)
  - The project uses **Hover** for quick hover effects.
 - [ScrollReveal](https://scrollrevealjs.org/)
   - The project uses **ScrollReveal** to apply scrolling effects.

## Testing

![W3C Validation](https://img.shields.io/w3c-validation/html?style=for-the-badge&targetUrl=https%3A%2F%2Fthiagohardt.github.io%2Fthiago-hardt-portfolio%2F) ![CSS3 Validator](https://img.shields.io/badge/CSS3-validated-success?style=for-the-badge) ![CSS3 Validator](https://img.shields.io/badge/TEsts-passed-success?style=for-the-badge)<br> 
![FireFox](https://img.shields.io/badge/firefox-passed-success?style=for-the-badge) ![Chrome](https://img.shields.io/badge/Chrome-passed-success?style=for-the-badge) ![Edge](https://img.shields.io/badge/edge-passed-success?style=for-the-badge)
![Mobile](https://img.shields.io/badge/Mobile-passed-success?style=for-the-badge)

### Testing User Stories 

 **As a Visitor, I want to easily understand the main purpose of the site and learn more about the developer.**
- Upon entering the site I have a clear idea of what the page is about.
- I can see a clear descriptive text and a hero image.
- I have two options presented by call to action buttons. One taking to the “About” section and one to download a CV.

**As a Visitor, I want to be able to easily navigate throughout the site to find content.**
- The site has a navbar that sticks to the top of the page, making the navigation easy and intuitive.
- In mobile version, the navbar contracts into a collapsible button to avoid cluttering the screen.
- The navigation is easy and objective with clear headings on top of every section.

 **As a visitor, I want to find previous projects that the developer has been part of.**
- The “Projects” page can be found by clicking on the respective link in the navbar or just scrolling down.
- It shows a short description of projects and their links to the source code aswell as a live version when possible.

**As a visitor, I want to download the developer’s CV.**
- I can easily download a PDF file with the CV from the “About” section or the “Home” section.

**As a visitor, I want to contact the developer.**
- At the end of the page there is a simple contact form that can be filled for easy contact.

### General Testing
**Navbar:**

✅  Links take to the right section.  <br>
✅  Links highlight when active.  <br>
✅  Navbar resizes when in smaller screens.  <br>
✅  The Dropdown menu closes after clicking on a link.  <br>

**Hero/Home:**

✅  "View my work" button take takes you to the projects section.  <br>
✅  "Check my CV" button open a PDF file in a new tab.  <br>
✅  Content adapts to smaller screen devices.<br>

 **About:**
 
   :white_check_mark:  "Check my CV" button open a PDF file in a new tab.<br>
   :white_check_mark:  Content adapts to a single collum on smaller screen devices.<br>
    
**Contact**

   :white_check_mark:  Go to the "Contact Us" page.<br>
   :white_check_mark:  Submit the empty form and verify that an error message about the required fields appears.<br>
   :white_check_mark:  Submit the form with an invalid email address and verify that a relevant error message appears.<br>
   :white_check_mark:  Submit the form without a message and verify that a relevant error message appears.<br>
   :white_check_mark: Try to submit the form with all inputs valid.<br>


### Known Issues

:x: Contact Form doesn't actually send any e-mail. 

### Browsers

**Fire Fox**

 :white_check_mark: Links <br>
 :white_check_mark: Animations<br>
 :white_check_mark: Responsiveness<br>
 :white_check_mark: Form Validation<br>

**Chrome**

 :white_check_mark: Links <br>
 :white_check_mark: Animations<br>
 :white_check_mark: Responsiveness<br>
 :white_check_mark: Form Validation<br>

**Edge**

 :white_check_mark: Links <br>
 :white_check_mark: Animations<br>
 :white_check_mark: Responsiveness<br>
 :white_check_mark: Form Validation<br>
 

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
 2. Clicking on the green button “Code” and copying the url shown.
 3. Open GitBash
 4. Change directory to the desired location where you want to clone the
    files to.
 5. Type “git clone” and paste the copied URL
 6. Press enter and you should have your local file cloned and ready.

## Credits

### Content

- All content on the page was created by me. 

### Media

- Photos by [Sarah Ryan ](https://www.sarahryanphoto.com/?fbclid=IwAR3730d96HQXLyUQcNkw34EYJ9-y29WRntj8SY_hU9366dvhbUaDK2_jgeo) and [Niall O'Kelly](https://niallokelly.com/?fbclid=IwAR3730d96HQXLyUQcNkw34EYJ9-y29WRntj8SY_hU9366dvhbUaDK2_jgeo).
### Acknowledgements

-   My Mentor, **Oluwafemi Medale** for continuous helpful feedback.


