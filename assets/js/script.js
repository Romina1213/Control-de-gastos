let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionGastos = [];
let indiceModificacion = null;
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;
    console.log(nombreGasto);
    console.log(valorGasto);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcionGastos.push(descripcionGasto);

    actualizarLista();
}
function actualizarLista(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = "";
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento,posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcionGasto = listaDescripcionGastos [posicion];
        htmlLista = htmlLista + `<li>${elemento} ${descripcionGasto}- USD ${valorGasto}
        <button class="botonModificar" onclick="modificarGasto(${posicion});">Modificar</button>
        <button class="botonFormulario1" onclick="eliminarGastos(${posicion});"> Eliminar</button>
        </li>`;
        totalGastos = totalGastos + Number(valorGasto);
        if(valorGasto > 150.00){
            alert ("CUIDADO:El total de este gasto supera los 150")};
    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    console.log(listaNombresGastos);
    console.log(listaDescripcionGastos);
    console.log(listaValoresGastos);

    limpiar();
}
function limpiar(){
    document.getElementById("nombreGasto").value = "";
    document.getElementById("valorGasto").value = "";
    document.getElementById('descripcionGasto').value='';
}
function eliminarGastos(posicion){
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    listaDescripcionGastos.splice(posicion,1);
    actualizarLista();
}
function modificarGasto(posicion){
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionGastos[posicion];
    indiceModificacion = posicion;
 }
 function actualizarGasto(){
    if(indiceModificacion !== null){
        listaNombresGastos[indiceModificacion] = document.getElementById('nombreGasto').value
        listaDescripcionGastos[indiceModificacion] = document.getElementById('descripcionGasto').value
        listaValoresGastos[indiceModificacion] = document.getElementById('valorGasto').value
    actualizarLista();
    limpiar();
    }
 }
