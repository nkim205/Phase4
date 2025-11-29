const Toast = ({ msg, onClose }) => {
    return (
        <div className="bottom-4 right-4 bgGreen text-white px-4 py-2 rounded animate-fade-in">
            <p>{msg}</p>
            <button
                onClick={onClose}
                className="ml-4 text-sm underline"
            >Close</button>
        </div>
    )
}

export default Toast;