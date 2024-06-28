


document.addEventListener("DOMContentLoaded", function() {
    createProductSection();
});

function createProductSection(){
    const products = [
        {
            "imgSrc": "./img/products/f1.jpg",
            "brand": "adidas",
            "name": "Cartoon Astronaut T-Shirts",
            "price": 74,
            "stars": 5
        },
        {
            "imgSrc": "./img/products/f2.jpg",
            "brand": "adidas",
            "name": " T-Shirts",
            "price": 74,
            "stars": 5
        },
        {
            "imgSrc": "./img/products/f3.jpg",
            "brand": "adidas",
            "name": " TT-Shirts",
            "price": 74,
            "stars": 5
        },
        {
            "imgSrc": "./img/products/f4.jpg",
            "brand": "adidas",
            "name": " XT-Shirts",
            "price": 74,
            "stars": 5
        },
        {
            "imgSrc": "./img/products/f5.jpg",
            "brand": "adidas",
            "name": " XYT-Shirts",
            "price": 74,
            "stars": 5
        },
        {
            "imgSrc": "./img/products/f6.jpg",
            "brand": "adidas",
            "name": " XYZT-Shirts",
            "price": 74,
            "stars": 5
        },
        {
            "imgSrc": "./img/products/f7.jpg",
            "brand": "adidas",
            "name": "WXYZT-Shirts",
            "price": 74,
            "stars": 5
        },
        {
            "imgSrc": "./img/products/f8.jpg",
            "brand": "adidas",
            "name": "VWXYZT-Shirts",
            "price": 74,
            "stars": 5
        }
    ];

    function appendProducts(products) {
        const productContainer = document.getElementById('product-conatiner');

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            const img = document.createElement('img');
            img.src = product.imgSrc;

            const description = document.createElement('div');
            description.classList.add('description');

            const brand = document.createElement('span');
            brand.textContent = product.brand;

            const name = document.createElement('h5');
            name.textContent = product.name;

            const starDiv = document.createElement('div');
            starDiv.classList.add('star');

            for (let i = 0; i < product.stars; i++) {
                const starIcon = document.createElement('ion-icon');
                starIcon.setAttribute('name', 'star');
                starIcon.classList.add('i');
                starDiv.appendChild(starIcon);
            }

            const price = document.createElement('h4');
            price.textContent = `$${product.price}`;

            description.appendChild(brand);
            description.appendChild(name);
            description.appendChild(starDiv);
            description.appendChild(price);

            const cartLink = document.createElement('a');
            cartLink.href = '#';
            const cartIcon = document.createElement('ion-icon');
            cartIcon.setAttribute('name', 'cart');
            cartIcon.classList.add('cl');
            cartLink.appendChild(cartIcon);

            cartLink.addEventListener('click', () => addToCart(product));

            productDiv.appendChild(img);
            productDiv.appendChild(description);
            productDiv.appendChild(cartLink);

            productContainer.appendChild(productDiv);
        });
    }

    function addToCart(product) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let existingProduct = cartItems.find(item => item.name === product.name);

        if (existingProduct) {
            existingProduct.quantity++;
            existingProduct.price += product.price;
        } else {
            product.quantity = 1;
            cartItems.push(product);
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert(`${product.name} added to cart!`);
    }

    appendProducts(products);
}
