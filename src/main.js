import './assets/scss/_settings.scss';
import './assets/scss/main.scss';
import './assets/scss/navbar.scss';
import './assets/scss/header.scss';
import './assets/scss/aboutUs.scss';
import './assets/scss/team.scss';
import './assets/scss/services.scss';

import Navbar from './assets/js/navbar';
import showOnScroll from './assets/js/showOnScroll';
import PopUpWindow from './assets/js/popUp';

const navBar = new Navbar(document.querySelector('#navbar'));
navBar.initAll();

const popUpBtns = document.querySelectorAll('.card');

popUpBtns.forEach(popUpBtn => {
  popUpBtn = new PopUpWindow(popUpBtn);
  popUpBtn.initPopUp();
})

window.addEventListener('scroll', showOnScroll);
