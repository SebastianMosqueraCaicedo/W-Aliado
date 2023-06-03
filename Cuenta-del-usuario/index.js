//MOBILE 

const home = document.getElementById('home-profile')
const productos1 = document.getElementById('productos-profile')
const productos2 = document.getElementById('productos-profile-2')
const pagos1 = document.getElementById('pagos-profile')
const pagos2 = document.getElementById('pagos-profile-2')
const citas = document.getElementById('citas-profile')
const comentarios = document.getElementById('comentarios-profile')

console.log(home, productos1, productos2, pagos1, pagos2, citas)

const products = document.getElementsByClassName('all-menu')
const payments = document.getElementsByClassName('saving-menu')
const meetings = document.getElementsByClassName('invert-menu')

console.log(products, payments, meetings)

const toProducto2 = document.getElementsByClassName('producto-de-ahorro')
const toPagos2 = document.getElementsByClassName('pagos-2')

console.log(toProducto2)

//DESKTOP
const homeImg = document.getElementById('home-user-account')
const productsImg = document.getElementById('products-user-account')
const paymentsImg = document.getElementById('payments-user-account')
const meetingsImg = document.getElementById('meetings-user-account')



if (window.innerWidth < 700) {
    productos1.style.display = 'none'
    productos2.style.display = 'none'
    pagos1.style.display = 'none'
    pagos2.style.display = 'none'
    citas.style.display = 'none'
    comentarios.style.display = 'block'

    homeImg.style.display = 'none'
    productsImg.style.display = 'none'
    paymentsImg.style.display = 'none'
    meetingsImg.style.display = 'none'

    products[0].addEventListener('click', () => {
        home.style.display = 'none'
        productos1.style.display = 'flex'
        productos2.style.display = 'none'
        pagos1.style.display = 'none'
        pagos2.style.display = 'none'
        citas.style.display = 'none'
    })

    payments[0].addEventListener('click', () => {
        home.style.display = 'none'
        productos1.style.display = 'none'
        productos2.style.display = 'none'
        pagos1.style.display = 'flex'
        pagos2.style.display = 'none'
        citas.style.display = 'none'
    })

    meetings[0].addEventListener('click', () => {
        home.style.display = 'none'
        productos1.style.display = 'none'
        productos2.style.display = 'none'
        pagos1.style.display = 'none'
        pagos2.style.display = 'none'
        citas.style.display = 'flex'
    })

    window.onload = function () {

        for (let i = 0; i < toProducto2.length; i++) {
            const element = toProducto2[i];
            element.addEventListener('click', () => {
                home.style.display = 'none'
                productos1.style.display = 'none'
                productos2.style.display = 'flex'
                pagos1.style.display = 'none'
                pagos2.style.display = 'none'
                citas.style.display = 'none'
            })
        }

        for (let i = 0; i < toPagos2.length; i++) {
            const element = toPagos2[i];
            element.addEventListener('click', () => {
                home.style.display = 'none'
                productos1.style.display = 'none'
                productos2.style.display = 'none'
                pagos1.style.display = 'none'
                pagos2.style.display = 'flex'
                citas.style.display = 'none'
            })
        }
    };
}

if (window.innerWidth >= 701) {
    home.style.display = 'none'
    productos1.style.display = 'none'
    productos2.style.display = 'none'
    pagos1.style.display = 'none'
    pagos2.style.display = 'none'
    citas.style.display = 'none'
    comentarios.style.display = 'none'

    homeImg.style.display = 'block'
    productsImg.style.display = 'none'
    paymentsImg.style.display = 'none'
    meetingsImg.style.display = 'none'

    products[0].addEventListener('click', () => {
        homeImg.style.display = 'none'
        productsImg.style.display = 'block'
        paymentsImg.style.display = 'none'
        meetingsImg.style.display = 'none'
    })

    payments[0].addEventListener('click', () => {
        homeImg.style.display = 'none'
        productsImg.style.display = 'none'
        paymentsImg.style.display = 'block'
        meetingsImg.style.display = 'none'
    })

    meetings[0].addEventListener('click', () => {
        homeImg.style.display = 'none'
        productsImg.style.display = 'none'
        paymentsImg.style.display = 'none'
        meetingsImg.style.display = 'block'
    })
}

//// Menu slider

var marker = document.querySelector('#marker');
var items = document.querySelectorAll('#page-switcher li');

console.log(items)

function indicator(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}

items.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        indicator(e.target);
    });
});

//Función para cambiar de color la letra

const lista = document.getElementById("page-switcher");
const elementos = lista.getElementsByTagName("li");

console.log(elementos)

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener("click", function () {
        const seleccionado = lista.getElementsByClassName("select");
        if (seleccionado.length > 0) {
            seleccionado[0].className = seleccionado[0].className.replace(" select", "");
        }
        this.className += " select";
    });
}

//funcion para cambiar de color el svg

function changeColor(event) {
    var svgList = document.getElementsByTagName('path');
    for (var i = 0; i < svgList.length; i++) {
        svgList[i].setAttribute('fill', '#FF8833');
    }
    var target = event.target;
    var svg = target.querySelector('path');
    svg.setAttribute('fill', 'white');
}

elementos[0].addEventListener('click', e => changeColor(e))
elementos[1].addEventListener('click', e => changeColor(e))
elementos[2].addEventListener('click', e => changeColor(e))

