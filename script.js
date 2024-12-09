document.addEventListener('DOMContentLoaded', function() {
    const productListContainer = document.getElementById('product-list');
    const detailsContainer = document.getElementById('details-container');
    const detailsName = document.getElementById('details-name');
    const detailsImage = document.getElementById('details-image');
    const detailsPrice = document.getElementById('details-price');
    const detailsDescription = document.getElementById('details-description');

    if (!detailsContainer || !detailsName || !detailsImage || !detailsPrice || !detailsDescription) {
        console.error('Uno o más elementos de detalles no fueron encontrados en el DOM.');
        return;
    }

    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data.products)) {
                data.products.forEach(product => {
                    const productContainer = document.createElement('div');
                    productContainer.classList.add('products-container');

                    const productImage = document.createElement('img');
                    productImage.src = product.image;
                    productImage.alt = product.alt;

                    const productName = document.createElement('h2');
                    productName.textContent = product.name;

                    const infoLink = document.createElement('a');
                    infoLink.href = `product.html?id=${product.id}`;
                    infoLink.classList.add('button-product-container');
                    infoLink.textContent = 'Más información';

                    const buyLink = document.createElement('a');
                    buyLink.href = '#';
                    buyLink.classList.add('button-product-container');
                    buyLink.textContent = 'Comprar';

                    productContainer.appendChild(productImage);
                    productContainer.appendChild(productName);
                    productContainer.appendChild(infoLink);
                    productContainer.appendChild(buyLink);

                    productListContainer.appendChild(productContainer);
                });
            } else {
                console.error('Data no es un array válido.');
            }
        })
        .catch(error => console.error('Error al cargar los productos:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data.products)) {
                console.log('Lista de productos disponibles:');
                data.products.forEach(product => {
                    console.log(`ID: ${product.id}`);
                    console.log(`Nombre: ${product.name}`);
                    console.log(`Precio: ${product.price}`);
                    console.log(`Descripcion: ${product.description}`)
                    console.log(`Imagen: ${product.image}`);
                    console.log('---');
                });
            } else {
                console.error('Data no es un array válido.');
            }
        })
        .catch(error => console.error('Error al cargar los productos:', error));
});

function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const phonenumber = document.getElementById('phonenumber').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
  
    if (nombre === '' || email === '' || phonenumber === '' || asunto === '' || mensaje === '') {
      console.log('Por favor, complete todos los campos.');
      return false;
    } else {
      console.log('Formulario completo.');
      return true;
    }
  }

  function validarFormularioResena() {
    const nombre = document.getElementById('nombre-resena').value.trim();
    const email = document.getElementById('email-resena').value.trim();
    const mensaje = document.getElementById('mensaje-resena').value.trim();
  
    if (nombre === '' || email === '' || mensaje === '') {
      console.log('Por favor, complete todos los campos.');
      return false;
    } else {
      console.log('Formulario completo.');
      return true;
    }
  }
  