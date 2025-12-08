import { useState } from 'react';
import '../../index.css';

const AddFunds = ({ onClose }) => {
    const [data, setData] = useState({
        ssn: '',
        funds: ''
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
        
        if (!data.funds) {
            setErr('*Funds are required');
            return;
        } 
        
        const fundsInt = parseInt(data.funds, 10);

        if (isNaN(fundsInt) || fundsInt <= 0 || data.funds % 1 != 0) {
            setErr('*Funds must be greater than 0 and in integer form');
            return;
        }

        // setLoading(true);
        console.log(data);
    }

    return (
        <div className='inputFormTemplate h-[35vh]'>
            <p className="inputHeader">
                Add Funds Input Form
            </p>

            <div className="inputContainer2">
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
            
            {err && 
                <p
                    className='errText'
                >{err}</p>
            }

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
    );    
};

export default AddFunds;