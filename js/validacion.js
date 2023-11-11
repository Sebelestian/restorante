const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
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

/*Validación Formulario*/
 /*se agrego <p class="warnings" id="warnings"></p> en el formulario*/

 const nombre= document.getElementById("nombre");
 const apellido = document.getElementById("apellido");
 const email = document.getElementById("email");
 const telefono = document.getElementById("telefono");
 const textarea = document.getElementById("mensaje");
 const parrafo = document.getElementById("warnings");
 const form = document.getElementById("form");

 form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings =""
    let entrar = false
    let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML= "";

    if(nombre.value.length <3){
        warnings += 'El nombre no es válido.<br>';
        entrar= true;
    }
    if(apellido.value.length <3){
        warnings += 'El apellido no es válido.<br>';
        entrar= true;
    }
    if (!regexEmail.test(email.value)){
        warnings += 'El email no es válido.<br>';
        entrar = true;
    }
    if(isNaN(telefono.value) || telefono.value === ""){
        warnings += 'El teléfono no es válido.<br>';
        entrar= true;
    }
    if (textarea.value.length <8){
        warnings += 'El mensaje es muy corto.<br>';
        entrar= true;
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
    else{
        parrafo.innerHTML = "ENVIADO"
    }
 })


 /* API FORMSPREE*/
/*
 const $form = document.getElementById("form");

 $form.addEventListener('submit', handleSubmit);

 async function handleSubmit(event){
    event.preventDefault()
    const formu = new FormData(this);
    const response = await fetch(this.action, 
        {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok){
        this.reset()
        alert('Gracias por contactarnos')
    }
 }
*/
