import { useState } from "react";

function FormularioExperiencia({ anterior, siguiente }) {

    const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [funciones, setFunciones] = useState("");
  const [habilidades, setHabilidades] = useState("");

  // Función del botón Continuar
  const enviar = (e) => {
  e.preventDefault();

  alert("Los datos fueron capturados correctamente.");

  if (siguiente) {
    siguiente();
  }

  if(anterior){
    anterior();
  }
};

    return(
        <div className="formulario">
            <h2>Experiencia Laboral</h2>

            <form onSubmit={enviar}>
                <div className="grupo">
                    <label>Empresa</label>
                    <input
                    type="text"
                    placeholder="Ingrese la empresa"
                    value={empresa}
                    onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="grupo">
                    <label>Cargo</label>
                    <input
                    type="text"
                    placeholder="Ingrese su cargo"
                    value={cargo}
                    onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="grupo">
                    <label>Tiempo de Experiencia</label>
                    <input
                    type="text"
                    placeholder="Ingrese el Tiempo de Experiencia"
                    value={tiempo}
                    onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="grupo">
                    <label>Funciones Desempeñadas</label>
                    <input
                    type="text"
                    placeholder="Ingrese sus funciones"
                    value={funcion}
                    onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="grupo">
                    <label>Habilidades Técnicas</label>
                    <input
                    type="text"
                    placeholder="Ingrese sus habilidades"
                    value={habilidades}
                    onChange={(e) => setNombre(e.target.value)}
                    />
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
    )
}
export default FormularioExperiencia;