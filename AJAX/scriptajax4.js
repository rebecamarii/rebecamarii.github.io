$(document).ready(function() {
    $("#button").click(function() {  
        $( "#result" ).empty(); 
        var cep = $("#cep").val();
        var validacep = /^[0-9]{5}-?[0-9]{3}$/;
            $.getJSON("http://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
                    $("#result").append("<p> Rua: " + dados.logradouro + "</p>")
                    .append("<p> Bairro: " + dados.bairro + "</p>")
                    .append("<p> Localidade: " + dados.localidade + "</p>")
                    .append("<p> UF: " + dados.uf + "</p>")
                    .append("<p> IBGE: " + dados.ibge + "</p>");
            });
    });
});