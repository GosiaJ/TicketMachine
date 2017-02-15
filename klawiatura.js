
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("ilosculgzw");
var btn1 = document.getElementById("ilosculgwsz");
var btn2 = document.getElementById("iloscnormzw");
var btn3 = document.getElementById("iloscnormwsz");
var btn4 = document.getElementById("doboweNorm");
var btn5 = document.getElementById("doboweUlg");

var biletyUlgoweZwyk = 0; // ile wybrano biletów ulgowych na linie zwykłe
var biletyUlgoweWszystk = 0; // ile wybrano biletów ulgowych na wszystkie linie
var biletyNormalneZwyk = 0; // ile wybrano biletów normalnych na zwykłe linie
var biletyNormalneWszystk = 0; // ile wybrano biletów ulgowych na zwykłe linie
var biletyDoboweNorm = 0; // ile biletów dobowych normalnych
var biletyDoboweUlg = 0; //bilety dobowe ulgowe

//ukrywanie zaplac
document.getElementById("zaplac").style.display = "none";

//show numerics
var j = 0;
var d = 0;
var s = 0;
var suma = 0;
var ile_biletow =0;
var a = 1;
var liczby = new Array(11);

for(var i=0; i<=11; i++)
{
	liczby[i] = a;
	a++;

	if( i == 9 )
		liczby[i] = "#";

	if( i == 10 )
		liczby[i] = 0;

	if( i == 11 )
		liczby[i] = "del";
}
//Coby mi zaokrąglało pieniążki ładnie
function round(n, k)
{
    var factor = Math.pow(10, k);
    return Math.round(n*factor)/factor;
}

//-----------------------------------------------
// Po kliknięciu odpowiedniego przycisku wyskoczy okno modal z klawiaturą, która w zależności
// od teg, które okienko wybrano umożliwi zmianę odpowiedniej zmiennej :)
// Ulgowe na linie zwykłe
//-----------------------------------------------

function payMe(){
	if(biletyUlgoweZwyk != 0 || biletyUlgoweWszystk !=0 || biletyNormalneWszystk != 0 || biletyNormalneZwyk !=0 || biletyDoboweNorm!=0 || biletyDoboweUlg != 0)
	{
		document.getElementById("zaplac").style.backgroundColor = "#c7791b";
		document.getElementById("zaplac").style.fontSize = "40px";
		document.getElementById("zaplac").innerHTML = '<a href="zaplac.html" class="nodecoration"> ZAPŁAĆ </a>';
		document.getElementById("zaplac").style.display = "block"
	}
	else
		{
		document.getElementById("zaplac").style.display = "none";
	}
}

