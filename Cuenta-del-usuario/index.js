const home = document.getElementById('home-profile')
const productos1 = document.getElementById('productos-profile')
const productos2 = document.getElementById('productos-profile-2')
const pagos1 = document.getElementById('pagos-profile')
const pagos2 = document.getElementById('pagos-profile-2')
const citas = document.getElementById('citas-profile')

console.log(home, productos1, productos2, pagos1, pagos2, citas)

const products = document.getElementById('products')
const payments = document.getElementById('payments')
const meetings = document.getElementById('meetings')

console.log(products, payments, meetings)

productos1.style.display = 'none'
productos2.style.display = 'none'
pagos1.style.display = 'none'
pagos2.style.display = 'none'
citas.style.display = 'none'


const toProducto2 = document.getElementsByClassName('producto-de-ahorro')
const toPagos2 = document.getElementsByClassName('pagos-2')

console.log(toProducto2)



if (window.innerWidth < 700) {
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
    products.addEventListener('click', () => {
        home.style.display = 'none'
        productos1.style.display = 'flex'
        productos2.style.display = 'flex'
        pagos1.style.display = 'none'
        pagos2.style.display = 'none'
        citas.style.display = 'none'
    })

    payments.addEventListener('click', () => {
        home.style.display = 'none'
        productos1.style.display = 'none'
        productos2.style.display = 'none'
        pagos1.style.display = 'flex'
        pagos2.style.display = 'flex'
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
                productos1.style.display = 'flex'
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
                pagos1.style.display = 'flex'
                pagos2.style.display = 'flex'
                citas.style.display = 'none'
            })
        }
    };
}