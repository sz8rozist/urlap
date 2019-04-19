
$(document).ready(function(){
  $("form").slideDown(800);
  $("#kuldes").slideDown(800);
    $("input[type=text], input[type=password], input[type=email], input[type=number], input[type=date]").focus(function(){
        $(this).css("background-color","lightyellow");
    });
    $("input[type=text], input[type=password], input[type=email], input[type=number], input[type=date]").focusout(function(){
      $(this).css("background-color","");
    });
});
var input;
function init(){
  input = document.getElementsByTagName('input');
  input[0].addEventListener("keyup",nameCheck);
  input[1].addEventListener("keyup",pwdCheck);
  input[5].addEventListener("keyup",emailCheck);
  input[4].addEventListener("keyup", iranyitoCheck);
  input[6].addEventListener("change",szulCheck);
  document.getElementById('kuldes').addEventListener("click", genderCheck);
  /*document.getElementById('kuldes').addEventListener("click", erdeklodesCheck);*/
}
function nameCheck(){
  let uid = input[0].value;
  let szam = /[0-9]/;
  if(uid.length >= 8 && uid.match(szam) && !uid.charAt(0).match(szam)){
    document.getElementById('nameErr').style.display = "inline";
  }
  else {
    document.getElementById('nameErr').style.display = "none";
  }
}
function pwdCheck(){
  let pass = input[1].value;
  let kisbetu = /[a-z]/;
  let nagybetu = /[A-Z]/;
  let speckar = /[*,%,?,!]/;
  if(pass.length >=8 && pass.match(kisbetu) && pass.match(nagybetu) && pass.match(speckar)){
    document.getElementById('pwdErr').style.display = "inline";
  }
  else {
    document.getElementById('pwdErr').style.display = "none";
  }
}
function emailCheck(){
	let email = input[5].value;
	let kukac = email.indexOf("@");
	let pont = email.lastIndexOf(".");
	if(kukac>0 && (pont - kukac) > 0 && (email.length - pont) > 1  && (email.length - pont) < 5 ){
    document.getElementById('emailErr').style.display = "inline";
	}
	else {
    document.getElementById('emailErr').style.display = "none";
	}
}
function genderCheck(){
  let genderM = input[2];
  let genderF = input[3];
  if((genderM.checked == false) && (genderF.checked == false)){
    alert("Elfelejtetted kiválasztani a nemed!");
  }//hibás rész valamiért ha lányt választok lefut az alert-ig a fiúnál viszont nem.
}
function szulCheck(){
  let szulido = input[6].value;
  let d = new Date();
  let a = new Date();
  d.setYear(1950);
  a.setYear(2000);
  szulido = szulido.split("-");
  if(szulido[0] >= d.getFullYear() && szulido[0] <= a.getFullYear()){
    document.getElementById('szulErr').style.display = "inline";
  }
  else {
    document.getElementById('szulErr').style.display = "none";
  }

}
function iranyitoCheck(){
  let iranyito = input[4].value;
  if(iranyito >= 1000 && iranyito <= 9999){
    document.getElementById('iranyitoErr').style.display = "inline";
  }else {
    document.getElementById('iranyitoErr').style.display = "none";
  }
}
/*function erdeklodesCheck(){


}*/