btn.onclick = function(){
	modal.style.display = "block";
	j = 0;
	d = 0;
	s = 0;
    var tresc="";
	var a = "";
	var w = "";

	 w =  '<div id="wyswietl"></div>';

	for(i=0; i<=11; i++)
	{
		var element = "cyfra" + i;
				
		tresc = tresc + '<div class="cyfra" onclick="wypisz_wartosc('+i+')" id="'+element+'">'+liczby[i]+'</div>';

		if( (i+1)%3 == 0 ) tresc = tresc + '<div style="clear:both;"></div>';
	}

		a =  '<div class="zatwierdz" onclick="zapis('+i+')">Zatwierdź</div>'; //PO KLIKNIĘCIU ZATWIERDŹ POWINNA OTWORZYĆ SIĘ NOWA STRONA : )
	document.getElementById("klawiatura").innerHTML = w + tresc + a;
}
// Ulgowe na wszystkie linie
btn1.onclick = function() {
	modal.style.display = "block";
	j = 0;
	d = 0;
	s = 0;
    var tresc="";
	var a = "";
	var w = "";

	 w =  '<div id="wyswietl"></div>';

	for(i=0; i<=11; i++)
	{
		var element = "cyfra" + i;
				
		tresc = tresc + '<div class="cyfra" onclick="wypisz_wartosc1('+i+')" id="'+element+'">'+liczby[i]+'</div>';

		if( (i+1)%3 == 0 ) tresc = tresc + '<div style="clear:both;"></div>';
	}

		a =  '<div class="zatwierdz" onclick="zapis1('+i+')">Zatwierdź</div>'; //PO KLIKNIĘCIU ZATWIERDŹ POWINNA OTWORZYĆ SIĘ NOWA STRONA : )

	document.getElementById("klawiatura").innerHTML = w + tresc + a;
}
// Normaly , zwykłe
btn2.onclick = function() {
	modal.style.display = "block";
	j = 0;
	d = 0;
	s = 0;
    var tresc="";
	var a = "";
	var w = "";

	 w =  '<div id="wyswietl"></div>';

	for(i=0; i<=11; i++)
	{
		var element = "cyfra" + i;
				
		tresc = tresc + '<div class="cyfra" onclick="wypisz_wartosc2('+i+')" id="'+element+'">'+liczby[i]+'</div>';

		if( (i+1)%3 == 0 ) tresc = tresc + '<div style="clear:both;"></div>';
	}

		a =  '<div class="zatwierdz" onclick="zapis2('+i+')">Zatwierdź</div>'; //PO KLIKNIĘCIU ZATWIERDŹ POWINNA OTWORZYĆ SIĘ NOWA STRONA : )

	document.getElementById("klawiatura").innerHTML = w + tresc + a;
}
// Normaly , wszystkie
btn3.onclick = function() {
	modal.style.display = "block";
	j = 0;
	d = 0;
	s = 0;
    var tresc="";
	var a = "";
	var w = "";

	 w =  '<div id="wyswietl"></div>';

	for(i=0; i<=11; i++)
	{
		var element = "cyfra" + i;
				
		tresc = tresc + '<div class="cyfra" onclick="wypisz_wartosc3('+i+')" id="'+element+'">'+liczby[i]+'</div>';

		if( (i+1)%3 == 0 ) tresc = tresc + '<div style="clear:both;"></div>';
	}

		a =  '<div class="zatwierdz" onclick="zapis3('+i+')">Zatwierdź</div>'; //PO KLIKNIĘCIU ZATWIERDŹ POWINNA OTWORZYĆ SIĘ NOWA STRONA : )

	document.getElementById("klawiatura").innerHTML = w + tresc + a;
}
// dobowe, normalne
btn4.onclick = function() {
	modal.style.display = "block";
	j = 0;
	d = 0;
	s = 0;
    var tresc="";
	var a = "";
	var w = "";

	 w =  '<div id="wyswietl"></div>';

	for(i=0; i<=11; i++)
	{
		var element = "cyfra" + i;
				
		tresc = tresc + '<div class="cyfra" onclick="wypisz_wartosc4('+i+')" id="'+element+'">'+liczby[i]+'</div>';

		if( (i+1)%3 == 0 ) tresc = tresc + '<div style="clear:both;"></div>';
	}

		a =  '<div class="zatwierdz" onclick="zapis4('+i+')">Zatwierdź</div>'; //PO KLIKNIĘCIU ZATWIERDŹ POWINNA OTWORZYĆ SIĘ NOWA STRONA : )

	document.getElementById("klawiatura").innerHTML = w + tresc + a;
}
// dobowe, ulgowe
btn5.onclick = function() {
	modal.style.display = "block";
	j = 0;
	d = 0;
	s = 0;
    var tresc="";
	var a = "";
	var w = "";

	 w =  '<div id="wyswietl"></div>';

	for(i=0; i<=11; i++)
	{
		var element = "cyfra" + i;
				
		tresc = tresc + '<div class="cyfra" onclick="wypisz_wartosc5('+i+')" id="'+element+'">'+liczby[i]+'</div>';

		if( (i+1)%3 == 0 ) tresc = tresc + '<div style="clear:both;"></div>';
	}

		a =  '<div class="zatwierdz" onclick="zapis5('+i+')">Zatwierdź</div>'; //PO KLIKNIĘCIU ZATWIERDŹ POWINNA OTWORZYĆ SIĘ NOWA STRONA : )

	document.getElementById("klawiatura").innerHTML = w + tresc + a;
}

