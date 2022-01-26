function accionPlay1() {
    var reproducir1 = new Audio();

    //Vaca
    reproducir1.src = "https://www.sshhtt.com/images/sampledata/animals/animals-00142.mp3";
    reproducir1.play();
}

function accionPlay2() {
    var reproducir2 = new Audio();

    //Mono
    reproducir2.src = "https://www.sshhtt.com/images/sampledata/animals/animals-00126.mp3";
    reproducir2.play();
}

function accionPlay3() {
    var reproducir3 = new Audio();

    //Cobra
    reproducir3.src = "https://www.sshhtt.com/images/sampledata/animals/animals-00054.mp3";
    reproducir3.play();
}

function accionPlay4() {
    var reproducir4 = new Audio();

    //Gato
    reproducir4.src = "https://www.sshhtt.com/images/sampledata/animals/animals-00045.mp3";
    reproducir4.play();
}


function iniciar() {
    button = document.querySelectorAll("button");
    button[0].addEventListener("click", accionPlay1, false);
    button[1].addEventListener("click", accionPlay2, false);
    button[2].addEventListener("click", accionPlay3, false);
    button[3].addEventListener("click", accionPlay4, false);
}
window.addEventListener("load", iniciar, false);