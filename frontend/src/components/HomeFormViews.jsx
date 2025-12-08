import { useState } from 'react'
import '../index.css'

const HomeFormViews = ({ onClose, onData, onTitle }) => {
    const [view, setView] = useState("");
    const [err, setErr] = useState("");
    const viewList = ['Room wise', 'Symptoms overview', 'Medical staff', 'Department', 'Outstanding charges'];
    
    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            let response;
            let data;

            if (view === 'Room wise') {
                response = await fetch('http://localhost:4000/api/rooms');
            } else if (view === 'Symptoms overview') {
                response = await fetch('http://localhost:4000/api/symptoms');
            } else if (view === 'Medical staff') {
                response = await fetch('http://localhost:4000/api/staff');
            } else if (view === 'Department') {
                response = await fetch('http://localhost:4000/api/department');
            } else if (view === 'Outstanding charges') {
                response = await fetch('http://localhost:4000/api/charges');
            } else {
                setErr("*Please select a table before viewing.");
                return;
            }

            if (!response.ok) throw new Error(`Server error: ${response.status}`)

            data = await response.json();
            console.log(data);
            onData(data);
            onTitle(view);
            onClose();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='homeForm'>
            <p className='text-[2rem] font-bold textDarkGreen text-center'>
                Select a table to view
            </p>       
            <ul className='flex flex-col gap-4 mt-[2rem]'>
                {viewList.map(v => (
                    <li
                        key={v}
                        className='formListItem'
                        onClick={() => (setView(v), setErr(""))}
                    >
                        <span className={`flex w-4 h-4 rounded-full border-2 align-middle mr-[0.5rem] ${view === v ? 'bgGreen' : 'bg-gray-100'}`}></span>
                        <p>{v}</p>
                    </li>
                ))}
            </ul>

            <p className='errText'>{err}</p>

            <div className='formBtnContainer'>
                <button 
                    onClick={handleSubmit}
                    className='formBtnTemplate homeBtn'
                >View Table</button>
                <button 
                    onClick={onClose}
                    className='formBtnTemplate homeBtn'
                >Close</button>    
            </div>
        </div>
    );
};

export default HomeFormViews;