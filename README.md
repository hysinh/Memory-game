# Puss-n-Boba
  ![screenshot of landing page](docs/documentation/screenshot_amiresponsive.png)

  [View Live Project Here](https://hysinh.github.io/puss-n-boba/)

## Introduction
Memory Game - fun online game for all ages

## CONTENTS  
  
* [User Experience)](#user-experience)
  * [User Stories](#user-stories) 
* [Design](#design)
  * [Site Design](#site-design)
  * [Wireframes](#wireframes)
  * [Colour Scheme](#colour)
  * [Typography](#typography)
* [Features](#features)
  * [Navigation bar](#navigation-bar)
  * [Home Page](#home-page)
  * [About Page](#about-page)
  * [Menu Page](#menu-page)
  * [Cats Page](#cats-page)
  * [Contact Form](#contact-form)
  * [Confirmation Page](#confirmation-page)
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
Memory Game ux stories
- ### Visitor Goal
  Puss-N-Boba visitors can range in age and gender but they all generally are animal lovers and in particular are lovers of the cat species. The website plays an essential role in providing essential information to visitors on the cat nature of the cafe, the cafe's menu and offerings, information about the cats, and how to reach Puss-n-Boba whether in person or via social media or email which includes address, telephone, opening hours, and map information.
- ### User stories
  1. User looking for the cafe can access the location information via the home page as well as along the top navbar. They can access the address information, opening hours, and a map for access information.
  2. User looking to contact the cafe can navigate to the contact page from both the home page as well as the top navbar located on each page for telephone information as well as a message contact form on the contact page. If the user prefers to contact the cafe over social media, social media icons leading to the cafe's social media are located on the footer of each page. 
  3. User looking to easily navigate the website will find links to all the essential pages on the home page as well as along the top navbar on each page. 
  4. User looking to find more information about the menu and boba offerings can easily navigate to the menu page via the home page link or from the top navbar located on each page. The menu page provides the essential menu and treats offerings.
  5. Users who prefer to find the cafe's most recent menu offerings can navigate to the cafe's social media via the social media links in the footer for the newest menu offerings.
  6. User looking to find more about cats that live at Puss-n-boba can easily navigate via a link on the home page or via the top navbar to the Cat page which provides a brief description of each cat along with a photo of the cat. It also provides some basic interaction information for users should they visit the cafe.

## Design

- #### Site design 
  Researching websites for other cafes and coffee shops, I was most drawn to the websites that had a clean and clear aesthetic. I went with a clean colour scheme and focused on the two main features of the cafe: Cats and Boba tea.

  The Puss-N-Boba website needed to be responsive and available on a variety of screen sizes and devices to make it as accessible as possible. I focused on the following sizes:

  1. Mobile Device dimensions (small): 280px x 653px
  2. Mobile Device dimensions (larger): 375px and larger
  3. Tablet Device dimensions: 736px and larger
  4. Laptop Device dimensions: 992px and larger 
- #### Wireframes
  Initially, I started by creating the initial Puss-N-Boba website wireframes with pencil and paper. After sketching out what I planned, I started laying out the HTML and basic CSS for the site in a similar way that the Love Running tutorial went.

  However, I found this process to be lacking the information and details such as the colours and fonts when using too simple a wireframe. So, part way through the process, I took my wireframes to Photoshop where I worked on the color palette, typography, and imagery in greater detail.

  <details >
  <summary>Mobile Wireframes</summary>  

  ![screenshot of mobile wireframes](docs/documentation/screenshot_wireframe_mobile.png)
  </details> 

  <details >
  <summary>Tablet Wireframes</summary>  

  ![screenshot tablet wireframes](docs/documentation/screenshot_wireframe_tablet.png)
  </details>    

  <details >
  <summary>Desktop Wireframes</summary>  

  ![screenshot desktop wireframes](docs/documentation/screenshot_wireframe_desktop.png)
  </details>    
- #### Colour 
  ![screenshot of font family](docs/documentation/screenshot_color_palette.png)
  Preferring a clean and bright aesthetic that reflected the cheeryful and pleasant interior of the cafe, the colors are designed to reflect that clean and modern aesthetic while still be fun and punchy. 
  <br>
  <br>
  Initially, my buttons featured white text and this, in combination with the orange background, failed the acceptable [WCAG](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) contrast ratio. Ultimately, I chose to change the text color to the same color as the rest of the website's font color to ensure readability and accessibility. I used the [Adobe Color](https://color.adobe.com/create/color-contrast-analyzer) to test the colors.

  ![screenshot of adobe color analysis](docs/documentation/screenshot_colorcontrast.png)
- #### Typography
  The font family is Montserrat. It was chosen for it's clean look, readability, and variety of weights.

  ![screenshot of font family](docs/documentation/screenshot_font_montserrat.png)


## Features
### Navigation Bar
<details >
<summary></summary>  

![screenshot navbar](docs/documentation/screenshot_features_navbar.png)
</details>  
The Navigation Bar is featured on all five pages of the website. The full responsive navigation bar includes links to the Logo, About page, Menu Page, Our Cats page, and Contact page. Each navigation bar is identical and allows for easy navigation of the user.
<br>
<br>
The Navigation Bar allows for easy navigation from page to page across all devices. The Navigation Bar allows easy navigation without the user having to revert back to the previous page using the “back” button.

### Home Page
1. #### Hero section
   <details>
   <summary></summary>

   ![screenshot of index page hero image](docs/documentation/screenshot_features_index_hero.webp)
   </details>
   The Home page features a photograph of the cafe with a customer sitting with a cat as well as enjoying a boba tea. The photograph allows the user to see exactly what the venue looks like, what the atmosphere of Puss-n-Boba is like, and what to expect when you visit Puss-N-Boba.
2. #### Cats section
   <details>
   <summary></summary>

   ![screenshot of index page cat section](docs/documentation/screenshot_features_index_cats.png)
   </details>
   The Kitties in the Window section allows the user to see the image of one of the resident cats and motivates the user to visit the cafe in hopes of interacting with the profiled cats. The “Meet the Cats” button gives the user an opportunity to navigate to the Meet the Cats page where they can view and read the profiles of each cat living at the cafe.
3. #### Boba & Treats section
   <details>
   <summary></summary>

   ![screenshot of index page menu section](docs/documentation/screenshot_features_index_menu.png)
   </details>
   The Menu section showcases the other main feature of the cafe - Boba Teas and treats. The image in this section is a boba tea so that users know exactly what is the main featured menu item of the cafe. This section features an “explore” button that directs you to the Menu page and allows the user to view the different boba and menu items at the cafe.

4. #### Contact Us section
   <details>
   <summary></summary>

   ![screenshot of index page contact section](docs/documentation/screenshot_features_index_contact.png)
   </details>
   The Contact section offers users an additional way to navigate to the Contact page to either find location information, contact information, or the contact form.
     
### About Page
<details>
<summary></summary>

![screenshot of about page](docs/documentation/screenshot_features_about.png)
</details>
The overall design of the website continues on the About Page featuring a Hero style image at the top with overlay text highlighting the main feature of the cafe with both imagery and copy. Below the hero image, there is a summary of the main features of the cafe. The tablet and laptop layouts are similar but the mobile version switches the content to a column layout.

### Menu Page
<details>
<summary></summary>

![screenshot of menu page](docs/documentation/screenshot_features_menu.webp)
</details>
The design of the menu page follows the overall the design set by the Home page with a hero image at the top with a short amount of copy summarizing the content of the page. Below this image and copy, the page provides detail about how the boba tea menu options as well as a list of potentially available treats. Again, the tablet and laptop layouts are similar but the mobile versions switches to a column layout.

### Cats Page
<details>
<summary></summary>

![screenshot of cats page](docs/documentation/screenshot_features_cats.webp)
</details>
The Cats Page also follows the overall design set by the Home page with a hero image at the top with a heading describing the page. The page features a small amount of text describing the cats that live at the cafe and then feature a section of cat profiles that provide a small description of each cat along with an image of the cat. The screenshot is of the tablet layout and the cat profiles are displayed as two across. On screensizes of a laptop or larger, this cat profile layout changes to three cats across while the mobile version displays in a column layout.

### Contact Form
<details>
<summary></summary>

![screenshot of contact page](docs/documentation/screenshot_features_contact.webp)
</details>
The Contact page deviates slightly from the precedence set by the other pages and omits the hero image. The page displays location and contact information for the cafe including a Google maps iframe which displays the cafe location and can provide directions if needed. The other main feature of the website is the contact form which allows the user to contact the cafe directly.

### Confirmation Page
<details>
<summary></summary>

![screenshot of confirmation page](docs/documentation/screenshot_features_confirmation.webp)
</details>
When a user completes the contact form, the user is directed to this confirmation page to let them know their form was submitted correctly and to confirmat that the cafe will contact them. The page also provides an alternate contact method (telephone) should urgency be a consideration. The page is responsive and adjusts to screensizes as appropriate. The design is remains the same across different devices.

### Footer
<details>
<summary></summary>

![screenshot of footer](docs/documentation/screenshot_features_footer.webp)
</details>
The footer section includes links to three relevant social media sites for Puss-n-Boba. The links open to new tabs and allow for easy navigation for the user. The footer encourages the user to interact with Puss-n-Boba in other ways and to stay connected to Puss-n-Boba on social media for the latest events, antics of the cats, and updates on featured Boba teas and treats. The design of the footer is responsive and remains consistent across mobile, tablet, and laptop device screen sizes.

### Favicon
<details >
<summary></summary>  

![screenshot favicon](docs/documentation/screenshot_features_favicon.png)
</details>  
A favicon was added to provide further visual support of the Puss-N-Boba brand.


## Future Features
- A future feature would be a booking feature that allows people to prebook tables and timeslots for a portion of the tables to allow visitors to ensure they will have a table available should they visit the cafe.
- As an add-on to this booking feature, an inquiry form to book the cafe for special events or larger groups.
- Also for future development, a feature that allows users to pre-order Boba tea and/or treats for collection/takeaway.

## Technologies
  ### Languages Used
  - HTML5
  - CSS

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

    ![screenshot of index page validation](docs/documentation/screenshot_html_index.png)
    </details>
    <details >
    <summary>About Page HTML Validation</summary>  

    ![screenshot of about page validation](docs/documentation/screenshot_html_about.png)
    </details>
    <details >
    <summary>Menu Page HTML Validation</summary>  

    ![screenshot of menu page validation](docs/documentation/screenshot_html_menu.png)
    </details>
    <details >
    <summary>Meet Cats Page HTML Validation</summary>  

    ![screenshot of meet cats page validation](docs/documentation/screenshot_html_meetcats.png)
    </details>
    <details >
    <summary>Contact Page HTML Validation</summary>  

    ![screenshot of contact page validation](docs/documentation/screenshot_html_contact.png)
    </details>
    <details >
    <summary>Confirmation Page HTML Validation</summary>  

    ![screenshot of confirmation page validation](docs/documentation/screenshot_html_confirmation.png)
    </details>
     
    
  - #### CSS Validation
    No errors were found when passing through the official W3C CSS Jigsaw validator
    <details >
    <summary>CSS Validation</summary>  

    ![screenshot of css validation](docs/documentation/screenshot_css_validator.webp)
    </details>

  - #### Lighthouse Performace Audit via Chrome Dev Tools
    Desktop Lighthouse Performance Audits
    <details >
    <summary>Index Page Lighthouse audit</summary>  

    ![screenshot of index page lighthouse audit](docs/documentation/screenshot_lighthouse_desktop_index.png)
    </details>
    <details >
    <summary>About Page Lighthouse audit</summary>  

    ![screenshot of about page lighthouse audit](docs/documentation/screenshot_lighthouse_desktop_about.png)
    </details>
    <details >
    <summary>Menu Page Lighthouse audit</summary>  

    ![screenshot of menu page lighthouse audit](docs/documentation/screenshot_lighthouse_desktop_menu.png)
    </details>
    <details >
    <summary>Cats Page Lighthouse audit</summary>  

    ![screenshot of cats page lighthouse audit](docs/documentation/screenshot_lighthouse_desktop_cats.png)
    </details>
    <details>
    <summary>Contact Page Lighthouse audit: Audit revealed a Best Practices bug that I was unable to resolve. Please see table of unfixed bugs for details.</summary>  

    ![screenshot of contact page lighthouse audit](docs/documentation/screenshot_lighthouse_desktop_contact.png)
    </details>
    <details>
    <summary>Contact Page Lighthouse bug</summary>  

    ![screenshot of contact page lighthouse audit bug](docs/documentation/screenshot_lighthouse_desktop_contact_bestpractices_bug.png)
    </details>
    <details >
    <summary>Confirmation Page Lighthouse audit</summary>  

    ![screenshot of confirmation page lighthouse audit](docs/documentation/screenshot_lighthouse_desktop_confirmation.png)
    </details>
    <br>

    Mobile Lighthouse Performance Audits
    <details >
    <summary>Index Page Lighthouse audit</summary>  

    ![screenshot of index page lighthouse audit](docs/documentation/screenshot_lighthouse_mobile_index.png)
    </details>
    <details >
    <summary>About Page Lighthouse audit</summary>  

    ![screenshot of about page lighthouse audit](docs/documentation/screenshot_lighthouse_mobile_about.png)
    </details>
    <details >
    <summary>Menu Page Lighthouse audit</summary>  

    ![screenshot of menu page lighthouse audit](docs/documentation/screenshot_lighthouse_mobile_menu.png)
    </details>
    <details >
    <summary>Cats Page Lighthouse audit</summary>  

    ![screenshot of cats page lighthouse audit](docs/documentation/screenshot_lighthouse_mobile_cats.png)
    </details> 
    <details >
    <summary>Contact Page Lighthouse audit: Audit revealed a bug that I was unable to resolve. Please see table of unfixed bugs for details.</summary>  

    ![screenshot of contact page lighthouse audit](docs/documentation/screenshot_lighthouse_mobile_contact.png)
    </details>
    <details >
    <summary>Confirmation Page Lighthouse audit</summary>  

    ![screenshot of confirmation page lighthouse audit](docs/documentation/screenshot_lighthouse_mobile_confirmation.png)
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
  | Missing ul end tag | Menu page | I had left out the close tag for my last set of unordered lists. I closed the tag and the error was resolved. |
  | Nesting a submit button inside an a element | Contact page | I had attempted to test a way to have the contact form direct the user to a confirmation page rather than the Code Institute form validator but it was not a working solution. I removed the anchor tag and the bug was resolved |
  | Div not allowed as a child of the submit button | Contact page | I had previously used a div to style the buttons on the index page. However, divs were not allowed as a child of a submit button in a form. I moved the class to the submit button classes and removed the div and this resolved the bug. |
  | Missmatching labels and ids for the contact form fields | Contact page | I had accidentally used a "-" rather than an "_" when labeling the fields for the contact form. I corrected this mistake and this resolved the bug. |
  | Color Contrast failure for accessibility on orange buttons | Index & Contact pages | After running a Lighthouse audit on Google Dev Tools, I saw that the white text on the orange buttons failed the color contrast analyzer. I adjusted the color for easier readability and accessability. |
  | Hero images are loading to slow and lowering website performance | Index, About, and Menu pages | I uploaded smaller file sized images for the mobile and tablet screen sizes. This resolved the issue. |

  ### Unfixed Bugs
  - Lower SEO Lighthouse score due to Blocking directive: x-robots-tag: noindex, nofollow. I could not find any code matching this in my website. So, I am unsure why the website sends this message to search engines. I will need to do more research to find out what is the cause for this.
  

## Credits
### Content
- Content for website was writing by myself
- Instructions on how to implement Lighthouse Chrome Developer Tool was taken from: https://developer.chrome.com/docs/devtools/lighthouse
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
- Boba Tea Image <a href="https://www.freepik.com/free-ai-image/3d-rendering-chinese-reunion-dinner-drink_95017479.htm#fromView=search&page=1&position=0&uuid=b6560aec-2550-4e00-87e1-d1f93dd01820">Image by freepik</a>
