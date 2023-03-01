//***********************FUNCION PARA CAMBIAR EL PARRAFO DE ACUERDO A LO SELECIONADO EN LA BARRA DE NAV**********************
let menu = [document.getElementById ("p_home"), document.getElementById ("p_about"), document.getElementById ("p_studies"), document.getElementById ("p_contact")];

function display_change (index) {
    for (let i=0; i<4; i++){
        if(i==index) {
            menu[i].style.display = "block";
            console.log ("Se apreto la opcion" + i);
        }
        else {
            menu[i].style.display = "none";
        }
    }
}

document.getElementById ("home").onclick = () => display_change (0);
document.getElementById ("about").onclick = () => display_change (1);
document.getElementById ("studies").onclick = () => display_change (2);
document.getElementById ("contact").onclick = () => display_change (3);

//**********************FUNCION ITERATIVA DE CAMBIO DE PARRADO*****************************************************
/*
document.getElementById ("home").onclick = function () {
    document.getElementById ("p_home").style.display ="block";
    document.getElementById ("p_about").style.display ="none";
    document.getElementById ("p_studies").style.display ="none";
    document.getElementById ("p_contact").style.display ="none";
}

document.getElementById ("about").onclick = function () {
    document.getElementById ("p_home").style.display ="none";
    document.getElementById ("p_about").style.display ="block";
    document.getElementById ("p_studies").style.display ="none";
    document.getElementById ("p_contact").style.display ="none";
}

document.getElementById ("studies").onclick = function () {
    document.getElementById ("p_home").style.display ="none";
    document.getElementById ("p_about").style.display ="none";
    document.getElementById ("p_studies").style.display ="block";
    document.getElementById ("p_contact").style.display ="none";
}

document.getElementById ("contact").onclick = function () {
    document.getElementById ("p_home").style.display ="none";
    document.getElementById ("p_about").style.display ="none";
    document.getElementById ("p_studies").style.display ="none";
    document.getElementById ("p_contact").style.display ="block";
}
*/

/* FUNCION CARRUCEL DE IMAGENES*/
let imagenes = ["/img/codigo-2.png", "/img/web-2.png"];
let i = 0;

document.getElementById("carrousel_img").onclick = function (){
    
    document.getElementById("imagen").src = imagenes[i];
    if(i<1){
        i++;
    }
    else{
        i=0;
    }
};


//***********FUNCION CARRUCEL CON OPCION DE ADELANTAR Y RETROCEDER****************************
/*
function carruosel (contenedor){
    contenedor.addEvenListener ("click", e => {
        let atras = contenedor.getElementById ("atras"),
            adelante = contenedor.getElementById ("adelante"),
            img = contenedor.getElementById ("imagen"),
            tgt = e.targer;
        
        if (tgt ==atras){
            if(i>0){
                img.src = imagenes[i - 1];
                i--;
            }
            else {
                img.src = imagenes [imagenes.length - 1];
                i=imagenes.length - 1;
            }
        }
        else if (tgt==adelante){
            if(i<(imagenes.length - 1)){
                img.src = imagenes[i + 1];
                i++;
            }
            else {
                img.src = imagenes[0];
                i=0;
            }
        }    
    });
}
carruosel (document.getElementById("carrousel_img"));
*/
