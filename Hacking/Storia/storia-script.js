document.addEventListener('DOMContentLoaded', function() {
  // Animazione per gli eventi della timeline
  const events = document.querySelectorAll('.event');
  
  const animateEvents = () => {
    events.forEach(event => {
      const eventPosition = event.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if(eventPosition < screenPosition) {
        event.style.opacity = '1';
        event.style.transform = 'translateX(0)';
      }
    });
  };
  
  // Inizializza le proprietà per l'animazione
  events.forEach(event => {
    event.style.opacity = '0';
    if(event.classList.contains('odd')) {
      event.style.transform = 'translateX(-50px)';
    } else {
      event.style.transform = 'translateX(50px)';
    }
    event.style.transition = 'all 0.5s ease';
  });
  
  animateEvents();
  window.addEventListener('scroll', animateEvents);
});