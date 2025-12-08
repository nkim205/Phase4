import { useState } from 'react';
import '../../index.css';

const AddPatient = ({ onClose }) => {
    const [data, setData] = useState({
        ssn: '',
        fname: '',
        lname: '',
        bdate: '',
        address: '',
        funds: '',
        contact: ''
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



        if (!data.contact) {
            setErr('*Contact information is required');
            return;
        } else if (data.contact.length != 12) {
            setErr('*Contact must be in the format \'XXX-XXX-XXXX\' (e.g. 123-456-7890)');
            return;
        }

        for (let i = 0; i < 12; i++) {
            if (data.contact.charAt(3) != '-' || data.contact.charAt(7) != '-') {
                setErr('*Contact must be in the format \'XXX-XXX-XXXX\' (e.g. 123-456-7890)');
                return;
            }
            
            if (i != 3 && i !=7  && isNaN(parseInt(data.contact.charAt(i), 10))) {
                setErr('*Contact must be in the format \'XXX-XXX-XXXX\' (e.g. 123-456-7890)');
                return;      
            }
        }
        


        if (!data.fname) {
            setErr('*First name is required');
            return;
        }
        
        if (!data.lname) {
            setErr('*Last name is required');
            return;
        }
        
        if (!data.address) {
            setErr('*Address is required');
            return;
        }
        
        if (!data.funds) {
            setErr('*Funds are required');
            return;
        }

        const fundsInt = parseInt(data.funds, 10);

        if (isNaN(fundsInt) || fundsInt <= 0 || data.funds % 1 != 0) {
            setErr('*Funds must be greater than 0 and in integer form');
            return;
        }


        
        if (!data.bdate) {
            setErr('*Birthdate is required');
            return;
        }

        const inputBdate = new Date(data.bdate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        console.log(inputBdate > today)
        if (inputBdate > today) {
            setErr('*Birthdate cannot be in the future');
            return;
        }

        console.log(data);
    }
    
    return (
        <div className='inputFormTemplate h-[70vh]'>
            <p className='inputHeader'>
                Add Patient Input Form
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
                    >Contact:</label>
                    <input
                        type='text'
                        className="input"
                        value={data.contact}
                        onChange={(e) => setData({
                            ...data,
                            contact: e.target.value
                        })}
                        placeholder='XXX-XXX-XXXX'
                        disabled={loading}
                    ></input>
                </div>
            </div>

            <div className='inputContainer2'>
                <div>
                    <label
                        className="label"
                    >First Name:</label>
                    <input
                        type='text'
                        className="input"
                        value={data.fname}
                        onChange={(e) => setData({
                            ...data,
                            fname: e.target.value
                        })}
                        disabled={loading}
                    ></input>
                </div>

                <div>
                    <label
                        className="label"
                    >Last Name:</label>
                    <input
                        type='text'
                        className="input"
                        value={data.lname}
                        onChange={(e) => setData({
                            ...data,
                            lname: e.target.value
                        })}
                        disabled={loading}
                    ></input>
                </div>
            </div>

            <div className='inputContainer2'>
                <div>
                    <label
                        className="label"
                    >Address:</label>
                    <input
                        type='text'
                        className="input"
                        value={data.address}
                        onChange={(e) => setData({
                            ...data,
                            address: e.target.value
                        })}
                        disabled={loading}
                    ></input>
                </div>

                <div>
                    <label
                        className="label"
                    >Funds:</label>
                    <input
                        type='number'
                        className="input"
                        value={data.funds}
                        onChange={(e) => setData({
                            ...data,
                            funds: e.target.value
                        })}
                    ></input>
                </div>
            </div>

            <div className='inputContainer1'>
                <div>
                    <label
                        className='label'
                    >Birthdate:</label>
                    <input
                        type='date'
                        className='input'
                        value={data.bdate}
                        onChange={(e) => setData({
                            ...data,
                            bdate: e.target.value
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

export default AddPatient;