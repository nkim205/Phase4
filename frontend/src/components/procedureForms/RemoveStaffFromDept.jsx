import { useState } from 'react';
import '../../index.css';

const RemoveStaffFromDept = ({ onClose, onSuccess }) => {
    const [data, setData] = useState({
        ssn: '',
        deptID: ''
    });

    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        // Initial input validation
        if (!data.ssn) {
            setErr('*Staff SSN is required');
            return;
        } else if (data.ssn.length != 11) {
            setErr('*Staff SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
            return;
        }

        for (let i = 0; i < 11; i++) {
            if (data.ssn.charAt(3) != '-' || data.ssn.charAt(6) != '-') {
                setErr('*Staff SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
                return;
            }
            
            if (i != 3 && i !=6  && isNaN(parseInt(data.ssn.charAt(i), 10))) {
                setErr('*Staff SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
                return;      
            }
        }


        if (!data.deptID) {
            setErr('*Department ID is required');
            return;
        }

        const deptInt = parseInt(data.deptID, 10);

        if (isNaN(deptInt) || deptInt <= 0 || data.deptID % 1 != 0) {
            setErr('*Department ID must be greater than 0 and in integer form');
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('http://localhost:4000/api/removeStaffFromDept', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await res.json();

            if (result.success) {
                console.log('Success!', result.data);
                onClose();
                onSuccess?.('Successfully removed staff from the department!');
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
        <div className='inputFormTemplate h-[35vh]'>
            <p className='inputHeader'>
                Remove Staff From Department Form
            </p>

            <div className='inputContainer2'>
                <div>
                    <label
                        className="label"
                    >Staff SSN:</label>
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

                <div>
                    <label
                        className="label"
                    >Department ID:</label>
                    <input
                        type='number'
                        className="input"
                        value={data.deptID}
                        onChange={(e) => setData({
                            ...data,
                            deptID: e.target.value
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

export default RemoveStaffFromDept;