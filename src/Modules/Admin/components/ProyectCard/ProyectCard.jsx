import styles from './ProyectCard.module.css'
import ImageRounded from '../../../Shared/components/ImageRounded/ImageRounded';

export const ProyectCard = () => {
    const tareasTotales = 20;
    const tareasCompletadas = 16;
    const porcentaje = parseInt(tareasCompletadas / tareasTotales * 100)

    return <div className={`card my-3 mx-3 ${styles.shadowcard}`}>
        <div className="card-body p-2 d-flex justify-content-center align-items-center">
            <ImageRounded height="48" width="48" className="me-3"/>
            <h6 className={styles.textocard}>PROYECTO 1</h6>
        </div>
        <div className="card-text d-flex justify-content-center align-items-center">
            Tareas Cumplidas: 16/20
        </div>
        <div className={styles.container}>
            <div class="progress mt-2">
                <div class="progress-bar" role="progressbar" aria-valuenow={porcentaje} aria-valuemin="0" aria-valuemax="100" style={{ width: porcentaje + '%' }}></div>
            </div>
            <div className="row mt-2">
                <div className={`col bg-warning rounded mx-2 my-1 ${styles.tagtext}`}>Inteligencia artificial</div>
                <div className="col bg-warning rounded
                        mx-2 my-1">#TAG 2</div>
                <div className="col bg-warning rounded
                        mx-2 my-1">#TAG 3</div>
            </div>
            <div className="row my-2 overflow-hidden d-flex justify-content-center text-center">
                <div className="col-2">
                    <ImageRounded className="my-1"/>
                </div>
                <div className="col-2">
                    <ImageRounded className="my-1"/>
                </div>
                <div className="col-2">
                    <ImageRounded className="my-1"/>
                </div>
                <div className="col-2">
                    <ImageRounded className="my-1"/>
                </div>
                <div className="col-2">
                    <ImageRounded className="my-1"/>
                </div>
                
            </div>
        </div>

    </div>

}


export default ProyectCard