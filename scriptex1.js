$(function(){

    function Livro(titulo, descricao, genero, autor){
        this.titulo=titulo;
        this.descricao=descricao;
        this.genero=genero;
        this.autor=autor;
    }
    function novaLinha(titulo, descricao, genero, autor){
        let objeto = {};
        obj.titulo = tituloLivro;
        obj.descricao = descLivro;
        obj.genero = generoLivro;
        obj.autor = autorLivro;
        return objeto;
    }

    $("#but").click(function(){   

        let tituloL = $("#titulo").val();
        let descricaoL = $("#descricao").val();
        let generoL = $("#genero").val();
        let autorL = $("#autor").val();

        $("#catalogo").append($("<tr>"));

        let obj_tt = $("<td>").text(tituloL);
        $("#catalogo").append(obj_tt);

        let obj_dc = $("<td>").text(descricaoL);
        $("#catalogo").append(obj_dc);

     
        let obj_gn = $("<td>").text(generoL);
        $("#catalogo").append(obj_gn);
        

        let obj_au = $("<td>").text(autorL);
        $("#catalogo").append(obj_au);

        $("<td>").append($("<img>").attr('src', 'lixeira.png'));

    })
    
    $("#butfall").click(function(){
        $("#sec").empty();

    })
    $("#catalogo").on("click", "#img", function(){
        $(this).parents("#catalogo tr").remove();

    })
});