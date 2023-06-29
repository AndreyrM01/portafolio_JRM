const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')


  if(navToggle){
    navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
  }

  if(navClose){
    navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
  }

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
  e.preventDefault()

  emailjs.sendForm('service_5x17gjev', 'template_md8rnd1', '#contact-form', 'Kp44_MbtEe_tx26Wd')
    .then(()=>{
      contactMessage.textContent = 'Message sent successfully'

      setTimeout(() =>{
        contactMessage.textContent = ''
      }, 5000)

      contactForm.reset()

    }, () =>{
      contactMessage.textContent = 'Message not sent (service error)'
    })
}

contactForm.addEventListener('submit', sendEmail)
