// Change BackGround Header
function scrollHeader() {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 view post height, add the scroll-header class
    // to the header tag
    if(this.scrollY >= 50) { 
        header.classList.add('scroll-header');
      }  else {
        header.classList.remove('scroll-header')
      }
        
}