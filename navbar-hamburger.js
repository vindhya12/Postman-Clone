
const menuBtn = document.querySelector('.menu-btn');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll(".nav-links li");
const a = document.getElementsByClassName("nav-a");
menuBtn.addEventListener('click', () => {
    console.log(navlinks.style.display);
    if (navlinks.style.display.trim() == "") {
        navlinks.style.display = "flex";
    }
    else {
        navlinks.style.display = "";
    }
})
for (const link of links)
    link.addEventListener('click', () => {
        if (navlinks.style.display == "flex") {
            navlinks.style.display = "";
        }
    })
    /* 
function changeColor(e) {
    e.target.style.color = 'rgb(204, 114, 185)';
}
for (const atag of a) {
    atag.addEventListener('click', changeColor);
}
*/