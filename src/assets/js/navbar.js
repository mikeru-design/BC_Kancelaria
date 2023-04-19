export default class Navbar{
  constructor(navbar){
    this.navIcon = navbar.querySelector('#nav-icon');
    this.slideMenu = navbar.querySelector('.slideMenu');
    this.logoMark = navbar.querySelector('.menuLink');
    this.mediaQuery = window.matchMedia('(max-width: 992px)')
  }

  initAll(){
    this.initNavIcon();
    this.initSlideMenu();
    this.initLogoMark();
  }

  initNavIcon(){
    if ( this.mediaQuery.matches ){
      this.navIcon.addEventListener('click', () => {
        this.navIcon.classList.toggle('open');
        this.slideMenu.classList.toggle('toggleMenu');
      });
    }
  }

  initSlideMenu(){
    this.slideMenu.addEventListener('click', (e) => {
      if( e.target.parentElement.classList.contains('menuLink') && this.mediaQuery.matches ){
        this.slideMenu.classList.toggle('toggleMenu');
        this.navIcon.classList.toggle('open')
      }
    });
  }

  initLogoMark(){
    this.logoMark.addEventListener('click', () => {
      if( this.navIcon.classList.contains('open') && this.mediaQuery.matches ){
        this.navIcon.classList.remove('open');
      }
      if( this.slideMenu.classList.contains('toggleMenu') && this.mediaQuery.matches ){
        this.slideMenu.classList.remove('toggleMenu');
      }
    });
  }
}