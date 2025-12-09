import { useState } from 'react';
import '../../index.css';

const BookAppointment = ({ onClose, onSuccess }) => {
    const [data, setData] = useState({
        patientID: '',
        apptDate: '',
        apptTime: '',
        apptCost: ''
    })

    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setErr('');

        if (!data.patientID) {
            setErr('*Patient SSN is required');
            return;
        } else if (data.patientID.length != 11) {
            setErr('*Patient SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
            return;
        }

        for (let i = 0; i < 11; i++) {
            if (data.patientID.charAt(3) != '-' || data.patientID.charAt(6) != '-') {
                setErr('*Patient SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
                return;
            }
            
            if (i != 3 && i !=6  && isNaN(parseInt(data.patientID.charAt(i), 10))) {
                setErr('*Patient SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
                return;      
            }
        }

        

        if (!data.apptCost) {
            setErr('*Appointment cost is required');
            return;
        }

        const costInt = parseInt(data.apptCost, 10);

        if (isNaN(costInt) || costInt <= 0 || data.apptCost % 1 != 0) {
            setErr('*Appointment cost must be greater than 0 and in integer form');
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

        setLoading(true);

        try {
            const res = await fetch('http://localhost:4000/api/bookAppointment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await res.json();

            if (result.success) {
                console.log('Success!', result.data);
                onClose();
                onSuccess?.('Successfully booked appointment!');
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
        <div className='inputFormTemplate h-[45vh]'>
            <p className='inputHeader'>
                Book Appointment Form
            </p>

            <div className='inputContainer2'>
                <div>
                    <label
                        className="label"
                    >Patient SSN:</label>
                    <input
                        type='text'
                        className="input"
                        value={data.patientID}
                        onChange={(e) => setData({
                            ...data,
                            patientID: e.target.value
                        })}
                        placeholder='XXX-XX-XXXX'
                        disabled={loading}
                    ></input>
                </div>

                <div>
                    <label
                        className="label"
                    >Appointment Cost:</label>
                    <input
                        type='number'
                        className="input"
                        value={data.apptCost}
                        onChange={(e) => setData({
                            ...data,
                            apptCost: e.target.value
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

export default BookAppointment;