//-----------------------------------------------
//Funkcja pobiera wartość z klawiatury i wyświetla ją w odpowiednim formacji j - setki, d - dziesiątki, s - jedności 
//(jeżeli liczba jest 3cyfrowa)
//-----------------------------------------------

function pobierz_wartosc(nr)
{
	if(j == 0 && d == 0 && s == 0 && nr!=9)
	{
		j =  liczby[nr];
		ile_biletow=j;
		return ile_biletow;
		
	}

	if(j!=0 && d == 0 && s == 0 && nr!=9)
	{
		d = liczby[nr];
		ile_biletow=d+j*10;
		return ile_biletow;
	}

	if(nr == 9 || nr == 11)
	{
		j = 0;
		d = 0;
		ile_biletow = 0;
		document.getElementById("wyswietl").innerHTML = "";
		return ile_biletow;
	}
	
	return ile_biletow;

}

//-----------------------------------------------
//Funkcje zapisują wybrane ilosci biletów odpowiednim zmiennym
//-----------------------------------------------
// ulgowe, zwykłe
function zapis(nr)
{
	document.getElementById("ilosculgzw").innerHTML = biletyUlgoweZwyk;
	localStorage.setItem("bilety_ulgowe_zwykle", biletyUlgoweZwyk);
	modal.style.display = "none";

}
// ulgowe, wszystkie
function zapis1(nr)
{
	document.getElementById("ilosculgwsz").innerHTML = biletyUlgoweWszystk;
	localStorage.setItem("bilety_ulgowe_wszyskie", biletyUlgoweWszystk);
	modal.style.display = "none";
}
// nrmalne zwykle
function zapis2(nr)
{
	document.getElementById("iloscnormzw").innerHTML = biletyNormalneZwyk;
	localStorage.setItem("bilety_normalne_zwykle", biletyNormalneZwyk);
	modal.style.display = "none";
}
// nrmalne zwykle
function zapis3(nr)
{
	document.getElementById("iloscnormwsz").innerHTML = biletyNormalneWszystk;
	localStorage.setItem("bilety_normalne_wszyskie", biletyNormalneWszystk);
	modal.style.display = "none";
}
// nrmalne dobowe
function zapis4(nr)
{
	document.getElementById("doboweNorm").innerHTML = biletyDoboweNorm;
	localStorage.setItem("bilety_normalne_dobowe", biletyDoboweNorm);
	modal.style.display = "none";
}
// ulgowe dobowe
function zapis5(nr)
{
	document.getElementById("doboweUlg").innerHTML = biletyDoboweUlg;
	localStorage.setItem("bilety_ulgowe_dobowe", biletyDoboweUlg);
	modal.style.display = "none";
}

//-----------------------------------------------
// Wypisywanie wartości ilości kuponych biletów ulgowych zwykłych na wyświetlaczu 
// w razie gdy nie podano liczby lub ją skasowano wyświetla się pusty łańcuch analogicznie dla 4 poiżej
// każdy dla innego typu biletu
//-----------------------------------------------

