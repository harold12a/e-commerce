// harold alzate
let opciones = "opciones de frutas\n";

opciones +=" 1- BANANO $5.00 \n";
opciones +=" 2- GUAYABA $15.00\n";
opciones +=" 3- SANDIA $40.00\n";
opciones +=" 4- UVA $20.00\n";
opciones +=" 5- MANGO $10.00\n";
opciones +=" 6- MANZANA $30.00\n";
opciones +=" 7- COMPRAR\n";
opciones +=" 8- SALIR\n";

let opc = 0;
let condicion = true;


while (condicion) {
    opc =parseInt(prompt(opciones));

    switch(opc){
        case 1: alert(' Has elegido la fruta banano');
        opc = parseInt(prompt('ingrese la cantidad a llevar'));
        if(opc >= 5){
            alert('tienes un descuento 10%')
        }else{
            alert('no tienes ningun descuento con esta cantidad')
        }
        break;
        case 2: alert(' Has elegido la fruta guayaba ');
        opc = parseInt(prompt('ingrese la cantidad a llevar'));
        if(opc >= 5){
            alert('tienes un descuento 10%')
        }else{
            alert('no tienes ningun descuento con esta cantidad')
        }
        break;
        case 3: alert(' Has elegido la fruta sandia ');
        opc = parseInt(prompt('ingrese la cantidad a llevar'));
        if(opc >= 5){
            alert('tienes un descuento 10%')
        }else{
            alert('no tienes ningun descuento con esta cantidad')
        }
        break;
        case 4: alert(' Has elegido la opcion de uva ');
        opc = parseInt(prompt('ingrese la cantidad a llevar'));
        if(opc >= 5){
            alert('tienes un descuento 10%')
        }else{
            alert('no tienes ningun descuento con esta cantidad')
        }
        break;
        case 5: alert(' Has elegido la fruta mango ');
        opc = parseInt(prompt('ingrese la cantidad a llevar'));
        if(opc >= 5){
            alert('tienes un descuento 10%')
        }else{
            alert('no tienes ningun descuento con esta cantidad')
        }
        break;
        case 6: alert(' Has elegido la fruta manzana ');
        opc = parseInt(prompt('ingrese la cantidad a llevar'));
        if(opc >= 5){
            alert('tienes un descuento 10%')
        }else{
            alert('no tienes ningun descuento con esta cantidad')
        }
        break;
        case 7: 
        function Precio(precioArticulo, cantidadArticulo, descuento, valorEnvio){
    

            let descuentoArticulo = (precioArticulo * descuento) / 100;
            let valorDescuento = precioArticulo - descuentoArticulo;
        
            return ( valorDescuento * cantidadArticulo ) + valorEnvio;
            
        }
        
        const valorEnvio = 0;
        
        let articulo = parseFloat(prompt('ingrese el valor del Articulo'));
        let cantidad = parseFloat(prompt('ingrese la cantidad del Articulo'));
        let descuento = parseFloat(prompt('ingrese tu cupon descuento'));
        
        let finalValor = Precio(articulo,cantidad,descuento, valorEnvio);
        
        alert('el valor de la compra es:' + finalValor + ' GRACIAS POR COMPRAR EN TIENDA ONLINE');
        break;
        case 8: alert('te esperamos pronto')
        condicion = false;
        break;
        default: alert('esta opcion no esta disponible ingresa la opciones del "1" - "8" ')
    }
}
    
