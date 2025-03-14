const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtimImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtimImg.src = "static/images/nav-close.svg"
    } else {
        navBtimImg.src = "static/images/nav-open.svg"

    }
}