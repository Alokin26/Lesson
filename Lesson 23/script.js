const mainNavLink= document.querySelector('.main-nav__link') 
const mainNav = document.querySelector('.main-nav')

function Click() { 
mainNavLink.on('click', function(){  
    mainNav.hide();  
  }); 
}

Click()