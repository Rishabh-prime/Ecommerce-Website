document.addEventListener("DOMContentLoaded", function() {
    createHeroSection();
    createFeaturesSection();
    createProductSection();
});

const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const i3 = document.getElementsByClassName('i3'); 
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        navbar.classList.toggle('active');
        i3[0].classList.toggle('active');
        bar.classList.toggle('active');
    });
}

if(close){
    close.addEventListener('click', () => {
        navbar.classList.toggle('active');
        i3[0].classList.toggle('active');
        bar.classList.toggle('active');
    });
}

function createHeroSection() {
    const hero = document.getElementById("hero");

    const h4Hero = document.createElement("h4");
    h4Hero.innerHTML = "Trade-in-offer";
    const h2Hero = document.createElement("h2");
    h2Hero.innerHTML = "Super value deals";
    const h1Hero = document.createElement("h1");
    h1Hero.innerHTML = "On all products";
    const pHero = document.createElement("p");
    pHero.innerHTML = "Save more with coupons & up to 70% off!";
    const buttonHero = document.createElement("button");
    buttonHero.innerHTML = "Shop Now";

    hero.appendChild(h4Hero);
    hero.appendChild(h2Hero);
    hero.appendChild(h1Hero);
    hero.appendChild(pHero);
    hero.appendChild(buttonHero);
}

function createFeaturesSection() {
    const featuresData = [
        { imgSrc: './img/features/f1.png', altText: 'Free-Shipping', title: 'Free Shipping' },
        { imgSrc: './img/features/f2.png', altText: 'Online Order', title: 'Online Order' },
        { imgSrc: './img/features/f3.png', altText: 'Save Money', title: 'Save Money' },
        { imgSrc: './img/features/f4.png', altText: 'Promotions', title: 'Promotions' },
        { imgSrc: './img/features/f5.png', altText: 'Happy sell', title: 'Happy sell' },
        { imgSrc: './img/features/f6.png', altText: 'F24/7 Support', title: 'F24/7 Support' }
    ];

    const featuresSection = document.getElementById('features');

    featuresData.forEach(feature => {
        const featureBox = document.createElement('div');
        featureBox.classList.add('feature-box');

        const img = document.createElement('img');
        img.src = feature.imgSrc;
        img.alt = feature.altText;
        featureBox.appendChild(img);

        const h6 = document.createElement('h6');
        h6.textContent = feature.title;
        featureBox.appendChild(h6);

        featuresSection.appendChild(featureBox);
    });
}

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
