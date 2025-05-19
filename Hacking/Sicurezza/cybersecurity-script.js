document.addEventListener('DOMContentLoaded', function() {
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const sections = document.querySelectorAll('.content-section');
  
  function updateActiveLink() {
    let index = sections.length;
    
    while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
    
    sidebarLinks.forEach((link) => link.classList.remove('active'));
    sidebarLinks[index].classList.add('active');
  }
  
  updateActiveLink();
  window.addEventListener('scroll', updateActiveLink);
  
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetSection.offsetTop - 100,
        behavior: 'smooth'
      });
    });
  });
});