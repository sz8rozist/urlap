$(document).ready(function(){
    $(".registrationBox").toggle(900);
    $(".hatter").toggle(900);
    $(".avatarIMG").toggle(900);
    //Aktív input
    $("input[type=text], input[type=password], input[type=email], input[type=number], input[type=date]").focus(function(){
      $(this).css("border-bottom","1.5px solid #fb2525");
    });
    $("input[type=text], input[type=password], input[type=email], input[type=number], input[type=date]").focusout(function(){
      $(this).css("border-bottom","");
    });
    //Hatter Gomb
    $(".hatter").click(function(){
      $("body").css("background","url('back2.jpg')");
    });
    $(".hatter").mouseover(function(){
      $(this).css("height","43px");
    });
    $(".hatter").mouseout(function(){
      $(this).css("height","40px");
    });
    //Avatar Gomb
    $(".avatarIMG").click(function(){
      $(".avatar").attr("src","avatar2.png");
    });
    $(".avatarIMG").mouseover(function(){
      $(this).css("height","43px");
    });
    $(".avatarIMG").mouseout(function(){
      $(this).css("height","40px");
    });
    //Küldés Gomb
    $("#kuldes").mouseover(function(){
      $(this).css("height","43px");
    });
    $("#kuldes").mouseout(function(){
      $(this).css("height","40px");
    });
});
var mezo;
function init(){
  mezo = document.getElementsByTagName('input');
  mezo[0].addEventListener("keyup", uidEll);
  mezo[1].addEventListener("keyup", pwdEll);
  mezo[2].addEventListener("keyup", iranyitoEll);
  mezo[3].addEventListener("keyup", emailEll);
  mezo[4].addEventListener("change", szulEll);
  document.getElementById('kuldes').addEventListener("click", genderEll);
  document.getElementById('kuldes').addEventListener("click", erdEll);
}
//Felhasználónév
function uidEll(){
  let uid = mezo[0].value;
  let szam = /[0-9]/;
  if(uid.length >= 8 && uid.match(szam) && !uid.charAt(0).match(szam)){
    document.getElementById('nameErr').style.display = "inline";
  }
  else {
    document.getElementById('nameErr').style.display = "none";
  }
}
//Jelszó
function pwdEll(){
  let pass = mezo[1].value;
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
//Irányítószám
function iranyitoEll(){
  let iranyito = mezo[2].value;
  if(iranyito >= 1000 && iranyito <= 9999){
    document.getElementById('iranyitoErr').style.display = "inline";
  }else {
    document.getElementById('iranyitoErr').style.display = "none";
  }
}
//E-mail
function emailEll(){
	let email = mezo[3].value;
	let kukac = email.indexOf("@");
	let pont = email.lastIndexOf(".");
	if(kukac>0 && (pont - kukac) > 0 && (email.length - pont) > 1  && (email.length - pont) < 5 ){
    document.getElementById('emailErr').style.display = "inline";
	}
	else {
    document.getElementById('emailErr').style.display = "none";
	}
}
//Születési Idő
function szulEll(){
  let szulido = mezo[4].value;
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
//Gender(Fiú/Lány)
function genderEll(){
  let genderM = mezo[5];
  let genderF = mezo[6];
  if((genderM.checked == false) && (genderF.checked == false))
    alert("Elfelejtetted kiválasztani a nemed!");

  if((genderM.checked == true) && (genderF.checked == true))
    alert("Mindkét nemet nem választhatod!");
}
//Érdeklődési kör
//Ha kettő vagy kettőnél több érdeklődési kört bejelölök akkor is feldobja az alertet.
function erdEll(){
  let erdKor = document.getElementById('erd').value;
  let szamlalo = 0;
  for(let i = 0; i < erdKor.length; i++){
    if(erdKor[i].type == "checkbox" && erdKor[i].checked){
      szamlalo ++;
    }
  }
  if(szamlalo < 2)
    alert("Minimum két érdeklődési kört meg kell jelölj!");

}
