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

