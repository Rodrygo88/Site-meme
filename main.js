$(document).ready(function() {
    // Função que é executada quando o documento estiver pronto
    $(function () {
        var flame = $("#flame");
        var txt = $("h1");

        flame.on({
            click: function () {
                var audio = $("audio")[0];
                audio.currentTime = 3; // Define o tempo de início em 3 segundos
                audio.play();

                flame.removeClass("burn").addClass("puff");
                $(".smoke").each(function () {
                    $(this).addClass("puff-bubble");
                });
                $("#glow").remove();
                txt.hide().html("🎉FELIZ ANIVERSÁRIO ISA!🥳 ").delay(750).fadeIn(300);
                $("#candle").animate({
                    opacity: ".5"
                }, 100);
            }
        });
    });
});
