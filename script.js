/* =========================================================
   PLAN DE ESTUDIO - INGENIERÍA INFORMÁTICA
   Archivo: script.js
   ========================================================= */

/* =========================
   1. LISTA DE MATERIAS
   ========================= */

const materias = [
  { id: "fundamentos", nombre: "Fundamentos de Informática", anio: 1, cuatrimestre: 1, desbloquea: ["programacion1"] },
  { id: "sistInf1", nombre: "Sistemas de Información I", anio: 1, cuatrimestre: 1, desbloquea: ["sistInf2"] },
  { id: "pensamientoCritico", nombre: "Pensamiento Crítico y Comunicación", anio: 1, cuatrimestre: 1, desbloquea: [] },
  { id: "teoriaSistemas", nombre: "Teoría de Sistemas", anio: 1, cuatrimestre: 1, desbloquea: [] },
  { id: "elementosAlgebra", nombre: "Elementos de Álgebra y Geometría", anio: 1, cuatrimestre: 1, desbloquea: ["algebra"] },

  { id: "programacion1", nombre: "Programación I", anio: 1, cuatrimestre: 2, desbloquea: ["programacion2"] },
  { id: "sistemasRepresentacion", nombre: "Sistemas de Representación", anio: 1, cuatrimestre: 2, desbloquea: [] },
  { id: "fundamentosQuimica", nombre: "Fundamentos de Química", anio: 1, cuatrimestre: 2, desbloquea: [] },
  { id: "arquitecturaCompu", nombre: "Arquitectura de Computadores", anio: 1, cuatrimestre: 2, desbloquea: ["sistemasOperativos"] },
  { id: "matematicaDiscreta", nombre: "Matemática Discreta", anio: 1, cuatrimestre: 2, desbloquea: ["ingenieriaDatos1", "teoriaComputacion"] },
  { id: "algebra", nombre: "Álgebra", anio: 1, cuatrimestre: 2, desbloquea: ["fisica1"] },

  { id: "programacion2", nombre: "Programación II", anio: 2, cuatrimestre: 1, desbloquea: ["programacion3", "seminarioIntegracion"] },
  { id: "sistInf2", nombre: "Sistemas de Información II", anio: 2, cuatrimestre: 1, desbloquea: ["direccionProyectos", "arquitecturaAplicaciones", "seminarioIntegracion", "ingenieriaSoftware"] },
  { id: "sistemasOperativos", nombre: "Sistemas Operativos", anio: 2, cuatrimestre: 1, desbloquea: [] },
  { id: "fisica1", nombre: "Física I", anio: 2, cuatrimestre: 1, desbloquea: ["fisica2"] },
  { id: "calculo1", nombre: "Cálculo I", anio: 2, cuatrimestre: 1, desbloquea: ["calculo2", "probabilidadEstadistica"] },

  { id: "programacion3", nombre: "Programación III", anio: 2, cuatrimestre: 2, desbloquea: ["teoriaComputacion"] },
  { id: "paradigmaOO", nombre: "Paradigma Orientado a Objetos", anio: 2, cuatrimestre: 2, desbloquea: ["aplicacionesInteractivas", "procesoDesarrolloSW"] },
  { id: "fundamentosTelecom", nombre: "Fundamentos de Telecomunicaciones", anio: 2, cuatrimestre: 2, desbloquea: ["teleinformaticaRedes"] },
  { id: "ingenieriaDatos1", nombre: "Ingeniería de Datos I", anio: 2, cuatrimestre: 2, desbloquea: ["seminarioIntegracion", "ingenieriaDatos2"] },
  { id: "calculo2", nombre: "Cálculo II", anio: 2, cuatrimestre: 2, desbloquea: ["modeladoSimulacion"] },

  { id: "procesoDesarrolloSW", nombre: "Proceso de Desarrollo de Software", anio: 3, cuatrimestre: 1, desbloquea: ["desarrolloAplicaciones1", "desarrolloAplicaciones2"] },
  { id: "seminarioIntegracion", nombre: "Seminario de Integración Profesional", anio: 3, cuatrimestre: 1, desbloquea: [] },
  { id: "teleinformaticaRedes", nombre: "Teleinformática y Redes", anio: 3, cuatrimestre: 1, desbloquea: ["seguridadInformacion"] },
  { id: "ingenieriaDatos2", nombre: "Ingeniería de Datos II", anio: 3, cuatrimestre: 1, desbloquea: ["cienciaDatos"] },
  { id: "probabilidadEstadistica", nombre: "Probabilidad y Estadística", anio: 3, cuatrimestre: 1, desbloquea: ["estadisticaAvanzada", "proyectosInformaticos", "cienciaDatos"] },
  { id: "examenIngles", nombre: "Examen de Inglés", anio: 3, cuatrimestre: 1, desbloquea: [] },

  { id: "aplicacionesInteractivas", nombre: "Aplicaciones Interactivas", anio: 3, cuatrimestre: 2, desbloquea: ["desarrolloAplicaciones2"] },
  { id: "ingenieriaSoftware", nombre: "Ingeniería de Software", anio: 3, cuatrimestre: 2, desbloquea: ["calidadSoftware"] },
  { id: "fisica2", nombre: "Física II", anio: 3, cuatrimestre: 2, desbloquea: [] },
  { id: "teoriaComputacion", nombre: "Teoría de la Computación", anio: 3, cuatrimestre: 2, desbloquea: [] },
  { id: "estadisticaAvanzada", nombre: "Estadística Avanzada", anio: 3, cuatrimestre: 2, desbloquea: ["inteligenciaArtificial"] },

  { id: "desarrolloAplicaciones1", nombre: "Desarrollo de Aplicaciones I", anio: 4, cuatrimestre: 1, desbloquea: [] },
  { id: "direccionProyectos", nombre: "Dirección de Proyectos Informáticos", anio: 4, cuatrimestre: 1, desbloquea: [] },
  { id: "cienciaDatos", nombre: "Ciencia de Datos", anio: 4, cuatrimestre: 1, desbloquea: [] },
  { id: "seguridadInformacion", nombre: "Seguridad e Integridad de la Información", anio: 4, cuatrimestre: 1, desbloquea: [] },
  { id: "modeladoSimulacion", nombre: "Modelado y Simulación", anio: 4, cuatrimestre: 1, desbloquea: [] },

  { id: "optativa1", nombre: "Optativa I", anio: 4, cuatrimestre: 2, desbloquea: [] },
  { id: "desarrolloAplicaciones2", nombre: "Desarrollo de Aplicaciones II", anio: 4, cuatrimestre: 2, desbloquea: [] },
  { id: "evaluacionProyectos", nombre: "Evaluación de Proyectos Informáticos", anio: 4, cuatrimestre: 2, desbloquea: [] },
  { id: "inteligenciaArtificial", nombre: "Inteligencia Artificial", anio: 4, cuatrimestre: 2, desbloquea: [] },
  { id: "tecnologiaMedioAmbiente", nombre: "Tecnología y Medio Ambiente", anio: 4, cuatrimestre: 2, desbloquea: [] },
  { id: "practicaProfesional", nombre: "Práctica Profesional Supervisada", anio: 4, cuatrimestre: 2, desbloquea: [] },

  { id: "optativa2", nombre: "Optativa II", anio: 5, cuatrimestre: 1, desbloquea: [] },
  { id: "arquitecturaAplicaciones", nombre: "Arquitectura de Aplicaciones", anio: 5, cuatrimestre: 1, desbloquea: [] },
  { id: "tendenciasTecnologicas", nombre: "Tendencias Tecnológicas", anio: 5, cuatrimestre: 1, desbloquea: [] },
  { id: "proyectoFinal", nombre: "Proyecto Final de Ingeniería en Informática", anio: 5, cuatrimestre: 1, desbloquea: [] },
  { id: "calidadSoftware", nombre: "Calidad de Software", anio: 5, cuatrimestre: 1, desbloquea: [] },

  { id: "optativa3", nombre: "Optativa III", anio: 5, cuatrimestre: 2, desbloquea: [] },
  { id: "negociosTecnologicos", nombre: "Negocios Tecnológicos", anio: 5, cuatrimestre: 2, desbloquea: [] },
  { id: "tecnologiaInnovacion", nombre: "Tecnología e Innovación", anio: 5, cuatrimestre: 2, desbloquea: [] },
  { id: "derechoInformatico", nombre: "Derecho Informático", anio: 5, cuatrimestre: 2, desbloquea: [] },
];

