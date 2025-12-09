import { useEffect } from 'react';

const Toast = ({ msg, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);
        
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed top-4 right-4 flex flex-col bgLightGreen textDarkGreen text-2xl rounded animateSlideIn">
            <div className='flex flex-row py-2 px-2'>
                <p>{msg.message}</p>
                <button
                    onClick={onClose}
                    className="ml-4 text-sm"
                >❌</button>
            </div>
            <div className='h-1 bgDarkGreen w-full'>
                <div className='h-1 bgBabyGreen animateProgress'></div>
            </div>
        </div>
    )
}

export default Toast;