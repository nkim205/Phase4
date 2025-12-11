import { useState } from 'react';
import '../../index.css';

const AssignDoctorToAppointment = ({ onClose, onSuccess }) => {
    const [data, setData] = useState({
        patientID: '',
        apptDate: '',
        apptTime: '',
        doctorID: ''
    });

    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        // Initial input validation
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



        if (!data.doctorID) {
            setErr('*Doctor SSN is required');
            return;
        } else if (data.doctorID.length != 11) {
            setErr('*Doctor SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
            return;
        }

        for (let i = 0; i < 11; i++) {
            if (data.doctorID.charAt(3) != '-' || data.doctorID.charAt(6) != '-') {
                setErr('*Doctor SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
                return;
            }
            
            if (i != 3 && i !=6  && isNaN(parseInt(data.doctorID.charAt(i), 10))) {
                setErr('*Doctor SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
                return;      
            }
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
            const res = await fetch('http://localhost:4000/api/assignDoctor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await res.json();

            if (result.success) {
                console.log('Success!', result.data);
                onClose();
                onSuccess?.('Successfully assigned the doctor to the appointment!');
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
                Assign Doctor To Appointment Form
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
                    >Doctor SSN:</label>
                    <input
                        type='text'
                        className="input"
                        value={data.doctorID}
                        onChange={(e) => setData({
                            ...data,
                            doctorID: e.target.value
                        })}
                        placeholder='XXX-XX-XXXX'
                        disabled={loading}
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

export default AssignDoctorToAppointment;