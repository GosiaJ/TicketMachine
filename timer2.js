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
//-----------------------------------------------
// Łączna cena za bilety czasowe
//-----------------------------------------------

function ilosc()
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
	document.getElementById("koszt").innerHTML = 'Do zaplaty: ' + suma + 'pln' ;
	localStorage.setItem("cenaprzekazana", suma);
	localStorage.setItem("bilety_ulgowe_zwykle", 0);
	localStorage.setItem("bilety_ulgowe_wszyskie", 0);
	localStorage.setItem("bilety_normalne_zwykle", 0);
	localStorage.setItem("bilety_normalne_wszyskie", 0);
	localStorage.setItem("bilety_normalne_dobowe", 0);
	localStorage.setItem("bilety_ulgowe_dobowe", 0);
} 


function all(){
	ilosc();
	odliczanie();
}

function koncowe()
{
	document.getElementById("koszta").innerHTML = '<h3>Do zaplaty: </h3>' + parseFloat(localStorage.getItem("cenaprzekazana")) + ' zł';
	odliczanie();

}