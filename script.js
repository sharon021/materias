const materias = [
  // Primer año 1° Cuatrimestre
  { id: "fundamentos", nombre: "Fundamentos de Informática", anio: 1, cuatrimestre: 1, desbloquea: ["programacion1"] },
  { id: "sistInf1", nombre: "Sistemas de Información I", anio: 1, cuatrimestre: 1, desbloquea: ["sistInf2"] },
  { id: "pensamientoCritico", nombre: "Pensamiento Crítico y Comunicación", anio: 1, cuatrimestre: 1, desbloquea: [] },
  { id: "teoriaSistemas", nombre: "Teoría de Sistemas", anio: 1, cuatrimestre: 1, desbloquea: [] },
  { id: "elementosAlgebra", nombre: "Elementos de Álgebra y Geometría", anio: 1, cuatrimestre: 1, desbloquea: ["algebra"] },

  // Primer año 2° Cuatrimestre
  { id: "programacion1", nombre: "Programación I", anio: 1, cuatrimestre: 2, desbloquea: ["programacion2"] },
  { id: "sistemasRepresentacion", nombre: "Sistemas de Representación", anio: 1, cuatrimestre: 2, desbloquea: [] },
  { id: "fundamentosQuimica", nombre: "Fundamentos de Química", anio: 1, cuatrimestre: 2, desbloquea: [] },
  { id: "arquitecturaCompu", nombre: "Arquitectura de Computadores", anio: 1, cuatrimestre: 2, desbloquea: ["sistemasOperativos"] },
  { id: "matematicaDiscreta", nombre: "Matemática Discreta", anio: 1, cuatrimestre: 2, desbloquea: ["ingenieriaDatos1", "teoriaComputacion"] },
  { id: "algebra", nombre: "Álgebra", anio: 1, cuatrimestre: 2, desbloquea: ["fisica1"] },

  // Segundo año 1° Cuatrimestre
  { id: "programacion2", nombre: "Programación II", anio: 2, cuatrimestre: 1, desbloquea: ["programacion3", "seminarioIntegracion"] },
  { id: "sistInf2", nombre: "Sistemas de Información II", anio: 2, cuatrimestre: 1, desbloquea: ["direccionProyectos", "arquitecturaAplicaciones", "seminarioIntegracion", "ingenieriaSoftware"] },
  { id: "sistemasOperativos", nombre: "Sistemas Operativos", anio: 2, cuatrimestre: 1, desbloquea: [] },
  { id: "fisica1", nombre: "Física I", anio: 2, cuatrimestre: 1, desbloquea: ["fisica2"] },
  { id: "calculo1", nombre: "Cálculo I", anio: 2, cuatrimestre: 1, desbloquea: ["calculo2", "probabilidadEstadistica"] },

  // Segundo año 2° Cuatrimestre
  { id: "programacion3", nombre: "Programación III", anio: 2, cuatrimestre: 2, desbloquea: ["teoriaComputacion"] },
  { id: "paradigmaOO", nombre: "Paradigma Orientado a Objetos", anio: 2, cuatrimestre: 2, desbloquea: ["aplicacionesInteractivas", "procesoDesarrolloSW"] },
  { id: "fundamentosTelecom", nombre: "Fundamentos de Telecomunicaciones", anio: 2, cuatrimestre: 2, desbloquea: ["teleinformaticaRedes"] },
  { id: "ingenieriaDatos1", nombre: "Ingeniería de Datos I", anio: 2, cuatrimestre: 2, desbloquea: ["seminarioIntegracion", "ingenieriaDatos2"] },
  { id: "calculo2", nombre: "Cálculo II", anio: 2, cuatrimestre: 2, desbloquea: ["modeladoSimulacion"] },

  // Tercer año 1° Cuatrimestre
  { id: "procesoDesarrolloSW", nombre: "Proceso de Desarrollo de Software", anio: 3, cuatrimestre: 1, desbloquea: ["desarrolloAplicaciones1", "desarrolloAplicaciones2"] },
  { id: "seminarioIntegracion", nombre: "Seminario de Integración Profesional", anio: 3, cuatrimestre: 1, desbloquea: [] },
  { id: "teleinformaticaRedes", nombre: "Teleinformática y Redes", anio: 3, cuatrimestre: 1, desbloquea: ["seguridadInformacion"] },
  { id: "ingenieriaDatos2", nombre: "Ingeniería de Datos II", anio: 3, cuatrimestre: 1, desbloquea: ["cienciaDatos"] },
  { id: "probabilidadEstadistica", nombre: "Probabilidad y Estadística", anio: 3, cuatrimestre: 1, desbloquea: ["estadisticaAvanzada", "proyectosInformaticos", "cienciaDatos"] },
  { id: "examenIngles", nombre: "Examen de Inglés", anio: 3, cuatrimestre: 1, desbloquea: [] },

  // Tercer año 2° Cuatrimestre
  { id: "aplicacionesInteractivas", nombre: "Aplicaciones Interactivas", anio: 3, cuatrimestre: 2, desbloquea: ["desarrolloAplicaciones2"] },
  { id: "ingenieriaSoftware", nombre: "Ingeniería de Software", anio: 3, cuatrimestre: 2, desbloquea: ["calidadSoftware"] },
  { id: "fisica2", nombre: "Física II", anio: 3, cuatrimestre: 2, desbloquea: [] },
  { id: "teoriaComputacion", nombre: "Teoría de la Computación", anio: 3, cuatrimestre: 2, desbloquea: [] },
  { id: "estadisticaAvanzada", nombre: "Estadística Avanzada", anio: 3, cuatrimestre: 2, desbloquea: ["inteligenciaArtificial"] },

  // Cuarto año 1° Cuatrimestre
  { id: "desarrolloAplicaciones1", nombre: "Desarrollo de Aplicaciones I", anio: 4, cuatrimestre: 1, desbloquea: [] },
  { id: "direccionProyectos", nombre: "Dirección de Proyectos Informáticos", anio: 4, cuatrimestre: 1, desbloquea: [] },
  { id: "cienciaDatos", nombre: "Ciencia de Datos", anio: 4, cuatrimestre: 1, desbloquea: [] },
  { id: "seguridadInformacion", nombre: "Seguridad e Integridad de la Información", anio: 4, cuatrimestre: 1, desbloquea: [] },
  { id: "modeladoSimulacion", nombre: "Modelado y Simulación", anio: 4, cuatrimestre: 1, desbloquea: [] },

  // Cuarto año 2° Cuatrimestre
  { id: "optativa1", nombre: "Optativa I", anio: 4, cuatrimestre: 2, desbloquea: [] },
  { id: "desarrolloAplicaciones2", nombre: "Desarrollo de Aplicaciones II", anio: 4, cuatrimestre: 2, desbloquea: [] },
  { id: "evaluacionProyectos", nombre: "Evaluación de Proyectos Informáticos", anio: 4, cuatrimestre: 2, desbloquea: [] },
  { id: "inteligenciaArtificial", nombre: "Inteligencia Artificial", anio: 4, cuatrimestre: 2, desbloquea: [] },
  { id: "tecnologiaMedioAmbiente", nombre: "Tecnología y Medio Ambiente", anio: 4, cuatrimestre: 2, desbloquea: [] },
  { id: "practicaProfesional", nombre: "Práctica Profesional Supervisada", anio: 4, cuatrimestre: 2, desbloquea: [] },

  // Quinto año 1° Cuatrimestre
  { id: "optativa2", nombre: "Optativa II", anio: 5, cuatrimestre: 1, desbloquea: [] },
  { id: "arquitecturaAplicaciones", nombre: "Arquitectura de Aplicaciones", anio: 5, cuatrimestre: 1, desbloquea: [] },
  { id: "tendenciasTecnologicas", nombre: "Tendencias Tecnológicas", anio: 5, cuatrimestre: 1, desbloquea: [] },
  { id: "proyectoFinal", nombre: "Proyecto Final de Ingeniería en Informática", anio: 5, cuatrimestre: 1, desbloquea: [] },
  { id: "calidadSoftware", nombre: "Calidad de Software", anio: 5, cuatrimestre: 1, desbloquea: [] },

  // Quinto año 2° Cuatrimestre
  { id: "optativa3", nombre: "Optativa III", anio: 5, cuatrimestre: 2, desbloquea: [] },
  { id: "negociosTecnologicos", nombre: "Negocios Tecnológicos", anio: 5, cuatrimestre: 2, desbloquea: [] },
  { id: "tecnologiaInnovacion", nombre: "Tecnología e Innovación", anio: 5, cuatrimestre: 2, desbloquea: [] },
  { id: "derechoInformatico", nombre: "Derecho Informático", anio: 5, cuatrimestre: 2, desbloquea: [] },
];

