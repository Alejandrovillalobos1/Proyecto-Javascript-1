// cargarCabecero => (totalIngrsos() - totalEgresos());

// let presupuesto = (totalIngrsos() - totalEgresos());
// let porcentajeEgreso = (totalEgresos() / totalIngrsos());

// totalIngrsos => (0);

// Funciones para totalIngresos y totalEgresos

let totalIngresos = () =>{
    let totalIngresos = 0;
    for (let ingreso of ingresos){
        totalIngresos += ingreso.valor;
    }
    return totalIngresos;
}

let totalEgresos = () =>{
    let totalEgresos =0;
    for (let egreso of egresos){
        totalIngresos += egreso.valor;
    }
    return totalEgresos
}

// FUNCION PARA CARGAR CABECER

let cargarCabecero = () =>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    // Aqui mas adelante debemos crear con el innerHTML los elementos para cargar los primeros datos generados desde app.js
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    //porcentaje = porcentajeEgreso
    document.getElementById("porcentaje").innerHTML = formatoMoneda(porcentajeEgreso);
    //ingreso = totalIngresos()
    document.getElementById("ingreso").innerHTML = formatoMoneda(totalIngresos);
    //egreso = totalEgresos()
    document.getElementById("egreso").innerHTML = formatoMoneda(totalEgresos);
}

const formatoMoneda = (valor) =>{
    return valor.toLocaleString("es-MX", {style: "currency", currency:"MXN", mininumFractionDigits:2});
}

const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString("es-MX", {style:"percent", mininumFractionDigits:2});
}


// Se crean 2 arreglos precargados de información para inicializar la aplicación

const ingresos = [
    new Ingresos("Sueldo", 10000)
];

const egresos = [
    new Egresos ("Vacaciones", 5000)
];


// Funciones para ingresos, se tendra que hacer algo similar para los egresos

// Funcion para crear Ingresos

const cargarIngresos = () =>{
    let ingresosHTML = "";
    for (ingreso of ingresos){
        ingresosHTML += crearIngresos(ingreso);
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}

const crearIngresos = (ingreso) => {
    let ingresosTemplete = `
                    <div class="elemento limpiarEstilos">
                        <div class="elemento_descripcion">${ingreso.descripcion}</div>
                        <div class="derecha limpiarEstilos">
                            <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                            <div class="elemento_eliminar">
                                <button class="elemento_eliminar--btn">
                                    <ion-icon name=close-circle-outline onclick"eliminarIngreso(${ingreso.id})"></ion-icon>
                                </button>
                            </div>
                        </div>
                    </div>
    `
    return ingresosTemplete;
}

const eliminarIngreso = (id) =>{
    let ingresoEliminar = ingresos.findIndex(ingresos => ingreso.id === id);
    ingresos.splice(ingresoEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

// Funciones para Egresos

const cargarEgresos = () =>{
    let egresosHTML ="";
    for (egreso of egresos){
        egresosHTML += crearEgresos(egreso);
    }
    document.getElementById("lista-egresos").innerHTML = egresosHTML;
}

const crearEgresos = (egreso) => {
    let egresosTemplete = `
        <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name=close-circle-outline onclick"eliminarIngreso(${egreso.id})"></ion-icon>
                </button>
            </div>
        </div>
        </div>
    `
}




//Funcion para cargar la aplicacion 

let cargarApp = () =>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos(); // Aun falta crear las funciones para egresos
}

//Funcion para poder agregar datos a nuestro contenedor esta funcion es la que va a permitir definir el tipo de dato que se esta creando
// si es un Ingreso o un Egreso construye los objetos correspondientes

const agregarDato = () =>{
    let forma = document.forms["forma"];
    let tipo = forma["tipo"];
    let descripcion = forma["descripcion"];
    let valor = forma["valor"];
    if(descripcion.value !== "" && valor.value !== ""){
        if(tipo.value === "ingreso"){
            ingresos.push(new Ingresos(descripcion.value, +valor.value)); //forma corta para agregar un nuevo elemento al arreglo
            cargarCabecero();
            cargarIngresos();
        }else if(tipo.value === "egreso"){
            let newEgreso = new Egresos(descripcion.value, + valor.value);
            egresos.push(newEgreso);
            cargarCabecero();
            cargarEgresos();
        }
    }else {
        alert("Debes llenar todos los campos, falta algun dato")
    }
}
