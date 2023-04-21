export default function showOnScroll() {

  const showOnScrollElements = document.querySelectorAll('.showOnScrollElement');
  const showPoint = 150;
  const windowHeight = window.innerHeight;

  showOnScrollElements.forEach( showOnScrollElement => {

    const elementTopPos = showOnScrollElement.getBoundingClientRect().top
    if( elementTopPos < windowHeight - showPoint ){
      showOnScrollElement.classList.add('showOnScroll')
    } else {
      showOnScrollElement.classList.remove('showOnScroll')
    }
  })
}
