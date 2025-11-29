import { useState } from 'react'
import './index.css'
import HomeForm from './components/HomeForm';
import ViewTable from './components/ViewTable';

const Home = () => {
    const [showForm, setShowForm] = useState(false);
    const [viewData, setViewData] = useState(null);
    const [viewTitle, setViewTitle] = useState('');

    return (
        <div className='bgBabyGreen min-w-full w-screen min-h-fit h-screen flex flex-col'>
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
                        onData={(data) => setViewData(data)}
                        onTitle={(title) => setViewTitle(title)}
                    ></HomeForm>
                </div>
            )}

            {viewData && (
                <div className='mx-[2rem] my-[2rem]'>
                    <p className='font-bold text-[2rem] textDarkGreen underline'>{viewTitle} view:</p>
                    <ViewTable
                        data={viewData?.data}
                        onClose={() => setViewData(null)}
                    ></ViewTable>
                </div>
            )}
        </div>
    );
};

export default Home;