document.addEventListener('DOMContentLoaded', () => {
    // Variables de ejemplo para el carrito
   

    const cartItems = document.querySelector('.cart-items');
    const totalAmount = document.getElementById('totalAmount');
    const paymentForm = document.getElementById('payment-form');
    const confirmationMessage = document.querySelector('.confirmation-message');

    let total = 0;

    // Mostrar productos en el resumen
    allProducts.forEach(product => {
        const item = document.createElement('div');
        item.classList.add('cart-item');
        item.innerHTML = `
            ${product.quantity} x ${product.title} - ${product.price}
        `;
        cartItems.appendChild(item);

        // Calcular el total
        total += product.quantity * parseFloat(product.price.slice(1));
    });

    // Mostrar total en pantalla
    totalAmount.textContent = `$${total.toFixed(2)}`;

    // Manejar el envío del formulario
    paymentForm.addEventListener('submit', e => {
        e.preventDefault();

        // Validar y procesar el pago (lógica simplificada)
        confirmationMessage.classList.remove('hidden');
        paymentForm.classList.add('hidden');
    });
});
//NUEVOOOOOO
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelector('.cart-items'); // Contenedor para los productos
    const totalAmount = document.getElementById('totalAmount'); // Total a pagar
    const paymentForm = document.getElementById('payment-form'); // Formulario de pago
    const confirmationMessage = document.querySelector('.confirmation-message'); // Mensaje de confirmación

    // Recuperar los datos del carrito desde localStorage
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const cartTotal = localStorage.getItem('cartTotal') || '$0.00';

    // Mostrar los productos en el resumen
    cartProducts.forEach(product => {
        const item = document.createElement('div');
        item.classList.add('cart-item');
        item.innerHTML = `
            ${product.quantity} x ${product.title} - ${product.price}
        `;
        cartItems.appendChild(item);
    });

    // Mostrar el total en la pantalla
    totalAmount.textContent = cartTotal;

    // Manejar el envío del formulario de pago
    paymentForm.addEventListener('submit', e => {
        e.preventDefault();

        // Validar y procesar el pago
        confirmationMessage.classList.remove('hidden');
        paymentForm.classList.add('hidden');

        // Limpiar el carrito después del pago
        localStorage.removeItem('cartProducts');
        localStorage.removeItem('cartTotal');
    });
});
