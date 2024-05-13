
// Ventana emergente
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos con el atributo data-bs-toggle="popover"
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    // Inicializa los popovers para cada elemento encontrado
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});


//buscar
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const images = document.querySelectorAll('.image-container img'); // Seleccione todas las imágenes dentro de '.image-container'

        images.forEach(function(image) {
            const alt = image.getAttribute('alt').toLowerCase();

            if (alt.includes(searchTerm)) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    });
});

function filtrarImagenes() {
    var categoriaSeleccionada = document.getElementById("filtroCategoria").value;
    var imagenes = document.querySelectorAll("#galeriaImagenes .img-fluid");

    imagenes.forEach(function(imagen) {
        var categoriaImagen = imagen.dataset.categoria;
        if (categoriaSeleccionada === "todas" || categoriaSeleccionada === categoriaImagen) {
            imagen.style.display = "block";
        } else {
            imagen.style.display = "none";
        }
    });
}

document.getElementById("filtroCategoria").addEventListener("change", filtrarImagenes);


//cambiar color
document.addEventListener("DOMContentLoaded", function() {
    var colorPickerToggle = document.getElementById('colorPickerToggle');
    var colorPicker = document.getElementById('colorPicker');
    var colorInput = document.getElementById('colorInput');

    colorPickerToggle.addEventListener('click', function() {
        if (colorPicker.style.display === 'none') {
            colorPicker.style.display = 'block';
        } else {
            colorPicker.style.display = 'none';
        }
    });

    colorInput.addEventListener('input', function() {
        document.body.style.backgroundColor = colorInput.value;
    });
});
