import React from 'react';
import { Upload } from 'lucide-react';

const Home = () => {
    return (
        <div className="w-full h-screen bg-black text-white flex">
            <div className='w-full min-h-fit bg-black flex justify-end items-start m-5'>
                <label className='cursor-pointer flex flex-col items-center text-white p-4 border border-gray-500 rounded-lg hover:bg-gray-800 transition'>
                    <Upload size={32} />
                    <span className='mt-2 w-fit h-fit'>Upload File</span>
                    <input type='file'
                        name='file'
                        accept='.jpg, .jpeg, .png , .pdf'
                        
                        className='hidden'
                    />
                </label>
            </div>
        </div>
    );
}

export default Home;
