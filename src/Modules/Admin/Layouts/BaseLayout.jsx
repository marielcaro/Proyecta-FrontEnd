import { Navbar } from '../../Shared/components'
import { Sidebar } from '../components'
import './LayoutStyle.css'

export const BaseLayout = ({ children }) => {
    return <div className="container-fluid">
        <Navbar />
        <div className="d-flex">
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