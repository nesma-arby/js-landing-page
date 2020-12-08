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

/**
 * Define Global Variables
 * 
*/

const allSections = document.querySelectorAll('section');
const listContainer = document.getElementById('navbar__list');

/**
 * End Global Variables
 * 
*/


// build the nav

for (const section of allSections) {

    const listItem = document.createElement('li');
    const anchorTag = document.createElement('a');

    const sectionIDAttribute = section.getAttribute('id');
    const sectionDataAttribute = section.getAttribute('data-nav');

    anchorTag.setAttribute('href', `#${sectionIDAttribute}`);
    const textOfAnchor = document.createTextNode(sectionDataAttribute);
    anchorTag.appendChild(textOfAnchor);
    listItem.appendChild(anchorTag);
    listContainer.appendChild(listItem);
}

// End build nav


const links = document.querySelectorAll('#navbar__list li a');


// Add class 'active' to section and link when near top of viewport

document.addEventListener('scroll', function () {

    allSections.forEach((section) => {

        let rect = section.getBoundingClientRect();
        let sectionName = section.getAttribute('data-nav');

        tp = rect.top;

        if (tp >= 0 && tp <= 150) {
            for (const sec of allSections) {
                sec.classList.remove('your-active-class');
            }
            for (const link of links) {
                link.classList.remove('active');
                if (sectionName === link.textContent) {
                    link.classList.add('active');
                }
            }
            section.classList.add('your-active-class');

        }

    });

})

// Scroll to anchor ID using scrollTO event

for (const link of links) {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // prevent default scroll to add smooth scroll
        const href = link.getAttribute("href"); // #section1 for example
        document.querySelector(href).scrollIntoView({
            behavior: "smooth"
        })

    });
}

// function toggle bars for mobile screens
toggleNavBar = () => {
    const list = document.getElementById("navbar__list");
    if (list.style.display === "block") {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
}


