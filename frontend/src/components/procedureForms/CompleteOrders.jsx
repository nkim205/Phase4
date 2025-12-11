import { useState } from 'react';
import '../../index.css';

const CompleteOrders = ({ onClose, onSuccess }) => {
    const [data, setData] = useState({
        numOrders: ''
    });

    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setErr('');

        // Initial input validation
        if (!data.numOrders) {
            setErr('*Number of orders is required');
        }
        
        const numInt = parseInt(data.numOrders, 10);

        if (isNaN(numInt) || numInt <= 0 || data.numOrders   % 1 != 0) {
            setErr('*Number of orders must be greater than 0 and in integer form');
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('http://localhost:4000/api/completeOrders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await res.json();

            if (result.success) {
                console.log('Success!', result.data);
                onClose();
                onSuccess?.(`Successfully completed ${data.numOrders} order${data.numOrders == 1 ? '' : 's'}!`);
            } else {
                setErr(result.message);
                console.log('Failure!', result.error);    
            }
        } catch(e) {
            setErr(e.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='inputFormTemplate h-[30vh]'>
            <p className='inputHeader'>
                Complete Orders Form
            </p>

            <div className='inputContainer1 w-[50%]'>
                <div>
                    <label
                        className="label"
                    >Number of Orders to Complete:</label>
                    <input
                        type='number'
                        className="input"
                        value={data.numOrders}
                        onChange={(e) => setData({
                            ...data,
                            numOrders: e.target.value
                        })}
                    ></input>
                </div>  
            </div>

            {err && (
                <p className='errText'>{err}</p>
            )}

            <div className='formBtnContainer'>
                <button 
                    onClick={handleSubmit}
                    className='formBtnTemplate homeBtn'
                >Submit</button>
                <button 
                    onClick={onClose}
                    className='formBtnTemplate homeBtn'
                >Close</button>    
            </div>
        </div>
    )
}

export default CompleteOrders;