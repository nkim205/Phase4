import { useState } from 'react';
import '../../index.css';

const RecordSymptom = ({ onClose, onSuccess }) => {
    const [data, setData] = useState({
        ssn: '',
        numDays: '',
        apptDate: '',
        apptTime: '',
        symptomType: ''
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



        if (!data.numDays) {
            setErr('*Number of days is required');
            return;
        }

        const daysInt = parseInt(data.numDays, 10);

        if (isNaN(daysInt) || daysInt <= 0 || data.numDays % 1 != 0) {
            setErr('*Number of days must be greater than 0 and in integer form');
            return;
        }



        if (!data.apptDate) {
            setErr('*Appointment date is required');
            return;
        }



        if (!data.apptTime) {
            setErr('*Appointment time is required');
            return;
        }



        if (!data.symptomType) {
            setErr('*Symptom cannot be blank');
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('http://localhost:4000/api/recordSymptom', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await res.json();

            if (result.success) {
                console.log('Success!', result.data);
                onClose();
                onSuccess?.('Successfully recorded symptom!');
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
        <div className='inputFormTemplate h-[60vh]'>
            <p className='inputHeader'>
                Record Symptom Form
            </p>

            <div className='inputContainer2'>
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

                <div>
                    <label
                        className="label"
                    >Number of Days:</label>
                    <input
                        type='number'
                        className="input"
                        value={data.numDays}
                        onChange={(e) => setData({
                            ...data,
                            numDays: e.target.value
                        })}
                    ></input>
                </div>
            </div>

            <div className='inputContainer2'>
                <div>
                    <label
                        className='label'
                    >Appointment Date:</label>
                    <input
                        type='date'
                        className='input'
                        value={data.apptDate}
                        onChange={(e) => setData({
                            ...data,
                            apptDate: e.target.value
                        })}
                    >
                    </input>
                </div>

                <div>
                    <label
                        className='label'
                    >Appointment Time:</label>
                    <input
                        type='time'
                        step='1'
                        className='input'
                        value={data.apptTime}
                        onChange={(e) => setData({
                            ...data,
                            apptTime: e.target.value
                        })}
                    >
                    </input>
                </div>
            </div>

            <div className='inputContainer1'>
                <div>
                    <label
                        className="label"
                    >Symptom Type:</label>
                    <input
                        type='text'
                        className="input"
                        value={data.symptomType}
                        onChange={(e) => setData({
                            ...data,
                            symptomType: e.target.value
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

export default RecordSymptom;