var nome = $("#nome");

function validaNome(){
  nome.on("change", function(){
  var valor = nome.val();
  var teste = valor.split(/\S+/).length - 1;
  if(teste >= 2){
    nome.removeClass("borda-vermelha");
    nome.addClass("borda-verde");
    return true;
  }else{
    nome.removeClass("borda-verde");
    nome.addClass("borda-vermelha");
    return false;
  }
});
}
var disponibilidade = $("#disponibilidade");
disponibilidade.on("click", function(){
  $("#personalizar").attr("hidden", false);
  console.log(disponibilidade.val());
});
