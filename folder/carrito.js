const btnCompra = document.querySelectorAll('.btnCompra')
const items = document.getElementById('items')

/*const items = document.getElementById('items').content
const footer = document.getElementById('footer').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito =document.getElementById('template-carrito').content*/

let carrito = [];


for(let btn of btnCompra){
    btn.addEventListener('click', (e)=>{
        

        let card = e.target.parentNode.parentNode;
        let productoNombre = card.querySelector('h6').textContent
        let productoPrecio = card.querySelector('h5').textContent
        let productoImg = card.querySelector('img').src
    
        let producto ={
            nombre: productoNombre,
            precio: productoPrecio,
            img: productoImg,
            cantidad: 1
        }

         if(carrito.hasOwnProperty(producto.nombre)){
            producto.cantidad = carrito[producto.nombre].cantidad+1
         }

         carrito[producto.nombre] = {...producto}

         // Local Storage
        let json = JSON.stringify(producto);
        carrito.push(json)
        localStorage.setItem('arreglo producto', carrito);

        carrito.push(producto);
        mostrarCarrito(producto);
    })    
}


function mostrarCarrito(producto){
     
    let fila = document.createElement('tr');

    fila.innerHTML = `
    <td> <img src="${producto.img}"></td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>${producto.cantidad}</td>
    <td><button class="btn btn-danger borrarCompra">Borrar</td>
    `
    
    items.append(fila)

    
const btnBorrar = document.querySelectorAll('.borrarCompra');
for ( let btn of btnBorrar){
    btn.addEventListener('click', (e)=>{
let productoEliminar = e.target.parentNode.parentNode;

   productoEliminar.remove();

    })
}

}

