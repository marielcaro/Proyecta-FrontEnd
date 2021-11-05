import InvestigadoresIcon from '../assets/icons/investigadores.svg'
import PublicacionesIcon from '../assets/icons/publicaciones.svg'

const ProyectosActivos = () => {
    const proyectosActivos = [
        {
            nombre: 'Investigación en Educación',
            cantPublicaciones: 5,
            cantInvestigadores: 10
        },
        {
            nombre: 'Investigación en Educación',
            cantPublicaciones: 5,
            cantInvestigadores: 10
        },
        {
            nombre: 'Investigación en Educación',
            cantPublicaciones: 5,
            cantInvestigadores: 10
        },
        {
            nombre: 'Investigación en Educación',
            cantPublicaciones: 5,
            cantInvestigadores: 10
        },
        {
            nombre: 'Investigación en Educación',
            cantPublicaciones: 5,
            cantInvestigadores: 10
        }
    ]
    return <div className="container proyectos-activos py-3 my-5">
        <h1 className="proyectos-activos__titulo mb-5">Proyectos Activos</h1>
        {
            proyectosActivos.length > 0 && proyectosActivos.map((proyecto, index) => (
                <div className="row proyecto-activo" key={index}>
                    <div className="col-12 col-md-3 proyecto-activo__texto">
                        {proyecto.nombre}
                    </div>
                    <div className="col-12 col-md-3 proyecto-activo__texto">
                        <img src={InvestigadoresIcon} alt="investigadores" className="img-fluid icon" />
                        {proyecto.cantInvestigadores} Investigadores
                    </div>
                    <div className="col-12 col-md-3 proyecto-activo__texto">
                        <img src={PublicacionesIcon} alt="publicaciones" className="img-fluid icon" />
                        {proyecto.cantPublicaciones} Publicaciones
                    </div>
                </div>
            ))
        }
    </div>
}

export default ProyectosActivos