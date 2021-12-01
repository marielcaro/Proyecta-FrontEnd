import { Navbar } from '../../Shared/components'
import { Sidebar } from '../components'
import './LayoutStyle.css'

export const BaseLayout = ({ children }) => {
    return <div className="container-fluid main-wrapper m-0 p-0">
        <Navbar />
        <div className="d-flex segundaseccion">
            <div className="col-md-2 g-0">
                <Sidebar />
            </div>
            <div className="col tabla">
                {children}
            </div>
        </div>
    </div>
}

export default BaseLayout