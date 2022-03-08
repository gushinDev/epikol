const navigationBar = document.querySelector('.topnav');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
    console.log(navigationBar)
    if (navigationBar.className === "topnav") {
        navigationBar.className += " responsive";
    } else {
        navigationBar.className = "topnav";
    }
})