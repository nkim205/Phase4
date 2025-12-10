import { useState } from 'react';
import '../../index.css';

const AssignNurseToRoom = ({ onClose, onSuccess }) => {
    const [data, setData] = useState({
        nurseID: '',
        roomNumber: ''
    });

    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setErr('');

        // Initial input validation
        if (!data.nurseID) {
            setErr('*Nurse SSN is required');
            return;
        } else if (data.nurseID.length != 11) {
            setErr('*Nurse SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
            return;
        }

        for (let i = 0; i < 11; i++) {
            if (data.nurseID.charAt(3) != '-' || data.nurseID.charAt(6) != '-') {
                setErr('*Nurse SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
                return;
            }
            
            if (i != 3 && i !=6  && isNaN(parseInt(data.nurseID.charAt(i), 10))) {
                setErr('*Nurse SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
                return;      
            }
        }



        if (!data.roomNumber) {
            setErr('*Room number is required');
            return;
        }

        const roomNumberInt = parseInt(data.roomNumber, 10);

        if (isNaN(roomNumberInt) || roomNumberInt <= 0 || data.roomNumber % 1 != 0) {
            setErr('*Room number must be greater than 0 and in integer form');
            return;
        }

        try {
            const res = await fetch('http://localhost:4000/api/assignNurse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await res.json();

            if (result.success) {
                console.log('Success!', result.data);
                onClose();
                onSuccess?.('Successfully assigned the nurse to the room!');
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
        <div className='inputFormTemplate h-[25vh]'>
            <p className='inputHeader'>
                Assign Nurse to Room Form
            </p>

            <div className='inputContainer2'>
                <div>
                    <label
                        className="label"
                    >Nurse SSN:</label>
                    <input
                        type='text'
                        className="input"
                        value={data.nurseID}
                        onChange={(e) => setData({
                            ...data,
                            nurseID: e.target.value
                        })}
                        placeholder='XXX-XX-XXXX'
                        disabled={loading}
                    ></input>
                </div>   

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

export default AssignNurseToRoom;