/* =========================
   2. LOCALSTORAGE
   ========================= */

const STORAGE_KEY = "estadoMaterias";

let estadoMaterias = cargarEstado();

function cargarEstado() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function guardarEstado() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estadoMaterias));
}

function resetearEstado() {
  const confirmar = confirm(
    "¿Querés resetear todas las materias? Se perderán los datos guardados."
  );

  if (!confirmar) return;

  localStorage.removeItem(STORAGE_KEY);
  estadoMaterias = {};
  render();
}

/* =========================
   3. ELEMENTOS DEL HTML
   ========================= */

const contenedorGeneral = document.getElementById("contenedor-general");
const listaFinales = document.getElementById("lista-finales-previos");
const resetBtn = document.getElementById("resetEstado");
const exportarBtn = document.getElementById("exportarEstado");
const importarInput = document.getElementById("importarEstado");

/* =========================
   4. FUNCIONES DE UTILIDAD
   ========================= */

function obtenerMateriaPorId(id) {
  return materias.find((materia) => materia.id === id);
}

function obtenerCorrelativasDe(idMateria) {
  return materias.filter((materia) => materia.desbloquea.includes(idMateria));
}

function obtenerMateriasQueDesbloquea(idMateria) {
  const materia = obtenerMateriaPorId(idMateria);

  if (!materia || !materia.desbloquea.length) {
    return [];
  }

  return materia.desbloquea
    .map((id) => obtenerMateriaPorId(id))
    .filter(Boolean);
}

