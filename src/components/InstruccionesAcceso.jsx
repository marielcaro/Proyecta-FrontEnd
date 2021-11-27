import InformationIcon from '../assets/icons/information.svg'

const InstruccionesAcceso = () => {
    const instruccionesAcceso = [
        {Titulo_1:"¿Pregunta 1?",
        Titulo_2:"Respuesta 1"
        },
        
        {Titulo_1:"¿Pregunta 1?",
        Titulo_2:"Respuesta 1"
        },

        {Titulo_1:"¿Pregunta 1?",
        Titulo_2:"Respuesta 1"
        },

        {Titulo_1:"¿Pregunta 1?",
        Titulo_2:"Respuesta 1"
        },

        {Titulo_1:"¿Pregunta 1?",
        Titulo_2:"Respuesta 1"
        }
    ]

    return <div className="container proyectos-activos py-3 my-5">
        <h1 className="proyectos-activos__titulo mb-5">Instrucciones de Acceso</h1>
        {
            instruccionesAcceso.length > 0 && instruccionesAcceso.map((instruccion, index) => (
                <div className="row proyecto-activo" key={index}>
                    <div className="col-12 col-md-3 proyecto-activo__texto">
                        {instruccion.Titulo_1}
                    </div>

                    <div className="col-12 col-md-3 proyecto-activo__texto">
                        <img src={InformationIcon} alt="investigadores" className="img-fluid icon" />
                        {instruccion.Titulo_2} 
                    </div>

                </div>
            ))
        }
    </div>
}

export default InstruccionesAcceso