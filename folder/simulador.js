// harold alzate
let opciones = "opciones de frutas\n";

opciones += "  BANANO $5.00 \n";
opciones += "  GUAYABA $15.00\n";
opciones += "  SANDIA $40.00\n";
opciones += "  UVA $20.00\n";
opciones += "  MANGO $10.00\n";
opciones += "  MANZANA $30.00\n";
opciones += " 1- COMPRAR\n";
opciones += " 2- BUSCAR PRODUCTO \n";
opciones += " 3- FINALIZAR COMPRA\n";

let opc = 0;
let condicion = true;

class producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.dispobible = true;
    }
    sumaIva() {
        return this.precio * 0.19;
    }
    vender() {
        this.dispobible = false;
    }
    total() {
        return this.sumaIva() * this.cantidad
    }

}

const Productos =[
    {nombre:"banano", precio:5, cantidad:152 },
    {nombre:"guayaba", precio:15, cantidad:250 },
    {nombre:"sandia", precio:40, cantidad:150 },
    {nombre:"uva", precio:20, cantidad:500 },
    {nombre:"mango", precio:10, cantidad:200 },
    {nombre:"manzana", precio:300, cantidad:100 }

];




while (condicion) {
    opc = parseInt(prompt(opciones));

    switch (opc) {
        case 1:

            const arrayProductos = [];
            datos = " ";
            do {
                let datos = prompt('ingrese la fruta o salir para finalizar');
                if (datos === "salir" || datos === "SALIR") {
                    break;
                } else {
                    nombreP = datos;
                    let precioP = prompt('ingrese el valor de la fruta');
                    let cantidadP = prompt('ingrese la cantidad a llevar');

                    arrayProductos.push(new producto(nombreP, precioP, cantidadP));

                }
            }
            while (datos != "salir" || datos != "SALIR");

            console.log(arrayProductos);

            for (let producto of arrayProductos) {
                console.log('\n')
                console.log(" el producto ingresado es: " + producto.nombre);
                console.log(" el producto tiene un precio de: " + producto.precio);
                console.log(" cantidad del producto: " + producto.cantidad);
                console.log(" precio  del producto final unitario es : " + producto.sumaIva());
                console.log(' total de la  compra es :' + producto.total())

            }


            break;
        case 2:
            const ingresar = prompt('ingrese el producto que quiere buscar');

            const productoIngresado = Productos.filter(producto => producto.nombre.includes(ingresar));
            console.log(productoIngresado);
            console.log('-----');
            console.log('PRODUCTO INGRESADO PARA LA BUSQUEDA');

            for (let producto of productoIngresado) {
                console.log('\n')
                console.log(" el producto ingresado es: " + producto.nombre);
                console.log(" el producto tiene un precio de: " + producto.precio + " pesos x kg");
                console.log(" cantidad del producto: " + producto.cantidad);
            }


            break;
        case 3: alert('te esperamos pronto; si relizaste una compra ve a console para ver el resultado')
            condicion = false;
            break;
        default: alert('esta opcion no esta disponible ingresa la opciones del "1" - "3" ')
    }
}



