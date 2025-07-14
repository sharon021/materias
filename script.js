const materiasPorSeccion = {
  "Primer año - 1° Cuatrimestre": [
    { id: "fund-info", nombre: "Fund. de Informática", requisitos: ["prog1"] },
    { id: "sis1", nombre: "Sist. Información I", requisitos: ["sis2"] },
    { id: "pensamiento", nombre: "Pensamiento Crítico", requisitos: [] },
    { id: "teoria", nombre: "Teoría de Sistemas", requisitos: [] },
    { id: "elem-algebra", nombre: "Elementos Álgebra y Geometría", requisitos: ["algebra"] }
  ],
  "Primer año - 2° Cuatrimestre": [
    { id: "prog1", nombre: "Programación I", requisitos: ["prog2"] },
    { id: "sist-rep", nombre: "Sist. Representación", requisitos: [] },
    { id: "quimica", nombre: "Fund. Química", requisitos: [] },
    { id: "arqui", nombre: "Arquitectura de Computadores", requisitos: ["so"] },
    { id: "discreta", nombre: "Matemática Discreta", requisitos: ["ing-datos1", "teoria-comp"] },
    { id: "algebra", nombre: "Álgebra", requisitos: ["fisica1"] }
  ],
  "Segundo año - 1° Cuatrimestre": [
    { id: "prog2", nombre: "Programación II", requisitos: ["prog3", "seminario"] },
    { id: "sis2", nombre: "Sist. Información II", requisitos: ["dir-proy", "arquitectura-app", "seminario", "ing-soft"] },
    { id: "so", nombre: "Sistemas Operativos", requisitos: [] },
    { id: "fisica1", nombre: "Física I", requisitos: ["fisica2"] },
    { id: "calculo1", nombre: "Cálculo I", requisitos: ["calculo2", "probabilidad"] }
  ],
  "Segundo año - 2° Cuatrimestre": [
    { id: "prog3", nombre: "Programación III", requisitos: ["teoria-comp"] },
    { id: "poo", nombre: "Paradigma OO", requisitos: ["apps-int", "proceso-dev"] },
    { id: "telecom", nombre: "Fund. Telecomunicaciones", requisitos: ["redes"] },
    { id: "ing-datos1", nombre: "Ing. de Datos I", requisitos: ["seminario", "ing-datos2"] },
    { id: "calculo2", nombre: "Cálculo II", requisitos: ["modelado"] }
  ],
  "Tercer año - 1° Cuatrimestre": [
    { id: "proceso-dev", nombre: "Proceso Desarrollo Soft", requisitos: ["apps1", "apps2"] },
    { id: "seminario", nombre: "Seminario Integración Profesional", requisitos: [] },
    { id: "redes", nombre: "Teleinformática y Redes", requisitos: ["seguridad"] },
    { id: "ing-datos2", nombre: "Ing. de Datos II", requisitos: ["ciencia-datos"] },
    { id: "probabilidad", nombre: "Prob. y Estadística", requisitos: ["estadistica-adv", "proyectos", "ciencia-datos"] },
    { id: "ingles", nombre: "Examen de Inglés", requisitos: [] }
  ],
  "Tercer año - 2° Cuatrimestre": [
    { id: "apps-int", nombre: "Aplicaciones Interactivas", requisitos: ["apps2"] },
    { id: "ing-soft", nombre: "Ing. de Software", requisitos: ["calidad-soft"] },
    { id: "fisica2", nombre: "Física II", requisitos: [] },
    { id: "teoria-comp", nombre: "Teoría de la Computación", requisitos: [] },
    { id: "estadistica-adv", nombre: "Estadística Avanzada", requisitos: ["ia"] }
  ],
  "Cuarto año - 1° Cuatrimestre": [
    { id: "apps1", nombre: "Desarrollo de Apps I", requisitos: [] },
    { id: "dir-proy", nombre: "Dirección de Proyectos", requisitos: [] },
    { id: "ciencia-datos", nombre: "Ciencia de Datos", requisitos: [] },
    { id: "seguridad", nombre: "Seguridad e Integridad", requisitos: [] },
    { id: "modelado", nombre: "Modelado y Simulación", requisitos: [] }
  ],
  "Cuarto año - 2° Cuatrimestre": [
    { id: "opt1", nombre: "Optativa I", requisitos: [] },
    { id: "apps2", nombre: "Desarrollo de Apps II", requisitos: [] },
    { id: "eval-proy", nombre: "Evaluación de Proyectos", requisitos: [] },
    { id: "ia", nombre: "Inteligencia Artificial", requisitos: [] },
    { id: "medioamb", nombre: "Tecnología y Medioambiente", requisitos: [] },
    { id: "pps", nombre: "Práctica Profesional Supervisada", requisitos: [] }
  ],
  "Quinto año - 1° Cuatrimestre": [
    { id: "opt2", nombre: "Optativa II", requisitos: [] },
    { id: "arquitectura-app", nombre: "Arquitectura de Aplicaciones", requisitos: [] },
    { id: "tendencias", nombre: "Tendencias Tecnológicas", requisitos: [] },
    { id: "proyecto", nombre: "Proyecto Final", requisitos: [] },
    { id: "calidad-soft", nombre: "Calidad de Software", requisitos: [] }
  ],
  "Quinto año - 2° Cuatrimestre": [
    { id: "opt3", nombre: "Optativa III", requisitos: [] },
    { id: "negocios", nombre: "Negocios Tecnológicos", requisitos: [] },
    { id: "innovacion", nombre: "Tecnología e Innovación", requisitos: [] },
    { id: "derecho", nombre: "Derecho Informático", requisitos: [] }
  ]
};

const estadoMaterias = {};

function crearMalla() {
  const contenedor = document.getElementById('contenedor-general');
  contenedor.innerHTML = '';

  for (const [seccion, materias] of Object.entries(materiasPorSeccion)) {
    const titulo = document.createElement('h2');
    titulo.textContent = seccion;
    const grid = document.createElement('div');
    grid.className = 'grid';

    materias.forEach((materia) => {
      const div = document.createElement('div');
      div.className = 'materia';
      div.id = materia.id;
      div.innerHTML = `
        ${materia.nombre}
        <small>${materia.requisitos.length ? 'Requiere: ' + materia.requisitos.map(r => buscarNombreMateria(r)).join(', ') : 'Sin correlativas'}</small>
      `;

      if (!puedeDesbloquearse(materia)) {
        div.classList.add('bloqueada');
      }

      if (estadoMaterias[materia.id]) {
        div.classList.add('aprobada');
      }

      div.addEventListener('click', () => {
        if (div.classList.contains('bloqueada')) return;

        div.classList.toggle('aprobada');
        estadoMaterias[materia.id] = div.classList.contains('aprobada');
        actualizarBloqueos();
      });

      grid.appendChild(div);
    });

    contenedor.appendChild(titulo);
    contenedor.appendChild(grid);
  }
}

function puedeDesbloquearse(materia) {
  return materia.requisitos.every(req => estadoMaterias[req]);
}

function buscarNombreMateria(id) {
  for (const materias of Object.values(materiasPorSeccion)) {
    const materia = materias.find(m => m.id === id);
    if (materia) return materia.nombre;
  }
  return id;
}

function actualizarBloqueos() {
  for (const materias of Object.values(materiasPorSeccion)) {
    materias.forEach((materia) => {
      const div = document.getElementById(materia.id);
      if (!estadoMaterias[materia.id]) {
        if (puedeDesbloquearse(materia)) {
          div.classList.remove('bloqueada');
        } else {
          div.classList.add('bloqueada');
        }
      }
    });
  }
}

crearMalla();
