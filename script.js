const materias = [
  {
    id: "fundamentos",
    nombre: "Fundamentos de Informática",
    anio: 1,
    cuatrimestre: 1,
    desbloquea: ["programacion1"]
  },
  {
    id: "programacion1",
    nombre: "Programación I",
    anio: 1,
    cuatrimestre: 2,
    desbloquea: ["programacion2"]
  },
  {
    id: "programacion2",
    nombre: "Programación II",
    anio: 2,
    cuatrimestre: 1,
    desbloquea: ["programacion3"]
  },
  {
    id: "programacion3",
    nombre: "Programación III",
    anio: 2,
    cuatrimestre: 2,
    desbloquea: ["teoriaComputacion"]
  },
  {
    id: "teoriaComputacion",
    nombre: "Teoría de la Computación",
    anio: 3,
    cuatrimestre: 2,
    desbloquea: []
  }
  // Agregá todas las demás materias acá
];

const estadoMaterias = JSON.parse(localStorage.getItem("estadoMaterias") || "{}");
const contenedorGeneral = document.getElementById("contenedor-general");
const listaFinales = document.getElementById("lista-finales-previos");

function estaDesbloqueada(id) {
  return materias
    .filter(m => m.desbloquea.includes(id))
    .every(m => estadoMaterias[m.id]?.estado === "aprobada");
}

function render() {
  contenedorGeneral.innerHTML = "";
  const agrupadas = {};

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

      if (!estado || !["aprobada", "final-previo", "cursando"].includes(estado.estado)) {
        if (!estaDesbloqueada(m.id)) {
          div.classList.add("bloqueada");
        } else {
          div.onclick = () => seleccionarEstado(m.id);
        }
      } else {
        div.classList.add(estado.estado);
        div.onclick = () => seleccionarEstado(m.id);

        if (estado.estado === "final-previo") {
          const s = document.createElement("small");
          s.className = "vence";
          s.textContent = `Vence: ${estado.fecha}`;
          div.appendChild(s);
        }
      }

      grid.appendChild(div);
    }

    seccion.appendChild(grid);
    contenedorGeneral.appendChild(seccion);
  }

  actualizarResumen();
}

function seleccionarEstado(id) {
  const opcion = prompt("1: Aprobada\n2: Final Previo\n3: Cursando\n0: Borrar");

  if (opcion === "1") {
    const nota = parseFloat(prompt("Nota:"));
    estadoMaterias[id] = { estado: "aprobada", nota: isNaN(nota) ? null : nota };
  } else if (opcion === "2") {
    const fecha = prompt("Fecha de vencimiento (YYYY-MM-DD):");
    estadoMaterias[id] = { estado: "final-previo", fecha };
  } else if (opcion === "3") {
    estadoMaterias[id] = { estado: "cursando" };
  } else if (opcion === "0") {
    delete estadoMaterias[id];
  }

  localStorage.setItem("estadoMaterias", JSON.stringify(estadoMaterias));
  render();
}

function actualizarResumen() {
  let aprobadas = 0, previas = 0, cursando = 0, total = materias.length, notas = [];

  listaFinales.innerHTML = "";

  for (const m of materias) {
    const estado = estadoMaterias[m.id];
    if (!estado) continue;

    if (estado.estado === "aprobada") {
      aprobadas++;
      if (estado.nota) notas.push(estado.nota);
    } else if (estado.estado === "final-previo") {
      previas++;
      const li = document.createElement("li");
      li.textContent = `${m.nombre} vence el ${estado.fecha}`;
      listaFinales.appendChild(li);

      const diff = (new Date(estado.fecha) - new Date()) / (1000 * 60 * 60 * 24 * 30);
      if (diff < 4) {
        alert(`⚠️ El final de ${m.nombre} vence pronto (${estado.fecha})`);
      }
    } else if (estado.estado === "cursando") {
      cursando++;
    }
  }

  document.getElementById("totalMaterias").textContent = `Total: ${total}`;
  document.getElementById("materiasAprobadas").textContent = `Aprobadas: ${aprobadas}`;
  document.getElementById("materiasFinalPrevio").textContent = `Final previo: ${previas}`;
  document.getElementById("materiasCursando").textContent = `Cursando: ${cursando}`;
  document.getElementById("promedio").textContent =
    notas.length ? `Promedio: ${(notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(2)}` : "Promedio: -";
}

render();