function estaAprobada(idMateria) {
  return estadoMaterias[idMateria]?.estado === "aprobada";
}

function estaDesbloqueada(idMateria) {
  const correlativas = obtenerCorrelativasDe(idMateria);

  if (correlativas.length === 0) {
    return true;
  }

  return correlativas.every((materia) => estaAprobada(materia.id));
}

function obtenerEstadoTexto(estado) {
  if (!estado) return "No cursada";

  if (estado.estado === "aprobada") {
    return `Aprobada${estado.nota ? ` con nota ${estado.nota}` : ""}`;
  }

  if (estado.estado === "final-previo") {
    return `Final previo${estado.fecha ? `, vence ${estado.fecha}` : ""}`;
  }

  if (estado.estado === "cursando") {
    return "Cursando";
  }

  return "Sin estado";
}

function validarFecha(fecha) {
  const formatoCorrecto = /^\d{4}-\d{2}-\d{2}$/.test(fecha);

  if (!formatoCorrecto) return false;

  const fechaConvertida = new Date(`${fecha}T00:00:00`);

  return !isNaN(fechaConvertida.getTime());
}
function formatearFecha(fecha) {
  const [anio, mes, dia] = fecha.split("-");
  return `${dia}/${mes}/${anio}`;
}

function calcularDiasRestantes(fecha) {
  const hoy = new Date();
  const vencimiento = new Date(`${fecha}T00:00:00`);

  hoy.setHours(0, 0, 0, 0);
  vencimiento.setHours(0, 0, 0, 0);

  const diferencia = vencimiento - hoy;

  return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
}

/* =========================
   5. RESUMEN
   ========================= */

function actualizarResumen() {
  const total = materias.length;
  const estados = Object.values(estadoMaterias);

  const aprobadas = estados.filter((e) => e.estado === "aprobada").length;
  const finalPrevio = estados.filter((e) => e.estado === "final-previo").length;
  const cursando = estados.filter((e) => e.estado === "cursando").length;
  const faltantes = total - aprobadas;

  const notas = estados
    .filter((e) => e.estado === "aprobada" && e.nota !== undefined && !isNaN(e.nota))
    .map((e) => Number(e.nota));

  const promedio = notas.length
    ? (notas.reduce((acc, nota) => acc + nota, 0) / notas.length).toFixed(2)
    : "N/A";

  document.getElementById("totalMaterias").innerHTML = `
    <div class="resumen-icono icono-total">📖</div>
    <div>
      <strong>${total}</strong>
      <p>Total materias</p>
    </div>
  `;

  document.getElementById("materiasAprobadas").innerHTML = `
    <div class="resumen-icono icono-aprobada">✅</div>
    <div>
      <strong>${aprobadas}</strong>
      <p>Aprobadas</p>
    </div>
  `;

  document.getElementById("materiasFinalPrevio").innerHTML = `
    <div class="resumen-icono icono-final">⭐</div>
    <div>
      <strong>${finalPrevio}</strong>
      <p>Final previo</p>
    </div>
  `;

  document.getElementById("materiasCursando").innerHTML = `
    <div class="resumen-icono icono-cursando">🕘</div>
    <div>
      <strong>${cursando}</strong>
      <p>Cursando</p>
    </div>
  `;

  document.getElementById("promedio").innerHTML = `
    <div class="resumen-icono icono-promedio">📊</div>
    <div>
      <strong>${promedio}</strong>
      <p>Promedio general</p>
    </div>
  `;

  actualizarBarraProgreso(aprobadas, total, faltantes);
}

