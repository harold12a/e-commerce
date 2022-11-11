
const cards = document.getElementById('cards')
const card = document.getElementById('card')
const item = document.getElementById('item')
const footer = document.getElementById('footer')
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', ()=>{
    fetchData()
})
cards.addEventListener('click', e =>{
    addCarrito(e)
})


const fetchData = async () => {
    try{
        const res = await fetch('api.json')
        const data = await res.json()
        pintarCards(data)
    }catch(error){
        console.log(error);
    }
}

const pintarCards = data => {

    data.forEach(producto => {
       card.querySelector('h5').textContent = producto.title
       card.querySelector('p').textContent = producto.precio
       card.querySelector('img').setAttribute('src', producto.img)
       card.querySelector('.btn-danger').dataset.id = producto.id

       const clone = card.cloneNode(true)
       fragment.appendChild(clone)
       
    });

    cards.appendChild(fragment)

}

const addCarrito = e =>{
    
    if(e.target.classList.contains('btn-danger')){
        setCarrito(e.target.parentElement)

    }
    e.stopPropagation()
}

const setCarrito = objeto =>{

const producto = {
    id: objeto.querySelector('.btn-danger').dataset.id,
    title : objeto.querySelector('h5').textContent,
    precio: objeto.querySelector('p').textContent,
    cantidad: 1
}
if(carrito.hasOwnProperty(producto.id)){
    producto.cantidad = carrito[producto.id].cantidad + 1 
}

carrito[producto.id] = {...producto}
pintarCarrito()
}

const pintarCarrito = ()=> {
    item.innerHTML = ''
    Object.values(carrito).forEach(producto=>{
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id 
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    item.appendChild(fragment)
    pintarFooter()
}

const pintarFooter = () => {
    footer.innerHTML = ''
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - inicia  la compra!</th>`
    }

    const nCantidad = Object.values(carrito).reduce((acc, {cantidad})=> acc + cantidad, 0)
}