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

function on_start(){
	// GDYNIA ZWYKŁE
	if(localStorage.name === "gdynia_zw")
	{
		if(parseInt(localStorage.fl) == 1)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 72 + " pln";
		}
		if(parseInt(localStorage.fl) == 2)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 82 + " pln";
		}
		if(parseInt(localStorage.fl) == 3)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 92 + " pln";
		}
		if(parseInt(localStorage.fl) == 4)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 36 + " pln";
		}
		if(parseInt(localStorage.fl) == 5)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 41 + " pln";
		}
		if(parseInt(localStorage.fl) == 6)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 156 + " pln";
		}
		if(parseInt(localStorage.fl) == 7)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 195 + " pln";
		}
	}
	//GDYNIA WSZYSTKIE
	if( localStorage.name === "gdynia")
	{
		if(parseInt(localStorage.fl) == 1)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 86 + " pln";
		}
		if(parseInt(localStorage.fl) == 2)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 94 + " pln";
		}
		if(parseInt(localStorage.fl) == 3)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 107 + " pln";
		}
		if(parseInt(localStorage.fl) == 4)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 43 + " pln";
		}
		if(parseInt(localStorage.fl) == 5)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 47 + " pln";
		}
		if(parseInt(localStorage.fl) == 6)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 179 + " pln";
		}
		if(parseInt(localStorage.fl) == 7)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 223 + " pln";
		}
	}
	//Nocne, pospieszne i zwykłe w granicach Sopotu3 albo Rumi albo Gm. Kosakowo albo Gm. Żukowo albo Gm. Szemud albo Gm. Wejherowo
	if( localStorage.name === "dodatkowe")
	{
		if(parseInt(localStorage.fl) == 1)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 58 + " pln";
		}
		if(parseInt(localStorage.fl) == 2)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 64 + " pln";
		}
		if(parseInt(localStorage.fl) == 3)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 75 + " pln";
		}
		if(parseInt(localStorage.fl) == 4)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 29 + " pln";
		}
		if(parseInt(localStorage.fl) == 5)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 32 + " pln";
		}
		if(parseInt(localStorage.fl) == 6)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 122 + " pln";
		}
		if(parseInt(localStorage.fl) == 7)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 152 + " pln";
		}
	}
	//Nocne, pospieszne i zwykłe w granicach Rumi, Redy i miasta Wejherowa albo Gm. Wejherowo i Rumi
	if( localStorage.name === "rriw")
	{
		if(parseInt(localStorage.fl) == 1)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 74 + " pln";
		}
		if(parseInt(localStorage.fl) == 2)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 84 + " pln";
		}
		if(parseInt(localStorage.fl) == 3)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 97 + " pln";
		}
		if(parseInt(localStorage.fl) == 4)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 37 + " pln";
		}
		if(parseInt(localStorage.fl) == 5)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 42 + " pln";
		}
		if(parseInt(localStorage.fl) == 6)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 160 + " pln";
		}
		if(parseInt(localStorage.fl) == 7)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 200 + " pln";
		}
	}
	//CALA SIEC
	if( localStorage.name === "cala")
	{
		if(parseInt(localStorage.fl) == 1)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 96 + " pln";
		}
		if(parseInt(localStorage.fl) == 2)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 104 + " pln";
		}
		if(parseInt(localStorage.fl) == 3)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 117 + " pln";
		}
		if(parseInt(localStorage.fl) == 4)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 48 + " pln";
		}
		if(parseInt(localStorage.fl) == 5)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 52 + " pln";
		}
		if(parseInt(localStorage.fl) == 6)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 198 + " pln";
		}
		if(parseInt(localStorage.fl) == 7)
		{
			document.getElementById("koszt").innerHTML = "<h3> Do zapłaty: </h3>" + 247 + " pln";
		}
	}

}

function on_start_k(){
	// GDYNIA ZWYKŁE
	if(localStorage.name === "gdynia_zw")
	{
		if(parseInt(localStorage.fl) == 1)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 72 + " pln";
		}
		if(parseInt(localStorage.fl) == 2)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 82 + " pln";
		}
		if(parseInt(localStorage.fl) == 3)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 92 + " pln";
		}
		if(parseInt(localStorage.fl) == 4)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 36 + " pln";
		}
		if(parseInt(localStorage.fl) == 5)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 41 + " pln";
		}
		if(parseInt(localStorage.fl) == 6)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 156 + " pln";
		}
		if(parseInt(localStorage.fl) == 7)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 195 + " pln";
		}
	}
	//GDYNIA WSZYSTKIE
	if( localStorage.name === "gdynia")
	{
		if(parseInt(localStorage.fl) == 1)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 86 + " pln";
		}
		if(parseInt(localStorage.fl) == 2)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 94 + " pln";
		}
		if(parseInt(localStorage.fl) == 3)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 107 + " pln";
		}
		if(parseInt(localStorage.fl) == 4)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 43 + " pln";
		}
		if(parseInt(localStorage.fl) == 5)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 47 + " pln";
		}
		if(parseInt(localStorage.fl) == 6)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 179 + " pln";
		}
		if(parseInt(localStorage.fl) == 7)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 223 + " pln";
		}
	}
	//Nocne, pospieszne i zwykłe w granicach Sopotu3 albo Rumi albo Gm. Kosakowo albo Gm. Żukowo albo Gm. Szemud albo Gm. Wejherowo
	if( localStorage.name === "dodatkowe")
	{
		if(parseInt(localStorage.fl) == 1)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 58 + " pln";
		}
		if(parseInt(localStorage.fl) == 2)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 64 + " pln";
		}
		if(parseInt(localStorage.fl) == 3)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 75 + " pln";
		}
		if(parseInt(localStorage.fl) == 4)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 29 + " pln";
		}
		if(parseInt(localStorage.fl) == 5)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 32 + " pln";
		}
		if(parseInt(localStorage.fl) == 6)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 122 + " pln";
		}
		if(parseInt(localStorage.fl) == 7)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 152 + " pln";
		}
	}
	//Nocne, pospieszne i zwykłe w granicach Rumi, Redy i miasta Wejherowa albo Gm. Wejherowo i Rumi
	if( localStorage.name === "rriw")
	{
		if(parseInt(localStorage.fl) == 1)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 74 + " pln";
		}
		if(parseInt(localStorage.fl) == 2)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 84 + " pln";
		}
		if(parseInt(localStorage.fl) == 3)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 97 + " pln";
		}
		if(parseInt(localStorage.fl) == 4)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 37 + " pln";
		}
		if(parseInt(localStorage.fl) == 5)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 42 + " pln";
		}
		if(parseInt(localStorage.fl) == 6)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 160 + " pln";
		}
		if(parseInt(localStorage.fl) == 7)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 200 + " pln";
		}
	}
	//CALA SIEC
	if( localStorage.name === "cala")
	{
		if(parseInt(localStorage.fl) == 1)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 96 + " pln";
		}
		if(parseInt(localStorage.fl) == 2)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 104 + " pln";
		}
		if(parseInt(localStorage.fl) == 3)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 117 + " pln";
		}
		if(parseInt(localStorage.fl) == 4)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 48 + " pln";
		}
		if(parseInt(localStorage.fl) == 5)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 52 + " pln";
		}
		if(parseInt(localStorage.fl) == 6)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 198 + " pln";
		}
		if(parseInt(localStorage.fl) == 7)
		{
			document.getElementById("koszt333").innerHTML = "<h3> Do zapłaty: </h3>" + 247 + " pln";
		}
	}

}

function start(){

	odliczanie();
	on_start();
}

function startk(){

	odliczanie();
	on_start_k();
}