$(document).ready(function(){
    $(".container").toggle(900);
    $(".hatter").toggle(900);
    $(".avatarIMG").toggle(900);
    //Aktív input
    $("input[type=text], input[type=password], input[type=email], input[type=number], input[type=date]").focus(function(){
      $(this).css("border-bottom","1.5px solid #996600");
    });
    $("input[type=text], input[type=password], input[type=email], input[type=number], input[type=date]").focusout(function(){
      $(this).css("border-bottom","");
    });
    $(".avatarIMG").click(function(){
      $(".avatar").attr("src","avatar2.png");
    });
    $(".hatter").click(function(){
      $("body").css("background","url('back2.jpg')");
    });
});
var input;
function init(){
  input = document.getElementsByTagName('input');
  input[0].addEventListener("keyup", uidEll);
  input[1].addEventListener("keyup", pwdEll);
  input[2].addEventListener("keyup", iranyitoEll);
  input[3].addEventListener("keyup", emailEll);
  input[4].addEventListener("change", szulEll);
  document.getElementById('kuldes').addEventListener("click", genderEll);
  document.getElementById('kuldes').addEventListener("click", erdEll);
}
function uidEll(){
  let user = input[0].value;
  let szam = /[0-9]/;
  if(user.length >= 8 && user.match(szam) && !user.charAt(0).match(szam)){
    document.getElementById('felhasz').style.color = "darkgreen";
  }
  else {
    document.getElementById('felhasz').style.color = "";
  }
}
function pwdEll(){
  let pwd = input[1].value;
  let kisbetu = /[a-z]/;
  let nagybetu = /[A-Z]/;
  let speckar = /[*,%,?,!]/;
  if(pwd.length >=8 && pwd.match(kisbetu) && pwd.match(nagybetu) && pwd.match(speckar)){
    document.getElementById('pass').style.color = "darkgreen";
  }
  else {
    document.getElementById('pass').style.color = "";
  }
}
function iranyitoEll(){
  let iranyito = input[2].value;
  if(iranyito >= 1000 && iranyito <= 9999){
    document.getElementById('iranyito').style.color = "darkgreen";
  }else {
    document.getElementById('iranyito').style.color = "";
  }
}
function emailEll(){
	let email = input[3].value;
	let kukac = email.indexOf("@");
	let pont = email.lastIndexOf(".");
	if(kukac>0 && (pont - kukac) > 0 && (email.length - pont) > 1  && (email.length - pont) < 5 ){
    document.getElementById('email').style.color = "darkgreen";
	}
	else {
    document.getElementById('email').style.color = "";
	}
}
function szulEll(){
  let szulido = input[4].value;
  let d = new Date();
  let a = new Date();
  d.setYear(1950);
  a.setYear(2000);
  szulido = szulido.split("-");
  if(szulido[0] >= d.getFullYear() && szulido[0] <= a.getFullYear()){
    document.getElementById('szul').style.color = "darkgreen";
  }
  else {
    document.getElementById('szul').style.color = "";
  }
}
function genderEll(){
  let genderM = input[5];
  let genderF = input[6];
  if((genderM.checked == false) && (genderF.checked == false))
    alert("Elfelejtetted kiválasztani a nemed!");

  if((genderM.checked == true) && (genderF.checked == true))
    alert("Mindkét nemet nem választhatod!");
}
function erdEll(){
  var erd = document.querySelectorAll('input[type=checkbox]:checked').length;
if (erd == 2 || erd > 2)
    return true;
else {
    alert('Minimum két érdeklődés kört jelölj meg!');
    return false;
}
}
