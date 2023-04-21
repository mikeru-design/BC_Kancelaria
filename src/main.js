import './assets/scss/_settings.scss';
import './assets/scss/main.scss';
import './assets/scss/navbar.scss';
import './assets/scss/header.scss';
import './assets/scss/aboutUs.scss';

import Navbar from './assets/js/navbar';
import showOnScroll from './assets/js/showOnScroll';

const navBar = new Navbar(document.querySelector('#navbar'));
navBar.initAll();

window.addEventListener('scroll', showOnScroll);
