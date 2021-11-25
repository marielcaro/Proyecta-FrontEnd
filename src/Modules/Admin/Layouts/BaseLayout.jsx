import { Navbar } from '../../Shared/components'
import { Sidebar } from '../components'

export const BaseLayout = ({ children }) => {
    return <>
        <Navbar />
        <div className="row">
            <div className="col-md-2 h-100 bg-success">
                <Sidebar />
            </div>
            <div className="col">
                {children}
            </div>
        </div>
    </>
}

export default BaseLayout