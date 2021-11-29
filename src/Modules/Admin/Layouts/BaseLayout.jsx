import { Navbar } from '../../shared/components'
import { Sidebar } from '../components'
import './LayoutStyle.css'

export const BaseLayout = ({ children }) => {
    return <>
        <Navbar />
        <div className="row h-100">
            <div className="col-md-2 contenedor1 ">
                <Sidebar />
            </div>
            <div className="col tabla">
                {children}
            </div>
        </div>
    </>
}

export default BaseLayout