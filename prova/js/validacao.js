var nome = $("#nome");

let nomeV = false;

function validaNome(){
  nome.on("change", function(){
  var verifyInt = /\d+/g;
  var valor = nome.val();
  var teste = valor.split(/\S+/).length - 1;

  if(teste >= 2 && $(nome).val().match(verifyInt) == null){
    nome.removeClass("borda-vermelha");
    nome.addClass("borda-verde");
    nomeV = true;
    habilita();
    return true;
  }else{
    nome.removeClass("borda-verde");
    nome.addClass("borda-vermelha");
    nomeV = false;
    habilita();
    return false;
  }

});
}
validaNome();

let emailV = false;

var email = $("#email");

function validaEmail(){
  email.on("change", function(){
  var valor = email.val();
  var myRe = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])/;


  if(myArray = myRe.exec(valor)){
    email.removeClass("borda-vermelha");
    email.addClass("borda-verde");
    emailV = true;
    habilita();
    return true;

  }else{
    email.removeClass("borda-verde");
    email.addClass("borda-vermelha");
    emailV = false;
    habilita();
    return false;
  }

});
}
validaEmail();

let interesses = false;
var outro = $(".outro");
outro.on("click", function(){
  interesses = true;
  habilita();
  if(outro.is(":checked") == true) {
    $("#interesses").attr("hidden", false);
  } else {
    $("#interesses").attr("hidden", true);
  }
});

let turno = false;
let disponibilidade = $("input[type='radio']");
disponibilidade.on("click", function() {
  turno = true;
  habilita();
  if ($(this).val() == "personalizar") {


    $("#personalizar").attr("hidden", false);
    return;
  }

  $("#personalizar").attr("hidden", true);

});



let areaV = false;
$(".area").focusout(function() {
  validaArea($(".area"));
});

function validaArea(area) {
  let cont = area.val().length;
  if (cont > 140) {
    area.removeClass("borda-vermelha");
    area.addClass("borda-verde");
    areaV = true;
    habilita();
    return;
  }

  area.removeClass("borda-verde");
  area.addClass("borda-vermelha");
  areaV = false;
  habilita();
}

function habilita() {
  if (disponibilidade && outro  && nomeV && emailV && areaV) {
    $('.botao').removeClass("disable");
  } else {
    $('.botao').addClass("disable");
  }
}
