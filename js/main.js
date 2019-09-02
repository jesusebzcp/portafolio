$(document).ready(function() {
    $("#buscar").click(function() {
        $('.ocultar').toggle(400);
    });
    $("#buscari").click(function() {
        $('.ocultar2').toggle(400);
    });
    $("#buscar").click(function() {
        $('.mostar').toggle(400).animate();
    });
    $("#menu").click(function() {
        $('.ocultar1').toggle(400);
    });
    barChart();

    $(window).resize(function() {
        barChart();
    });


    barChart();

    $(window).resize(function() {
        barChart();
    });

    function barChart() {
        $('.bar-chart').find('.progress').each(function() {
            var itemProgress = $(this),
                itemProgressWidth = $(this).parent().width() * ($(this).data('percent') / 100);
            itemProgress.css('width', itemProgressWidth);
        });
    }
});