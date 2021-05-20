$(function(){
           
    $.ajax({
        url: "https://rafaelescalfoni.net/receitas.php", success: function(data){
            var obj = JSON.parse(data);

            $.each(obj, function(indice, obj){
                $("#texto").append("<div>" + "<h1>" + "<h2>" + "<h4>"+ obj.nome + "</h4>")
                    .append("<p>"+ obj.descricao + "</p>" )
                            .append("<h2> Preparo </h2>" )
                                $.each(obj.preparo, function(indice, preparo){
                                    $("#texto").append("<p>"+ preparo + "</p>" )
                                });
                                $("#texto").append("<h2> Ingredientes </h2>" )
                                    $.each(obj.ingredientes, function(indice, ingredientes){
                                        $("#texto").append("<p>"+ ingredientes + "</p>" + "</div>")
                                    });

            });
        }

    })
});