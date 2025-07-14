const STORAGE_KEY = "estadoMateriasMalla";
const estadoMaterias = {};

function cargarEstadoGuardado() {
  const guardado = localStorage.getItem(STORAGE_KEY);
  if (guardado) {
    Object.assign(estadoMaterias, JSON.parse(guardado));
  }
}

function guardarEstado() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estadoMaterias));
}

/**
 * Ahora los "requisitos" son materias previas que hay que aprobar para desbloquear la materia.
 * Si no tiene requisitos, se desbloquea desde el principio.
 */
const materiasPorSeccion = {
  "Primer año - 1° Cuatrimestre": [
    { id: "fund-info", nombre: "Fund. de Informática", requisitos: [] },
    { id: "sis1", nombre: "Sist. Información I", requisitos: ["sis2"] },
    { id: "pensamiento", nombre: "Pensamiento Crítico", requisitos: [] },
    { id: "teoria", nombre: "Teoría de Sistemas", requisitos: [] },
    { id: "elem-algebra", nombre: "Elementos Álgebra y Geometría", requisitos: ["algebra"] }
  ],
  "Primer año - 2° Cuatrimestre": [
    { id: "prog1", nombre: "Programación I", requisitos: [] },
    { id: "sist-rep", nombre: "Sist. Representación", requisitos: [] },
    { id: "quimica", nombre: "Fund. Química", requisitos: [] },
    { id: "arqui", nombre: "Arquitectura de Computadores", requisitos: ["so"] },
    { id: "discreta", nombre: "Matemática Discreta", requisitos: ["ing-datos1", "teoria-comp"] },
    { id: "algebra", nombre: "Álgebra", requisitos: ["fisica1"] }
  ],
  "Segundo año - 1° Cuatrimestre": [
    { id: "prog2", nombre: "Programación II", requisitos: ["prog1"] },
    { id: "sis2", nombre: "Sist. Información II", requisitos: ["sis1"] },
    { id: "so", nombre: "Sistemas Operativos", requisitos: [] },
    { id: "fisica1", nombre: "Física I", requisitos: [] },
    { id: "calculo1", nombre: "Cálculo I", requisitos: [] }
  ],
  "Segundo año - 2° Cuatrimestre": [
    { id: "prog3", nombre: "Programación III", requisitos: ["prog2"] },
    { id: "poo", nombre: "Paradigma OO", requisitos: ["apps-int", "proceso-dev"] },
    { id: "telecom", nombre: "Fund. Telecomunicaciones", requisitos: ["redes"] },
    { id: "ing-datos1", nombre: "Ing. de Datos I", requisitos: ["sis2"] },
    { id: "calculo2", nombre: "Cálculo II", requisitos: ["calculo1"] }
  ],
  "Tercer año - 1° Cuatrimestre": [
    { id: "proceso-dev", nombre: "Proceso Desarrollo Soft", requisitos: ["prog3"] },
    { id: "seminario", nombre: "Seminario Integración Profesional", requisitos: [] },
    { id: "redes", nombre: "Teleinformática y Redes", requisitos: [] },
    { id: "ing-datos2", nombre: "Ing. de Datos II", requisitos: ["ing-datos1"] },
    { id: "probabilidad", nombre: "Prob. y Estadística", requisitos: [] },
    { id: "ingles", nombre: "Examen de Inglés", requisitos: [] }
  ],
  "Tercer año - 2° Cuatrimestre": [
    { id: "apps-int", nombre: "Aplicaciones Interactivas", requisitos: ["proceso-dev"] },
    { id: "ing-soft", nombre: "Ing. de Software", requisitos: ["calidad-soft"] },
    { id: "fisica2", nombre: "Física II", requisitos: ["fisica1"] },
    { id: "teoria-comp", nombre: "Teoría de la Computación", requisitos: ["prog3"] },
    { id: "estadistica-adv", nombre: "Estadística Avanzada", requisitos: ["probabilidad"] }
  ],
  "Cuarto año - 1° Cuatrimestre": [
    { id: "apps1", nombre: "Desarrollo de Apps I", requisitos: ["apps-int"] },
    { id: "dir-proy", nombre: "Dirección de Proyectos", requisitos: [] },
    { id: "ciencia-datos", nombre: "Ciencia de Datos", requisitos: ["ing-datos2"] },
    { id: "seguridad", nombre: "Seguridad e Integridad", requisitos: ["redes"] },
    { id: "modelado", nombre: "Modelado y Simulación", requisitos: ["calculo2"] }
  ],
  "Cuarto año - 2° Cuatrimestre": [
    { id: "opt1", nombre: "Optativa I", requisitos: [] },
    { id: "apps2", nombre: "Desarrollo de Apps II", requisitos: ["apps1"] },
    { id: "eval-proy", nombre: "Evaluación de Proyectos", requisitos: [] },
    { id: "ia", nombre: "Inteligencia Artificial", requisitos: ["estadistica-adv"] },
    { id: "medioamb", nombre: "Tecnología y Medioambiente", requisitos: [] },
    { id: "pps", nombre: "Práctica Profesional Supervisada", requisitos: [] }
  ],
  "Quinto año - 1° Cuatrimestre": [
    { id: "opt2", nombre: "Optativa II", requisitos: [] },
    { id: "arquitectura-app", nombre: "Arquitectura de Aplicaciones", requisitos: ["dir-proy"] },
    { id: "tendencias", nombre: "Tendencias Tecnológicas", requisitos: [] },
    { id: "proyecto", nombre: "Proyecto Final", requisitos: ["eval-proy"] },
    { id: "calidad-soft", nombre: "Calidad de Software", requisitos: [] }
  ],
  "Quinto año - 2° Cuatrimestre": [
    { id: "opt3", nombre: "Optativa III", requisitos: [] },
    { id: "negocios", nombre: "Negocios Tecnológicos", requisitos: [] },
    { id: "innovacion", nombre: "Tecnología e Innovación", requisitos: [] },
    { id: "derecho", nombre: "Derecho Informático", requisitos: [] }
  ]
};

