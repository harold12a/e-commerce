
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
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
})
cards.addEventListener('click', e =>{
    addCarrito(e)
})

item.addEventListener('click', e =>{
    btnAccion(e)
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
swal("HAS AGREGADO UN ARTICULO A TU CARRITO!", "success");
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

    localStorage.setItem('carrito',JSON.stringify(carrito))
}

const pintarFooter = () => {
    footer.innerHTML = ''
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - inicia  la compra!</th>`
        return
    }

    const nCantidad = Object.values(carrito).reduce((acc, {cantidad})=> acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad,precio})=> acc + cantidad * precio, 0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click',()=>{
        carrito={}
        swal("HAS ELIMINADO LA COMPRA");
        pintarCarrito()
    })
}

const btnAccion = e => {
    
    if(e.target.classList.contains('btn-info')){
        const producto =  carrito[e.target.dataset.id]
        producto.cantidad ++
        carrito[e.target.dataset.id] = {...producto}
        pintarCarrito()
    }

    if(e.target.classList.contains('btn-danger')){
        const producto =  carrito[e.target.dataset.id]
        producto.cantidad --
        if(producto.cantidad ===0){
            delete carrito[e.target.dataset.id]
        }
        pintarCarrito()

    }
    e.stopPropagation()
}

