import styles from "../components.module.css"
import ImageRounded from "../../../Shared/components/ImageRounded/ImageRounded"
import saviimg from "./prueba/savi.png"

export const NotificationsCard = () => {

    return (
        <div className={`card my-3 text-center align-items-center mx-5 ${styles.shadowcard}`}>
            <h6 className={`my-5 ${styles.textocard}`}>NOTIFICACIONES</h6>
            <div className="row d-flex justify-content-center align-items-center mt-2 me-3">
                <div className="col-2">
                    <ImageRounded icon={saviimg}/>
                </div>
                <div className="col-10">
                    <div className="row text-left">
                        <div className={styles.nametext}>Sebastian Savino</div>
                    </div>
                    <div className="row">
                        <div className={styles.message}>"Esto es una prueba perro"</div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center mt-4 me-3">
                <div className="col-2">
                    <ImageRounded icon={saviimg}/>
                </div>
                <div className="col-10">
                    <div className="row text-left">
                        <div className={styles.nametext}>Savino Sebastian</div>
                    </div>
                    <div className="row">
                        <div className={styles.message}>"Que calor de mierda"</div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center mt-4 me-3">
                <div className="col-2">
                    <ImageRounded icon={saviimg}/>
                </div>
                <div className="col-10">
                    <div className="row text-left">
                        <div className={styles.nametext}>Pablo Savino</div>
                    </div>
                    <div className="row">
                        <div className={styles.message}>"Que ganas de un vino con fanta"</div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center mt-4 me-3">
                <div className="col-2">
                    <ImageRounded icon={saviimg}/>
                </div>
                <div className="col-10">
                    <div className="row text-left">
                        <div className={styles.nametext}>Pablo Savino Sebastian</div>
                    </div>
                    <div className="row">
                        <div className={styles.message}>"Odio css"</div>
                    </div>
                </div>
            </div>
            <div className="row mt-5"></div>

        </div>
    )
}

export default NotificationsCard