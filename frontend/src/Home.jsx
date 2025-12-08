import { useState } from 'react'
import './index.css'
import HomeFormViews from './components/HomeFormViews';
import ViewTable from './components/ViewTable';
import HomeFormProcedures from './components/HomeFormProcedures';
import ProcedureInputForms from './components/ProcedureInputForms';

const Home = () => {
    const [viewForm, setViewForm] = useState(false);
    const [viewData, setViewData] = useState(null);
    const [viewTitle, setViewTitle] = useState('');

    const [procedureForm, setProcedureForm] = useState(false);
    const [procedure, setProcedure] = useState("");

    return (
        <div className='bgBabyGreen min-w-full w-screen min-h-fit h-screen flex flex-col'>
            <p className='w-screen text-center p-[2rem] text-[2.5rem] font-bold textDarkGreen'>Welcome to the Emergenecy Room Database Management System!</p>
            <p className='px-[2rem] text-[1.75rem] font-bold textDarkGreen'>Select the operation you want to perform</p>
            <div className='w-screen px-[2rem] flex flex-row gap-[1rem]'>
                <button 
                    className='homeBtn'
                    onClick={() => setViewForm(true)}
                >View Tables</button>

                <button 
                    className='homeBtn'
                    onClick={() => setProcedureForm(true)}
                >Do Procedure</button>
            </div>

            {viewForm && (
                <div className='modal-overlay'>
                    <HomeFormViews 
                        onClose={() => setViewForm(false)}
                        onData={(data) => setViewData(data)}
                        onTitle={(title) => setViewTitle(title)}
                    ></HomeFormViews>
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

            {procedureForm && (
                <div className='modal-overlay'>
                    <HomeFormProcedures
                        onClose={() => setProcedureForm(false)}
                        onProcedure={(procedure) => setProcedure(procedure)}
                    ></HomeFormProcedures>
                </div>
            )}

            {procedure != "" && (
                <div className='modal-overlay'>
                    <ProcedureInputForms
                        type={procedure}
                        onClose={() => setProcedure("")}
                    ></ProcedureInputForms>
                </div>
            )}
        </div>
    );
};

export default Home;