// Estado guardado en localStorage { id: {estado: "aprobada"|"final-previo"|"cursando", nota?, fecha? } }
const estadoMaterias = JSON.parse(localStorage.getItem("estadoMaterias") || "{}");

const contenedorGeneral = document.getElementById("contenedor-general");
const listaFinales = document.getElementById("lista-finales-previos");

function estaDesbloqueada(id) {
  // Una materia está desbloqueada si todas las materias que la desbloquean están aprobadas.
  // Es decir: para la materia M, la desbloquean materias X que deben estar aprobadas para poder hacer click.
  // NOTA: aquí invertimos la lógica: miramos las materias que desbloquean a 'id' y verificamos si están aprobadas.
  return materias
    .filter(m => m.desbloquea.includes(id))
    .every(m => estadoMaterias[m.id]?.estado === "aprobada");
}

function render() {
  contenedorGeneral.innerHTML = "";
  const agrupadas = {};

  // Agrupar materias por año y cuatrimestre
  for (const m of materias) {
    const clave = `Año ${m.anio} - ${m.cuatrimestre}° Cuatrimestre`;
    if (!agrupadas[clave]) agrupadas[clave] = [];
    agrupadas[clave].push(m);
  }

  for (const [grupo, lista] of Object.entries(agrupadas)) {
    const seccion = document.createElement("div");
    seccion.innerHTML = `<h2>${grupo}</h2>`;
    const grid = document.createElement("div");
    grid.className = "grid";

    for (const m of lista) {
      const div = document.createElement("div");
      div.className = "materia";
      div.textContent = m.nombre;
      const estado = estadoMaterias[m.id];

      // Ver si está desbloqueada (si no tiene requisitos o están aprobados)
      const desbloqueada = estaDesbloqueada(m.id) || !materias.some(mat => mat.desbloquea.includes(m.id));

      if (!estado) {
        if (!desbloqueada) {
          div.classList.add("bloqueada");
        } else {
          div.onclick = () => clickMateria(m);
        }
      } else {
        if (estado.estado === "aprobada") div.classList.add("aprobada");
        else if (estado.estado === "final-previo") div.classList.add("final-previo");
        else if (estado.estado === "cursando") div.classList.add("cursando");
        div.onclick = () => clickMateria(m);
      }

      // Si tiene final previo mostrar fecha
      if (estado?.estado === "final-previo" && estado.fecha) {
        const small = document.createElement("small");
        small.className = "vence";
        small.textContent = `Vence: ${estado.fecha}`;
        div.appendChild(small);
      }

      grid.appendChild(div);
    }

    seccion.appendChild(grid);
    contenedorGeneral.appendChild(seccion);
  }

  actualizarResumen();
  mostrarFinalesProximos();
}

