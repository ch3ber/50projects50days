const cards = document.querySelectorAll('.card');

cards.forEach(card => {
   card.addEventListener('click', () => {
      cards.forEach(card => card.classList.remove('card--expanded'))
      card.classList.add('card--expanded')
   });
});

