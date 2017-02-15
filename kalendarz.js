var modal = document.getElementById('myModal');
var btn = document.getElementById("wybierz1");
var btn2 = document.getElementById("wybierz2");
var btn3 = document.getElementById("wybierz3");
var btn4 = document.getElementById("wybierz4");
var btn5 = document.getElementById("wybierz5");
var btn6 = document.getElementById("wybierz6");
var btn7 = document.getElementById("wybierz7");
var popmies = document.getElementById("popmies");
var dzien_wybrany = 0;

//znikanie zaplac

document.getElementById("zaplac").style.display = "none";

var now = new Date();
var nasz_rok = now.getFullYear();
var roczek_niezmienialny = now.getFullYear();
var miesiac_niezmienialny = now.getMonth();
// numer miesiąca
var nasz_miesiac = now.getMonth();
//pierwszy dzień miesiąca
var InstancjaPierwszegoDnia = new Date(nasz_rok, nasz_miesiac, 0);
var pierwszy_dzien = InstancjaPierwszegoDnia.getDay();
// rok przestępny
function rok_przestepny(year) {
if (year % 4 == 0) 
return true // is leap year
return false // is not leap year
}
function payMe(zmienna){
	if(zmienna !=0)
	{
		document.getElementById("zaplac").style.backgroundColor = "#c7791b";
		document.getElementById("zaplac").style.fontSize = "40px";
		document.getElementById("zaplac").innerHTML = '<a href="zaplac_30dni.html" class="nodecoration"> ZAPŁAĆ </a>';
		document.getElementById("zaplac").style.display = "block";
	}
	else
		{
		document.getElementById("zaplac").style.display = "none";
	}
}
function close(){
        modal.style.display = "none";
}

var m1 = new Array(12);
m1[0] = 31;
m1[1] = rok_przestepny(nasz_rok) ? 28 : 29;
m1[2] = 31;
m1[3] = 30;
m1[4] = 31;
m1[5] = 30;
m1[6] = 31;
m1[7] = 31;
m1[8] = 30;
m1[9] = 31;
m1[10] = 30;
m1[11] = 31;

var weekDay = new Array(7)
weekDay[0] = "P"
weekDay[1] = "W"
weekDay[2] = "Ś"
weekDay[3] = "C"
weekDay[4] = "Pt"
weekDay[5] = "S"
weekDay[6] = "N"


function nazwa(month)
{
var m1 = new Array(12);
m1[0] = "Styczeń";
m1[1] = "Luty";
m1[2] = "Marzec";
m1[3] = "Kwiecień";
m1[4] = "Maj";
m1[5] = "Czerwiec";
m1[6] = "Lipiec";
m1[7] = "Sierpień";
m1[8] = "Wrzesień";
m1[9] = "Październik";
m1[10] = "Listopad";
m1[11] = "Grudzień";

return m1[month]
}

