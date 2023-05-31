//MOBILE 
const home = document.getElementById('home-profile')
const productos1 = document.getElementById('productos-profile')
const productos2 = document.getElementById('productos-profile-2')
const pagos1 = document.getElementById('pagos-profile')
const pagos2 = document.getElementById('pagos-profile-2')
const citas = document.getElementById('citas-profile')
const comentarios = document.getElementById('comentarios-profile')

console.log(home, productos1, productos2, pagos1, pagos2, citas)

const products = document.getElementById('products')
const payments = document.getElementById('payments')
const meetings = document.getElementById('meetings')

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

    products.addEventListener('click', () => {
        home.style.display = 'none'
        productos1.style.display = 'flex'
        productos2.style.display = 'none'
        pagos1.style.display = 'none'
        pagos2.style.display = 'none'
        citas.style.display = 'none'
    })

    payments.addEventListener('click', () => {
        home.style.display = 'none'
        productos1.style.display = 'none'
        productos2.style.display = 'none'
        pagos1.style.display = 'flex'
        pagos2.style.display = 'none'
        citas.style.display = 'none'
    })

    meetings.addEventListener('click', () => {
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

    products.addEventListener('click', () => {
        homeImg.style.display = 'none'
        productsImg.style.display = 'block'
        paymentsImg.style.display = 'none'
        meetingsImg.style.display = 'none'
    })

    payments.addEventListener('click', () => {
        homeImg.style.display = 'none'
        productsImg.style.display = 'none'
        paymentsImg.style.display = 'block'
        meetingsImg.style.display = 'none'
    })

    meetings.addEventListener('click', () => {
        homeImg.style.display = 'none'
        productsImg.style.display = 'none'
        paymentsImg.style.display = 'none'
        meetingsImg.style.display = 'block'
    })
}