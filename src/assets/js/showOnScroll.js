export default function showOnScroll() {

  const showOnScrollElements = document.querySelectorAll('.showOnScrollElement');
  let showPoint = '';
  const windowHeight = window.innerHeight;
  if( window.matchMedia('(max-width < 992px)') ){
    showPoint = 50;
  } else {
    showPoint = 150;
  }

  showOnScrollElements.forEach( showOnScrollElement => {

    const elementTopPos = showOnScrollElement.getBoundingClientRect().top
    if( elementTopPos < windowHeight - showPoint ){
      showOnScrollElement.classList.add('showOnScroll')
    } else {
      showOnScrollElement.classList.remove('showOnScroll')
    }
  })
}