// Verifica si todos los requisitos de la materia están aprobados
function puedeDesbloquearse(materia) {
  return materia.requisitos.every(req => estadoMaterias[req]?.aprobada);
}

function buscarNombreMateria(id) {
  for (const materias of Object.values(materiasPorSeccion)) {
    const materia = materias.find(m => m.id === id);
    if (materia) return materia.nombre;
  }
  return id;
}

function calcularVencimiento(fechaISO) {
  if (!fechaISO) return "Fecha desconocida";
  const fecha = new Date(fechaISO);
  fecha.setFullYear(fecha.getFullYear() + 1);
  return fecha.toLocaleDateString();
}

function actualizarResumen() {
  let totalAprobadas = 0;
  const finalesPrevios = [];

  for (const materias of Object.values(materiasPorSeccion)) {
    materias.forEach((materia) => {
      const estado = estadoMaterias[materia.id];
      if (estado?.aprobada) {
        totalAprobadas++;
      } else if (puedeDesbloquearse(materia)) {
        const fechaDesbloqueo = estado?.desbloqueadaDesde;
        const vencimiento = calcularVencimiento(fechaDesbloqueo);
        finalesPrevios.push(`${materia.nombre} — vence: ${vencimiento}`);
      }
    });
  }

  document.getElementById("contador-aprobadas").textContent = totalAprobadas;

  const lista = document.getElementById("lista-finales-previos");
  lista.innerHTML = "";
  finalesPrevios.forEach((texto) => {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
  });
}

function actualizarBloqueos() {
  for (const materias of Object.values(materiasPorSeccion)) {
    materias.forEach((materia) => {
      const div = document.getElementById(materia.id);
      div.classList.remove('bloqueada', 'final-previo', 'aprobada');

      if (estadoMaterias[materia.id]?.aprobada) {
        div.classList.add('aprobada');
      } else if (puedeDesbloquearse(materia)) {
        div.classList.add('final-previo');
        if (!estadoMaterias[materia.id]) {
          estadoMaterias[materia.id] = {
            aprobada: false,
            desbloqueadaDesde: new Date().toISOString().split("T")[0]
          };
        }
      } else {
        div.classList.add('bloqueada');
      }
    });
  }
  guardarEstado();
  actualizarResumen();
}

function crearMalla() {
  cargarEstadoGuardado();
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

      if (estadoMaterias[materia.id]?.aprobada) {
        div.classList.add('aprobada');
      }

      div.addEventListener('click', () => {
        if (div.classList.contains('bloqueada')) return;

        div.classList.toggle('aprobada');
        const estaAprobada = div.classList.contains('aprobada');
        estadoMaterias[materia.id] = {
          aprobada: estaAprobada,
          desbloqueadaDesde: estadoMaterias[materia.id]?.desbloqueadaDesde || null
        };
        guardarEstado();
        actualizarBloqueos();
        actualizarResumen();
      });

      grid.appendChild(div);
    });

    contenedor.appendChild(titulo);
    contenedor.appendChild(grid);
  }

  actualizarBloqueos();
  actualizarResumen();
}

crearMalla();
