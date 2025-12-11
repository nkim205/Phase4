import { useState } from 'react';
import '../../index.css';

const ReleaseRoom = ({ onClose, onSuccess }) => {
    const [data, setData] = useState({
        roomNumber: '',
    });

    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setErr('');

        // Initial input validation
        if (!data.roomNumber) {
            setErr('*Room number is required');
            return;
        }

        const roomInt = parseInt(data.roomNumber, 10);

        if (isNaN(roomInt) || roomInt <= 0 || data.roomNumber % 1 != 0) {
            setErr('*Room number must be greater than 0 and in integer form');
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('http://localhost:4000/api/releaseRoom', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await res.json();

            if (result.success) {
                console.log('Success!', result.data);
                onClose();
                onSuccess?.('Successfully released the room!');
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
                Release Room Form
            </p>

            <div className='inputContainer1 w-[33%]'>
                <div>
                    <label
                        className="label"
                    >Room Number:</label>
                    <input
                        type='number'
                        className="input"
                        value={data.roomNumber}
                        onChange={(e) => setData({
                            ...data,
                            roomNumber: e.target.value
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

export default ReleaseRoom;