function wypisz_wartosc(nr)
{
	if(nr == 11 || nr == 9)
	{

		s = 0;
		d = 0;
		j = 0;
		biletyUlgoweZwyk = 0;
		document.getElementById("wyswietl").innerHTML = "";

	}

	else 
	{
		biletyUlgoweZwyk = pobierz_wartosc(nr);
		payMe();
	}
	document.getElementById("wyswietl").innerHTML = biletyUlgoweZwyk;	

}
// ulgowy na linie wszystkie
function wypisz_wartosc1(nr)
{
		if(nr == 11 || nr == 9)
	{

		s = 0;
		d = 0;
		j = 0;
		biletyUlgoweWszystk=0;
		document.getElementById("wyswietl").innerHTML = "";

	}

	else 
	{
		biletyUlgoweWszystk = pobierz_wartosc(nr);
		payMe();
		
	}
	document.getElementById("wyswietl").innerHTML = biletyUlgoweWszystk;

}
// normalne na linie zykłe
function wypisz_wartosc2(nr)
{
		if(nr == 11 || nr == 9)
	{

		s = 0;
		d = 0;
		j = 0;
		biletyNormalneZwyk=0;
		document.getElementById("wyswietl").innerHTML = "";

	}

	else 
	{
		biletyNormalneZwyk = pobierz_wartosc(nr);
		payMe();
		
	}
	document.getElementById("wyswietl").innerHTML = biletyNormalneZwyk;
	

}
// normalne na wszystkie linie
function wypisz_wartosc3(nr)
{
		if(nr == 11 || nr == 9)
	{
		s = 0;
		d = 0;
		j = 0;
		biletyNormalneWszystk=0;
		document.getElementById("wyswietl").innerHTML = "";
	}
	else 
	{
		biletyNormalneWszystk = pobierz_wartosc(nr);
		payMe();
	}
	document.getElementById("wyswietl").innerHTML = biletyNormalneWszystk;
}

// normalne dobowe
function wypisz_wartosc4(nr)
{
		if(nr == 11 || nr == 9)
	{
		s = 0;
		d = 0;
		j = 0;
		biletyDoboweNorm=0;
		document.getElementById("wyswietl").innerHTML = "";
	}
	else 
	{
		biletyDoboweNorm = pobierz_wartosc(nr);
		
	}
	document.getElementById("wyswietl").innerHTML = biletyDoboweNorm;
	payMe();
}

