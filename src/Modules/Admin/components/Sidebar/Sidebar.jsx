import style from './sidebar.module.css'

export const Sidebar = () => {
    return <div className= {style.cajablanca}>
        <ul>
            <li>TABLERO</li>
            <li>PROYECTOS</li>
            <li>TAREAS</li>
            <li>CALENDARIO</li>
            <li>REPORTES</li>
            <li>AJUSTES</li>
        </ul>
        </div>
}

export default Sidebar