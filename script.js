$(document).ready(function() {
    $('#ipqForm').on('submit', function(e) {
        e.preventDefault();

        var CMPAMV = parseFloat($('#CMPAMV').val()) || 0;
        var CMPAAVD = parseFloat($('#CMPAAVD').val()) || 0;
        var CMPACCP = parseFloat($('#CMPACCP').val()) || 0;
        var CMPIF = parseFloat($('#CMPIF').val()) || 0;

        var resultado = ((CMPAMV * 3) + (CMPAAVD * 1) + (CMPACCP * 1) + (CMPIF * 10)) * 100;

        $('#resultado-ipq').text(resultado.toFixed(2));
    });

    // Adicionando funcionalidade ao botão "Limpar"
    $('#clearButton-ipq').on('click', function() {
        $('#CMPAMV').val('');
        $('#CMPAAVD').val('');
        $('#CMPACCP').val('');
        $('#CMPIF').val('');
        $('#resultado-ipq').text('');
    });


    $('#irqForm').on('submit', function(e) {
        e.preventDefault();

        var PMV = parseFloat($('#PMV').val()) || 0;
        var PCCP = parseFloat($('#PCCP').val()) || 0;
        var RegistrosMV = parseFloat($('#RegistrosMV').val()) || 0;
        var RegistrosCCP = parseFloat($('#RegistrosCCP').val()) || 0;

        var resultadoIRQ = (PMV * 3 + PCCP * 1) * 100 / (RegistrosMV * 3 + RegistrosCCP * 1);

        $('#resultado-irq').text(resultadoIRQ.toFixed(2));
    });

    // Adicionando funcionalidade ao botão "Limpar"
    $('#clearButton-irq').on('click', function() {
        $('#PMV').val('');
        $('#PCCP').val('');
        $('#RegistrosMV').val('');
        $('#RegistrosCCP').val('');
        $('#resultado-irq').text('');
    });


    // Código para IPRP
    $('#iprpForm').on('submit', function(e) {
        e.preventDefault();

        var PABR = parseFloat($('#PABR').val()) || 0;
        var PACR = parseFloat($('#PACR').val()) || 0;
        var TRGB = parseFloat($('#TRGB').val()) || 0;
        var TRGC = parseFloat($('#TRGC').val()) || 0;

        var resultadoIPRP = (PABR + PACR) * 100 / (TRGB + TRGC);
        $('#resultado-iprp').text(resultadoIPRP.toFixed(2));
    });

    // Limpeza dos campos IPRP
    $('#clearButton-iprp').on('click', function() {
        $('#PABR').val('');
        $('#PACR').val('');
        $('#TRGB').val('');
        $('#TRGC').val('');
        $('#resultado-iprp').text('');
    });

});
