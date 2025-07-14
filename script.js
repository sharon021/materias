(() => {
  // Datos de materias con correlativas (materias desbloqueadas por cada una)
  const materias = [
    // Primer año
    { id: "3.4.069", nombre: "Fundamentos de Informática", correlativas: ["3.4.071"] },
    { id: "3.4.164", nombre: "Sistemas de Información I", correlativas: ["3.4.207"] },
    { id: "2.1.002", nombre: "Pensamiento Crítico y Comunicación", correlativas: [] },
    { id: "3.4.043", nombre: "Teoría de Sistemas", correlativas: [] },
    { id: "3.1.050", nombre: "Elementos de Álgebra y Geometría", correlativas: ["3.1.051"] },
    { id: "3.4.071", nombre: "Programación I", correlativas: ["3.4.074"] },
    { id: "3.3.121", nombre: "Sistemas de Representación", correlativas: [] },
    { id: "3.2.178", nombre: "Fundamentos de Química", correlativas: [] },
    { id: "3.4.072", nombre: "Arquitectura de Computadores", correlativas: ["3.4.075"] },
    { id: "3.1.024", nombre: "Matemática Discreta", correlativas: ["3.4.209", "3.4.215"] },
    { id: "3.1.051", nombre: "Álgebra", correlativas: ["3.1.052"] },

    // Segundo año
    { id: "3.4.074", nombre: "Programación II", correlativas: ["3.4.077", "3.4.211"] },
    { id: "3.4.207", nombre: "Sistemas de Información II", correlativas: ["3.4.089", "3.4.094", "3.4.211", "3.4.214"] },
    { id: "3.4.075", nombre: "Sistemas Operativos", correlativas: [] },
    { id: "3.1.052", nombre: "Física I", correlativas: ["3.1.055"] },
    { id: "3.1.053", nombre: "Cálculo I", correlativas: ["3.1.054", "3.1.049"] },
    { id: "3.4.077", nombre: "Programación III", correlativas: ["3.4.215"] },
    { id: "3.4.208", nombre: "Paradigma Orientado a Objetos", correlativas: ["3.4.082", "3.4.210"] },
    { id: "3.4.078", nombre: "Fundamentos de Telecomunicaciones", correlativas: ["3.4.212"] },
    { id: "3.4.209", nombre: "Ingeniería de Datos I", correlativas: ["3.4.211", "3.4.213"] },
    { id: "3.1.054", nombre: "Cálculo II", correlativas: ["3.1.025"] },

    // Tercer año
    { id: "3.4.210", nombre: "Proceso de Desarrollo de Software", correlativas: ["3.4.216", "3.4.218"] },
    { id: "3.4.211", nombre: "Seminario de Integración Profesional", correlativas: [] },
    { id: "3.4.212", nombre: "Teleinformática y Redes", correlativas: ["3.4.092"] },
    { id: "3.4.213", nombre: "Ingeniería de Datos II", correlativas: ["3.4.217"] },
    { id: "3.1.049", nombre: "Probabilidad y Estadística", correlativas: ["3.1.056", "3.4.086", "3.4.217"] },
    { id: "2.4.216", nombre: "Examen de Inglés", correlativas: [] },
    { id: "3.4.082", nombre: "Aplicaciones Interactivas", correlativas: ["3.4.218"] },
    { id: "3.4.214", nombre: "Ingeniería de Software", correlativas: ["3.4.098"] },
    { id: "3.1.055", nombre: "Física II", correlativas: [] },
    { id: "3.4.215", nombre: "Teoría de la Computación", correlativas: [] },
    { id: "3.1.056", nombre: "Estadística Avanzada", correlativas: ["3.4.096"] },

    // Cuarto año
    { id: "3.4.216", nombre: "Desarrollo de Aplicaciones I", correlativas: [] },
    { id: "3.4.089", nombre: "Dirección de Proyectos Informáticos", correlativas: [] },
    { id: "3.4.217", nombre: "Ciencia de Datos", correlativas: [] },
    { id: "3.4.092", nombre: "Seguridad e Integridad de la Información", correlativas: [] },
    { id: "3.1.025", nombre: "Modelado y Simulación", correlativas: [] },
    { id: "optativa1", nombre: "Optativa I", correlativas: [] },
    { id: "3.4.218", nombre: "Desarrollo de Aplicaciones II", correlativas: [] },
    { id: "3.4.086", nombre: "Evaluación de Proyectos Informáticos", correlativas: [] },
    { id: "3.4.096", nombre: "Inteligencia Artificial", correlativas: [] },
    { id: "3.4.219", nombre: "Tecnología y Medio Ambiente", correlativas: [] },
    { id: "pps06", nombre: "Práctica Profesional Supervisada", correlativas: [] },

    // Quinto año
    { id: "optativa2", nombre: "Optativa II", correlativas: [] },
    { id: "3.4.094", nombre: "Arquitectura de Aplicaciones", correlativas: [] },
    { id: "3.4.220", nombre: "Tendencias Tecnológicas", correlativas: [] },
    { id: "3.4.100", nombre: "Proyecto Final de Ingeniería en Informática", correlativas: [] },
    { id: "3.4.098", nombre: "Calidad de Software", correlativas: [] },
    { id: "optativa3", nombre: "Optativa III", correlativas: [] },
    { id: "3.4.221", nombre: "Negocios Tecnológicos", correlativas: [] },
    { id: "3.4.135", nombre: "Tecnología e Innovación", correlativas: [] },
    { id: "2.3.056", nombre: "Derecho Informático", correlativas: [] }
  ];

  // Construir mapa de requisitos: para cada materia, qué materias deben estar aprobadas antes
  const requisitosMap = {};
  materias.forEach(m => requisitosMap[m.id] = []);
  materias.forEach(m => {
    m.correlativas.forEach(correlativaId => {
      if (!requisitosMap[correlativaId]) requisitosMap[correlativaId] = [];
      requisitosMap[correlativaId].push(m.id);
    });
  });

  // Estado guardado: { id_materia: { estado: "aprobada"|"final-previo", nota: number|null, vencimiento: "YYYY-MM-DD"|null } }
  let estadoMaterias = {};

  // Cargar estado desde localStorage
  const cargarEstado = () => {
    const data = localStorage.getItem("estadoMaterias");
    estadoMaterias = data ? JSON.parse(data) : {};
  };

  // Guardar estado en localStorage
  const guardarEstado = () => {
    localStorage.setItem("estadoMaterias", JSON.stringify(estadoMaterias));
  };

  // Formatear fecha a DD/MM/YYYY
  const formatearFecha = (fechaStr) => {
    if (!fechaStr) return "";
    const d = new Date(fechaStr);
    if (isNaN(d)) return "";
    return d.toLocaleDateString("es-AR");
  };

  // Ver si una materia puede desbloquearse (todas sus correlativas previas aprobadas)
  const puedeDesbloquearse = (id) => {
    const reqs = requisitosMap[id] || [];
    return reqs.every(rid => estadoMaterias[rid]?.estado === "aprobada");
  };

  // Contar materias aprobadas y con final previo, y calcular promedio general
  const calcularResumen = () => {
    let total = materias.length;
    let aprobadas = 0;
    let finalPrevio = 0;
    let sumaNotas = 0;
    materias.forEach(m => {
      const est = estadoMaterias[m.id];
      if (est?.estado === "aprobada") {
        aprobadas++;
        sumaNotas += est.nota || 0;
      } else if (est?.estado === "final-previo") {
        finalPrevio++;
      }
    });
    const promedio = aprobadas > 0 ? (sumaNotas / aprobadas).toFixed(2) : 0;
    return { total, aprobadas, finalPrevio, promedio };
  };

  // Renderizar resumen en pantalla
  const renderizarResumen = () => {
    const resumen = calcularResumen();
    document.getElementById("total-materias").textContent = resumen.total;
    document.getElementById("materias-aprobadas").textContent = resumen.aprobadas;
    document.getElementById("materias-final-previo").textContent = resumen.finalPrevio;
    document.getElementById("promedio-general").textContent = resumen.promedio;
  };

  // Renderizar la malla completa
  const renderizarMalla = () => {
    const contenedor = document.getElementById("contenedor-general");
    contenedor.innerHTML = "";

    // Agrupar materias por año y cuatrimestre para mostrar título
    const materiasPorSeccion = {
      "Primer año - 1° Cuatrimestre": ["3.4.069","3.4.164","2.1.002","3.4.043","3.1.050"],
      "Primer año - 2° Cuatrimestre": ["3.4.071","3.3.121","3.2.178","3.4.072","3.1.024","3.1.051"],
      "Segundo año - 1° Cuatrimestre": ["3.4.074","3.4.207","3.4.075","3.1.052","3.1.053"],
      "Segundo año - 2° Cuatrimestre": ["3.4.077","3.4.208","3.4.078","3.4.209","3.1.054"],
      "Tercer año - 1° Cuatrimestre": ["3.4.210","3.4.211","3.4.212","3.4.213","3.1.049","2.4.216"],
      "Tercer año - 2° Cuatrimestre": ["3.4.082","3.4.214","3.1.055","3.4.215","3.1.056"],
      "Cuarto año - 1° Cuatrimestre": ["3.4.216","3.4.089","3.4.217","3.4.092","3.1.025"],
      "Cuarto año - 2° Cuatrimestre": ["optativa1","3.4.218","3.4.086","3.4.096","3.4.219","pps06"],
      "Quinto año - 1° Cuatrimestre": ["optativa2","3.4.094","3.4.220","3.4.100","3.4.098"],
      "Quinto año - 2° Cuatrimestre": ["optativa3","3.4.221","3.4.135","2.3.056"]
    };

    for (const seccion in materiasPorSeccion) {
      const wrapper = document.createElement("div");
      const titulo = document.createElement("h2");
      titulo.textContent = seccion;
      wrapper.appendChild(titulo);

      const grid = document.createElement("div");
      grid.className = "grid";

      materiasPorSeccion[seccion].forEach(id => {
        const mat = materias.find(m => m.id === id);
        if (!mat) return;

        const estado = estadoMaterias[id] || {};
        const desbloqueada = puedeDesbloquearse(id);

        const div = document.createElement("div");
        div.className = "materia";

        if (!estado.estado) {
          if (!desbloqueada) {
            div.classList.add("bloqueada");
          }
        } else if (estado.estado === "aprobada") {
          div.classList.add("aprobada");
        } else if (estado.estado === "final-previo") {
          div.classList.add("final-previo");
        }

        div.textContent = mat.nombre;

        if (estado.estado === "final-previo" && estado.vencimiento) {
          const span = document.createElement("small");
          span.className = "vence";
          span.textContent = "Vence: " + formatearFecha(estado.vencimiento);
          div.appendChild(span);
        }

        if (desbloqueada || estado.estado) {
          div.addEventListener("click", () => seleccionarEstado(id));
        }

        div.title = estado.estado
          ? estado.estado === "aprobada"
            ? `Materia aprobada (Nota: ${estado.nota ?? "sin nota"})`
            : `Final pendiente. Vence: ${formatearFecha(estado.vencimiento)}`
          : desbloqueada
          ? "Haga clic para seleccionar estado"
          : "Bloqueada (Requisitos no cumplidos)";

        grid.appendChild(div);
      });

      wrapper.appendChild(grid);
      contenedor.appendChild(wrapper);
    }

    renderResumenFinalesPrevios();
    renderizarResumen();
  };

  // Mostrar finales previos con fechas en la lista superior
  const renderResumenFinalesPrevios = () => {
    const ul = document.getElementById("lista-finales-previos");
    ul.innerHTML = "";
    Object.entries(estadoMaterias).forEach(([id, est]) => {
      if (est.estado === "final-previo") {
        const materia = materias.find(m => m.id === id);
        if (!materia) return;

        const li = document.createElement("li");
        li.textContent = `${materia.nombre} - vence el ${formatearFecha(est.vencimiento)}`;
        ul.appendChild(li);

        // Alerta si faltan 4 meses o menos para vencer
        if (est.vencimiento) {
          const hoy = new Date();
          const vencimiento = new Date(est.vencimiento);
          const diffMs = vencimiento - hoy;
          const cuatroMesesMs = 1000 * 60 * 60 * 24 * 30 * 4;
          if (diffMs > 0 && diffMs <= cuatroMesesMs) {
            alert(`⚠️ El final previo de "${materia.nombre}" vence en menos de 4 meses (${formatearFecha(est.vencimiento)})`);
          }
        }
      }
    });
  };

  // Función para seleccionar estado de materia
  const seleccionarEstado = (id) => {
    const mat = materias.find(m => m.id === id);
    if (!mat) return;

    const estadoActual = estadoMaterias[id];

    let tipo = prompt(`Materia: ${mat.nombre}\n¿Está aprobada o tiene final previo?\nResponda "A" para aprobada o "F" para final previo:`,"A");

    if (!tipo) return;

    tipo = tipo.trim().toUpperCase();
    if (tipo !== "A" && tipo !== "F") {
      alert("Respuesta inválida. Use 'A' o 'F'.");
      return;
    }

    if (tipo === "A") {
      let nota = prompt("Ingrese la nota obtenida (0 - 10):", estadoActual?.nota || "");
      if (nota === null) return;
      nota = parseFloat(nota);
      if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("Nota inválida.");
        return;
      }
      estadoMaterias[id] = { estado: "aprobada", nota: nota, vencimiento: null };
      alert(`Materia "${mat.nombre}" marcada como aprobada con nota ${nota}.`);
    } else {
      // Final previo: pedir fecha vencimiento
      let fecha = prompt("Ingrese la fecha de vencimiento del final (YYYY-MM-DD):", estadoActual?.vencimiento || "");
      if (!fecha) return;
      // Validar fecha
      const d = new Date(fecha);
      if (isNaN(d.getTime())) {
        alert("Fecha inválida.");
        return;
      }
      estadoMaterias[id] = { estado: "final-previo", nota: null, vencimiento: fecha };
      alert(`Materia "${mat.nombre}" marcada con final previo que vence el ${formatearFecha(fecha)}.`);
    }

    guardarEstado();
    renderizarMalla();
  };

  // Al cargar la página
  window.onload = () => {
    cargarEstado();
    renderizarMalla();
  };
})();
