/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


    window.sr=ScrollReveal();
    sr.reveal('.navbar',{
      origin:'bottom',
      distance:'500px',
      duration:1000,
      delay:600

    });
    sr.reveal('.image',{
    origin:'bottom',
    distance:'1000px',
    duration:2000,
    delay:700

  });
  sr.reveal('.content',{
    origin:'right',
    distance:'1000px',
    duration:3000,
    delay:700

  });



  sr.reveal('.heading',{
    origin:'left',
    distance:'1000px',
    duration:1000,
    delay:700

  });
  sr.reveal('.info-container',{
    origin:'right',
    distance:'1000px',
    duration:2000,
    delay:200

  });
  sr.reveal('.count-container',{
    origin:'right',
    distance:'1000px',
    duration:1000,
    delay:200

  });
  sr.reveal('.box-container1',{
    origin:'bottom',
    distance:'1000px',
    duration:1000,
    delay:200

  });
  sr.reveal('.form',{
    origin:'bottom',
    distance:'2000px',
    duration:2000,
    delay:700

  });

  

