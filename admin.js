/**

Functionalitati pentru pagina de admin

**/

//functie stergere hoteluri
function deleteHotels() {

  var retrievedData = localStorage.getItem("globalHotels");
  var finalHotels = JSON.parse(retrievedData);
  finalHotels.pop();
    localStorage.clear();
    location.reload();

}

//functie adaugare hoteluri
var addHotel = function() {
    
    
    //hoteluri adaugate by default
    let hoteluri = [
        {nume: "nume1", adresa: "adresa1", pret: 200, telefon: 0723198713, stele: 3},
        {nume: "nume2", adresa: "adresa2", pret: 150, telefon: 0278784584, stele: 2},
        {nume: "nume3", adresa: "adresa3", pret: 300, telefon: 0348734592, stele: 4}
    ]

    
      var localHotels = [];

      try {
          localHotels = JSON.parse(window.localStorage.getItem('globalHotels'));
          if( localHotels == null)
              localHotels.concat(hoteluri);
      } catch(ex) {
          console.log("exista probleme");
          localHotels = hoteluri;
      }
      let newHoteluri = [ 
          {nume :document.getElementById('nume').value},
          {adresa :document.getElementById('adresa').value},
          {pret :parseFloat(document.getElementById('pret').value)},
          {telefon : document.getElementById('telefon').value},
          {stele :parseInt(document.getElementById('stele').value)}
      ]
      localHotels.push(newHoteluri);      
    
      //Realizare API in format JSON
      window.localStorage.setItem("globalHotels", JSON.stringify(localHotels));
    
     location.reload(); 
     document.getElementById('nume').value = "";
    document.getElementById('adresa').value = "";
    document.getElementById('pret').value = "";
    document.getElementById('telefon').value = "";
    document.getElementById('stele').value = "";
};


//Schimbare culoare header si meniu pentru restul paginilor
function changeColor(colorS) {
    document.getElementsByTagName('header')[0].style.backgroundColor = colorS;
    window.localStorage.setItem("color", colorS);
}

//Realizare tema admin Disco
var t;
function setbackground()
{
t = setTimeout( "setbackground()", 500);
var index = Math.round(Math.random() * 9);
var ColorValue = "FFFFFF";
if(index == 1)
ColorValue = "FFCCCC";
if(index == 2)
ColorValue = "CCAFFF";
if(index == 3)
ColorValue = "A6BEFF";
if(index == 4)
ColorValue = "99FFFF";
if(index == 5)
 ColorValue = "D5CCBB";
if(index == 6)
ColorValue = "99FF99";
if(index == 7)
ColorValue = "FFFF99";
if(index == 8)
ColorValue = "FFCC99";
if(index == 9)
ColorValue = "CCCCCC"; 
document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
}

function setbackgroundStop() {
document.getElementsByTagName("body")[0].style.backgroundColor = "#" + "FFFFFF";
}

function onDisco() {
    setbackground();
}

function offDisco() {
 clearTimeout(t); 
 document.getElementsByTagName("body")[0].style.backgroundColor = "#" + "FFFFFF";
}


//Adaugare restrictie nume hotel 
if(document.getElementById("nume") != null)
document.getElementById("nume").onkeypress = function(event){
    for(var code = 48; code < 58; code++) {
      if (event.keyCode == code){
          alert("Recomandam ca numele hotelului trebuie sa inceapa cu litera!");
      }
   }
};

//Adaugare muzica fundal in admin
var audio = new Audio('resurse/muzica.mp3');

function playMusic() {
    audio.play();
}

function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
}