function zmianaWybrania(flaga){
	if(flaga === 1)
	{
		document.getElementById("wybierz1").innerHTML = "WYBRANO";
		document.getElementById("wybierz2").innerHTML = "WYBÓR";
		document.getElementById("wybierz3").innerHTML = "WYBÓR";
		document.getElementById("wybierz4").innerHTML = "WYBÓR";
		document.getElementById("wybierz5").innerHTML = "WYBÓR";
		document.getElementById("wybierz1").style.backgroundColor = '#c7791b';
		document.getElementById("wybierz2").style.backgroundColor = 'transparent';
		document.getElementById("wybierz3").style.backgroundColor = 'transparent';
		document.getElementById("wybierz4").style.backgroundColor = 'transparent';
		document.getElementById("wybierz5").style.backgroundColor = 'transparent';
		payMe(1);
	}
	if(flaga === 2)
	{
		document.getElementById("wybierz1").innerHTML = "WYBÓR";
		document.getElementById("wybierz2").innerHTML = "WYBRANO";
		document.getElementById("wybierz3").innerHTML = "WYBÓR";
		document.getElementById("wybierz4").innerHTML = "WYBÓR";
		document.getElementById("wybierz5").innerHTML = "WYBÓR";
		document.getElementById("wybierz1").style.backgroundColor = 'transparent';
		document.getElementById("wybierz2").style.backgroundColor = '#c7791b';
		document.getElementById("wybierz3").style.backgroundColor = 'transparent';
		document.getElementById("wybierz4").style.backgroundColor = 'transparent';
		document.getElementById("wybierz5").style.backgroundColor = 'transparent';
		payMe(1);
	}
	if(flaga === 3)
	{
		document.getElementById("wybierz1").innerHTML = "WYBÓR";
		document.getElementById("wybierz2").innerHTML = "WYBÓR";
		document.getElementById("wybierz3").innerHTML = "WYBRANO";
		document.getElementById("wybierz4").innerHTML = "WYBÓR";
		document.getElementById("wybierz5").innerHTML = "WYBÓR";
		document.getElementById("wybierz1").style.backgroundColor = 'transparent';
		document.getElementById("wybierz2").style.backgroundColor = 'transparent';
		document.getElementById("wybierz3").style.backgroundColor = '#c7791b';
		document.getElementById("wybierz4").style.backgroundColor = 'transparent';
		document.getElementById("wybierz5").style.backgroundColor = 'transparent';
		payMe(1);	
	}
	if(flaga === 4)
	{
		document.getElementById("wybierz1").innerHTML = "WYBÓR";
		document.getElementById("wybierz2").innerHTML = "WYBÓR";
		document.getElementById("wybierz3").innerHTML = "WYBÓR";
		document.getElementById("wybierz4").innerHTML = "WYBRANO";
		document.getElementById("wybierz5").innerHTML = "WYBÓR";
		document.getElementById("wybierz1").style.backgroundColor = 'transparent';
		document.getElementById("wybierz2").style.backgroundColor = 'transparent';
		document.getElementById("wybierz3").style.backgroundColor = 'transparent';
		document.getElementById("wybierz4").style.backgroundColor = '#c7791b';
		document.getElementById("wybierz5").style.backgroundColor = 'transparent';	
		payMe(1);
	}
	if(flaga === 5)
	{
		document.getElementById("wybierz1").innerHTML = "WYBÓR";
		document.getElementById("wybierz2").innerHTML = "WYBÓR";
		document.getElementById("wybierz3").innerHTML = "WYBÓR";
		document.getElementById("wybierz4").innerHTML = "WYBÓR";
		document.getElementById("wybierz5").innerHTML = "WYBRANO";
		document.getElementById("wybierz1").style.backgroundColor = 'transparent';
		document.getElementById("wybierz2").style.backgroundColor = 'transparent';
		document.getElementById("wybierz3").style.backgroundColor = 'transparent';
		document.getElementById("wybierz4").style.backgroundColor = 'transparent';
		document.getElementById("wybierz5").style.backgroundColor = '#c7791b';	
		payMe(1);
	}
	if(flaga === 6)
	{
		document.getElementById("wybierz1").innerHTML = "WYBRANO";
		document.getElementById("wybierz2").innerHTML = "WYBÓR";
		document.getElementById("wybierz1").style.backgroundColor = '#c7791b';
		document.getElementById("wybierz2").style.backgroundColor = 'transparent';
		payMe(1);
	}
	if(flaga === 7)
	{
		document.getElementById("wybierz1").innerHTML = "WYBÓR";
		document.getElementById("wybierz2").innerHTML = "WYBRANO";
		document.getElementById("wybierz1").style.backgroundColor = 'transparent';
		document.getElementById("wybierz2").style.backgroundColor = '#c7791b';
		payMe(1);
	}


}

function zapis(){
        modal.style.display = "none";
        nasz_miesiac = now.getMonth();
}

function drukuj(pierwszy_dzien){
	var d ="";
		for( j = 0; j <= 6; j++)
		{
			d = d + '<div class="dzien">'+ weekDay[j] +'</div> ';
			if( (j+1)%7 == 0 ) d = d + '<div style="clear:both;"></div>';
		}
	var empty="";
		
		if (pierwszy_dzien==1)
		{

			for(i = 1; i <= 1; i++)
			{
				var element = "liczba" + i;
				empty = empty + '<div class="przesun" id="'+element+'"></div>';
			}
		}	
		if (pierwszy_dzien==2)
		{

			for(i = 1; i <= 2; i++)
			{
				var element = "liczba" + i;
				empty = empty + '<div class="przesun" id="'+element+'"></div>';
			}
		}
		if (pierwszy_dzien==3)
		{

			for(i = 1; i <= 3; i++)
			{
				var element = "liczba" + i;
				empty = empty + '<div class="przesun" id="'+element+'"></div>';
			}
		}
		if (pierwszy_dzien==4)
		{

			for(i = 1; i <= 4; i++)
			{
				var element = "liczba" + i;
				empty = empty + '<div class="przesun" id="'+element+'"></div>';
			}
		}
		
		if (pierwszy_dzien==5)
		{

			for(i = 1; i <= 5; i++)
			{
				var element = "liczba" + i;
				empty = empty + '<div class="przesun" id="'+element+'"></div>';
			}
		}
		if (pierwszy_dzien==6)
		{

			for(i = 1; i <= 6; i++)
			{
				var element = "liczba" + i;
				empty = empty + '<div class="przesun" id="'+element+'"></div>';
			}
		}
		return d + empty;
}

