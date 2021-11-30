import styles from './ProyectCard.module.css'
import EmailIcon from '../../../../assets/icons/email.svg'
import ImageRounded from '../../../Shared/components/ImageRounded/ImageRounded';

export const ProyectCard = () => {
    const tareasTotales = 20;
    const tareasCompletadas = 16;
    const porcentaje = parseInt(tareasCompletadas / tareasTotales * 100)

    return <div className="card w-25 my-3">
        <div className="card-body p-2 d-flex justify-content-center align-items-center">
            <ImageRounded icon={EmailIcon} height="48" width="48" />
            <h6 className={styles.textocard}>PROYECTO 1</h6>
        </div>
        <div className="card-text d-flex justify-content-center align-items-center">
            Tareas Cumplidas: 16/20
        </div>
        <div className="container">
            <div class="progress mt-2">
                <div class="progress-bar" role="progressbar" aria-valuenow={porcentaje} aria-valuemin="0" aria-valuemax="100" style={{ width: porcentaje + '%' }}></div>
            </div>
            <div className="row mt-2">
                <div className="col bg-warning rounded mx-2">#TAG 1</div>
                <div className="col bg-warning rounded
                        mx-2">#TAG 2</div>
                <div className="col bg-warning rounded
                        mx-2">#TAG 3</div>
            </div>
            <div className="row my-2">
                <div className="col-3 bg-success">
                    <ImageRounded className="text-center" />
                </div>
                <div className="col-3">
                    <ImageRounded />
                </div>
                <div className="col-3">
                    <ImageRounded />
                </div>
            </div>
        </div>

    </div>

}


export default ProyectCard