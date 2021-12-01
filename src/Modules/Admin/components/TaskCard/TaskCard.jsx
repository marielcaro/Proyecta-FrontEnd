import ImageRounded from '../../../Shared/components/ImageRounded/ImageRounded';
import styles from './TaskCard.module.css'

export const TaskCard = () => {
    return (
        <div className={`card my-3 ${styles.shadowcard}`}>
            <div className="card-body p-2 d-flex justify-content-center align-items-center">
                <ImageRounded height="48" width="48" className="me-3" />
                <h6>TAREAS PENDIENTES</h6>
            </div>
        </div>
    )

}

export default TaskCard