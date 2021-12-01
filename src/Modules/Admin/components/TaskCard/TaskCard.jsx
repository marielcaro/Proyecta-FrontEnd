import ImageRounded from '../../../Shared/components/ImageRounded/ImageRounded';
import styles from "../components.module.css"

export const TaskCard = () => {
    return (
        <div className={`card my-3 ${styles.shadowcard}`}>
            <div className="card-body p-2 d-flex justify-content-center align-items-center">
                <ImageRounded height="48" width="48" className="me-3" />
                <h6 className={`my-3 ${styles.textocard}`}>TAREAS PENDIENTES</h6>
            </div>
        </div>
    )

}

export default TaskCard