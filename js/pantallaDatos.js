const database = firebase.database();
const auth = firebase.auth();


const fundacion = document.getElementById('fundacion');
const nombre = document.getElementById('nombre');
const salario = document.getElementById('salario');
const cedula = document.getElementById('cedula');
const correo = document.getElementById('correo');
const direccion = document.getElementById('direccion');
const estrato = document.getElementById('estrato');
const estado = document.getElementById('estado');

let objSoli = localStorage.getItem('adoptante');

let adoptante = JSON.parse(objSoli);

//lectura


