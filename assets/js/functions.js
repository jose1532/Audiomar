
window.androidObj = function AndroidClass(){};

function cerrarMiClaroApp(){
    window.androidObj.textToAndroid();
    console.log("Aqui se cierra el webview");
}

function backgroundDiv(){
    document.getElementById("container").style.backgroundColor="red";
}