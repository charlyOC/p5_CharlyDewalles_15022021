let carts = document.querySelectorAll('.add-cart');


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function cartNumbers() {
    
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers  + 1);
        document.getElementById('number_of_items').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.getElementById('number_of_items').textContent = 1;

    }

}

function saveCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.getElementById('number_of_items').textContent = productNumbers;
    }
}



saveCartNumbers(); 

let quantité = document.querySelector('.select');
let price = document.querySelector('.prix');

quantité.addEventListener('change', (event) => {
    price.textContent = (event.target.value) * price;
});
















