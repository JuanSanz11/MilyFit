function calcularIMC() {
  const altura = parseFloat(document.getElementById('altura').value) / 100;
  const peso = parseFloat(document.getElementById('peso').value);
  const imc = peso / (altura * altura);
  const porcentaje = (imc / 40) * 100; // Asumiendo 40 como IMC máximo de referencia

  let mensaje = '';
  if (imc < 18.5) mensaje = 'Bajo peso';
  else if (imc < 22) mensaje = 'Por debajo del peso ideal';
  else if (imc < 24.9) mensaje = 'Peso ideal';
  else if (imc < 27.9) mensaje = 'Sobrepeso';
  else mensaje = 'Obesidad';

  document.getElementById('resultadoIMC').innerHTML = `
    <strong>Tu IMC es:</strong> ${imc.toFixed(2)}<br>
    <strong>Estado:</strong> ${mensaje}<br>
    <strong>Porcentaje relativo:</strong> ${porcentaje.toFixed(1)}%
  `;
}




//Mas 

function calcularTMB() {
  const edad = parseInt(document.getElementById('edadTMB').value);
  const sexo = document.getElementById('sexoTMB').value;
  const peso = parseFloat(document.getElementById('pesoTMB').value);
  const altura = parseFloat(document.getElementById('alturaTMB').value);

  let tmb;
  if (sexo === 'masculino') {
    tmb = 10 * peso + 6.25 * altura - 5 * edad + 5;
  } else {
    tmb = 10 * peso + 6.25 * altura - 5 * edad - 161;
  }

  document.getElementById('resultadoTMB').textContent = `Tu TMB es ${tmb.toFixed(2)} kcal/día`;
}

function caloriasDiarias() {
  const tmb = parseFloat(document.getElementById('tmbBase').value);
  const actividad = parseFloat(document.getElementById('actividad').value);
  const calorias = tmb * actividad;

  document.getElementById('resultadoCalorias').textContent = `Calorías diarias estimadas: ${calorias.toFixed(2)} kcal`;
}

function calcularAgua() {
  const edad = parseInt(document.getElementById('edadAgua').value);
  const sexo = document.getElementById('sexoAgua').value;
  const peso = parseFloat(document.getElementById('pesoAgua').value);

  let agua;
  if (sexo === 'masculino') {
    agua = 0.6 * peso;
  } else {
    agua = 0.5 * peso;
  }

  document.getElementById('resultadoAgua').textContent = `Tu cuerpo contiene aproximadamente ${agua.toFixed(2)} litros de agua`;
}

function calcularICC() {
  const cintura = parseFloat(document.getElementById('cintura').value);
  const cadera = parseFloat(document.getElementById('cadera').value);
  const icc = cintura / cadera;

  document.getElementById('resultadoICC').textContent = `Tu índice cintura-cadera es ${icc.toFixed(2)}`;
}

function calcularFC() {
  const edad = parseInt(document.getElementById('edadFC').value);
  const maxFC = 220 - edad;
  const zonaMin = maxFC * 0.5;
  const zonaMax = maxFC * 0.85;

  document.getElementById('resultadoFC').textContent = `Tu frecuencia cardíaca ideal está entre ${zonaMin.toFixed(0)} y ${zonaMax.toFixed(0)} bpm`;
}



// Slider automático
let index = 0;
setInterval(() => {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(s => s.classList.remove('active'));
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 3000);




function actualizarHora() {
  const ahora = new Date();

  const horas = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');
  const segundos = String(ahora.getSeconds()).padStart(2, '0');
  const milisegundos = String(ahora.getMilliseconds()).padStart(3, '0');

  const horaCompleta = `${horas}:${minutos}:${segundos}.${milisegundos}`;
  document.getElementById('local-time').textContent = horaCompleta;
}

setInterval(actualizarHora, 50); // Actualiza cada 50ms para fluidez
actualizarHora();








let currentSlide = 0;
const slides = document.querySelectorAll('.slide-c');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Cambia cada 3 segundos
setInterval(nextSlide, 3000);

// Mostrar la primera al cargar
showSlide(currentSlide);