function clickMateria(materia) {
  let msg = `Materia: ${materia.nombre}\nEstado actual: `;
  const estado = estadoMaterias[materia.id];
  if (!estado) msg += "No cursada";
  else if (estado.estado === "aprobada") msg += "Aprobada";
  else if (estado.estado === "final-previo") msg += `Final pendiente, vence ${estado.fecha || "sin fecha"}`;
  else if (estado.estado === "cursando") msg += "Cursando";

  const opcion = prompt(`${msg}\nIngrese:\n1 para Aprobar\n2 para Final Previo\n3 para Cursando\n4 para Quitar Estado\n(Cancelar para salir)`);

  if (opcion === null) return; // cancelar

  switch (opcion) {
    case "1":
      estadoMaterias[materia.id] = { estado: "aprobada", nota: prompt("Ingrese la nota final (numérica):") || null };
      alert(`Materia "${materia.nombre}" aprobada.`);
      break;
    case "2":
      const fecha = prompt("Ingrese la fecha de vencimiento del final (YYYY-MM-DD):");
      if (!fecha || !validarFecha(fecha)) {
        alert("Fecha inválida. Operación cancelada.");
        return;
      }
      estadoMaterias[materia.id] = { estado: "final-previo", fecha };
      alert(`Final previo de "${materia.nombre}" registrado, vence el ${fecha}.`);
      break;
    case "3":
      estadoMaterias[materia.id] = { estado: "cursando" };
      alert(`Materia "${materia.nombre}" marcada como cursando.`);
      break;
    case "4":
      delete estadoMaterias[materia.id];
      alert(`Estado de "${materia.nombre}" eliminado.`);
      break;
    default:
      alert("Opción inválida.");
      return;
  }
  guardarEstado();
  render();
}