if(localStorage.lastname === "BILETY 30-DNIOWE")
{
	btn.onclick = function() {
		modal.style.display = "block";
		localStorage.setItem("fl", 1);
		zmianaWybrania(1);

	
		var tresc="";	
		for(i = 1; i <= m1[nasz_miesiac]; i++)
		{
			tresc = tresc + '<div class="liczba" onclick="sprawdz_dzien('+i+')" id="'+i+'">'+i+'</div>';

			if( (i+pierwszy_dzien)%7 == 0 ) tresc = tresc + '<div style="clear:both;"></div>';
		}
		z =  '<div class="zatwierdz" onclick="zapis()" style="clear:both; margin-left:100px;">Potwierdź</div>';
		document.getElementById("kalendarz").innerHTML = '<div id="popmies" onclick="popm()"> < </div>' + '<div class="miesiac">'+nazwa(nasz_miesiac)+'</div>' +'<div id="nastmies" onclick="nastm()"> > </div>'+'<div style="clear:both;"></div>' +  drukuj(pierwszy_dzien) +tresc ;
	}

	btn2.onclick = function() {
		modal.style.display = "block";
		localStorage.setItem("fl", 2);
		zmianaWybrania(2);	
		
		var tresc="";	
		for(i = 1; i <= m1[nasz_miesiac]; i++)
		{
			tresc = tresc + '<div class="liczba" onclick="sprawdz_dzien('+i+')" id="'+i+'">'+i+'</div>';

			if( (i+pierwszy_dzien)%7 == 0 ) tresc = tresc + '<div style="clear:both;"></div>';
		}
		z =  '<div class="zatwierdz" onclick="zapis()" style="clear:both; margin-left:100px;">Potwierdź</div>';
		document.getElementById("kalendarz").innerHTML = '<div id="popmies" onclick="popm()"> < </div>' + '<div class="miesiac">'+nazwa(nasz_miesiac)+'</div>' +'<div id="nastmies" onclick="nastm()"> > </div>'+'<div style="clear:both;"></div>' +  drukuj(pierwszy_dzien) +tresc ;
	}
	btn3.onclick = function() {
		modal.style.display = "block";
		localStorage.setItem("fl", 3);
		zmianaWybrania(3);
	
		var tresc="";	
		for(i = 1; i <= m1[nasz_miesiac]; i++)
		{
			tresc = tresc + '<div class="liczba" onclick="sprawdz_dzien('+i+')" id="'+i+'">'+i+'</div>';

			if( (i+pierwszy_dzien)%7 == 0 ) tresc = tresc + '<div style="clear:both;"></div>';
		}
		z =  '<div class="zatwierdz" onclick="zapis()" style="clear:both; margin-left:100px;">Potwierdź</div>';
		document.getElementById("kalendarz").innerHTML = '<div id="popmies" onclick="popm()"> < </div>' + '<div class="miesiac">'+nazwa(nasz_miesiac)+'</div>' +'<div id="nastmies" onclick="nastm()"> > </div>'+'<div style="clear:both;"></div>' +  drukuj(pierwszy_dzien) +tresc ;
	}

	btn4.onclick = function() {
		modal.style.display = "block";
		localStorage.setItem("fl", 4);
		zmianaWybrania(4);
	
		var tresc="";	
		for(i = 1; i <= m1[nasz_miesiac]; i++)
		{
			tresc = tresc + '<div class="liczba" onclick="sprawdz_dzien('+i+')" id="'+i+'">'+i+'</div>';

			if( (i+pierwszy_dzien)%7 == 0 ) tresc = tresc + '<div style="clear:both; margin-left:100px;"></div>';
		}
			z =  '<div class="zatwierdz" onclick="zapis()" style="clear:both;">Potwierdź</div>';
		document.getElementById("kalendarz").innerHTML = '<div id="popmies" onclick="popm()"> < </div>' + '<div class="miesiac">'+nazwa(nasz_miesiac)+'</div>' +'<div id="nastmies" onclick="nastm()"> > </div>'+'<div style="clear:both;"></div>' +  drukuj(pierwszy_dzien) +tresc;
	}

	btn5.onclick = function() {
		modal.style.display = "block";
		localStorage.setItem("fl", 5);
		zmianaWybrania(5);

		var tresc="";	
		for(i = 1; i <= m1[nasz_miesiac]; i++)
		{
			tresc = tresc + '<div class="liczba" onclick="sprawdz_dzien('+i+')" id="'+i+'">'+i+'</div>';

			if( (i+pierwszy_dzien)%7 == 0 ) tresc = tresc + '<div style="clear:both;"></div>';
		}
		z =  '<div class="zatwierdz" onclick="zapis()" style="clear:both; margin-left:100px;">Potwierdź</div>';
		document.getElementById("kalendarz").innerHTML = '<div id="popmies" onclick="popm()"> < </div>' + '<div class="miesiac">'+nazwa(nasz_miesiac)+'</div>' +'<div id="nastmies" onclick="nastm()"> > </div>'+'<div style="clear:both;"></div>' +  drukuj(pierwszy_dzien) +tresc ;
	}
}