/* =========================
   6. FINALES PRÓXIMOS
   ========================= */

function mostrarFinalesProximos() {
  if (!listaFinales) return;

  listaFinales.innerHTML = "";

  const finales = Object.entries(estadoMaterias)
    .filter(([_, estado]) => estado.estado === "final-previo" && estado.fecha)
    .map(([id, estado]) => {
      const materia = obtenerMateriaPorId(id);

      return {
        materia,
        fecha: estado.fecha,
        diasRestantes: calcularDiasRestantes(estado.fecha),
      };
    })
    .filter((item) => item.materia)
    .sort((a, b) => a.diasRestantes - b.diasRestantes);

  if (finales.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No tenés finales previos cargados.";
    listaFinales.appendChild(li);
    return;
  }

  finales.forEach(({ materia, fecha, diasRestantes }) => {
    const li = document.createElement("li");

    if (diasRestantes < 0) {
      li.textContent = `${materia.nombre} • Venció: ${formatearFecha(fecha)}`
      li.style.color = "#b91c1c";
      li.style.fontWeight = "700";
    } else if (diasRestantes <= 120) {
      li.textContent = `${materia.nombre} • Vence: ${formatearFecha(fecha)} • Faltan ${diasRestantes} días`;
      li.style.color = "#b91c1c";
      li.style.fontWeight = "700";
    } else {
     li.textContent = `${materia.nombre} • Vence: ${formatearFecha(fecha)} • Faltan ${diasRestantes} días`;
    }

    listaFinales.appendChild(li);
  });
}

/* =========================
   7. RENDERIZADO DE MATERIAS
   ========================= */

function agruparMaterias() {
  const agrupadas = {};

  materias.forEach((materia) => {
    const clave = `Año ${materia.anio} - ${materia.cuatrimestre}° Cuatrimestre`;

    if (!agrupadas[clave]) {
      agrupadas[clave] = [];
    }

    agrupadas[clave].push(materia);
  });

  return agrupadas;
}

function crearCardMateria(materia) {
  const card = document.createElement("div");
  const estado = estadoMaterias[materia.id];
  const desbloqueada = estaDesbloqueada(materia.id);

  card.className = "materia";
  card.textContent = materia.nombre;

  if (!desbloqueada && !estado) {
    card.classList.add("bloqueada");
    card.title = "Todavía no podés cursarla porque te faltan correlativas.";
    return card;
  }

  if (estado?.estado) {
    card.classList.add(estado.estado);
  }

  if (estado?.estado === "final-previo" && estado.fecha) {
    const small = document.createElement("small");
    small.className = "vence";
    small.textContent = `📅 Vence: ${formatearFecha(estado.fecha)}`;
    card.appendChild(small);
  }

  card.title = generarTooltipMateria(materia);
  card.addEventListener("click", () => clickMateria(materia));

  return card;
}

function generarTooltipMateria(materia) {
  const correlativas = obtenerCorrelativasDe(materia.id);
  const desbloquea = obtenerMateriasQueDesbloquea(materia.id);

  const textoCorrelativas = correlativas.length
    ? correlativas.map((m) => m.nombre).join(", ")
    : "No tiene correlativas";

  const textoDesbloquea = desbloquea.length
    ? desbloquea.map((m) => m.nombre).join(", ")
    : "No desbloquea materias";

  return `Correlativas: ${textoCorrelativas}\nDesbloquea: ${textoDesbloquea}`;
}

function render() {
  contenedorGeneral.innerHTML = "";

  const agrupadas = agruparMaterias();

  Object.entries(agrupadas).forEach(([grupo, lista]) => {
    const seccion = document.createElement("section");
    const titulo = document.createElement("h2");
    const grid = document.createElement("div");

    titulo.textContent = grupo;
    grid.className = "grid";

    lista.forEach((materia) => {
      grid.appendChild(crearCardMateria(materia));
    });

    seccion.appendChild(titulo);
    seccion.appendChild(grid);
    contenedorGeneral.appendChild(seccion);
  });

  actualizarResumen();
  mostrarFinalesProximos();
}
/* =========================
   8. ACCIONES AL HACER CLICK
   ========================= */

