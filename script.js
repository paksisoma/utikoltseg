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

let szamit = document.getElementById("aszamitas");
let nyomtat = document.getElementById("anyomtatas");

let forras = document.getElementById("forras");

function szamitas() {
	/*if (!nev.value || !lakcim.value || !szuletes.value || !gepjarmu.value) {
		console.log("asd");
	}*/

	const a = parseInt(fogyasztas.value) * egysegar.value * megtett.value / 100;
	const b = megtett.value * 15;

	utikoltseg.innerHTML = a + " Ft";
	amortizacio.innerHTML = b + " Ft";
	osszeskoltseg.innerHTML = a + b + " Ft";

	nyomtat.disabled = false;
}

function nyomtatas() {
	/*szamit.style.display = "none";
	nyomtat.style.display = "none";
	forras.style.display = "none";*/

	/*window.print()*/
}