const openWorks = document.querySelector('.open_works');

openWorks.addEventListener('click', function(){
    const worksArea = document.querySelector('.works_area_description');

    if(worksArea.style.display === "none") {
        worksArea.style.display = "block";
    } else {
        worksArea.style.display = "none";
    }
});

const openWorks2 = document.querySelector('.open_works2');

openWorks2.addEventListener('click', function(){
    const worksArea = document.querySelector('.works_area_description2');

    if(worksArea.style.display === "none") {
        worksArea.style.display = "block";
    } else {
        worksArea.style.display = "none";
    }
});

const menuOpener = document.querySelector('.menu-opener');

menuOpener.addEventListener('click', function() {
    const navMenu = document.querySelector('nav'); 

    if(navMenu.style.display === "none") {
        navMenu.style.display = 'block';
    } else {
        navMenu.style.display = 'none';
    }
});