function popm(){

	if(nasz_miesiac == 0){nasz_miesiac=12; nasz_rok--;}
	nasz_miesiac = nasz_miesiac - 1;
	var Instancja = new Date(nasz_rok, nasz_miesiac, 0)
	pierwszy_dzien = Instancja.getDay();
	var tresc = "";
	for(i = 1; i <= m1[nasz_miesiac]; i++)
		{
			tresc = tresc + '<div class="liczba" onclick="sprawdz_dzien('+i+')" id="'+i+'">'+i+'</div>';

			if( (i+pierwszy_dzien)%7 == 0 ) tresc = tresc + '<div style="clear:both;"></div>';
		}
		z =  '<div class="zatwierdz" onclick="zapis()" style="clear:both; margin-left:100px;">Potwierdź</div>';

	document.getElementById("kalendarz").innerHTML = '<div id="popmies" onclick="popm()"> < </div>' + '<div class="miesiac">'+nazwa(nasz_miesiac)+'</div>' +'<div id="nastmies" onclick="nastm()"> > </div>' + '<div style="clear: both;"></div>' + drukuj(pierwszy_dzien) +tresc;
	
}

function nastm(){
	nasz_miesiac = nasz_miesiac + 1;
	if(nasz_miesiac == 12) {nasz_miesiac=0; nasz_rok++;}
	var Instancja = new Date(nasz_rok, nasz_miesiac, 0)
	pierwszy_dzien = Instancja.getDay();
	var tresc = "";
	for(i = 1; i <= m1[nasz_miesiac]; i++)
		{
			tresc = tresc + '<div class="liczba" onclick="sprawdz_dzien('+i+')" id="'+i+'">'+i+'</div>';

			if( (i+pierwszy_dzien)%7 == 0 ) tresc = tresc + '<div style="clear:both;"></div>';
		}
		z =  '<div class="zatwierdz" onclick="zapis()" style="clear:both; margin-left:100px;">Potwierdź</div>';

	document.getElementById("kalendarz").innerHTML = '<div id="popmies" onclick="popm()"> < </div>' + '<div class="miesiac">'+nazwa(nasz_miesiac)+'</div>' +'<div id="nastmies" onclick="nastm()"> > </div>' + '<div style="clear: both;"></div>' + drukuj(pierwszy_dzien) +tresc +'<div id="wypisz_date" style="font-size: 50px;"></div>';
	}


