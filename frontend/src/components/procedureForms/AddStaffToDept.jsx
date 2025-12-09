import { useState } from 'react';
import '../../index.css';

const AddStaffToDept = ({ onClose, onSuccess }) => {
    const [data, setData] = useState({
        deptID: '',
        ssn: '',
        firstName: '',
        lastName: '',
        birthdate: '',
        startdate: '',
        address: '',
        staffID: '',
        salary: ''
    });

    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
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



        if (!data.deptID) {
            setErr('*Department ID is required');
            return;
        }



        if (!data.firstName) {
            setErr('*First name is required');
            return;
        }
        
        if (!data.lastName) {
            setErr('*Last name is required');
            return;
        }



        if (!data.birthdate) {
            setErr('*Birthdate is required');
            return;
        }

        const inputBdate = new Date(data.birthdate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (inputBdate > today) {
            setErr('*Birthdate cannot be in the future');
            return;
        }



        if (!data.address) {
            setErr('*Address is required');
            return;
        }



        if (!data.staffID) {
            setErr('*Staff ID is required');
            return;
        }



        if (!data.startdate) {
            setErr('*Start date is required');
            return;
        }



        if (!data.salary) {
            setErr('*Salary is required');
            return;
        }

        setLoading(true);

        try {
            console.log(data);
            const res = await fetch('http://localhost:4000/api/addStaff', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await res.json();

            if (result.success) {
                console.log('Success!', result.data);
                onClose();
                onSuccess?.('Successfully added staff to the department!');
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
        <div className='inputFormTemplate h-[70vh]'>
            <p className='inputHeader'>
                Add Staff Form
            </p>

            <div className='inputContainer2'>
                <div>
                    <label
                        className="label"
                    >SSN:</label>
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
                        disabled={loading}
                    ></input>
                </div>
            </div>

            <div className='inputContainer3'>
                <div>
                    <label
                        className="label"
                    >First Name:</label>
                    <input
                        type='text'
                        className="input"
                        value={data.firstName}
                        onChange={(e) => setData({
                            ...data,
                            firstName: e.target.value
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
                        value={data.lastName}
                        onChange={(e) => setData({
                            ...data,
                            lastName: e.target.value
                        })}
                        disabled={loading}
                    ></input>
                </div>

                <div>
                    <label
                        className="label"
                    >Birthdate:</label>
                    <input
                        type='date'
                        className="input"
                        value={data.birthdate}
                        onChange={(e) => setData({
                            ...data,
                            birthdate: e.target.value
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
                    >Staff ID:</label>
                    <input
                        type='number'
                        className="input"
                        value={data.staffID}
                        onChange={(e) => setData({
                            ...data,
                            staffID: e.target.value
                        })}
                        disabled={loading}
                    ></input>
                </div>
            </div>

            <div className='inputContainer2'>
                <div>
                    <label
                        className="label"
                    >Start Date:</label>
                    <input
                        type='date'
                        className="input"
                        value={data.startdate}
                        onChange={(e) => setData({
                            ...data,
                            startdate: e.target.value
                        })}
                        disabled={loading}
                    ></input>
                </div>

                <div>
                    <label
                        className="label"
                    >Salary:</label>
                    <input
                        type='number'
                        className="input"
                        value={data.salary}
                        onChange={(e) => setData({
                            ...data,
                            salary: e.target.value
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

export default AddStaffToDept;