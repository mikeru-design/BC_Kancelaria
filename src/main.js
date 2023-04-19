import './assets/scss/main.scss';
import './assets/scss/navbar.scss';
import './assets/scss/_settings.scss';

import Navbar from './assets/js/navbar';

const navBar = new Navbar(document.querySelector('#navbar'));
navBar.initAll();