function sprawdz_dzien(nr)
{
	var date = nr;
	var stary_miesiac = 0;
	var do_dnia = 0;
	var miesiac = 0;
	var nowy_miesiac = nasz_miesiac+1;
	var nowy_rok=0;
	dzien_wybrany = date;

	var tresc="";	
		for(i = 1; i <= m1[nasz_miesiac]; i++)
		{
			if(i!=dzien_wybrany)
			{tresc = tresc + '<div class="liczba" onclick="sprawdz_dzien('+i+')" id="'+i+'">'+i+'</div>';}
			else
			{tresc = tresc + '<div class="liczba" onclick="sprawdz_dzien('+i+')" style="background:linear-gradient(to bottom right, rgba(199,159,47,0.9), rgba(199,121,27,0.9));" id="'+i+'">'+i+'</div>';}

			if( (i+pierwszy_dzien)%7 == 0 ) tresc = tresc + '<div style="clear:both;"></div>';
		}
		z =  '<div class="zatwierdz" onclick="zapis()" style="clear:both; margin-left:100px;">Potwierdź</div>';

	if(nasz_miesiac == 11) nowy_miesiac=0
//STYCZEŃ, MARZEC, MAJ, LIPIEC, SIERPIEŃ, PAŹDZIERNIK
	if(m1[nasz_miesiac] == 31 && (m1[nowy_miesiac] == 30 || m1[nowy_miesiac] == 28 || m1[nowy_miesiac] == 29 || m1[nowy_miesiac] == 31))
	{
		//co jeżeli kupimy 1-ego??
		if(date == 1)
		{
		do_dnia = 30;
		miesiac = nasz_miesiac;
		nowy_rok=nasz_rok;
		}
		else if(date == 2)
		{
		do_dnia = 31;
		miesiac = nasz_miesiac;
		nowy_rok=nasz_rok;
		}
		// (31) bo w dniu zakupu biletu bulet jest też ważny
		else
		{
		do_dnia = 30 - (32 - date);
		miesiac = nowy_miesiac;
		nowy_rok=nasz_rok;
		}
	}

// KWIECIEŃ CZERWIEC, WRZESIEŃ, LISTOPAD
	if(m1[nasz_miesiac] == 30 && m1[nowy_miesiac] == 31)
	{
		//co jeżeli kupimy 1-ego??
		if(date == 1)
		{
		do_dnia = 30;
		miesiac = nasz_miesiac;
		nowy_rok=nasz_rok;
		}
		else
		{
		//31, bo w dniu zakupu biletu bulet też ma być ważny :-)
		do_dnia = 30 - (31 - date);
		miesiac = nowy_miesiac;
		nowy_rok=nasz_rok;
		}
	}
//LUTY NORMALNY
	if(m1[nasz_miesiac] == 28 && m1[nowy_miesiac] == 31)
	{
		//29, bo w dniu zakupu biletu bulet też ma być ważny :-)
		do_dnia = 30 - (29 - date);
		miesiac = nowy_miesiac;
		nowy_rok=nasz_rok;
	}
//LUTY PRZESTĘPNY
	if(m1[nasz_miesiac] == 29 && m1[nowy_miesiac] == 31)
	{
		//29, bo w dniu zakupu biletu bulet też ma być ważny :-)
		do_dnia = 30 - (30 - date);
		miesiac = nowy_miesiac;
		nowy_rok=nasz_rok;
	}
//GRUDZIEŃ
	if(m1[nasz_miesiac] == 31 && nasz_miesiac == 11)
	{
		if(date == 1)
		{
		do_dnia = 30;
		miesiac = nasz_miesiac;
		nowy_rok=nasz_rok;
		}
		else if(date == 2)
		{
		do_dnia = 31;
		miesiac = nasz_miesiac;
		nowy_rok=nasz_rok;
		}
		else
		{
		do_dnia = 30 - (32 - date);
		miesiac = 0;
		nowy_rok = nasz_rok+1;
		}

	}
document.getElementById("data").innerHTML = date + "/" +  (nasz_miesiac+1) + "/" + nasz_rok + " - " + do_dnia +"/"+ (miesiac+1) + "/" + nowy_rok;
var data = date + "/" +  (nasz_miesiac+1) + "/" + nasz_rok + " - " + do_dnia +"/"+ (miesiac+1) + "/" + nowy_rok;
		document.getElementById("kalendarz").innerHTML = '<div id="popmies" onclick="popm()"> < </div>' + '<div class="miesiac">'+nazwa(nasz_miesiac)+'</div>' +'<div id="nastmies" onclick="nastm()"> > </div>'+'<div style="clear:both;"></div>' +  drukuj(pierwszy_dzien) +tresc +'<div style="clear:both;"></div>'+ '<div id="wypisz_date" style="font-size: 50px;">'+ data+'</div>' +'<div style="clear:both;"></div>'+z ;
}
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
//TYLKO DLA BILETÓW MIESIĘCZNYCH!!!!
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
if(localStorage.lastname === "BILETY MIESIĘCZNE")
{
	btn.onclick = function(){
		modal.style.display = "block";
		localStorage.setItem("fl", 1);
		zmianaWybrania(1);
		document.getElementById("kalendarz").innerHTML = '<div id="p" onclick="prevY()"><<</div><div id="rok"></div><div id="n" onclick="nextY()">>></div> <div style="clear: both;"></div> <div id="mies">Tutaj coś jest</div>';
		document.getElementById("rok").innerHTML = nasz_rok ;
		var m = "";
		var c = "";

		for( i=0; i<6; i++)
		{
			m = m + '<div class="na" onclick="wypisz('+i+')" >' + nazwa(i) + '<br/></div>';
		}
		for( i=6; i<12; i++)
		{
			c = c + '<div class="nb" onclick="wypisz('+i+')" >' + nazwa(i) + '<br/></div>';
		}
		

		document.getElementById("mies").innerHTML = m + c ;
	}
	btn2.onclick = function(){
		modal.style.display = "block";
		localStorage.setItem("fl", 2);
		zmianaWybrania(2);
		document.getElementById("kalendarz").innerHTML = '<div id="p" onclick="prevY()"><<</div><div id="rok"></div><div id="n" onclick="nextY()">>></div> <div style="clear: both;"></div> <div id="mies">Tutaj coś jest</div>';
		document.getElementById("rok").innerHTML = nasz_rok ;
		//document.getElementById("mies").innerHTML = nazwa(2) + "<br/>";
		var m = "";
		var c = "";

		for( i=0; i<6; i++)
		{
			m = m + '<div class="na" onclick="wypisz('+i+')" >' + nazwa(i) + '<br/></div>';
		}
		for( i=6; i<12; i++)
		{
			c = c + '<div class="nb" onclick="wypisz('+i+')" >' + nazwa(i) + '<br/></div>';
		}

		document.getElementById("mies").innerHTML = m + c ;
	}
	btn3.onclick = function(){
		modal.style.display = "block";
		localStorage.setItem("fl", 3);
		zmianaWybrania(3);
		document.getElementById("kalendarz").innerHTML = '<div id="p" onclick="prevY()"><<</div><div id="rok"></div><div id="n" onclick="nextY()">>></div> <div style="clear: both;"></div> <div id="mies">Tutaj coś jest</div>';
		document.getElementById("rok").innerHTML = nasz_rok ;
		//document.getElementById("mies").innerHTML = nazwa(2) + "<br/>";
		var m = "";
		var c = "";

		for( i=0; i<6; i++)
		{
			m = m + '<div class="na" onclick="wypisz('+i+')" >' + nazwa(i) + '<br/></div>';
		}
		for( i=6; i<12; i++)
		{
			c = c + '<div class="nb" onclick="wypisz('+i+')" >' + nazwa(i) + '<br/></div>';
		}

		document.getElementById("mies").innerHTML = m + c ;
	}
	btn4.onclick = function(){
		modal.style.display = "block";
		localStorage.setItem("fl", 4);
		zmianaWybrania(4);
		document.getElementById("kalendarz").innerHTML = '<div id="p" onclick="prevY()"><<</div><div id="rok"></div><div id="n" onclick="nextY()">>></div> <div style="clear: both;"></div> <div id="mies">Tutaj coś jest</div>';
		document.getElementById("rok").innerHTML = nasz_rok ;
		//document.getElementById("mies").innerHTML = nazwa(2) + "<br/>";
		var m = "";
		var c = "";

		for( i=0; i<6; i++)
		{
			m = m + '<div class="na" onclick="wypisz('+i+')">' + nazwa(i) + '<br/></div>';
		}
		for( i=6; i<12; i++)
		{
			c = c + '<div class="nb" onclick="wypisz('+i+')" >' + nazwa(i) + '<br/></div>';
		}

		document.getElementById("mies").innerHTML = m + c ;
	}
	btn5.onclick = function(){
		modal.style.display = "block";
		localStorage.setItem("fl", 5);
		zmianaWybrania(5);
		document.getElementById("kalendarz").innerHTML = '<div id="p" onclick="prevY()"><<</div><div id="rok"></div><div id="n" onclick="nextY();">>></div> <div style="clear: both;"></div> <div id="mies">Tutaj coś jest</div>';
		document.getElementById("rok").innerHTML = nasz_rok ;
		//document.getElementById("mies").innerHTML = nazwa(2) + "<br/>";
		var m = "";
		var c = "";

		for( i=0; i<6; i++)
		{
				m = m + '<div class="na">' + nazwa(i) + '<br/></div>';
		}
		for( i=6; i<12; i++)
		{
				c = c + '<div class="na">' + nazwa(i) + '<br/></div>';
		}
		
		document.getElementById("mies").innerHTML = m + c;
	}


	function prevY(){
		if(nasz_rok>roczek_niezmienialny)
		{nasz_rok = nasz_rok-1;}
		var m = "";
		var c = "";
		document.getElementById("kalendarz").innerHTML = '<div id="p" onclick="prevY()"><<</div><div id="rok"></div><div id="n" onclick="nextY()">>></div> <div style="clear: both;"></div> <div id="mies">Tutaj coś jest</div>';
		document.getElementById("rok").innerHTML = nasz_rok ;

		for( i=0; i<6; i++)
		{
			m = m + '<div class="na" onclick="wypisz('+i+')" >' + nazwa(i) + '<br/></div>';
		}
		for( i=6; i<12; i++)
		{
			c = c + '<div class="nb" onclick="wypisz('+i+')" >' + nazwa(i) + '<br/></div>';
		}
		var e = '';
		e = '<div style="clear: both;"></div> <div class="zatwierdz2" onclick="zapis();">Wybierz</div>'

		document.getElementById("mies").innerHTML = m + c ;
	}
	function nextY(){
		nasz_rok = nasz_rok+1;
		var m = "";
		var c = "";
		document.getElementById("kalendarz").innerHTML = '<div id="p" onclick="prevY()"><<</div><div id="rok"></div><div id="n" onclick="nextY()">>></div> <div style="clear: both;"></div> <div id="mies">Tutaj coś jest</div>';
		document.getElementById("rok").innerHTML = nasz_rok ;

		for( i=0; i<6; i++)
		{
			m = m + '<div class="na" onclick="wypisz('+i+')">' + nazwa(i) + '<br/></div>';
		}
		for( i=6; i<12; i++)
		{
			c = c + '<div class="nb" onclick="wypisz('+i+')">' + nazwa(i) + '<br/></div>';
		}
		var e = '';
		e = '<div style="clear: both;"></div> <div class="zatwierdz2" onclick="zapis();">Wybierz</div>'

		document.getElementById("mies").innerHTML = m + c ;
	}

	function wypisz(a){
		var m = "";
		var c = "";
		document.getElementById("data").innerHTML = nazwa(a);

		for( i=0; i<6; i++)
		{	
			if(i!=a)
			m = m + '<div class="na" onclick="wypisz('+i+')">' + nazwa(i) + '<br/></div>';
			else
				m = m + '<div class="na" onclick="wypisz('+i+')" style="background:linear-gradient(to bottom right, rgba(199,159,47,0.9), rgba(199,121,27,0.9));">' + nazwa(i) + '<br/></div>';
		}
		for( i=6; i<12; i++)
		{
			if(i!=a)
			c = c + '<div class="na" onclick="wypisz('+i+')">' + nazwa(i) + '<br/></div>';
			else
				c = c + '<div class="na" onclick="wypisz('+i+')" style="background:linear-gradient(to bottom right, rgba(199,159,47,0.9), rgba(199,121,27,0.9));">' + nazwa(i) + '<br/></div>';
		}
		if(a<miesiac_niezmienialny && nasz_rok == 2016)
			e = '<div style="clear: both;"></div> <div class="zatwierdz2" onclick="zapis();">Nie możesz ybrać tego miesiąca</div>';
		document.getElementById("mies").innerHTML = m + c + e;

		var e = '';
		e = '<div style="clear: both;"></div> <div class="zatwierdz2" onclick="zapis();">Wybierz</div>';
		document.getElementById("mies").innerHTML = m + c + e;
	}

}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
//TYLKO DLA BILETÓW SEMESTRALNYCH
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
if(localStorage.lastname === "BILETY SEMESTRALNE")
{

 btn.onclick = function(){
 		localStorage.setItem("fl", 6);
		zmianaWybrania(6);

		
 }

 btn2.onclick = function(){

		localStorage.setItem("fl", 7);
		zmianaWybrania(7);

}

}