function clickMateria(materia) {
  const estadoActual = estadoMaterias[materia.id];

  const correlativas = obtenerCorrelativasDe(materia.id);
  const desbloquea = obtenerMateriasQueDesbloquea(materia.id);

  const textoCorrelativas = correlativas.length
    ? correlativas.map((m) => `- ${m.nombre}`).join("\n")
    : "- No tiene correlativas";

  const textoDesbloquea = desbloquea.length
    ? desbloquea.map((m) => `- ${m.nombre}`).join("\n")
    : "- No desbloquea materias";

  const mensaje = `
Materia: ${materia.nombre}

Estado actual: ${obtenerEstadoTexto(estadoActual)}

Correlativas:
${textoCorrelativas}

Desbloquea:
${textoDesbloquea}

Elegí una opción:
1 - Marcar como aprobada
2 - Marcar como final previo
3 - Marcar como cursando
4 - Quitar estado
5 - Cancelar
`;

  const opcion = prompt(mensaje);

  if (opcion === null || opcion === "5") return;

  switch (opcion) {
    case "1":
      aprobarMateria(materia);
      break;

    case "2":
      marcarFinalPrevio(materia);
      break;

    case "3":
      marcarCursando(materia);
      break;

    case "4":
      quitarEstado(materia);
      break;

    default:
      alert("Opción inválida.");
      return;
  }

  guardarEstado();
  render();
}

function aprobarMateria(materia) {
  const notaIngresada = prompt("Ingresá la nota final. Ejemplo: 7, 8, 9 o 10");

  if (notaIngresada === null) return;

  const nota = Number(notaIngresada.replace(",", "."));

  if (isNaN(nota) || nota < 1 || nota > 10) {
    alert("Nota inválida. Debe ser un número entre 1 y 10.");
    return;
  }

  estadoMaterias[materia.id] = {
    estado: "aprobada",
    nota,
    fechaCarga: new Date().toISOString(),
  };

  alert(`Materia "${materia.nombre}" marcada como aprobada.`);
}

function marcarFinalPrevio(materia) {
  const fecha = prompt("Ingresá la fecha de vencimiento del final. Formato: YYYY-MM-DD");

  if (fecha === null) return;

  if (!validarFecha(fecha)) {
    alert("Fecha inválida. Usá este formato: YYYY-MM-DD. Ejemplo: 2026-12-15");
    return;
  }

  estadoMaterias[materia.id] = {
    estado: "final-previo",
    fecha,
    fechaCarga: new Date().toISOString(),
  };

  alert(`Final previo de "${materia.nombre}" registrado.`);
}

function marcarCursando(materia) {
  estadoMaterias[materia.id] = {
    estado: "cursando",
    fechaCarga: new Date().toISOString(),
  };

  alert(`Materia "${materia.nombre}" marcada como cursando.`);
}

function quitarEstado(materia) {
  const confirmar = confirm(`¿Querés quitar el estado de "${materia.nombre}"?`);

  if (!confirmar) return;

  delete estadoMaterias[materia.id];

  alert(`Estado de "${materia.nombre}" eliminado.`);
}

/* =========================
   9. EXPORTAR E IMPORTAR RESPALDO
   ========================= */

function exportarEstado() {
  const datos = {
    version: 1,
    fechaExportacion: new Date().toISOString(),
    estadoMaterias,
  };

  const contenido = JSON.stringify(datos, null, 2);
  const archivo = new Blob([contenido], { type: "application/json" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(archivo);
  link.download = "respaldo-materias.json";
  link.click();

  URL.revokeObjectURL(link.href);
}

function importarEstado(evento) {
  const archivo = evento.target.files[0];

  if (!archivo) return;

  const lector = new FileReader();

  lector.onload = () => {
    try {
      const datos = JSON.parse(lector.result);

      let estadoImportado;

      if (datos.estadoMaterias) {
        estadoImportado = datos.estadoMaterias;
      } else {
        estadoImportado = datos;
      }

      if (!estadoImportado || typeof estadoImportado !== "object") {
        alert("El archivo no tiene un formato válido.");
        return;
      }

      const confirmar = confirm(
        "¿Querés importar este respaldo? Se reemplazará el estado actual."
      );

      if (!confirmar) return;

      estadoMaterias = estadoImportado;
      guardarEstado();
      render();

      alert("Respaldo importado correctamente.");
    } catch {
      alert("No se pudo importar el archivo. Verificá que sea un JSON válido.");
    }
  };

  lector.readAsText(archivo);
}

/* =========================
   10. EVENTOS
   ========================= */

if (resetBtn) {
  resetBtn.addEventListener("click", resetearEstado);
}

if (exportarBtn) {
  exportarBtn.addEventListener("click", exportarEstado);
}

if (importarInput) {
  importarInput.addEventListener("change", importarEstado);
}

/* =========================
   11. INICIO
   ========================= */

render();