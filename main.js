const menuEmail= document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const aside = document.querySelector('.product-detail');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

const cardContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside)

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');

}
function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopClose = desktopMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopClose){
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');

    
}

const productList = [];
productList.push({
    name:'bike',
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Celular',
    precio: 1000,
    image: 'https://cdn10.totalcode.net/mercacentro/product-zoom/es/celular-samsung-galaxy-a13-64gb-azul-claro-3.webp'
});
productList.push({
    name:'Moto',
    precio: 100000,
    image: 'https://media.revistagq.com/photos/5ff4536f08989a3c40eb74e4/master/w_1600%2Cc_limit/Ducati%2520Multistrada%2520V4.jpg'
});
productList.push({
    name:'bike',
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Celular',
    precio: 1000,
    image: 'https://cdn10.totalcode.net/mercacentro/product-zoom/es/celular-samsung-galaxy-a13-64gb-azul-claro-3.webp'
});
productList.push({
    name:'Moto',
    precio: 100000,
    image: 'https://media.revistagq.com/photos/5ff4536f08989a3c40eb74e4/master/w_1600%2Cc_limit/Ducati%2520Multistrada%2520V4.jpg'
});
productList.push({
    name:'bike',
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Celular',
    precio: 1000,
    image: 'https://cdn10.totalcode.net/mercacentro/product-zoom/es/celular-samsung-galaxy-a13-64gb-azul-claro-3.webp'
});
productList.push({
    name:'Moto',
    precio: 100000,
    image: 'https://media.revistagq.com/photos/5ff4536f08989a3c40eb74e4/master/w_1600%2Cc_limit/Ducati%2520Multistrada%2520V4.jpg'
});

function creacionProductos(producto){
    for (const product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.precio;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.append(productPrice,productName);
            
        const productInfoFigure= document.createElement('figure');
        const productImageCart = document.createElement('img');
        productImageCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImageCart);

        productInfo.append(productInfoDiv,productInfoFigure);
         
        productCard.append(productImg,productInfo);
               
        cardContainer.appendChild(productCard);
        
    }
}
creacionProductos(productList);
    