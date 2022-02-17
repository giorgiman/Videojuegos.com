//Ir al artículo
$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        var destino = $(this.hash);
        if (destino.length == 0) {
            destino = $('a[name="' + this.hash.substr(1) + '"]');
        }
        if (destino.length == 0) {
            destino = $('html');
        }
        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 500);
        return false;
    });
});

//Botón en el inicio 
$("#irArriba").click(function() {
    $('html, body').animate({ scrollTop: 0 }, 1250);
    return false;
});

$(document).ready(function() {
    $("#toTop").css("display", "none");
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            $("#toTop").fadeIn("slow");
        } else {
            $("#toTop").fadeOut("slow");
        }
    });
});