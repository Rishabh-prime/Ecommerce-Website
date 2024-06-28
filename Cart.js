document.addEventListener("DOMContentLoaded", function() {
    displayCartItems();
});

function displayCartItems() {
    const cartContainer = document.getElementById('cart-container');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.classList.add('cart-item');

        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = item.imgSrc;
        imgCell.appendChild(img);

        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;

        const priceCell = document.createElement('td');
        priceCell.textContent = `$${item.price}`;

        const quantityCell = document.createElement('td');
        quantityCell.textContent = item.quantity;

        const removeCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeFromCart(item));
        removeCell.appendChild(removeButton);

        row.appendChild(imgCell);
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(quantityCell);
        row.appendChild(removeCell);

        cartContainer.appendChild(row);
    });
}

function removeFromCart(item) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const index = cartItems.findIndex(i => i.name === item.name);

    if (index !== -1) {
        if (cartItems[index].quantity > 1) {
            cartItems[index].quantity--; // Decrease quantity
        } else {
            cartItems.splice(index, 1); // Remove item if quantity is 1
        }
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${item.name} removed from cart!`);
    location.reload(); // Refresh the cart display
}
