import '../scss/popUp.scss'

export default class PopUpWindow{
  constructor(element){
    this.element = element;
  }

  initPopUp(){
    this.element.addEventListener('click', (e) => {
      this.createWindow();
      document.addEventListener('click', this.closeWindow)
    })
  }

  createWindow(){
    const popUpWindow = document.querySelector('.popUpWindow');
    const description = this.element.querySelector('.description').outerHTML;

    if ( !popUpWindow ){

        const popUpWindow = document.createElement('div');
        popUpWindow.classList.add('popUpWindow');

        setTimeout( () => { popUpWindow.classList.add('showAfter') }, 100)

        const popUpWindowClose = document.createElement('div');
        popUpWindowClose.classList.add('popUpWindowClose');

        const popUpWindowShadow = document.createElement('div');
        popUpWindowShadow.classList.add('popUpWindowShadow');

        popUpWindow.innerHTML = description;
        popUpWindow.appendChild(popUpWindowClose);
        document.body.appendChild(popUpWindow);
        document.body.appendChild(popUpWindowShadow);
    }
  }

  closeWindow(e){
    const popUpWindow = document.querySelector('.popUpWindow');
    const popUpWindowShadow = document.querySelector('.popUpWindowShadow');
    if ( popUpWindow && e.target.classList.contains('popUpWindowClose') || e.target.classList.contains('popUpWindowShadow')){
      popUpWindow.remove();
      popUpWindowShadow.remove();
      document.removeEventListener('click', this.closeWindow)
    }
  }
}