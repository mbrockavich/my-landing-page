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
const sections = document.querySelectorAll("section");
const nav_links = ["Top","Section 1", "Section 2", "Section 3", "Section 4"];

// build the nav
nav_links.forEach((nav_link, b) => {
  let list = document.createElement("li");
  let link = document.createElement("a");
  link.innerHTML = nav_link;
  link.setAttribute("id", `section`);
  link.href = `#section${b+0}`;
  list.appendChild(link)
  nav_bar.appendChild(list);
});

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
