const sectionsList = document.querySelectorAll("section");
const navList = document.getElementById('navbar__list');
let fragment = document.createDocumentFragment();

sectionsList.forEach(function(section) {
    let linkText = section.getAttribute('data-nav');
    let item =  document.createElement('li');
    let link = document.createElement('a');
    let text = document.createTextNode(linkText);
    let className = document.createAttribute("class");
    className.value = "menu__link";
    link.setAttributeNode(className);
    let el = document.createAttribute("data-link");
    el.value = section.id;
    link.setAttributeNode(el);
    
    link.appendChild(text);
    item.appendChild(link);
    fragment.appendChild(item);
})

navList.appendChild(fragment);

const ele = document.querySelectorAll('.menu__link');
ele.forEach(function(anchor) {
    anchor.addEventListener('click', (function(){
        const section = document.getElementById(anchor.getAttribute("data-link"));
        section.scrollIntoView({behavior: "smooth"});
    }))
})

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