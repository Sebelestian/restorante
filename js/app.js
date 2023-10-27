const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const btnTodos = document.querySelector('.todos');
const btnEnsaladas = document.querySelector('.ensaladas');
const btnPastas = document.querySelector('.pastas');
const btnPizzas = document.querySelector('.pizzas');
const btnPostres = document.querySelector('.postres');
const contenedorPlatillos = document.querySelector('.platillos');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    platillos();
});

const eventos = () => {
    menu.addEventListener('click',abrirMenu)
}
const abrirMenu = () => {
    navegacion.classList.remove('ocultar');
    botonCerrar();
}    

const botonCerrar =()=>{
    const btnCerrar= document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector ('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x'; 
    btnCerrar.classList.add('btn-cerrar');

    //while(navegacion.children[5]){
    //      navegacion.removeChild(navegacion.children[5]);
    //}
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar,overlay);
}

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
    navegacion.classList.add('ocultar');
    overlay.remove();
    boton.remove();
});
    overlay.onclick= function(){
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }
}
 /**/
 const platillos = () =>{
    let platillosArreglo=[];
    const platillos = document.querySelectorAll('.platillo');
    
    platillos.forEach(platillo => platillosArreglo = [...platillosArreglo, platillo]);

    const ensaladas = platillosArreglo.filter(ensalada => ensalada.getAttribute('data-platillo') === 'ensaladas');
    const pastas = platillosArreglo.filter(pasta => pasta.getAttribute('data-platillo') === 'pastas');
    const pizzas = platillosArreglo.filter(pizza => pizza.getAttribute('data-platillo') === 'pizzas');
    const postres = platillosArreglo.filter(postre => postre.getAttribute('data-platillo') === 'postres');

    mostrarPlatillos(ensaladas, pastas, pizzas, postres, platillosArreglo);
 }

 const mostrarPlatillos = (ensaladas, pastas, pizzas, postres, todos) => {
    btnEnsaladas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        ensaladas.forEach(ensalada => contenedorPlatillos.appendChild(ensalada));
    });
    btnPastas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        pastas.forEach(pasta => contenedorPlatillos.appendChild(pasta));
    });
    btnPizzas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        pizzas.forEach(pizza => contenedorPlatillos.appendChild(pizza));
    });
    btnPostres.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postre => contenedorPlatillos.appendChild(postre));
    });
    btnTodos.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos),
        todos.forEach(todo => contenedorPlatillos.appendChild(todo));
    })
 }

 const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
 }
