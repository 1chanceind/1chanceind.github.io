window.addEventListener('scroll', () => {
    const texts = document.querySelectorAll('.common');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const fixedBackground = document.getElementById('sec_three');
    const normalContentHeight = document.querySelector('.normal-content').offsetHeight;
    
    if (scrollPosition >= normalContentHeight && scrollPosition < normalContentHeight + windowHeight * texts.length) {
      const index = Math.floor((scrollPosition - normalContentHeight) / windowHeight);
      texts.forEach((text, i) => {
        if (i === index) {
          text.classList.add('active');
        } else {
          text.classList.remove('active');
        }
      });
      fixedBackground.classList.remove('scrolled-sec_three');
    } else if (scrollPosition >= normalContentHeight + windowHeight * texts.length) {
      texts.forEach(text => text.classList.remove('active'));
      fixedBackground.classList.add('scrolled-sec_three');
    } else {
      texts.forEach(text => text.classList.remove('active'));
      fixedBackground.classList.add('scrolled-sec_three');
    }
  });
  
  hbspt.forms.create({
    region: "na1",
    portalId: "24255778",
    formId: "907c794f-0954-43a0-9b18-3e1fff4484a8"
  });

  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar a');
  
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });