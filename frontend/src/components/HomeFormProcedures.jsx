import { useState } from 'react'
import '../index.css'

const HomeFormProcedures = ({ onClose, onProcedure }) => {
    const [procedure, setProcedure] = useState("");
    const [err, setErr] = useState("");
    const procedureList = [
        'Add funds', 
        'Add patient', 
        'Add staff', 
        'Assign doctor', 
        'Assign nurse', 
        'Assign room', 
        'Book appointment', 
        'Complete appointment', 
        'Complete orders', 
        'Manage department', 
        'Place order', 
        'Record symptom', 
        'Release room',     
        'Remove patient', 
        'Remove staff from dept'
    ];

    async function handleSubmit(e) {
        e.preventDefault();
        onProcedure(procedure);
        onClose();
    }

    return (
        <div className='homeForm'>
            <p className='text-[2rem] font-bold textDarkGreen text-center'>
                Select a procedure to perform
            </p>       
            <ul className='flex flex-col gap-4 mt-[2rem]'>
                {procedureList.map(p => (
                    <li
                        key={p}
                        className='formListItem'
                        onClick={() => (setProcedure(p), setErr(""))}
                    >
                        <span className={`flex w-4 h-4 rounded-full border-2 align-middle mr-[0.5rem] ${procedure === p ? 'bgGreen' : 'bg-gray-100'}`}></span>
                        <p>{p}</p>
                    </li>
                ))}
            </ul>

            <p className='errText'>{err}</p>

            <div className='formBtnContainer'>
                <button 
                    onClick={handleSubmit}
                    className='formBtnTemplate homeBtn'
                >Input Details</button>
                <button 
                    onClick={onClose}
                    className='formBtnTemplate homeBtn'
                >Close</button>    
            </div>
        </div>
    )
}

export default HomeFormProcedures;