// ulgowe dobowe
function wypisz_wartosc5(nr)
{
		if(nr == 11 || nr == 9)
	{
		s = 0;
		d = 0;
		j = 0;
		biletyDoboweUlg=0;
		document.getElementById("wyswietl").innerHTML = "";
	}
	else 
	{
		biletyDoboweUlg = pobierz_wartosc(nr);
		
	}
	document.getElementById("wyswietl").innerHTML = biletyDoboweUlg;
	payMe();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//-----------------------------------------------
// Zmiana ilości biletów ulgowych na zwykłe linie 
//-----------------------------------------------

function ulgZw(liczba)
{

	var cena = 0;
	// ***** - *****
	if(liczba == 1)
	{
		if(biletyUlgoweZwyk > 0)
		{
			biletyUlgoweZwyk--; 
		}
		else
		{biletyUlgoweZwyk = 0;}
	}
	// ***** + *****
	else
	{
		biletyUlgoweZwyk++;
	}
	// drukowanie wartości
	if(biletyUlgoweZwyk != 0)
	{
		document.getElementById("ilosculgzw").innerHTML = biletyUlgoweZwyk;
	}
	else
	{
		document.getElementById("ilosculgzw").innerHTML = "0";
	}

	localStorage.setItem("bilety_ulgowe_zwykle", biletyUlgoweZwyk);
	payMe();
}

//-----------------------------------------------
// Zmiana ilości biletów ulgowych na wszystkie linie 
//-----------------------------------------------

function ulgWsz(znak)
{
	var cena = 0;
	// ***** - *****
	if(znak == 1)
	{
		if(biletyUlgoweWszystk > 0)
		{
			biletyUlgoweWszystk--;
		}
		else
		{
			biletyUlgoweWszystk = 0;
		}
	}
	// ***** + *****
	else
	{
		biletyUlgoweWszystk++;
	}
	// drukowanie wartości
	if(biletyUlgoweWszystk != 0)
	{
		document.getElementById("ilosculgwsz").innerHTML = biletyUlgoweWszystk;
	}
	else
	{
		document.getElementById("ilosculgwsz").innerHTML = "0";
	}
	localStorage.setItem("bilety_ulgowe_wszyskie", biletyUlgoweWszystk);
	payMe();
}

//-----------------------------------------------
// Zmiana ilości biletów normalnych na linie zwykle
//-----------------------------------------------

function normZw(liczba)
{
	var cena = 0;
	// ***** - *****
	if(liczba == 1)
	{
		if(biletyNormalneZwyk > 0)
		{
			biletyNormalneZwyk--; 
		}
		else
		{biletyNormalneZwyk = 0;}
	}
	// ***** + *****
	else
	{
		biletyNormalneZwyk++;
	}
	// drukowanie wartości
	if(biletyNormalneZwyk != 0)
	{
		document.getElementById("iloscnormzw").innerHTML = biletyNormalneZwyk;
	}
	else
	{
		document.getElementById("iloscnormzw").innerHTML = "0";
	}
	localStorage.setItem("bilety_normalne_zwykle", biletyNormalneZwyk);
	payMe();
}

//-----------------------------------------------
// Zmiana ilości biletów normalnych na wszystkie linie 
//-----------------------------------------------

function normWsz(znak)
{
	var cena = 0;
	// ***** - *****
	if(znak == 1)
	{
		if(biletyNormalneWszystk > 0)
		{
			biletyNormalneWszystk--;
		}
		else
		{
			biletyNormalneWszystk = 0;
		}
	}
	// ***** + *****
	else
	{
		biletyNormalneWszystk++;
	}
	// drukowanie wartości
	if(biletyNormalneWszystk != 0)
	{
		document.getElementById("iloscnormwsz").innerHTML = biletyNormalneWszystk;
	}
	else
	{
		document.getElementById("iloscnormwsz").innerHTML = "0";
	}

	localStorage.setItem("bilety_normalne_wszyskie", biletyNormalneWszystk);
	payMe();
}
//-----------------------------------------------
// Zmiana ilości biletów normalnych dobowych 
//-----------------------------------------------
function normDobowe(znak)
{
	// ***** - *****
	if(znak == 1)
	{
		if(biletyDoboweNorm > 0)
		{
			biletyDoboweNorm--;
		}
		else
		{
			biletyDoboweNorm = 0;
		}
	}
	// ***** + *****
	else
	{
		biletyDoboweNorm++;
	}
	// drukowanie wartości
	if(biletyDoboweNorm != 0)
	{
		document.getElementById("doboweNorm").innerHTML = biletyDoboweNorm;
	}
	else
	{
		document.getElementById("doboweNorm").innerHTML = "0";
	}

	localStorage.setItem("bilety_normalne_dobowe", biletyDoboweNorm);
	payMe();
	
}
//-----------------------------------------------
// Zmiana ilości biletów ulgowych dobowych 
//-----------------------------------------------
function ulgDobowe(znak)
{
	// ***** - *****
	if(znak == 1)
	{
		if(biletyDoboweUlg > 0)
		{
			biletyDoboweUlg--;
		}
		else
		{
			biletyDoboweUlg = 0;
		}
	}
	// ***** + *****
	else
	{
		biletyDoboweUlg++;
	}
	// drukowanie wartości
	if(biletyDoboweUlg != 0)
	{
		document.getElementById("doboweUlg").innerHTML = biletyDoboweUlg;
	}
	else
	{
		document.getElementById("doboweUlg").innerHTML = "0";
	}

	localStorage.setItem("bilety_ulgowe_dobowe", biletyDoboweUlg);
	payMe();
}

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
	var cena6 = zmiena6*6.5;
	suma = round((cena1+cena2+cena3+cena4+cena5+cena6), 2);
	document.getElementById("koszt").innerHTML = 'Do zaplaty: ' + suma + 'pln' ;
	localStorage.setItem("bilety_ulgowe_zwykle", 0);
	localStorage.setItem("bilety_ulgowe_wszyskie", 0);
	localStorage.setItem("bilety_normalne_zwykle", 0);
	localStorage.setItem("bilety_normalne_wszyskie", 0);
	localStorage.setItem("bilety_normalne_dobowe", 0);
	localStorage.setItem("bilety_ulgowe_dobowe", 0);
} 

//document.getElementById("help").innerHTML = parseFloat(localStorage.bilety_ulgowe_dobowe);
/*
document.ready(function()
{
	biletyUlgoweZwyk = //wez wartosc z uri
	//wsadz wartosc w pole na stronie
	$("#nazwapolawhtml").value(biletyUlgoweZwyk);

}); */