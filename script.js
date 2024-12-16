document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.endsWith('productos.html')) {
        const productListContainer = document.getElementById('product-list');
        const detailsContainer = document.getElementById('details-container');
        const detailsName = document.getElementById('details-name');
        const detailsImage = document.getElementById('details-image');
        const detailsPrice = document.getElementById('details-price');
        const detailsDescription = document.getElementById('details-description');

        if (!productListContainer) {
            console.error('El contenedor de la lista de productos no fue encontrado en el DOM.');
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

                        const productPrice = document.createElement('p');
                        productPrice.textContent = 'PRECIO: $' + product.price;
                        productPrice.classList.add('product-price-container')

                        const buyLink = document.createElement('a');
                        buyLink.href = `product.html?id=${product.id}`;
                        buyLink.classList.add('button-product-container');
                        buyLink.textContent = 'Comprar';

                        productContainer.appendChild(productImage);
                        productContainer.appendChild(productName);
                        productContainer.appendChild(productPrice);
                        productContainer.appendChild(buyLink);

                        productListContainer.appendChild(productContainer);
                    });
                } else {
                    console.error('Data no es un array válido.');
                }
            })
            .catch(error => console.error('Error al cargar los productos:', error));
    }

    if (window.location.pathname.endsWith('productos.html')) {
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }
});


document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.endsWith('product.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                const product = data.products.find(p => p.id === productId);

                if (product) {
                    document.getElementById('product-title').textContent = product.name;
                    document.getElementById('details-name').textContent = product.name;
                    document.getElementById('details-id').textContent = product.id; 
                    document.getElementById('details-image').src = product.image;
                    document.getElementById('details-image').alt = product.alt;
                    document.getElementById('details-price').textContent = `Precio: $${product.price}`;
                    document.getElementById('details-description').textContent = product.description;
                } else {
                    fetch(`https://api.mercadolibre.com/items/${productId}`)
                        .then(response => response.json())
                        .then(product => {
                            console.log(product);
                            document.getElementById('details-id').textContent = product.id; 
                            
                            const productContainer = document.createElement('div');
                            productContainer.classList.add('products-container');

                            const productImage = document.createElement('img');
                            document.getElementById('details-image').src = product.thumbnail;
                            productImage.src = product.thumbnail;
                            productImage.alt = product.title;

                            const productName = document.createElement('h2');
                            productName.textContent = product.title;
                            document.getElementById('details-name').textContent = product.title;
                        
                            const productPrice = document.createElement('p');
                            productPrice.textContent = 'PRECIO: $' + product.price;
                            document.getElementById('details-price').textContent = `Precio: $${product.price}`;

                            const buyLink = document.createElement('a');
                            buyLink.href = `product.html?id=${product.id}`;
                            buyLink.classList.add('button-product-container');
                            buyLink.textContent = 'Comprar';
                    })
                }
            })
            .catch(error => console.error('Error al cargar el producto:', error));
    }
});

// FUNCION CARRITO 
document.addEventListener('DOMContentLoaded', function () {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeCartButton = document.getElementById('close-cart');
    const cartCountElement = document.getElementById('cart-count');
    const clearCartButton = document.getElementById('clear-cart');
  
    // Mostrar el carrito
    cartIcon.addEventListener('click', function (event) {
      event.preventDefault();
      updateCartModal();
      cartModal.classList.toggle('hidden');
    });
  
    // Cerrar el carrito
    closeCartButton.addEventListener('click', function () {
      cartModal.classList.add('hidden');
    });
  
    // Vaciar carrito
    clearCartButton.addEventListener('click', function () {
      cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartModal();
      updateCartCount();
      console.log('Carrito vaciado')
    });
  
    // Actualizar el contador de productos
    function updateCartCount() {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCountElement.textContent = totalItems;
    }
  
    // Inicializar contador de carrito
    updateCartCount();
});

// FUNCION CARRITO para manejo de carrito y overlay
document.addEventListener('DOMContentLoaded', function () {
    const cartButton = document.querySelector('.cart-button');
    const cartModal = document.querySelector('.cart-modal');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeModalButton = document.querySelector('.cart-modal-close');

    // Mostrar el carrito y el overlay
    cartButton.addEventListener('click', () => {
        cartModal.style.display = 'block';
        cartOverlay.classList.add('active');
    });

    // Ocultar el carrito y el overlay
    closeModalButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
        cartOverlay.classList.remove('active');
    });

    // También cerrar el carrito al hacer clic en el overlay
    cartOverlay.addEventListener('click', () => {
        cartModal.style.display = 'none';
        cartOverlay.classList.remove('active');
    });
});

// BOTON ANIADIR AL CARRITO

