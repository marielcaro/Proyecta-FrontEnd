import { CalendarCard, ProyectCard, TaskCard} from '../../components'
import { BaseLayout } from '../../Layouts'

export const Tablero = () => {
    
    return <BaseLayout>
        <div className="row g-0">
            <div className="col gap-0">
                <ProyectCard />
                <ProyectCard />
            </div>
            <div className="col gap-0">
                <TaskCard />
            </div>
            <div className="col gap-0">
                <CalendarCard />
            </div>
        </div>
    </BaseLayout>
}

export default Tablero