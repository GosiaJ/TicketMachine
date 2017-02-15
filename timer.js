function odliczanie()
	{
		var dzisiaj = new Date();
		
		var rok = dzisiaj.getFullYear();
		
		var miesiac = dzisiaj.getMonth();
		miesiac=miesiac+1;
		if (miesiac<10) miesiac = "0"+miesiac;
		
		var dzien = dzisiaj.getDate();
		if (dzien<10) dzien = "0"+dzien; 
		
		var godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;
		
		var minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;
		
		var sekunda = dzisiaj.getSeconds();
		if (sekunda<10) sekunda = "0"+sekunda;
		
		document.getElementById("zegar").innerHTML =" Data: "+dzien+"."+miesiac+"."+rok+"</br>"+"Godzina: "+godzina+":"+minuta+":"+sekunda;
		 setTimeout("odliczanie()",1000);
	}
	

function zamiana()
	{	
	var x = String(window.location.href);
		if(x === "http://localhost/bilet/miesieczne.html"){
			localStorage.setItem("lastname", "BILETY MIESIĘCZNE");
			localStorage.setItem("lastsite", "miesieczne.html");
			}
		if(x === "http://localhost/bilet/30-dniowe.html"){
			localStorage.setItem("lastname", "BILETY 30-DNIOWE");
			localStorage.setItem("lastsite", "30-dniowe.html");
			}
		if(x === "http://localhost/bilet/semestralne.html"){
			localStorage.setItem("lastname", "BILETY SEMESTRALNE");
			localStorage.setItem("lastsite", "semestralne.html");
			}		
	}
	function wpisz(){
		document.getElementById("naglowek2").innerHTML = localStorage.getItem("lastname") ;
		document.getElementById("powrot2").href = localStorage.getItem("lastsite") ;
		if(localStorage.getItem("lastsite") === "semestralne.html"){
		document.getElementById("napiswaski1").innerHTML = "4 Miesięczny" ;
		document.getElementById("napiswaski2").innerHTML = "5 Miesięczny" ;
		document.getElementById("napiswaski3").style.display = "none" ;
		document.getElementById("wyborilosci2").style.display = "none" ;
		document.getElementById("wybierz3").style.display = "none" ;
		}
	}

	function ilosc_biletow()
{
	var zmienna1 = parseFloat(localStorage.bilety_ulgowe_zwykle);
	var zmienna2 = parseFloat(localStorage.bilety_ulgowe_wszyskie);
	var zmienna3 = parseFloat(localStorage.bilety_normalne_zwykle);
	var zmienna4 = parseFloat(localStorage.bilety_normalne_wszyskie);
	//obliczanie cen biletów dla każdego rodzaju
	var cena1 = zmienna1*1.6;
	var cena2 = zmienna2*2.1;
	var cena3 = zmienna3*3.2;
	var cena4 = zmienna4*4.2;
	suma = round((cena1+cena2+cena3+cena4), 2);
	localStorage.setItem("cenaprzekazana", suma);
	document.getElementById("koszt").innerHTML = '<h3>Do zapłaty: </h3>' + parseFloat(localStorage.cenaprzekazana) + ' zł'; 
	localStorage.setItem("bilety_ulgowe_zwykle", 0);
	localStorage.setItem("bilety_ulgowe_wszyskie", 0);
	localStorage.setItem("bilety_normalne_zwykle", 0);
	localStorage.setItem("bilety_normalne_wszyskie", 0);
} 

//-----------------------------------------------
// Łączna cena za bilety czasowe
//-----------------------------------------------

function ilosc_biletow_czas()
{
	var zmienna1 = parseFloat(localStorage.bilety_ulgowe_zwykle);
	var zmienna2 = parseFloat(localStorage.bilety_ulgowe_wszyskie);
	var zmienna3 = parseFloat(localStorage.bilety_normalne_zwykle);
	var zmienna4 = parseFloat(localStorage.bilety_normalne_wszyskie);
	var zmienna5 = parseFloat(localStorage.bilety_normalne_dobowe);
	var zmienna6 = parseFloat(localStorage.bilety_ulgowe_dobowe);
	//obliczanie cen biletów dla każdego rodzaju
	var cena1 = zmienna1*1.9;
	var cena2 = zmienna2*2.4;
	var cena3 = zmienna3*3.8;
	var cena4 = zmienna4*4.8;
	var cena5 = zmienna5*13;
	var cena6 = zmienna6*6.5;
	suma = round((cena1+cena2+cena3+cena4+cena5+cena6), 2);
	localStorage.setItem("cenaprzekazana", suma);
	document.getElementById("koszt").innerHTML = '<h3>Do zapłaty: </h3>' + parseFloat(localStorage.cenaprzekazana) + ' zł';
	localStorage.setItem("bilety_ulgowe_zwykle", 0);
	localStorage.setItem("bilety_ulgowe_wszyskie", 0);
	localStorage.setItem("bilety_normalne_zwykle", 0);
	localStorage.setItem("bilety_normalne_wszyskie", 0);
	localStorage.setItem("bilety_normalne_dobowe", 0);
	localStorage.setItem("bilety_ulgowe_dobowe", 0);
} 


function all_jednoprzej()
{
	ilosc_biletow();
	odliczanie();
}

function all()
{
	ilosc_biletow_czas();
	odliczanie();
}
function przekazanie(){
	var cenaaa = parseFloat(localStorage.getItem("cenaprzekazana"));
	document.getElementById("koszt").innerHTML =  '<h3>Do zapłaty: </h3>' + cenaaa + ' zł'; 
	odliczanie();
}

function koncowe()
{
	document.getElementById("koszt333").innerHTML = '<h3>Do zapłaty: </h3>' + parseFloat(localStorage.getItem("cenaprzekazana")) + ' zł';
	odliczanie();

}
