const nev = document.getElementById("nev");
const lakcim = document.getElementById("lakcim");
const szuletes = document.getElementById("szuletes");
const gepjarmu = document.getElementById("gepjarmu");
const uzemanyag = document.getElementById("uzemanyag");
const fogyasztas = document.getElementById("fogyasztas");
const utazas = document.getElementById("utazas");
const egysegar = document.getElementById("egysegar");
const kiindulas = document.getElementById("kiindulas");
const uticel = document.getElementById("uticel");
const tovabbiuticel = document.getElementById("tovabbiuticel");
const megtett = document.getElementById("megtett");

const utikoltseg = document.getElementById("utikoltseg");
const amortizacio = document.getElementById("amortizacio");
const osszeskoltseg = document.getElementById("osszeskoltseg");

let nyomtat = document.getElementById("anyomtatas");

let datum = document.getElementById("datum");
datum.innerHTML = most()

function most() {
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0');
	let yyyy = today.getFullYear();

	return yyyy + ". " + mm + ". " + dd + ".";
}

function szamitas() {
	if (nev.value && lakcim.value && szuletes.value && gepjarmu.value && uzemanyag.value && fogyasztas.value && utazas.value && egysegar.value && kiindulas.value && uticel.value && tovabbiuticel.value && megtett.value) {
		const a = Math.floor(parseFloat(fogyasztas.value) * egysegar.value * megtett.value / 100);
		const b = Math.floor(megtett.value * 15);
	
		utikoltseg.innerHTML = a + " Ft";
		amortizacio.innerHTML = b + " Ft";
		osszeskoltseg.innerHTML = a + b + " Ft";
	
		nyomtat.disabled = false;
	} else {
		alert("Töltsd ki az összes mezőt!");
	}
}

function nyomtatas() {
	window.print()
}

function uzemanyagvaltozas() {
	if (uzemanyag.value == "benzin") {
		fogyasztas.innerHTML = '<option value="7.6">1000 cm3-ig 7,6 l/100km</option>'
		+'<option value="8.6">1001-1500 cm3 között 8,6 l/100km</option>'
		+'<option value="9.5">1501-2000 cm3 között 9,5 l/100km</option>'
		+'<option value="11.4">2001-3000 cm3 között 11,4 l/100km</option>'
		+'<option value="13.3">3001 cm3 fölött 13,3 l/100km</option>';
	} else {
		fogyasztas.innerHTML = '<option value="5.7">1500 cm3-ig 5,7 l/100km</option>'
		+'<option value="6.7">1501-2000 cm3 között 6,7 l/100km</option>'
		+'<option value="7.6">2001-3000 cm3 között 7,6 l/100km</option>'
		+'<option value="9.5">3001 cm3 fölött 9,5 l/100km</option>';
	}
}