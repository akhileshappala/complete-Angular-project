#Angular project - Below concepts are covered

This project was build on Angular, covering the concepts of angular framework

Concepts covered : 
<ol>
<li>Components architecture </li>
<li>Data Binding </li>
<li>Angular services & Dependency Injection</li>
<li>Angular Routing</li>
<li>Single page applications</li>
<li>Angular Template-driven Forms</li>
<li>Angular Reactive Forms</li>
<li>Angular and Promise </li>
<li>Angular and RxJS, Reactive programming</li>
<li>Client-Server Communication</li>
<li>Angular and HTTP </li>
<li>Animation and Directives</li>
<li>Testing Angular Applications </li>
 
  <li> will be adding morerelated to testing (mocking)</li>
</ol>


### Prerequisites
1. Install node on your machine from https://nodejs.org.
2. Check the versions using 

> node -v
> npm -v
3. Install angular-cli using below command in terminal

>   `npm install -g @angular/cli@6.2.1`
>   
Note : Use _sudo_ on a Mac and Linux

   
   

### Initializing a project
1. At a convenient location on your computer, create a folder named _Angular_ and move into that folder.
  

>  ng new conFusion --style=scss

  2. This should create a new folder named _conFusion_ within your _Angular_ folder and create the Angular application in that folder.
  3. Move to the conFusion folder and type the following at the prompt:
  
> ng serve --open

  4. To configure your project to use Angular material, type the following at the prompt to install Angular Material, Angular Animations and HammerJS:

> npm install --save hammerjs@2.0.8

5.   Next, include the following into the <head> of _index.html_ to make use of Material Design icons:

    <link  href="https://fonts.googleapis.com/icon?family=Material+Icons"  rel="stylesheet">
6. Next, install Angular Flex Layout as follows:

> npm install --save @angular/flex-layout@6.0.0-beta.18

### Components and Architecture
Below are the components used in the project. Each component has been explained along with its features and position to understand easily. 
1.  about --> Router link to the about button in header
2. contact --> Router link to the contact button in header
3. dishdetail --> A subcomponent which will be executed on click on any item on menu.
4. footer -->  Footer contains links , address and social media icons redirection in the web application which will be present for each page.
5. header --> Contains nav bar with icon and login button to access application.
6. home --> landing page for application showcasing the 3 cards with image and details.
7. login --> A modal with input fields to enter username and passcode
8. menu --> Router link to the about button in header. This contains 4 items which are dishes (each item is from dish-details component)

### Data Binding
All over the project this feature has been used to display the data like names and details regarding dishes in several pages like home, about, menu, contact.
You can check the code in html which looks with double braches {{variable here}} 



 
