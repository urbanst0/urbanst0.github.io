
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        if (name.trim() === '' || comment.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const commentItem = document.createElement('div');
        commentItem.classList.add('comment-item');
        commentItem.innerHTML = `
            <strong>${name}</strong>
            <p>${comment}</p>
        `;

        commentList.appendChild(commentItem);

        // Limpiar campos del formulario
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
    });

    // para las imagenes 
    document.addEventListener('DOMContentLoaded', function() {
        const slider = document.querySelector('.slider');
        let counter = 1;
    
        setInterval(() => {
            slider.style.transform = `translateX(${-counter * 100}%)`;
            counter++;
            if (counter === 7) { // Número total de imágenes + 1
                counter = 1;
                setTimeout(() => {
                    slider.style.transition = 'none';
                    slider.style.transform = 'translateX(0)';
                }, 500);
                setTimeout(() => {
                    slider.style.transition = 'transform 0.5s ease';
                }, 600);
            }
        }, 3000); // Intervalo de cambio de imagen (en milisegundos)
    });
});