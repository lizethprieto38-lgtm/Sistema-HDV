import { useState } from "react";


function FormularioAcademico({persona, setPersona, anterior , siguiente}) {

const enviar = (e) => {
  e.preventDefault();

  alert("Los datos fueron capturados correctamente.");

  if (siguiente) {
    siguiente();
  }

};

  return (
    <div className="formulario">
      <h2>Información Académica</h2>

      <form onSubmit={enviar}>
        <div className="fila">
          <div className="grupo">
            <label>Nivel de Formación</label>
            <select
              value={persona.nivel}
              onChange={(e) => setPersona({...persona,nivel: e.target.value})}
            >
              <option value="">Seleccione...</option>
              <option>Técnico</option>
              <option>Tecnólogo</option>
              <option>Universitario</option>
              <option>Especialización</option>
              <option>Maestría</option>
              <option>Doctorado</option>
            </select>
          </div>

          <div className="grupo">
            <label>Institución Educativa</label>
            <input
              type="text"
              placeholder="Ingrese la institución"
              value={persona.institucion}
              onChange={(e) => setPersona({...persona,institucion: e.target.value})}
            />
          </div>
        </div>

        <div className="fila">
          <div className="grupo">
            <label>Título Obtenido</label>
            <input
              type="text"
              placeholder="Ingrese el título"
              value={persona.titulo}
              onChange={(e) => setPersona({...persona,titulo: e.target.value})}
            />
          </div>

          <div className="grupo">
            <label>Año de Graduación</label>
            <input
              type="number"
              placeholder="Ejemplo: 2025"
              value={persona.anio}
              onChange={(e) => setPersona({...persona,anio: e.target.value})}
            />
          </div>
        </div>

        <div className="grupo">
          <label>Cursos Realizados</label>
          <textarea
            rows="4"
            placeholder="Escribe los cursos realizados"
            value={persona.cursos}
            onChange={(e) => setPersona({...persona,cursos: e.target.value})}
          ></textarea>
        </div>

        <div className="botones">
          <button
            type="button"
            className="btn-anterior"
            onClick={anterior}
          >
            ← Anterior
          </button>

          <button
            type="submit"
            className="btn-siguiente"
          >
            Siguiente →
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioAcademico;