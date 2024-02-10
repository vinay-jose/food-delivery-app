import ReactDom from 'react-dom'
import Backdrop from './Backdrop'

const Loader = () => {
    return (
        ReactDom.createPortal(
            <>
            <Backdrop/>
            <div className="loading-dots">
                <div>Loading</div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
            </div>
            </>,
            document.getElementById("loader-root")
        )
    )
}

export default Loader