document.addEventListener('DOMContentLoaded', function () {
    // Inicializar carrito desde localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Referencias a elementos del DOM
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeCartButton = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCountElement = document.getElementById('cart-count');
    const clearCartButton = document.getElementById('clear-cart');

    // Mostrar/Ocultar el carrito
    cartIcon.addEventListener('click', function (event) {
        event.preventDefault();
        updateCartModal();
        cartModal.classList.toggle('hidden');
    });

    closeCartButton.addEventListener('click', function () {
        cartModal.classList.add('hidden');
    });

    // Vaciar carrito
    clearCartButton.addEventListener('click', function () {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartModal();
        updateCartCount();
    });

    // Actualizar el contador de productos
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }

    // Agregar producto al carrito
    document.querySelectorAll('.button-product-container-details').forEach(button => {
        button.addEventListener('click', function () {
            const productId = document.getElementById('details-id').innerHTML;
            const quantityInput = document.getElementById('quantity');
            const quantity = parseInt(quantityInput?.value || 1, 10);

            fetch('products.json')
                .then(response => response.json())
                .then(data => {
                    const product = data.products.find(p => p.id === productId);

                    if (product) {
                        const existingItem = cart.find(item => item.id === product.id);
                        if (existingItem) {
                            existingItem.quantity += quantity;
                        } else {
                            cart.push({ ...product, quantity });
                        }

                        localStorage.setItem('cart', JSON.stringify(cart));
                        updateCartModal();
                        updateCartCount();
                        console.log(`Producto "${product.name}" agregado al carrito, Cantidad "${quantity}"`);
                    } else {
                        fetch(`https://api.mercadolibre.com/items/${productId}`)
                            .then(response => response.json())
                            .then(product => {
                                if (product) {
                                    const existingItem = cart.find(item => item.id === product.id);
                                    if (existingItem) {
                                        existingItem.quantity += quantity;
                                    } else {
                                        cart.push({ ...product, quantity });
                                    }
                                    localStorage.setItem('cart', JSON.stringify(cart));
                                    updateCartModal();
                                    updateCartCount();
                                    console.log(`Producto "${product.title}" agregado al carrito, Cantidad "${quantity}"`);
                                } else {
                                    console.error('Producto no encontrado en la API de MercadoLibre.');
                                }
                            })
                        }
                })
                .catch(error => console.error('Error al cargar los productos:', error));
        });
    });

    // Eliminar producto del carrito
    cartItemsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-item')) {
            const productId = event.target.id;
            cart = cart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartModal();
            updateCartCount();
        }
    });

    // Inicializar contador y modal
    updateCartCount();
    updateCartModal();
});


////

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

  function updateCartModal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let precioFinal = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>El carrito está vacío.</p>';
        return;
    }

    cart.forEach(item => {
        precioFinal += item.price * item.quantity;
    });

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const imageSrc = item.thumbnail || item.image;
        const imageAlt = item.title || item.alt;
        cartItem.innerHTML = `
          <img src="${imageSrc}" alt="${imageAlt}">
          <div>
            <p>${item.title || item.name}</p>
            <span>Cantidad: ${item.quantity}</span>
          </div>
          <p>$${item.price * item.quantity}</p>
          <button class="remove-item" id="${item.id}">Eliminar</button>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    const cartTotal2 = document.createElement('div');
    cartTotal2.classList.add('final-price');
    cartTotal2.innerHTML = `
      <div>
        <p>TOTAL: $${precioFinal}</p>
      </div>
    `;
    cartItemsContainer.appendChild(cartTotal2);
}


//
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.endsWith('productos.html')) {
        const productListContainer = document.getElementById('product-list');

        if (!productListContainer) {
            console.error('El contenedor de la lista de productos no fue encontrado en el DOM.');
            return;
        }

        // Función para obtener productos de las categorías seleccionadas
        async function fetchProductsByCategories() {
            const apiUrlBase = `https://api.mercadolibre.com/sites/MLA/search`;
            const categories = ["MLA12219", "MLA4832"];
            const promises = categories.map(category =>
                fetch(`${apiUrlBase}?category=${category}`).then(response => response.json())
            );

            try {
                const results = await Promise.all(promises);
                const allProducts = results.flatMap(result => result.results); // Combinar todos los productos
                return allProducts.slice(0, 16); // Limitar a 16 productos
            } catch (error) {
                console.error("Error al acceder a la API de MercadoLibre:", error);
                return [];
            }
        }

        // Mostrar productos en el DOM
        fetchProductsByCategories().then(products => {
            if (products.length > 0) {
                products.forEach(product => {
                    const productContainer = document.createElement('div');
                    productContainer.classList.add('products-container');

                    const productImage = document.createElement('img');
                    productImage.src = product.thumbnail;
                    productImage.alt = product.title;

                    const productName = document.createElement('h2');
                    productName.textContent = product.title;

                    const productPrice = document.createElement('p');
                    productPrice.textContent = 'PRECIO: $' + product.price;
                    productPrice.classList.add('product-price-container');

                    const buyLink = document.createElement('a');
                    buyLink.href = `product.html?id=${product.id}`;
                    buyLink.classList.add('button-product-container');
                    buyLink.textContent = 'Comprar';

                    productContainer.appendChild(productImage);
                    productContainer.appendChild(productName);
                    productContainer.appendChild(productPrice);
                    productContainer.appendChild(buyLink);

                    productListContainer.appendChild(productContainer);
                });
            } else {
                productListContainer.innerHTML = '<p>No se encontraron productos.</p>';
            }
        });
    }
});


