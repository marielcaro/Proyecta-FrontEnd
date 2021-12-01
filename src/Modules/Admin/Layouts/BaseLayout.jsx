import { Navbar } from '../../shared/components'
import { Sidebar } from '../components'
import './LayoutStyle.css'

export const BaseLayout = ({ children }) => {
    return <div className="layout">
        <Navbar />
        <div className="d-flex main-content">
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