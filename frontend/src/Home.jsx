import { useState } from 'react'
import './index.css'
import HomeForm from './components/HomeForm';

const Home = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className='bgBabyGreen w-screen h-screen flex flex-col'>
            <p className='w-screen text-center p-[2rem] text-[2.5rem] font-bold textDarkGreen'>Welcome to the Emergenecy Room Database Management System!</p>
            <p className='px-[2rem] text-[1.75rem] font-bold textDarkGreen'>Select the operation you want to perform</p>
            <div className='w-screen px-[2rem] flex flex-row gap-[1rem]'>
                <button 
                    className='homeBtn'
                    onClick={() => setShowForm(true)}
                >View Tables</button>
                <button className='homeBtn'>Do Procedure</button>
            </div>

            {showForm && (
                <div className='modal-overlay'>
                    <HomeForm 
                        onClose={() => setShowForm(false)}
                    ></HomeForm>
                </div>
            )}
        </div>
    )
}

export default Home;