function validarFecha(fecha) {
  const re = /^\d{4}-\d{2}-\d{2}$/;
  if (!re.test(fecha)) return false;
  const d = new Date(fecha);
  return d instanceof Date && !isNaN(d);
}

function guardarEstado() {
  localStorage.setItem("estadoMaterias", JSON.stringify(estadoMaterias));
}

function actualizarResumen() {
  const total = materias.length;
  const aprobadas = Object.values(estadoMaterias).filter(e => e.estado === "aprobada").length;
  const finalPrevio = Object.values(estadoMaterias).filter(e => e.estado === "final-previo").length;
  const cursando = Object.values(estadoMaterias).filter(e => e.estado === "cursando").length;

  const notas = Object.values(estadoMaterias)
    .filter(e => e.estado === "aprobada" && e.nota !== null && !isNaN(e.nota))
    .map(e => Number(e.nota));

  const promedio = notas.length ? (notas.reduce((a,b) => a+b,0)/notas.length).toFixed(2) : "N/A";

  document.getElementById("totalMaterias").textContent = `Total materias: ${total}`;
  document.getElementById("materiasAprobadas").textContent = `Materias aprobadas: ${aprobadas}`;
  document.getElementById("materiasFinalPrevio").textContent = `Materias con final previo: ${finalPrevio}`;
  document.getElementById("materiasCursando").textContent = `Materias cursando: ${cursando}`;
  document.getElementById("promedio").textContent = `Promedio general: ${promedio}`;
}

function mostrarFinalesProximos() {
  listaFinales.innerHTML = "";
  const hoy = new Date();

  for (const [id, estado] of Object.entries(estadoMaterias)) {
    if (estado.estado === "final-previo" && estado.fecha) {
      const fechaVence = new Date(estado.fecha);
      const diffMs = fechaVence - hoy;
      const diffMeses = diffMs / (1000 * 60 * 60 * 24 * 30);

      const li = document.createElement("li");
      const materia = materias.find(m => m.id === id);
      li.textContent = `${materia.nombre} vence el ${estado.fecha}`;

      if (diffMeses <= 4 && diffMeses > 0) {
        li.style.color = "red";
        li.style.fontWeight = "700";
        alert(`¡Atención! El final de ${materia.nombre} vence en menos de 4 meses.`);
      }

      listaFinales.appendChild(li);
    }
  }
}

render();
