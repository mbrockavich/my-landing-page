/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

// Global Variables
const nav_bar = document.getElementById("navbar__list");
const nav_links = ["Top","Section 1", "Section 2", "Section 3", "Section 4"];
const sections = document.querySelectorAll("section")

// build the nav
nav_links.forEach((nav_link, b) => {
  let list = document.createElement("li"); //creates the <li> items
  let link = document.createElement("a"); //creates the <a> items
  link.innerHTML = nav_link;
  link.setAttribute("id", `section`);
  link.href = `#section${b+0}`;
  list.appendChild(link) //adds the <a> inside the <li>
  nav_bar.appendChild(list); //adds the <li> inside the nav_bar<ul>
});

// function for my-active-class
function activeClass(){
//  console.log(sections); // debug console logs
  sections.forEach((sections, c) => {
    let section = document.querySelector(`#section${c+0}`);
    let bounding = section.getBoundingClientRect();
//    console.log(sections, bounding.top, bounding.bottom); //debug console logs
    if (bounding.top < 1 && bounding.bottom > 1){ //adding active class
      section.classList.add('your-active-class');
    }
    else {
      if (section.classList.contains('your-active-class')){ //removing active class
        section.classList.remove('your-active-class')
      }
    }
  })
};

document.addEventListener("scroll", activeClass) // run function on scroll



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
