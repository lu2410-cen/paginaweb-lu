var mimenudesplegable, mimenudesplegable2; 		//Declaracion de la variable
function mostrar() {				//Se crea la primer funcion
	document.getElementById('Mi_menu').classList.toggle("mostrar");
	document.getElementById('Mi_menu2').classList.remove("mostrar");
} 

window.onclick=function (e) {		
	if (!e.target.matches(".botondesplegar")) {			//Se hace la primera comparcacion
		mimenudesplegable = document.getElementById('Mi_menu');
		if (mimenudesplegable.classList.contains('mostrar')) {	//Se  hace ls segunda 
			mimenudesplegable.classList.remove("mostrar");
		}
	}
}

function mostrar2() {				//Se crea la segunda funcion
	document.getElementById('Mi_menu2').classList.toggle("mostrar");
	document.getElementById('Mi_menu').classList.remove("mostrar");
} 

window.onclick=function (e) {						//Se crea la cuarta comparacion
	if (!e.target.matches(".botondesplegar")) {
		mimenudesplegable2 = document.getElementById('Mi_menu2');
		if (mimenudesplegable2.classList.contains('mostrar')) {		//Se crea la ultima comparacion 
			mimenudesplegable2.classList.remove("mostrar");
		}
	}
}
