# Client Side Web Projects

### Problem 1
 **Implement a simple Log-in Page**
In this problem, you are asked to implement a login page similar to the one shown below (name your file login.html):

<img src="https://github.com/Minecakir/ClientSideWeb/assets/67970973/52291f1a-17fa-4cac-9d14-84da2a253967" width="300" />

The login page must be inside a container with a width of 400px centered in the middle of the screen. Notice that the container has a box-shadow around its right and bottom edges. It has a title named “Login” centered on the container.
Below the Login title, we have 3 circular buttons with titles “G”, “f”, “in” representing login with Google, facebook and Linked-in. Each of these buttons is 40x40 pixels. Under the buttons, we have two input fields, one for email and one for password. At the bottom, we have the “Submit” button. The two input fields and the Submit button must be placed inside a HTML form. Notice that both of the input fields and the submit button must extend the full width of the container (100%).
All of the buttons must have “hover” effects as shown below:
<img src="https://github.com/Minecakir/ClientSideWeb/assets/67970973/01c10c85-aa37-49a2-8479-53c7581c1d93" width="500" />
On the left, the cursor is on top of the “f” button and on the right, the cursor is on top of the “Submit” button. In both cases, the cursor turns to “pointer”, the background color turns to “green” and the text color turns to “white”. You must write the necessary CSS rules that make this possible.

