var onClick = function(id) {
    document.querySelector(".nav-item.active").classList.toggle("active");
    document.getElementById(id.substring(5)).classList.toggle("active");
    var prevPage = document.querySelector(".page.active");
    prevPage.classList.toggle("active");
    prevPage.style.height = 0;
    prevPage.style.opacity = 0;
    var page = document.getElementById(id);
    page.classList.toggle("active");
    page.style.height = page.firstElementChild.clientHeight + "px";
    page.style.opacity = "1";
}

var onResize = function() {
    var activePage = document.querySelector(".page.active");
    activePage.style.height = activePage.firstElementChild.clientHeight + "px";
}

var clickCard = function(index) {
    cards[index].style.width = "100%";
}

document.getElementById("home").addEventListener("click", onClick.bind(this, "page-home"));
document.getElementById("projects").addEventListener("click", onClick.bind(this, "page-projects"));
document.getElementById("art").addEventListener("click", onClick.bind(this, "page-art"));
document.getElementById("cv").addEventListener("click", onClick.bind(this, "page-cv"));
document.getElementById("contact").addEventListener("click", onClick.bind(this, "page-contact"));

var cards = document.getElementsByClassName("card");
for(var i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", clickCard.bind(this, i));
    cards[i].addEventListener("transitionend", onResize);
}

window.addEventListener("resize", onResize);

onClick("page-home");