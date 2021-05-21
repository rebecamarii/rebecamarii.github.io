$(function(){ 
    var acervoArray = new Array();
    function Livro (titulo, descricao, genero, autor){
            
        this.titulo = titulo;
        this.genero = genero;
        this.descricao = descricao;
        this.autor = autor;
    
    }
    $("#cadastrar").click(function(){
        let tituloL = $("#titulo").val();
        let descricaoL = $("#descricao").val();
        let generoL = $("#genero").val();
        let autorL = $("#autor").val();

        let livro = new Livro(tituloL, descricaoL, generoL, autorL);
        acervoArray.push(livro);

        $("#acervo")
            .append(
                $("<tr>")
                    .append(
                        $("<td>")
                            .text(tituloLivro)
                        )
                    .append(
                        $("<td>")
                            .text(descricaoLivro)
                    )
                    .append(
                        $("<td>")
                            .text(generoLivro)
                    )
                    .append(
                        $("<td>")
                            .text(autorLivro)
                    )
                    .append(
                        $("<td>")
                            .append($("<p>Apagar</p>"))
                        )
            );
    })

    $("#catalogo").on("click","p", function(){
        $(this).parents("#catalogo tr").remove();
    })


    $("#salvarBD").click(function() {
        $("input[name='catalogo_post']").val(JSON.stringify(catalogoArray));
        $("#formSalvarBD").submit();
    });
});