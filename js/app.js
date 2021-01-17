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

// Add class 'active' to section when near top of viewport

// What's being viewed
const section = document.querySelector('.landing__container');
const page = section.getBoundingClientRect();

document.addEventListener('scroll', function (){
  const isInViewport = page.top <= 0 &&
          page.top <= 0 ;
  console.log(isInViewport);
});

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
