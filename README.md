# Happy Cake Friends Memory Game
  ![screenshot of landing page](docs/documentation/Screenshot_amiresponsive.png)

  [View Live Project Here](https://hysinh.github.io/Memory-game/)

## Introduction
The Happy Cake Friends Memory Game is a simple, fun online game for all ages.

## CONTENTS  
  
* [User Experience)](#user-experience)
  * [User Stories](#user-stories) 
* [Design](#design)
  * [Site Design](#site-design)
  * [Wireframes](#wireframes)
  * [Colour Scheme](#colour)
  * [Typography](#typography)
* [Features](#features)
  * [Card Grid](#card-grid)
  * [Play Button](#play-button)
  * [Player Tries Remaining](#player-tries-remaining)
  * [Footer](#footer)  
  * [Favicon](#favicon)  
* [Future Features](#future-features)
* [Technologies](#technologies)
  * [Languages Used](#languages-used)
  * [Technologies and Programs Used](#technologies-and-programs-used)
  * [Deployment](#deployment)
* [Testing](#testing)
  * [HTML Validation](#html-validation)
  * [CSS Validationn](#css-validation)
  * [Lighthouse Performance Audits via Chrome Dev Tools](#lighthouse-performace-audit-via-chrome-dev-tools)
  * [Manual Testing](#manual-testing)
  * [Bugs and Fixes](#bugs-and-fixes)
  * [Unfixed Bugs](#unfixed-bugs)
* [Credits](#credits) 

  
---   

## User Experience
Memory Gamezz ux stories
- ### Visitor Goal
  Happy Cake Friends visitors can range in age and genger but they are all generally looking for a simple, online game to entertain them featuring the cute Cake Friends characters. The website offers a short reprieve from the cares of daily life and offer entertainment via a mentally challenging memory exercise.
- ### User stories
  1. User looking to play a simple game while waiting for public transport.
  2. User looking for a simple memory game to play while waiting (e.g. waiting at the GP office or riding the bus).
  3. User is a child with a parent who needs them to be occupied with a simple, safe and entertaining memory game that can be played quietly for a period of time. 
  4. User is a fan of the Happy Cake Friends and enjoys playing games or interacting with the Happy Cake Friends brand.

## Design

- #### Site design 
  For a simple, online game, the Happy Cake Friends has a colorful, illustrated look that appeals to those who enjoy a cute, illustrated aesthetic or are fans of the Happy Cake Friends characters or brand.

  The Happy Cake Friends website needed to be responsive and available on a variety of screen sizes and devices to make it as accessible as possible. I focused on the following sizes:

  1. Mobile Device dimensions (small): 280px x 653px
  2. Mobile Device dimensions (larger): 375px and larger
  3. Tablet Device dimensions: 736px and larger

- #### Wireframes
  The Happy Cake Friends website was designed by wireframes with pencil and paper. After sketching out what I planned, I started laying out the HTML and basic CSS for the site in a similar way that the Love Maths tutorial went. I made a list of the functions that I thought that the game would need and proceeded from there. In the end, I did not use different size cards for different levels or different numbers of lives for different levels on this version. I decided to keep it simple and stay with a single version. Difficulty levels can be implemented in a future version of the Happy Cake Friends Memory Game. I recreated the wireframes in a digital version, but an image of the original handdrawn wireframes is included below.

  <details >
  <summary>Mobile Wireframe</summary>  

  ![screenshot of mobile wireframes](docs/documentation/Screenshot_wireframe_mobile.png)
  </details>

  <details >
  <summary>Mobile 375 pexels and larger Wireframe</summary>  

  ![screenshot of mobile wireframes](docs/documentation/Screenshot_wireframe_mobile_lrg.png)
  </details> 

  <details >
  <summary>Desktop Wireframe</summary>  

  ![screenshot tablet wireframes](docs/documentation/Screenshot_wireframe_laptop_desktop.png)
  </details>    

  <details >
  <summary>Original Handdrawn Wireframe</summary>  

  ![screenshot desktop wireframes](docs/documentation/wireframe_memory-game.jpg)
  </details>    
- #### Colour 
  ![screenshot of font family](docs/documentation/screenshot_color_palette.webp)
  The Happy Cake Friends color palette is bright, fresh, and youthful and suits the illustractor Cake Friends characters.
  <br>
  <br>
  Initially, my buttons featured white text and this, in combination with the orange background, failed the acceptable [WCAG](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) contrast ratio. Ultimately, I changed the text color to a dark gray color to ensure readability and accessibility. The Memory Game text was also tested against the blue and green background. At 14 font size and bold, the yellow color was was still readable. So, I chose to leave the colors at the top as is since they text is sufficiently large enough for readability. I used the [Adobe Color](https://color.adobe.com/create/color-contrast-analyzer) to test the colors.

  <details >
  <summary>Adobe color analysis for the button</summary>  

  ![screenshot desktop wireframes](docs/documentation/Screenshot_coloranalysis_yellow-button.png)
  </details> 

  <details >
  <summary>Adobe color analysis for the orange text at the top of the page</summary>  

  ![screenshot desktop wireframes](docs/documentation/Screenshot_coloranalysis_yellow-text-on-blue-background.png)
  </details> 

- #### Typography
  The Happy Cake Friends logo is using the Londrina Solid font family. It offers a cartoon style that works well with the illustrated, cartoon aesthetic of the Happy Cake Friends.

  The remainder of the copy is in the font family is Poppins. It was chosen for it's clean look, readability, and variety of weights. Both fonts were sourced from Google Fonts.

  ![screenshot of font family](docs/documentation/Screenshot_font_poppins.png)
  ![screenshot of font family](docs/documentation/Screenshot_font_londrina-solid.png)


## Features
### Card Grid
<details >
<summary></summary>  

![screenshot card grid](docs/documentation/Screenshot_features_grid.png)
</details>  
The card grid is the main feature of the page and website. Javascript generates the cards on demand when the user presses the "Play" button. The grid is four cards wide and four cards down creating 16 cards total. There are eight matching pairs that are randomly generated each time the card grid is reset. The cards feature the bright and colorful Happy Cake Friends characters.

### Play Button
<details>
<summary></summary>

![screenshot of play button](docs/documentation/Screenshot_features_play-button.png)
</details>
The Play Button is used to begin the game or reset the grid at any time. When a player wins or loses the game, the player can click on the Play Button to reset the game at that time. However, the play button can reset the game at any time and is not limited to the end of the game.

### Player Tries Remaining
<details>
<summary></summary>

![screenshot of player tries](docs/documentation/Screenshot_features_playerTries.png)
</details>
The Player Tries Remaining section displays the current tries that a player has as they attempt matches. At the beginning, each player is allocated 15 Tries or attempts. Each mismatched pair decrements the Player Tries by 1 until it reaches 0. At this point, a message pops up to let the player know that they have lost the game and they can play again if they choose.

### Win Game and Lose Game Modals
<details>
<summary></summary>

![screenshot of win game modal](docs/documentation/Screenshot_features_modals.png)
</details>
The Player Tries Remaining section displays the current tries that a player has as they attempt matches. At the beginning, each player is allocated 15 Tries or attempts. Each mismatched pair decrements the Player Tries by 1 until it reaches 0. At this point, a message pops up to let the player know that they have lost the game and they can play again if they choose. Should the player find all the matches before the Player Tries reaches zero. Then, they have won the game and a Win Game message pops up at that time. They can also choose to play the game again at this point.


### Footer
<details>
<summary></summary>

![screenshot of footer](docs/documentation/Screenshot_features_footer.png)
</details>
The footer section features a simple copyright message for the Happy Cake Friends. 

### Favicon
<details >
<summary></summary>  

![screenshot favicon](docs/documentation/screenshot_features_favicon.png)
</details>  
A favicon was added to provide further visual support of the Puss-N-Boba brand.


## Future Features
- A future feature would be allow for different levels or different numbers of tries to increase or decrease difficulty.
- A future feature would allow for different character groups to displayed depending on the level of difficulty.
- Also for future development, additional simple games featuring the characters. 

## Technologies
  ### Languages Used
  - HTML5
  - CSS
  - Javascript

  ### Technologies and Programs Used
  - GitHub - used to save and store all the files for this website
  - GitHub Codespaces - was used as the IDE to develop and test the code for this website
  - Git - provided the version control
  - Adobe Photoshop 2024 - used to create wireframes and edit all the images
  - Google Fonts - imported fonts from this website
  - Google Developer Tools - used to debug website and test for responsiveness
  - Google Lighthouse - used to audit the performance and quality of the website
  - WC3 HTML Validator - used to validate the HTML code
  - WC3 CSS Validator - used to validate the CSS code https://jigsaw.w3.org/css-validator/

  ### Deployment
  GitHub was used to deploy this website. The following steps were taken:

  1. Log into GitHub account.
  2. Navigate to the project repository: puss-n-boba
  3. Click on the Settings button on the horizontal navigation across the top portion of the page.
  4. Navigate to the Pages link under the Code and automation section on the left navigation.
  5. Under GitHub Pages, go to Build and deployment. Then, under Source, select "Deploy from a branch". 
  6. Next, under Branch, select "main" and "/root" and then click on the Save button.
  7. After a few moments, the website will be made live and the link will be made visible at the top of the page. 

  How to clone Puss-N-Boba & make changes:
  1. Open the repository on GitHub.
  2. Navigate to the CODE link on the navigation across the top.
  3. Then, navigate to the green CODE button on the right side and click.
  4. Select the Local tab and click on the copy icon to make a copy of the repository.
  5. Then navigate back to your main GitHub dashboard and then create a new repository with your desired name.
  6. On the next page, navigate to the bottom of the page and select Import code under "Import code from another repository".
  7. In the next window, paste the copied link of the Puss-N-Boba repository into the line.
  8. Then, click Begin Import to import the repository code.
  9. Make changes and/or deploy as desired.



  ## Testing

  ### Validator Testing
  - #### HTML Validation
    No errors were returned when passing the official W3C HTML Validator
    <details >
    <summary>Index Page HTML Validation</summary>  

    ![screenshot of index page validation](docs/documentation/Screenshot_htmlvalidator.png)
    </details>
     
    
  - #### CSS Validation
    No errors were found when passing through the official W3C CSS Jigsaw validator
    <details >
    <summary>CSS Validation</summary>  

    ![screenshot of css validation](docs/documentation/Screenshot_cssvalidator.png)
    </details>

  - #### Javascript Validation
    No errors were found when passing through the JSHint Javascript validator
    <details >
    <summary>Javascript Validation</summary>  

    ![screenshot of css validation](docs/documentation/Screenshot_jshint_jsvalidator.png)
    </details>

  
  - #### Lighthouse Performace Audit via Chrome Dev Tools
    Desktop Lighthouse Performance Audits
    <details >
    <summary>Index Page Lighthouse audit</summary>  

    ![screenshot of index page lighthouse audit](docs/documentation/Screenshot_lighthouse_desktop.png)
    </details>
    
    <br>

    Mobile Lighthouse Performance Audits
    <details >
    <summary>Index Page Lighthouse audit</summary>  

    ![screenshot of index page lighthouse audit](docs/documentation/Screenshot_lighthouse_mobile.png)
    </details>

  ### Manual Testing
  Manual testing was performed on the website checking for broken links, content errors, and responsivity across different sizes. Testing took place during the build process using Dev Tools on Chrome and on the following real-world devices and browsers:

  #### Devices 
  1. Pixel 4XL
  2. Xiaomi 11T Pro
  3. Redmi Note 12 Pro+
  4. Lenovo IdeaPad Y500 Laptop
  5. Alienware Aurora R7 Desktop
  6. Microsoft Surface

  #### Browsers
  1. Microsoft Edge
  2. Brave
  3. Google Chrome
  4. Opera

  #### The results of testing are as follows:
  | Page | Test | Pass/Fail |
  | ---- | ---- | --------- |
  | All  | Puss-n-Boba logo links back to the homepage | Pass |
  | All  | Underline appears on hover when moving over navigation bar links | Pass |
  | All  | Underline appears on corresponding navigation link when on the page | Pass |
  | All  | Navigation links direct user correctly to the correct page | Pass |
  | All  | Footer social media icons open in a new tab and correctly bring user to the corresponding social media website | Pass |
  | All  | Images and sections are responsive to different device sizes | Pass |
  | Index  | Links on the homepage bring user to the correct page | Pass |
  | Contact | Contact form correctly requires entries into fields | Pass |
  | Contact | Contact form submission works corrrectly and brings user to a validation page | Pass |
  | Contact | Google Maps is interactive and opens in a new tab when the user clicks on "view larger map" | Pass |

  #### Bugs and Fixes
  | Bug | Page | Fix |
  | --- | ---- | --- |
  | Missing </h2> | Index page | Had changed an H1 tag to a H2 tag but did not update the close tag. Resolved by updating close tag. |
  | Section element | Index page | HTML validator suggested changing section element to div to eliminate issues with lack of heading. I changed the section element to a div element. |
  | Invalid 'align' property | style.css | Corrected invalid align property to text-align property  |
  | Unnecessary ; tags | script.js | I had put ; at the end of every function that was unncessary. Resolved by removing them. |
  | Missing ; tags | Script.js | Missing ; at the end of console.log in js file in two places. Added the ; as necessary. |
  | Accessibility | Index page | Document doesn't use legible font sizes at the mobile size  |

  ### Unfixed Bugs
  - Document doesn't use legible font sizes at the mobile size - FIX
  

## Credits
### Content
- Content for website was writing by myself
- Artwork was created by myself on Adope Photoshop
- 
- 
- Correct syntax for implementation of how to fit Background Image to a Div using CSS: https://www.geeksforgeeks.org/how-to-fit-background-image-to-div-using-css/
- W3C CSS Validator: https://jigsaw.w3.org/css-validator/
- How to Center align a div element: https://www.w3schools.com/html/html_div.asp
- HTML Block and Inline Elements: https://www.w3schools.com/html/html_blocks.asp
- How to implement and syntax for CSS background-position Property: https://www.w3schools.com/cssref/pr_background-position.php
- CSS Background Shorthand: https://www.w3schools.com/css/css_background_shorthand.asp
- CSS Box Model: https://www.w3schools.com/css/css_boxmodel.asp
- HTML Form Elements - Specifically text area properties: https://www.w3schools.com/html/html_form_elements.asp
- CSS Forms: https://www.w3schools.com/css/css_form.asp | https://www.w3schools.com/tags/tag_textarea.asp
- Tutorial on how to Style forms with CSS: https://blog.logrocket.com/how-to-style-forms-with-css-a-beginners-guide/
- How to center a div in a div vertically: https://blog.hubspot.com/website/center-div-css#:~:text=Set%20the%20top%20property%20to,(0%2C%20%2D50%25).
- A Complete Guide to Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Guidance for CSS Background image - Shrink to fit fixed size div: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Guidance on how to implement and correct syntax for a background-color while also having a background image: https://stackoverflow.com/questions/8195215/css-background-image-on-background-color#:~:text=background%3A,position%20and%20background%2Drepeat%20properties.
- Correct syntax for letter-spacing property: https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing
- How to make a cursor into a hand https://stackoverflow.com/questions/3087975/how-to-change-the-cursor-into-a-hand-when-a-user-hovers-over-a-list-item
- Ideas on how to format README.MD document: https://github.com/amylour/scoops_pp1/
- Naviation bar toggle menu code - Love running website tutorial - Code Institute


### Media
- The Happy Cake Friends characters were created by my daughter, Liloux Smith. They were redrawn in Adobe Photoshop for the purposes of this project.