**Project Codes** (☞ﾟヮﾟ)☞ [Click](https://github.com/Minecakir/ClientSideWeb/blob/main/Login%20Form/login.html)

**Page** (☞ﾟヮﾟ)☞ [Click](https://minecakir.github.io/ClientSideWeb/Login%20Form/login.html)

### Problem 2
**Implement a Card Component for Recipes and design a Web page that contains two Recipes**
Cards are very popular in Web applications. They are usually used give information about an item such as a product, a recipe etc. In this problem, you are asked to design a card component to show recipes and use your Card component to display two recipes on the screen. Here is how your page should look like (currently the mouse is inside the Details button of the second Card) (name your file cards.html).

<img src="https://github.com/Minecakir/ClientSideWeb/assets/67970973/3d3f7c1f-22f1-4b1f-a712-1950a4118c98" width="600" />

As you can see, both Cards sit inside a container. The container occupies 75% width of its parent (the browser screen) and is centered on the screen. There is a title named “Recipes” centered at the top. Then comes two Card components sitting next to each other. Each card has an image at the top. We have given you the two images that you need for this project. The first image is called stew.jpg and the other one is called curry.jpg. Each card must occupy 45% width of its parent container, and must have fixed height of 290px. The image on the card occupies 100% width of the Card and has a fixed height of 230px. On top of the image, we have a clock icon and the time it takes to cook the recipe. 

To place the icon and the time on top of the image, use the position CSS property. You must make the card’s position relative and the position of the div containing the “icon+25 MIN” absolute and specify the left and top coordinates of this container.
I used left: 15px; right: 15px; for the absolute coordinates for the icon+text. At the bottom of the Card, we have a footer section that contains the name of the recipe and the name of the person who made the recipe. Finally, at the bottom-right corner of the footer section of the card, we have a button that will take us to the details of this recipe. As customary, this button must have a hover effect: When the mouse is on top of this button, the background must become green, the text color white and the cursor must turn to pointer.

**Project Codes** (☞ﾟヮﾟ)☞ [Click](https://github.com/Minecakir/ClientSideWeb/blob/main/Recipes%20Page/cards.html)

**Page** (☞ﾟヮﾟ)☞ [Click](https://minecakir.github.io/ClientSideWeb/Recipes%20Page/cards.html)

### Problem 3
**Implement a Product Page**
In this problem you are asked to implement the following product page (name your file productPage.html):

<img src="https://github.com/Minecakir/ClientSideWeb/assets/67970973/3c2c62d4-a57b-487b-8e0b-5089eb1712eb" width="600" />

As always, the page must be centered inside a container that occupies 75% of the entire screen. The page starts with an image (arduino.jpg that is given with the project) and then a component that gives some information about the product such as the product’s name, where it comes from, Stock code, price etc. Pay special attention to the vertical blue and green bars at different lines of this component. The way to do this is to view each line as a box and put a thick left border with the specified color to the box.
Below the top image + info component is another component that contains a simple unordered list giving some details about the product. The component at the bottom is a table that has 2 columns and 4 rows. Notice how the odd/even rows of the table has different background colors (striped). Also notice that the table rows have a “hover” effect. In the example given above, the mouse is on the third row, which turns the background color to some shade of gray and the text color to white.
Your page must have the same behavior. You must also add the hover effect to the “Sepete Ekle” button. Specifically, the background color of this button must turn blue when the mouse is over it.

**Project Codes** (☞ﾟヮﾟ)☞ [Click](https://github.com/Minecakir/ClientSideWeb/blob/main/Product%20Page/productPage.html)

**Page** (☞ﾟヮﾟ)☞ [Click](https://minecakir.github.io/ClientSideWeb/Product%20Page/productPage.html)

### Problem 4
**Implement a Responsive Landing Page**
In this problem, you are asked to implement a responsive landing page for three screen sizes (name your page
landingPage.html):
|Screen Size| Pixels |
|--|--|
|Small  | < 768|
|Medium  | 768-992 |
|Large| >992 |

The page consists of 5 sections: A header, 3 main sections, and a footer, all stacked vertically on top of each other. Here is how the page will look like for different screen sizes:

<img src="https://github.com/Minecakir/ClientSideWeb/assets/67970973/747b685f-da17-470a-b604-0f5576d45d74" width="700" />

Make the header a flex container so that you can easily center the text & the button. Also notice that for the small screen size, the font-sizes of the text on top of the background image gets smaller so that it fits on a single line. You must write the necessary @media queries to achieve this.
Following the header comes the first main section that contains 6 items. Each item here contains a header centered inside the container and some text that comes below the header. For large screen size, the first 3 items reside on the first line and the last 3 on the second line. For the medium screen sizes, we have 3 rows each containing 2 items. Finally, for the small screen size, we have 6 rows each containing one item. This is how your page must respond to different screen sizes.

The third section contains some information about how things work. This section has a dark background, a header centered in the section and some images and text as shown on the left. When the screen size goes from large to medium as shown in the middle, this section totally changes. The curvy dashed line images that connect other images now disappear from the view, and the other images and the text below these images go into a 2-row by 2-column format. For the small screen, this section moves to a 4-row by 1-column format as shown on the right.

The last main section contains 4 cards, each giving information about different registration and payment plans. Again, all 4 card components are laid-out in a single line for large screens. For medium screens, we have a 2x2 layout, and for small screens we have a 4x1 layout as seen from the figures. The card components make use of the “check” icon. For this I used bootstrap icons. 

**Project Codes** (☞ﾟヮﾟ)☞ [Click](https://github.com/Minecakir/ClientSideWeb/blob/main/Landing%20Page/landingPage.html)

**Page** (☞ﾟヮﾟ)☞ [Click](https://minecakir.github.io/ClientSideWeb/Landing%20Page/landingPage.html)

### Problem 5
**Implement a Responsive Product Page**
In this problem, you are asked to implement a responsive product page from “hepsiburada.com” that responds to two screen sizes as follows:

|Screen Size| Pixels |
|--|--|
| Small and Medium | <992 |
| Large | >=992 |
<img src="https://github.com/Minecakir/ClientSideWeb/assets/67970973/8abc09ea-9aea-44c0-9998-caadeec933db" width="800" />
As you can see from the figures above, the page consists of two containers each occupying 50% of the full width for the large screen size. On the left, we have the product image and some information about the product laid out in two columns stacked on top of each other, and on the right we have other information about the product. When the screen size is less than 992 pixels, i.e., for small and medium screens, the page goes into a single column format as shown on the right.

This page contains several icons such as the full yellow star, half yellow star, shopping cart, bookmark, arrows etc. You can find these icons in the famous fontawesome icons library (https://fontawesome.com/). 

**Project Codes** (☞ﾟヮﾟ)☞ [Click](https://github.com/Minecakir/ClientSideWeb/blob/main/Hepsiburada%20Product%20Page/productPage.html)

**Page** (☞ﾟヮﾟ)☞ [Click](https://minecakir.github.io/ClientSideWeb/Hepsiburada%20Product%20Page/productPage.html)

### Problem 6
**Implement a Digital Clock**
In this problem, you are asked to implement a digital clock that sits in the middle of your screen as follows:
No matter what the size of screen may be, the clock must always be centered on the screen horizontal and vertically as shown above. This is a running clock. That is, you must update the time every second using some JS code. We are giving you the background image to be used for this project. The width and height of the containers displaying the hours, minutes and seconds is 100x100px. The height of the blue/green boxes seen at the bottom is 40px. The gap between different boxes is 15px. Notice that the text “DIGITAL CLOCK” is centered on top of the digits, not on top of all boxes. Furthermore, the boxes displaying the digits and the other text are transparent. That is, we can see the background through these boxes. You can achieve this by declaring the background using RGBA as follows: 
background: rgba(0, 0, 200, 0.5);

<img src="https://github.com/Minecakir/ClientSideWeb/assets/67970973/b63505ef-35cc-406e-9a2f-cfe7fad0cc58" width="600" />

This is what I used for the background color of the blue boxes seen at the bottom of the numbers. As you can see, the background is pure blue with a transparency/opacity of 0.5, which lets us see through. Put all your CSS styles and JS code inside a single file named “clock.html”.

**Project Codes** (☞ﾟヮﾟ)☞ [Click](https://github.com/Minecakir/ClientSideWeb/blob/main/Clock/clock.html)

**Page** (☞ﾟヮﾟ)☞ [Click](https://minecakir.github.io/ClientSideWeb/Clock/clock.html)

### Problem 7 
**Implement a Responsive Page to Calculate YKS Scores**
In this problem, you are asked to implement a responsive page to calculate YKS scores that responds to two screen sizes as follows:
|Screen Size| Pixels |
|--|--|
| Small and Medium | <992 |
| Large | >=992 |

Here is how the page will look like for the two screen sizes (name your page yks-score.html). As you can see, the screen simply goes from a two-column layout to a one-column layout when the screen is small or medium (< 992px).

<img src="https://github.com/Minecakir/ClientSideWeb/assets/67970973/5c456ba2-6a0b-435a-8231-09c92a7aa8ad" width="800" />

As you can see, we have input fields for each section of the exam, where we can enter the number of correct and the number of false answers we got in that section. You can also see the total number of questions in each section below the section title in blue color. If the total number of correct and false answers for a particular section exceeds this number, you have to alert the user with an error box so that the user can correct it. If the user does not enter any values for a particular input field, assume that it is 0. Furthermore, make sure that the user can only enter numbers from the input fields.

For “Ortaogretim Basari Puani”, the user must enter a value between 0-100. You should simply multiply this number by 5 and that becomes the user’s OBP. OBP cannot be changed by the user.
After the user enters all values correctly and presses “Hesapla”, you should compute the user’s TYT, SAY, EA, and SÖZ scores and display them in the “SONUÇLAR” section. Here are the formulas to calculate the scores:

- OBP = 5*DiplomaNotu

For the sake of simplicity, we will assume that each “net” answer in TYT is worth 5 points, and each “net” answer in other tests is worth 6.25 points. So, the base score (Ham Puan) for TYT is calculated as follows:

- TYT Ham Puan = 5*(Türkçe + Sosyal Bilimler + Temel Matematik + Fen Bilimleri)

To calculate “Yerleştirme Puanı”, you take “Diploma Notu” and multiply it with 0.6 and add it to the “Ham Puan”. If the user checks “Geçen sene bir bölüme yerleştim” checkbox, then you multiply “Diploma Notu” with 0.3 and add it to “Ham Puan”.
AYT Puan is also calculated similarly but by multiplying each “net” answer with 6.25. Thus, Ham Puan for AYT SAY is calculated as follows:

- AYT SAY Ham Puan = 6.25*(Matematik + Fizik + Kimya + Biyoloji)

Then, your final SAY Ham Puan is calculated by taking 40% of your TYT score and 60% of your AYT SAY score as follow:

- SAY Ham Puan = 0.6*(AYT SAY Ham Puan) + 0.4*(TYT Ham Puan)
To calculate SAY Yerleştirme Puanı, you then add “Diploma notu” as we described above.

AYT SÖZ score is calculated as follows:
- AYT SÖZ Ham Puan = 6.25*(Türk Dili ve Edebiyatı + Tarih-1 + Coğrafya-1 + Tarih-2 + Coğrafya-2 + Felsefe Grubu + Din Kültürü ve Ahlak Bilgisi / Ek Felsefe Grubu)

Then, your final SÖZ Ham Puan is calculated by taking 40% of your TYT score and 60% of your AYT SÖZ score.
Finally, AYT EA score not only includes AYT SÖZ score, put also your score from the AYT Matematik Test. So, here is how you calculate it:

- AYT EA Ham Puan = (AYT SÖZ Ham Puan + 12.5*(AYT Matematik Net))*0.5

Create a file named “yks.html” and put all HTML, CSS and JS code in that file.

**Project Codes** (☞ﾟヮﾟ)☞ [Click](https://github.com/Minecakir/ClientSideWeb/blob/main/YKS%20Calculator/yks.html)

**Page** (☞ﾟヮﾟ)☞ [Click](https://minecakir.github.io/ClientSideWeb/YKS%20Calculator/yks.html)

### Problem 8
**Implement a Tab Changer**
In this problem, you are asked to implement a Component that has 4 Tabs similar to the one shown below:

<img src="https://github.com/Minecakir/ClientSideWeb/assets/67970973/878b2b1d-12c6-426a-af2c-a094e7554e49" width="400" />

The tabs must sit inside a container of width 500px centered on the window with Tab1 being active and all other tabs being in-active. The user should be able to switch to any tab by pressing the appropriate Tab area. For example, here is how the screen should look like when Tab2, Tab3 or Tab4 is active respectively:

<img src="https://github.com/Minecakir/ClientSideWeb/assets/67970973/a23968ad-3d11-4b82-a1f1-8c55f5e8c20d" width="700" />

Notice how the active tab is always highlighted. Also notice the border between different Tab areas (the vertical black line that separates different tab areas). The way to implement this Tab Changer component is to have all 4 tabs inside a container. At any time, only the user-chosen Tab will be visible (the active tab) and all other tabs will be invisible. You can make any HTML element invisible by setting its display property to none, i.e., “display: none”. To make an HTML element visible, simply set its display property to a value other than “none”, e.g., block. You should keep track of the active tab and change the visibility of the appropriate tab content visible/invisible in JS.
Put all your CSS styles and JS code inside a single file named “tabs.html”.

**Project Codes** (☞ﾟヮﾟ)☞ [Click](https://github.com/Minecakir/ClientSideWeb/blob/main/Tabs/tabs.html)

**Page** (☞ﾟヮﾟ)☞ [Click](https://minecakir.github.io/ClientSideWeb/Tabs/tabs.html)

### Problem  9 
**Implement a Calculator**
In this problem, you are asked to implement a calculator that performs basic arithmetic operations such as addition, subtraction, multiplication and division, and will have two modes of operation: A light mode and a dark mode as shown below:

<img src="https://github.com/Minecakir/ClientSideWeb/assets/67970973/3dcb6221-3c46-444f-b7c8-103bea55176e" width="500" />

The calculator must sit inside a container with a width of 360px centered on the screen. The calculator itself is a grid container with 6 rows and 4 columns (that’s how I implemented it).
The first row of the grid has a height of 30px and contains the title “Calculator” on the left and two icons on the right: The first icon (arrow-rotate-right) is used to change the current operational mode and the second icon shows the current mode. The “light” mode is indicated by the “sun” icon and the “dark” mode is indicated by the “moon” icon.

Notice that only one of the sun/moon icons is visible at any time depending on the operation mode. Specifically, in the light mode, we should see the “sun” icon, and in the dark mode, we should see the “moon” icon.
The second row of the grid has a height of 100px and shows the current operation begin performed and its result if it is evaluated. In the figures, the user has entered in 12 * 3 =, which evaluates to 36. The result section consists of two rows: At the top we see the current operation (12 * 3 =), and at the bottom we see the result of the current operation (36). Notice that I used different font sizes for the first and second row in the result section. Also notice that the result section has a thick border and a bluish background, which changes depending on the operation mode.
Below the result section we have a 4x4 grid with each grid cell containing one button. I set the height of each button to 50px. Also, each grid column has the same width. The buttons must be placed in the same order as shown above. The buttons must also have a hover effect. Simply set the background color of the buttons to “#999” during hover. Also notice that “=” button has a different background and hover color.

**Project Codes** (☞ﾟヮﾟ)☞ [Click](https://github.com/Minecakir/ClientSideWeb/tree/main/Calculator)

**Page** (☞ﾟヮﾟ)☞ [Click](https://minecakir.github.io/ClientSideWeb/Calculator/calc.html)

