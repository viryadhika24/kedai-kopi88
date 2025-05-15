//toggle active
const navbar_nav = document.querySelector('.navbarNav');
document.querySelector('#hamburgerMenu').onclick = () => {
    navbar_nav.classList.toggle('active');
};

//klik di luar sidebar
const hamburger = document.querySelector('#hamburgerMenu');
document.addEventListener('click', function(e){
    if (!hamburger.contains(e.target) && !navbar_nav.contains(e.target)) {
        navbar_nav.classList.remove('active');
    }
});

//clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
};