   document.addEventListener('DOMContentLoaded', function() {
      const menuToggle = document.querySelector('.menu-toggle');
      const mobileNav = document.querySelector('.mobile-nav');

      menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
      });

      mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileNav.classList.remove('open');
        });
      });
    });