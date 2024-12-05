// aside menu

  document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-block');

    function handleMouseOver(event) {
      const target = event.currentTarget;
      target.style.backgroundColor = '#5932EA';
      target.querySelector('.nav-block').style.color = 'white';
      const arrow = target.querySelector('.arrow');
      if (arrow) {
        arrow.style.filter = 'brightness(0) invert(1)';
      }
    }

    function handleMouseOut(event) {
      const target = event.currentTarget;
      target.style.backgroundColor = '';
      target.querySelector('.nav-link').style.color = '';
      const arrow = target.querySelector('.arrow');
      if (arrow) {
        arrow.style.filter = '';
      }
    }

    navItems.forEach((item) => {
      item.addEventListener('mouseover', handleMouseOver);
      item.addEventListener('mouseout', handleMouseOut);
    });
     })

    const burgerMenu = document.querySelector('.burger-menu');
    const sidebar = document.querySelector('.sidebar');
    
    if (burgerMenu && sidebar) {
      burgerMenu.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        burgerMenu.classList.toggle('active');
      });
    } else {
      console.error('Menu or burger menu element not found!');
    }

 // main 
 
 document.querySelectorAll('.pagination-list li').forEach((item) => {
    item.addEventListener('mouseover', () => {
      document.querySelectorAll('.pagination-list li').forEach((el) => el.classList.remove('active'));
      item.classList.add('active');
    });

    item.addEventListener('mouseout', () => {
      item.classList.remove('active');
    });
  });

  
  document.addEventListener('DOMContentLoaded', () => {
    const data = [
       { name: "Jane Cooper" },
       { name: "Floyd Miles" }, 
       { name: "Ronald Richards" },
       { name: "Marvin McKinney" }, 
       { name: "Jerome Bell" },
       { name: "Kathryn Murphy" },
       { name: "Jacob Jones" }, 
       { name: "Jane Cooper" }
       
    ];
    
    const contentBottomText = document.querySelector('.content-bottom_text');
    
    if (contentBottomText) {
      contentBottomText.textContent = `Showing data 1 to ${data.length} of ${data.length}`;
    }
  })  

  gsap.from(".logo-img", {y: 300, opacity: 0, duration: 1})
  gsap.from(".user-greating img", {duration: 0.5,  rotation: 25, yoyo: true, repeat: -1, ease: "power1.inOut"})
