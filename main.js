/*
   Fisier script pentru toate paginile din site
*/

//declarare structura care memoreaza hotelurile by default
let hoteluri = [
    
    {nume: "nume1", adresa: "adresa1", pret: 200, telefon: 0723198713, stele: 3},
    {nume: "nume2", adresa: "adresa2", pret: 150, telefon: 0278784584, stele: 2},
    {nume: "nume3", adresa: "adresa3", pret: 300, telefon: 0348734592, stele: 4}
]

//Verificare corectitudine in consola a obiectelor de tip hotel
hoteluri.forEach(forEachFunction);
function forEachFunction(item, index) {
  //console.log(item);
} 

//Realizare pop-up formular (deschidere la click pe hotel)
document.body.onload = addElement;
function addElement () { 
    
  var newDiv = document.createElement("div"); 
  newDiv.innerHTML +='<div id="popup" style=" text-align:center;position: absolute;width: 80%;z-index: 999;height:500px;margin: 0 auto;,max-width: 80%;display: none;top:0;background-color: #fff;  border: 1px solid #ddd;  border-radius: 5px;  box-shadow: 0 2px 8px #aaa;  overflow: hidden;   padding: 10px;"><div class="popup_body" style="  height: 100px;">Formular de contact</div><div id="popupcont"></div><button class="close_button"onClick="inchidePopup()">close</button</div>';   

  var curent = document.getElementById("main_container"); 
  document.body.insertBefore(newDiv, curent); 
}

creatPopup = false;
function deschidePopup() {
  var el = document.getElementById('popup');
  el.style.display = 'block';
    
    // add the form inside the body
    if(creatPopup == false) {
        realizareForm();
    }
    
    creatPopup = true;
}

function inchidePopup() {
  var el = document.getElementById('popup');
  el.style.display = 'none';
}

//functie realizare formular
function realizareForm() {

var form = document.createElement("form");
form.setAttribute('method',"post"); //pentru PHP

//input tip text
var text = document.createElement("input");
text.type = "text";
text.name = "user_name";
text.id = "user_name1";
text.placeholder = "Nume";
    
//input tip email
var email = document.createElement("input");
email.type = "email";
email.name = "email";
email.id = "email";
email.placeholder = "E-mail";

//input tip password
var password = document.createElement("input");
password.type = "password";
password.name = "password";
password.id = "password1";
password.placeholder = "Parola";


var array = ["Turist","Locatar","Angajat"];

//select
var selectList = document.createElement("select");
selectList.id = "mySelect";

for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
}

//checkbox
var checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "checkbox1";
checkbox.name = "check1";
var p3 = document.createElement("p");
p3.innerHTML = "Sunt de acord cu termenii si conditiile";


var p1 = document.createElement("p");
p1.innerHTML = "Masculin";
var p2 = document.createElement("p");
p2.innerHTML = "Feminin";
//radio
var radio = document.createElement("input");
radio.type = "radio";
radio.id = "radio";
radio.name = "radio";

//radio
var radio2 = document.createElement("input");
radio2.type = "radio";
radio2.id = "radio2";
radio2.name = "radio2";

//buton
var buton = document.createElement("input");
buton.type = "submit";
buton.value = "Submit";


// adaugare elemente in formular
p1.appendChild(radio);
p2.appendChild(radio2);
p3.appendChild(checkbox);

form.appendChild(text);
form.appendChild(email);
form.appendChild(password);
form.appendChild(selectList);
form.appendChild(p1);
form.appendChild(p2);
form.appendChild(p3);
form.appendChild(buton);

document.getElementById("popupcont").appendChild(form); 
}

//preluare valori localStorage
var retrievedData = localStorage.getItem("globalHotels");
var finalHotels = JSON.parse(retrievedData);
console.log(finalHotels);

//preluare culoarea primara
var retrievedColor = localStorage.getItem("color");
document.getElementsByTagName('header')[0].style.backgroundColor = retrievedColor;

if(document.getElementsByClassName('wrap-meniu')[0] != null) {
document.getElementsByClassName('wrap-meniu')[0].style.backgroundColor = retrievedColor;
}


//Scriere in HTML lista cu hoteluri
var content = "";

content = content + "<section class='obiective'><div class='container'><h2>Hoteluri</h2><div class='grid-container'>";

if(finalHotels != null)
for(var i = 3; i < finalHotels.length; i++){
    
   content = content + "<a href='#' onClick='deschidePopup()'><div class='' style='background-color:#aaa;'><img src='img/cazino1.jpg'/><div class='continut'>";
   content = content + "<p>"+finalHotels[i][0].nume + "</p>";
   content = content + "<p>"+finalHotels[i][1].adresa + "</p>";
   content = content + "<p>"+finalHotels[i][2].pret + "</p>";
   content = content + "<p>"+finalHotels[i][3].telefon + "</p>";
   content = content + "<p>"+finalHotels[i][4].stele + "</p>";
   content = content + "</div>";
   content = content + "</div></a>";
}

content = content + "</div></div></section>";

//daca nu exista sectiunea getContent, nu se scrie lista cu hoteluri in HTML
if(document.getElementById("getContent") != null) {
document.getElementById("getContent").innerHTML = content;
}


//functia care valideaza formularul de logare din login.html pentru admin
function check(form)
{
 
 if(form.userid.value == "admin" && form.pswrd.value == "constanta")
 {
    window.open('admin.html'); //ajax request
 }
 else if(form.userid.value != "admin" && form.pswrd.value == "constanta")
     {
          alert("Username gresit!");
     }
else if(form.userid.value != "admin" && form.pswrd.value != "constanta")
     {
          alert("Username si parola gresite!");
     }
else if(form.userid.value == "admin" && form.pswrd.value != "constanta")
 {
        var pattern = new RegExp(/^[A-Za-z]+$/);
     
        if(!pattern.test(form.pswrd.value)){
                  alert("Parola gresita! Hint: parola trebuie sa contina doar litere");
        } else {
                  alert("Parola gresita!");
        }
 }
    
}

//Adaugare video
function addSourceToVideo(element, src, type) {
    var source = document.createElement('source');

    source.src = src;
    source.type = type;

    element.appendChild(source);
}

var video = document.createElement('video');
video.setAttribute("controls","controls")  

if(document.getElementsByClassName('video')[0] != null)
document.getElementsByClassName('video')[0].appendChild(video);

addSourceToVideo(video, 'resurse/constanta.mp4','video/mp4');
