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
	let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	let yyyy = today.getFullYear();

	return yyyy + ". " + mm + ". " + dd + ".";
}

function szamitas() {
	//if (nev.value && lakcim.value && szuletes.value && gepjarmu.value && uzemanyag.value && fogyasztas.value && utazas.value && egysegar.value && kiindulas.value && uticel.value && tovabbiuticel.value && megtett.value) {
		const a = parseInt(fogyasztas.value) * egysegar.value * megtett.value / 100;
		const b = megtett.value * 15;
	
		utikoltseg.innerHTML = a + " Ft";
		amortizacio.innerHTML = b + " Ft";
		osszeskoltseg.innerHTML = a + b + " Ft";
	
		nyomtat.disabled = false;
	//}
}

function nyomtatas() {
	window.print()
}