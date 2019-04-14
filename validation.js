
$(document).ready(function(){
    $("#szin").click(function(){
      $("#form").css("background-color","lightblue");
    });
    $("#meret").click(function(){
      $("#form").css("width","460px");
    });
    $("input[type=text], input[type=password], input[type=email], input[type=number]").focus(function(){
        $(this).css("background-color","gold");
    });
    $("input[type=text], input[type=password], input[type=email], input[type=number]").focusout(function(){
      $(this).css("background-color","");
    });
    $(".reg").click(function(){
      $("#form").slideToggle(800);
    });
});
var input;
function init(){
  input = document.getElementsByTagName('input');
  input[0].addEventListener("keydown",nameCheck);
  input[1].addEventListener("keydown",pwdCheck);
  input[5].addEventListener("keydown",emailCheck);
}
function nameCheck(){
  let uid = input[0].value;
  let szam = /[0-9]/;
  if(uid.length >= 8 && uid.match(szam) && !uid.charAt(0).match(szam)){
    document.getElementById('message').innerHTML = "Megfelelő felhasználónév!";
  }
  else{
    document.getElementById('message').innerHTML = "";
  }
}
function pwdCheck(){
  let pass = input[1].value;
  let kisbetu = /[a-z]/;
  let nagybetu = /[A-Z]/;
  let speckar = /[*,%,?,!]/;
  if(pass.match(kisbetu) && pass.match(nagybetu) && pass.match(speckar) && pass.length >= 8){
    document.getElementById('message').innerHTML = "Megfelelő erősségű jelszó!";
  }
  else {
    document.getElementById('message').innerHTML = "";
  }
}
function emailCheck(){
	let email = input[5].value;
	let kukac = email.indexOf("@");
	let pont = email.lastIndexOf(".");
	if(kukac>0 && (pont - kukac) > 0 && (email.length - pont) > 1  && (email.length - pont) < 5 ){
    document.getElementById('message').innerHTML = "Megfelelő e-mail cím!";
	}
	else {
    document.getElementById('message').innerHTML = "";
	}
}
