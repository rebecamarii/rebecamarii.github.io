class Produto {
    constructor(id, nome, categoria, img, valorUnitario) {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.foto = img;
        this.valorUnitario = valorUnitario;
    }
}

function pesquisaPorId(vetor, objId){
    var result;
    $.each(vetor, function(index, obj){
        if (obj.id == objId) {
            result = obj;
        }
    });
    return result;
}

var cardapio = [new Produto(1, "Capuccino", "Bebidas Quentes", "http://rafaelescalfoni.net/img/capuccino.png",7)
    , new Produto(2, "Espresso", "Bebidas Quentes", "http://rafaelescalfoni.net/img/espresso.png",4)
    , new Produto(3, "Frapuccino", "Bebidas Quentes", "http://rafaelescalfoni.net/img/frapuccino.png",8)
    , new Produto(4, "Chococcino", "Bebidas Quentes", "http://rafaelescalfoni.net/img/chococcino.png",7)
    , new Produto(5, "Chocolate Quente", "Bebidas Quentes", "http://rafaelescalfoni.net/img/chocolate_quente.png",10)
    , new Produto(6, "Frapê", "Bebidas Frias", "http://rafaelescalfoni.net/img/frape.png",12)
    , new Produto(7, "Suco de Laranja", "Bebidas Frias", "http://rafaelescalfoni.net/img/suco_laranja.png",10)
    , new Produto(8, "Açaí", "Doces", "http://rafaelescalfoni.net/img/acai.png",12)
    , new Produto(9, "Bolo de Laranja", "Doces", "http://rafaelescalfoni.net/img/bolo_laranja.png",8)];

$(function(){

    var produtosEscolhidosArray = [];
    var pedidos = [];
    var total = 0;

    $.each(cardapio, function(ind, item){
        var itemLista = $("<li>");
       
        itemLista.attr("id", item.id);
        itemLista.text(item.nome);
        $("#cardapio").append(itemLista);
    });

    $("#cardapio").on("click", "li",function(){
        var itemEscolhido = pesquisaPorId(cardapio, $(this).attr("id"));
        pedidos.push(itemEscolhido);
        $("#pedidos").empty();
        total = 0;
        
        $.each(pedidos, function(ind, cardapio){
            total += parseInt(cardapio.valorUnitario);
            var itemLista = $("<li>");
            itemLista.attr("id", cardapio.id);
            itemLista.text(cardapio.nome + " - " + cardapio.valorUnitario);
            $("#pedidos").append(itemLista);
            $("#total").empty();
            $("#total").append(total);
        });
    });
});