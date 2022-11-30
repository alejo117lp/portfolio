window.onload = function () {
  const menu_h = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile_nav')

  menu_h.addEventListener('click', function(){
    menu_h.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  })
}