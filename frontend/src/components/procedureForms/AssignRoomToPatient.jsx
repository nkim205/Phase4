import { useState } from 'react';
import '../../index.css';

const AssignRoomToPatient = ({ onClose, onSuccess }) => {
    const [data, setData] = useState({
        ssn: '',
        roomNumber: '',
        roomType: '',
    });

    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setErr('');

        // Initial input validation
        if (!data.ssn) {
            setErr('*SSN is required');
            return;
        } else if (data.ssn.length != 11) {
            setErr('*SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
            return;
        }

        for (let i = 0; i < 11; i++) {
            if (data.ssn.charAt(3) != '-' || data.ssn.charAt(6) != '-') {
                setErr('*SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
                return;
            }
            
            if (i != 3 && i !=6  && isNaN(parseInt(data.ssn.charAt(i), 10))) {
                setErr('*SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
                return;      
            }
        }



        if (!data.roomNumber) {
            setErr('*Room number is required');
            return;
        }

        const rnInt = parseInt(data.roomNumber, 10);

        if (isNaN(rnInt) || rnInt <= 0 || data.roomNumber % 1 != 0) {
            setErr('*Room number must be a positive integer');
            return;
        }



        if (!data.roomType) {
            setErr('*Room type is required');
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('http://localhost:4000/api/assignRoom', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await res.json();

            if (result.success) {
                console.log('Success!', result.data);
                onClose();
                onSuccess?.('Successfully assigned the room to the patient!');
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
        <div className='inputFormTemplate h-[40vh]'>
            <p className='inputHeader'>
                Assign Room To Patient Form
            </p>

            <div className='inputContainer1 w-[50%]'>
                <div>
                    <label
                        className="label"
                    >Patient SSN:</label>
                    <input
                        type='text'
                        className="input"
                        value={data.ssn}
                        onChange={(e) => setData({
                            ...data,
                            ssn: e.target.value
                        })}
                        placeholder='XXX-XX-XXXX'
                        disabled={loading}
                    ></input>
                </div>
            </div>

            <div className='inputContainer2'>
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

                <div>
                    <label
                        className="label"
                    >Room Type:</label>
                    <input
                        type='text'
                        className="input"
                        value={data.roomType}
                        onChange={(e) => setData({
                            ...data,
                            roomType: e.target.value
                        })}
                        disabled={loading}
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

export default AssignRoomToPatient;