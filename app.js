const elementsCibles = document.querySelectorAll('.elementCible');
elementsCibles.forEach(elementCible => {
    const elementAafficher = document.querySelector('.elementAafficher');
    elementCible.addEventListener('mouseenter', () => {
        const textToDisplay = elementCible.getAttribute('data-text');
        
        elementAafficher.textContent = textToDisplay;
        elementAafficher.style.display = 'block';
    });

    elementCible.addEventListener('mouseleave', () => {
        elementAafficher.style.display = 'none';
    });
});