// Store all section elements in a sectionsList
const sectionsList = document.querySelectorAll("section");
// Store unordered list of the navigation in a navList
const navList = document.getElementById('navbar__list');

let fragment = document.createDocumentFragment();

// Looping on sections to make a li element for each section in the navigation bar
sectionsList.forEach(function(section) {
    let linkText = section.getAttribute('data-nav');  // Store value of data-nav in linkText to use it later
    let item =  document.createElement('li');  // Create li element
    let link = document.createElement('a');  // Create anchor element
    let text = document.createTextNode(linkText);  // Create text node
    let className = document.createAttribute("class");  // Create class attribute
    className.value = "menu__link";  //  class="menu__link"
    link.setAttributeNode(className);  // Set the class attribute to the anchor 
    let el = document.createAttribute("data-link");  //  Create data-link attribute
    el.value = section.id;  // data-link="section1" --> for first cycle and so on ...
    link.setAttributeNode(el);  //  Set the data-link attribute to the anchor 
    
    link.appendChild(text);  // Put the text inside the anchor
    item.appendChild(link);  // Put the anchor inside the list item
    fragment.appendChild(item);  // Put the list item inside fragment 
})

navList.appendChild(fragment);  // Put all list items inside ul

// Make the scrolling more smooth
const ele = document.querySelectorAll('.menu__link');
ele.forEach(function(anchor) {
    anchor.addEventListener('click', (function(){
        const section = document.getElementById(anchor.getAttribute("data-link"));
        section.scrollIntoView({behavior: "smooth"});
    }))
})

// Change bg of section and it's link in nav when found in viewport
document.addEventListener('scroll', function(e) {
    sectionsList.forEach(function(section) {
        let rect = section.getBoundingClientRect();
        section.classList.remove('active');
        if (rect.top >= 0 && rect.bottom <= 1000) {
            section.classList.add('active');
        }
    });
    ele.forEach(function(item) {
        item.classList.remove('active-link');
        sectionsList.forEach(function(section) {
            if (item.textContent == section.getAttribute("data-nav") && section.classList.contains('active')) {
                item.classList.add('active-link');
            }
        })
    })
});