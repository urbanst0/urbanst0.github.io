document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const cards = document.querySelectorAll('.card'); // Selecciona todos los elementos con la clase 'card'

        cards.forEach(function(card) {
            const alt = card.querySelector('img').getAttribute('alt').toLowerCase();

            if (alt.indexOf(searchTerm) !== -1) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});



// Ventana emergente
$(document).ready(function() {
    // Mostrar el modal al hacer clic en el botón "Adquirir"
    $('#adquirir').click(function() {
        $('#compraModal').modal('show');
    });
});

//cambio de color
document.addEventListener("DOMContentLoaded", function() {
    var colorPickerToggle = document.getElementById('colorPickerToggle');
    var colorPicker = document.getElementById('colorPicker');
    var colorInput = document.getElementById('colorInput');

    // Alternar la visibilidad del selector de color
    colorPickerToggle.addEventListener('click', function() {
        if (colorPicker.style.display === 'none') {
            colorPicker.style.display = 'block';
        } else {
            colorPicker.style.display = 'none';
        }
    });

    // Cambiar el color de fondo cuando se selecciona un color
    colorInput.addEventListener('input', function() {
        document.body.style.backgroundColor = colorInput.value;
    });
});


// Inicialización de modales
var compraModal = new bootstrap.Modal(document.getElementById('compraModal'));
var compraModal = new bootstrap.Modal(document.getElementById('camisaModal'));
var compraModal = new bootstrap.Modal(document.getElementById('gorraModal'));
var compraModal = new bootstrap.Modal(document.getElementById('gorroModal'));
var compraModal = new bootstrap.Modal(document.getElementById('tazaModal'));
var compraModal = new bootstrap.Modal(document.getElementById('bolsoModal'));
var compraModal = new bootstrap.Modal(document.getElementById('cojinModal'));
var carritoModal = new bootstrap.Modal(document.getElementById('carritoModal'));

// Evento click para abrir el modal de compra
document.getElementById('addToCartButton').addEventListener('click', function () {
    compraModal.hide(); // Oculta el modal
    carritoModal.show(); // Muestra el modal de carrito
});

// Evento click para abrir el modal de compra
document.getElementById('addToCartButton2').addEventListener('click', function () {
    compraModal.hide(); 
    carritoModal.show(); 
});

// Evento click para abrir el modal de compra
document.getElementById('addToCartButton3').addEventListener('click', function () {
    compraModal.hide(); 
    carritoModal.show(); 
});

// Evento click para abrir el modal de compra
document.getElementById('addToCartButton4').addEventListener('click', function () {
    compraModal.hide(); 
    carritoModal.show(); 
});

// Evento click para abrir el modal de compra
document.getElementById('addToCartButton5').addEventListener('click', function () {
    compraModal.hide(); 
    carritoModal.show(); 
});

// Evento click para abrir el modal de compra
document.getElementById('addToCartButton6').addEventListener('click', function () {
    compraModal.hide(); 
    carritoModal.show(); 
});

// Evento click para abrir el modal de compra
document.getElementById('addToCartButton7').addEventListener('click', function () {
    compraModal.hide(); 
    carritoModal.show(); 
});


$(document).ready(function() {
    const carrito = []; 

    function actualizarCarrito() {
        const carritoContenido = document.getElementById("carritoContenido"); 
        carritoContenido.innerHTML = ''; 
        
        carrito.forEach((producto, index) => {
            const item = document.createElement("div");
            item.textContent = `${producto.nombre} - $${producto.precio}`;
            carritoContenido.appendChild(item);
        });

        const carritoCantidad = document.getElementById("carritoCantidad");
        carritoCantidad.textContent = `Cantidad de productos en el carrito: ${carrito.length}`;
    }

    // Función para vaciar el carrito
    $("#vaciarCarritoButton").click(function() {
        carrito.length = 0; 
        actualizarCarrito(); 
    });

    $("#addToCartButton").click(function() {
        const cantidad = parseInt(document.getElementById('cantidad').value);
        const producto = {
            nombre: "Camisa UrbanST",
            precio: 6,
            cantidad: cantidad  
        };

        // Agregar el producto al carrito la cantidad de veces correspondiente
        for (let i = 0; i < cantidad; i++) {
            carrito.push(Object.assign({}, producto)); 
        }

        actualizarCarrito(); 
    });

    $("#addToCartButton2").click(function() {
        const cantidad = parseInt(document.getElementById('cantidad1').value);
        const producto = {
            nombre: "Camisa UrbanST modelo 2",
            precio: 6,
            cantidad: cantidad  
        };

        
        for (let i = 0; i < cantidad; i++) {
            carrito.push(Object.assign({}, producto)); 
        }

        actualizarCarrito(); 
    });

    $("#addToCartButton3").click(function() {
        const cantidad = parseInt(document.getElementById('cantidad2').value);
        const producto = {
            nombre: "Gorra UrbanST",
            precio: 6,
            cantidad: cantidad  
        };

        for (let i = 0; i < cantidad; i++) {
            carrito.push(Object.assign({}, producto)); 
        }

        actualizarCarrito(); 
    });

    $("#addToCartButton4").click(function() {
        const cantidad = parseInt(document.getElementById('cantidad3').value);
        const producto = {
            nombre: "Gorro UrbanST",
            precio: 6,
            cantidad: cantidad  
        };

        for (let i = 0; i < cantidad; i++) {
            carrito.push(Object.assign({}, producto)); 
        }

        actualizarCarrito(); 
    });

    $("#addToCartButton5").click(function() {
        const cantidad = parseInt(document.getElementById('cantidad4').value);
        const producto = {
            nombre: "Taza UrbanST",
            precio: 5,
            cantidad: cantidad  
        };

        for (let i = 0; i < cantidad; i++) {
            carrito.push(Object.assign({}, producto)); 
        }

        actualizarCarrito(); 
    });

    $("#addToCartButton6").click(function() {
        const cantidad = parseInt(document.getElementById('cantidad5').value);
        const producto = {
            nombre: "Bolso UrbanST",
            precio: 5,
            cantidad: cantidad  
        };

        
        for (let i = 0; i < cantidad; i++) {
            carrito.push(Object.assign({}, producto)); 
        }

        actualizarCarrito(); 
    });

    $("#addToCartButton7").click(function() {
        const cantidad = parseInt(document.getElementById('cantidad6').value);
        const producto = {
            nombre: "Cojin UrbanST",
            precio: 5,
            cantidad: cantidad  
        };

        for (let i = 0; i < cantidad; i++) {
            carrito.push(Object.assign({}, producto)); 
        }

        actualizarCarrito(); 
    });


});




