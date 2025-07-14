(() => {
  const materias = [
    { id: "3.4.069", nombre: "Fundamentos de Informática", correlativas: ["3.4.071"] },
    { id: "3.4.071", nombre: "Programación I", correlativas: ["3.4.074"] },
    { id: "3.4.074", nombre: "Programación II", correlativas: ["3.4.077", "3.4.211"] },
    { id: "3.4.077", nombre: "Programación III", correlativas: ["3.4.215"] },
    { id: "3.4.215", nombre: "Teoría de la Computación", correlativas: [] },
    { id: "3.4.164", nombre: "Sistemas de Información I", correlativas: ["3.4.207"] },
    { id: "3.4.207", nombre: "Sistemas de Información II", correlativas: [] },
    { id: "3.4.072", nombre: "Arquitectura de Computadores", correlativas: ["3.4.207"] },
    { id: "3.1.050", nombre: "Elementos de Álgebra y Geometría", correlativas: ["3.1.051"] },
    { id: "3.1.051", nombre: "Álgebra", correlativas: ["3.1.052"] },
    { id: "3.1.052", nombre: "Física I", correlativas: ["3.1.055"] },
    { id: "3.1.055", nombre: "Física II", correlativas: [] },
    { id: "3.4.209", nombre: "Ingeniería de Datos I", correlativas: ["3.4.213", "3.4.211"] },
    { id: "3.4.213", nombre: "Ingeniería de Datos II", correlativas: [] },
    { id: "3.4.211", nombre: "Seminario de Integración Profesional", correlativas: [] },
    { id: "2.4.216", nombre: "Examen de Inglés", correlativas: [] },
    { id: "3.4.210", nombre: "Proceso de Desarrollo de Software", correlativas: ["3.4.216", "3.4.218"] },
    { id: "3.4.216", nombre: "Desarrollo de Aplicaciones I", correlativas: [] },
    { id: "3.4.218", nombre: "Desarrollo de Aplicaciones II", correlativas: [] },
    { id: "3.1.049", nombre: "Probabilidad y Estadística", correlativas: ["3.1.056", "3.4.217"] },
    { id: "3.1.056", nombre: "Estadística Avanzada", correlativas: ["3.4.096"] },
    { id: "3.4.217", nombre: "Ciencia de Datos", correlativas: [] },
    { id: "3.4.082", nombre: "Aplicaciones Interactivas", correlativas: ["3.4.218"] },
    { id: "3.4.214", nombre: "Ingeniería de Software", correlativas: ["3.4.098"] },
    { id: "3.4.098", nombre: "Calidad de Software", correlativas: [] },
    // Quinto año (no desbloquean nada)
    { id: "3.4.094", nombre: "Arquitectura de Aplicaciones", correlativas: [] },
    { id: "3.4.220", nombre: "Tendencias Tecnológicas", correlativas: [] },
    { id: "3.4.100", nombre: "Proyecto Final de Ingeniería en Informática", correlativas: [] },
    { id: "3.4.221", nombre: "Negocios Tecnológicos", correlativas: [] },
    { id: "3.4.135", nombre: "Tecnología e Innovación", correlativas: [] },
    { id: "2.3.056", nombre: "Derecho Informático", correlativas: [] },
    { id: "optativa1", nombre: "Optativa I", correlativas: [] },
    { id: "optativa2", nombre: "Optativa II", correlativas: [] },
    { id: "optativa3", nombre: "Optativa III", correlativas: [] },
    { id: "pps06", nombre: "Práctica Profesional Supervisada", correlativas: [] },
  ];

  const requisitosMap = {};
  materias.forEach(m => requisitosMap[m.id] = []);
  materias.forEach(m => {
    m.correlativas.forEach(corr => {
      if (!requisitosMap[corr]) requisitosMap[corr] = [];
      requisitosMap[corr].push(m.id);
    });
  });

  const materiasPorSeccion = {
    "Primer año - 1° Cuatrimestre": ["3.4.069", "3.4.164", "3.1.050"],
    "Primer año - 2° Cuatrimestre": ["3.4.071", "3.3.121", "3.2.178", "3.4.072", "3.1.024", "3.1.051"],
    "Segundo año - 1° Cuatrimestre": ["3.4.074", "3.4.207", "3.4.075", "3.1.052", "3.1.053"],
    "Segundo año - 2° Cuatrimestre": ["3.4.077", "3.4.208", "3.4.078", "3.4.209", "3.1.054"],
    "Tercer año - 1° Cuatrimestre": ["3.4.210", "3.4.211", "3.4.212", "3.4.213", "3.1.049", "2.4.216"],
    "Tercer año - 2° Cuatrimestre": ["3.4.082", "3.4.214", "3.1.055", "3.4.215", "3.1.056"],
    "Cuarto año - 1° Cuatrimestre": ["3.4.216", "3.4.089", "3.4.217", "3.4.092", "3.1.025"],
    "Cuarto año - 2° Cuatrimestre": ["optativa1", "3.4.218", "3.4.086", "3.4.096", "3.4.219", "pps06"],
    "Quinto año - 1° Cuatrimestre": ["optativa2", "3.4.094", "3.4.220", "3.4.100", "3.4.098"],
    "Quinto año - 2° Cuatrimestre": ["optativa3", "3.4.221", "3.4.135", "2.3.056"]
  };

  const estadoMaterias = {};
  const STORAGE_KEY = "mallaEstado";

  const cargarEstado = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) Object.assign(estadoMaterias, JSON.parse(data));
  };

  const guardarEstado = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(estadoMaterias));
  };

  const puedeDesbloquearse = (id) =>
    (requisitosMap[id] || []).every(rid => estadoMaterias[rid]?.estado === "aprobada");

  const diasParaVencer = (fechaISO) => {
    if (!fechaISO) return null;
    const hoy = new Date();
    const venc = new Date(fechaISO);
    return Math.ceil((venc - hoy) / (1000 * 60 * 60 * 24));
  };

  const formatearFecha = (fechaISO) => {
    if (!fechaISO) return "Fecha no asignada";
    const f = new Date(fechaISO);
    return f.toLocaleDateString("es-AR");
  };
  const renderizarMalla = () => {
    const contenedor = document.getElementById("contenedor-general");
    contenedor.innerHTML = "";

    for (const seccion in materiasPorSeccion) {
      const wrapper = document.createElement("div");
      const titulo = document.createElement("h2");
      titulo.textContent = seccion;
      wrapper.appendChild(titulo);

      const grid = document.createElement("div");
      grid.className = "grid";

      materiasPorSeccion[seccion].forEach(id => {
        const mat = materias.find(m => m.id === id);
        const estado = estadoMaterias[id] || {};
        const desbloqueada = puedeDesbloquearse(id);
        const div = document.createElement("div");
        div.className = "materia";

        if (!desbloqueada && !estado.estado) {
          div.classList.add("bloqueada");
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

        if (desbloqueada && !estado.estado) {
          div.addEventListener("click", () => seleccionarEstado(id));
        } else if (estado.estado) {
          div.addEventListener("click", () => seleccionarEstado(id));
        }

        div.title = estado.estado
          ? estado.estado === "aprobada"
            ? "Materia aprobada"
            : "Final pendiente"
          : desbloqueada
          ? "Haz clic para actualizar estado"
          : "Correlativas pendientes";

        grid.appendChild(div);
      });

      wrapper.appendChild(grid);
      contenedor.appendChild(wrapper);
    }
  };

  const seleccionarEstado = (id) => {
    const mat = materias.find(m => m.id === id);
    const opcion = prompt(`¿Qué querés registrar para "${mat.nombre}"?\n1 - Aprobada\n2 - Final pendiente`);

    if (opcion === "1") {
      estadoMaterias[id] = { estado: "aprobada" };
    } else if (opcion === "2") {
      const fecha = prompt("Ingresá la fecha de vencimiento del final (formato AAAA-MM-DD):");
      if (fecha && !isNaN(Date.parse(fecha))) {
        estadoMaterias[id] = { estado: "final-previo", vencimiento: fecha };
      } else {
        alert("Fecha inválida.");
        return;
      }
    } else {
      return;
    }

    guardarEstado();
    renderizarMalla();
    renderizarResumen();
    chequearAlertas();
  };
  const renderizarResumen = () => {
    const lista = document.getElementById("lista-finales-previos");
    const contador = document.getElementById("contador-previos");
    lista.innerHTML = "";
    let total = 0;

    for (const id in estadoMaterias) {
      const estado = estadoMaterias[id];
      if (estado.estado === "final-previo") {
        total++;
        const mat = materias.find(m => m.id === id);
        const li = document.createElement("li");
        li.textContent = `${mat.nombre} (vence: ${formatearFecha(estado.vencimiento)})`;
        lista.appendChild(li);
      }
    }

    contador.textContent = total;
  };

  const chequearAlertas = () => {
    for (const id in estadoMaterias) {
      const estado = estadoMaterias[id];
      if (estado.estado === "final-previo" && estado.vencimiento) {
        const hoy = new Date();
        const venc = new Date(estado.vencimiento);
        const diffMeses = (venc.getFullYear() - hoy.getFullYear()) * 12 + (venc.getMonth() - hoy.getMonth());
        if (diffMeses <= 4 && diffMeses >= 0) {
          const mat = materias.find(m => m.id === id);
          alert(`Atención: El final previo de "${mat.nombre}" vence en menos de 4 meses (${formatearFecha(estado.vencimiento)})`);
        }
      }
    }
  };

  // Inicialización
  cargarEstado();
  renderizarMalla();
  renderizarResumen();
  chequearAlertas();

})();
