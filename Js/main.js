const linkColor = document.querySelectorAll('.nav__link')
function colorLink(){
  linkColor.forEach(l => l.classList.remove('active-link'))
  this.classList.add('active-link')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))
/*=============== SHOW HIDDEN MENU ===============*/
const showMenu = (toggleId, navbarId) =>{
  const toggle = document.getElementById(toggleId),

  navbar = document.getElementById(navbarId)
  if(toggle && navbar){
    let clickCounter = 0;
      toggle.addEventListener('click', ()=>{
          clickCounter++;
          /* Show menu */
          navbar.classList.toggle('show-menu')
          /* Rotate toggle icon */
          toggle.classList.toggle('rotate-icon')
          if(clickCounter%2 == 0){
            const element = document.querySelector('.nav__content');
            element.style.overflow = 'hidden';
          }else{
            function vis(){
              const element = document.querySelector('.nav__content');
              element.style.overflow = 'visible';
            }
            setTimeout(vis, 200);
            
          }
      })
  }
}
showMenu('nav-toggle','nav')
