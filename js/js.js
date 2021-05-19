let ubicacionPrincipal = window.pageYOffset;//0

  AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual; //200

})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo = false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo = true;
    }

    enlacesHeader.classList.toggle("menudos")
})


//Leer Mas
let s = false;
let button = document.querySelector('#button').addEventListener('click', function() {

    if(!s){
        document.getElementById('readMore').style.display = 'inline';
        document.getElementById('button').innerHTML = 'Leer Menos';
        s = true;
    }

    else{
        document.getElementById('readMore').style.display = 'none';
        document.getElementById('button').innerHTML = 'Leer Mas';
        s = false;
    }
})