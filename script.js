const malla = {
  "I": [
    "Matemática aplicada para arquitectura I",
    "Representación arquitectónica",
    "Historia y Teoría de la Arquitectura I",
    "Comprensión Lectora en Arquitectura",
    "Taller de Arquitectura I: Introducción al Diseño",
    "Inglés I"
  ],
  "II": [
    "Matemática aplicada para arquitectura II",
    "Geometría y Representación I",
    "Historia y Teoría de la Arquitectura II",
    "Taller de Arquitectura II",
    "Inglés II"
  ],
  "III": [
    "Urbanismo I",
    "Geometría y Representación II",
    "Estructura I",
    "Taller de Arquitectura III",
    "Inglés III"
  ],
  "IV": [
    "Urbanismo II",
    "Modelación Digital para Arquitectos",
    "Estructura II",
    "Expresión Oral en Arquitectura",
    "Taller de Arquitectura IV"
  ],
  "V": [
    "Urbanismo III",
    "BIM / Modelación",
    "Estructura III",
    "Taller de Arquitectura V",
    "Introducción a la Fe"
  ],
  "VI": [
    "Sistemas Constructivos I",
    "BIM / Revisión",
    "Topografía",
    "Tecnología en Diseño y Materialización",
    "Taller de Arquitectura VI",
    "Ética Cristiana"
  ],
  "VII": [
    "Sistemas Constructivos II",
    "BIM / Coordinación",
    "Edificio y Entorno I",
    "Metodología de la Investigación",
    "Taller de Arquitectura VII"
  ],
  "VIII": [
    "Sistemas Constructivos III",
    "BIM / Dirección y Gestión",
    "Edificio y Entorno II",
    "Taller de Arquitectura VIII",
    "Certificación I"
  ],
  "IX": [
    "Electivo I",
    "Eficiencia Energética",
    "Arquitectura Sustentable I",
    "Gestión de Proyectos",
    "Taller de Arquitectura IX",
    "Certificación II"
  ],
  "X": [
    "Electivo II",
    "Normativa en Proyectos de Arquitectura",
    "Arquitectura Sustentable II",
    "Formulación y Evaluación de Proyectos",
    "Taller de Arquitectura X",
    "Certificación III"
  ],
  "XI": [
    "Electivo III",
    "Taller de Titulación - Módulo Integrador Profesional"
  ]
};

function colorAleatorio() {
  const h = Math.floor(Math.random() * 360);
  return `hsl(${h}, 70%, 60%)`;
}

const contenedor = document.getElementById("contenedor");

Object.entries(malla).forEach(([semestre, ramos]) => {
  const divSemestre = document.createElement("div");
  divSemestre.className = "semestre";
  divSemestre.innerHTML = `<h2>Semestre ${semestre}</h2>`;
  ramos.forEach(ramo => {
    const divRamo = document.createElement("div");
    divRamo.className = "ramo";
    divRamo.style.backgroundColor = colorAleatorio();
    divRamo.textContent = ramo;
    divSemestre.appendChild(divRamo);
  });
  contenedor.appendChild(divSemestre);
});

