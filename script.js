$(document).ready(function() {

    $("#instructions").hide();

    $(".Translate").click(function() {
        var input = $('#input').val();
        $.ajax({
            headers: {
                'X-FunTranslations-Api-Secret': "MXDqsztCEH0IL81cixbLJAeF"
            },
            type: "POST",
            url: '//api.funtranslations.com/translate/morse.json',
            data: { text: input },
        }).done(function(data) {

            var fetch = data.contents.translated;
            var input1 = $("p#output").text(fetch);
            /* var input= document.getElementById("input").innerHTML();
              document.getElementById('demo').innerHTML=input;
            */
        });

        $.ajax({
            headers: {
                'X-FunTranslations-Api-Secret': "MXDqsztCEH0IL81cixbLJAeF"
            },
            type: "POST",
            url: '	//api.funtranslations.com/translate/morse/audio.json',
            data: { text: input },
        }).done(function(dataaudio) {
            var fetchaudio = dataaudio.contents.translated.audio;

            debugger;
            var audio = new Audio(fetchaudio);
            audio.play();




            /* var input= document.getElementById("input").innerHTML();
              document.getElementById('demo').innerHTML=input;
            */
        });


    });



    $("#red").mousedown(function() {
        $("body").css("background-color", "red");
    });


    $("#blue").mousedown(function() {
        $("body").css("background-color", "blue");
    });

    $("#green").mousedown(function() {
        $("body").css("background-color", "green");
    });

    $("#gray").mousedown(function() {
        $("body").css("background-color", "gray");
    });

    $("#Mcode").mousedown(function() {
        $("body").css("background-color", "white");
    });



    $("#red").mouseup(function() {
        $("body").css("background-color", "white");

    });
    $("#blue").mouseup(function() {
        $("body").css("background-color", "white");
    });
    $("#green").mouseup(function() {
        $("body").css("background-color", "white");
    });

    $("#gray").mouseup(function() {
        $("body").css("background-color", "white");
    });

});

function howToUse() {
    var x = document.getElementById("instructions");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
