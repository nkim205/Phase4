import { useState } from 'react';
import '../index.css';

const ViewTable = ({ data, onClose }) => {
    if (!data || data.length === 0) return (<div>No Data Available</div>);

    const headers = Object.keys(data[0]);
    console.log(headers);

    return (
        <div className='flex flex-col mt-[0.25rem]'>
            <table className='min-w-full border-collapse border borderGreen'>
                <thead>
                    <tr>
                        {headers.map((h) => (
                            <th
                                key={h}
                                className='border borderDarkGreen text-left font-bold text-[1.25rem] py-[0.5rem] pl-[0.5rem] bgGreen'
                            >{h.replace(/_/g, " ")}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => (
                        <tr
                            key={idx}
                        >
                            {headers.map((h) => (
                                <td
                                    key={h}
                                    className={`border borderGreen text-left text-[1rem] py-[0.5rem] pl-[0.5rem] ${idx % 2 != 0 ? 'bgLightGreen' : ''}`}
                                >
                                    {row[h]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='flex justify-start mt-[0.75rem]'>
                <button
                    onClick={() => onClose()}
                    className='closeTableBtn'
                >
                    Close Table
                </button>
            </div>
        </div>
    );
};

export default ViewTable;