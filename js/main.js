document.getElementById ("home").onclick = function () {
    /*IDEA: hacer que se valla escribiendo de a poco con el metodo serInterval*/
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


/* FUNCION CARRUCEL DE IMAGENES*/

let imagenes = ["/img/perro1.jpg", "/img/perro2.jpg"];
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
