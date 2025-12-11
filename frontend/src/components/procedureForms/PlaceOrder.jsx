import { useState } from 'react';
import '../../index.css';

const PlaceOrder = ({ onClose, onSuccess }) => {
    const [data, setData] = useState({
        orderNumber: '',
        priority: '',
        patientID: '',
        doctorID: '',
        cost: '',
        labType: '',
        drug: '',
        dosage: ''
    });

    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);
    const [orderType, setOrderType] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        setErr('');

        // Initial input validation
        if (!data.patientID) {
            setErr('*Patient SSN is required');
            return;
        } else if (data.patientID.length != 11) {
            setErr('*Patien SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
            return;
        }

        for (let i = 0; i < 11; i++) {
            if (data.patientID.charAt(3) != '-' || data.patientID.charAt(6) != '-') {
                setErr('*SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
                return;
            }
            
            if (i != 3 && i !=6  && isNaN(parseInt(data.patientID.charAt(i), 10))) {
                setErr('*SSN must be in the format \'XXX-XX-XXXX\' (e.g. 123-45-6789)');
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

        

        if (!data.orderNumber) {
            setErr('*Order number is required');
            return;
        }

        const orderNumInt = parseInt(data.orderNumber, 10);

        if (isNaN(orderNumInt) || orderNumInt <= 0 || data.orderNumber % 1 != 0) {
            setErr('*Order number must be greater than 0 and in integer form');
            return;
        }



        if (!data.priority) {
            setErr('*Priority is required');
            return;
        }

        const priorityInt = parseInt(data.priority, 10);

        if (isNaN(priorityInt) || priorityInt < 1 || priorityInt > 5 || data.priority % 1 != 0) {
            setErr('*Priority must be between 1 and 5 (both inclusive) and in integer form');
            return;
        }



        if (!data.cost) {
            setErr('*Cost is required');
            return;
        }

        const costInt = parseInt(data.cost, 10);

        if (isNaN(costInt) || costInt <= 0 || data.cost % 1 != 0) {
            setErr('*Cost must be greater than 0 and in integer form');
            return;
        }



        if (!orderType) {
            setErr('*Please select an order type');
            return;  
        }



        if (orderType == 'Lab work' && !data.labType) {
            setErr('*Lab type can not be empty');
            return;
        }

        if (orderType == 'Perscription') {
            if (!data.drug) {
                setErr('*Drug type can not be empty');
                return;
            } else if (!data.dosage) {
                setErr('*Dosage can not be empty');
                return;
            } 

            const dosageInt = parseInt(data.dosage, 10);

            if (isNaN(dosageInt) || dosageInt <= 0 || data.dosage % 1 != 0) {
                setErr('*Dosage must be greater than 0 and in integer form');
                return;
            }
        }

        setLoading(true);

        try {
            if (orderType == 'Lab work') {
                setData({
                    ...data,
                    dosage: null,
                    drug: null
                })
            } else {
                setData({
                    ...data,
                    labType: null
                })
            }

            const res = await fetch('http://localhost:4000/api/placeOrder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await res.json();

            if (result.success) {
                console.log('Success!', result.data);
                onClose();
                onSuccess?.('Successfully placed order!');
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
                Place Order Form
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

            <div className='inputContainer3'>
                <div>
                    <label
                        className="label"
                    >Order Number:</label>
                    <input
                        type='number'
                        className="input"
                        value={data.orderNumber}
                        onChange={(e) => setData({
                            ...data,
                            orderNumber: e.target.value
                        })}
                    ></input>
                </div>

                <div>
                    <label
                        className="label"
                    >Priority:</label>
                    <input
                        type='number'
                        className="input"
                        value={data.priority}
                        onChange={(e) => setData({
                            ...data,
                            priority: e.target.value
                        })}
                    ></input>
                </div>

                <div>
                    <label
                        className="label"
                    >Cost:</label>
                    <input
                        type='number'
                        className="input"
                        value={data.cost}
                        onChange={(e) => setData({
                            ...data,
                            cost: e.target.value
                        })}
                    ></input>
                </div> 
            </div>
            
            <div className='inputContainer1'>
                <label
                    className="label"
                >Order Type:</label>

                <select
                    className='input'
                    value={orderType}
                    onChange={(e) => setOrderType(e.target.value)}
                >
                    <option value=''>Select order type</option>
                    <option value='Lab work'>Lab work</option>
                    <option value='Perscription'>Perscription</option>
                </select>
            </div>
            
            {orderType == 'Lab work' && (
                <div className='inputContainer1'>
                    <div>
                        <label
                            className="label"
                        >Lab Type:</label>
                        <input
                            type='text'
                            className="input"
                            value={data.labType}
                            onChange={(e) => setData({
                                ...data,
                                labType: e.target.value,
                                drug: '',
                                dosage: ''
                            })}
                            disabled={loading}
                        ></input>
                    </div>
                </div>
            )}

            {orderType == 'Perscription' && (
                <div className='inputContainer2'>
                    <div>
                        <label
                            className="label"
                        >Drug:</label>
                        <input
                            type='text'
                            className="input"
                            value={data.drug}
                            onChange={(e) => setData({
                                ...data,
                                drug: e.target.value,
                                labType: ''
                            })}
                            disabled={loading}
                        ></input>
                    </div>

                    <div>
                        <label
                            className="label"
                        >Dosage:</label>
                        <input
                            type='number'
                            className="input"
                            value={data.dosage}
                            onChange={(e) => setData({
                                ...data,
                                dosage: e.target.value,
                                labType: ''
                            })}
                        ></input>
                    </div>
                </div>
            )}

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

export default PlaceOrder;