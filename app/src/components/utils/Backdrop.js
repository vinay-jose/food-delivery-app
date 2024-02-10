const Backdrop = props => {
    const handleClick = () => {
        if(props.onClose) {
            props.onClose();
        }
    };

    return (
        <div onClick={handleClick} className="loader-overlay"></div>
    )
};

export default Backdrop;