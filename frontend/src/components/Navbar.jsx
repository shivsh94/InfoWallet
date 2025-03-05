import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    return (

        <motion.div
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: -210, opacity: 1 }}
            whileHover={{ x: 0, }}
            transition={{ duration: 1 }}
            className='absolute w-1/5 h-full font-serif bg-gradient-to-r from-gray-900 via-blue-950 to-gray-950 pt-20 top-0 left-0 text-white grid grid-cols-6 justify-end items-start '>

            <div className='w-full col-span-5 bg-amber-60'>
                <div className='w-full h-20  flex justify-center items-center gap-5 text-3xl font-extrabold bg-amber-50 text-transparent bg-clip-text'>
                    <p>InfoWallet</p>
                </div>

                <div className='w-full h-20  flex justify-center items-center gap-5 text-3xl hover:text-red-900'>
                    <button onClick={() => navigate('/')} className='cursor-pointer'>Home</button>
                </div>
                <div className='w-full h-20  flex justify-center items-center gap-5 text-3xl hover:text-red-900'>
                    <button onClick={() => navigate('/login')} className='cursor-pointer'>Login</button>
                </div>
                <div className='w-full h-20  flex justify-center items-center gap-5 text-3xl hover:text-red-900'>
                    <button onClick={() => navigate('/login')} className='cursor-pointer'>Login</button>
                </div>
                <div className='w-full h-20  flex justify-center items-center gap-5 text-3xl  hover:text-red-900'>
                    <button onClick={() => navigate('/login')} className='cursor-pointer'>Login</button>
                </div>
            </div>


            <div className='w-full col-span-1 bg-amber-60 flex flex-col justify-end'>
                <div
                    className='w-full h-20  flex justify-center items-center text-3xl pr-5'>
                    <Menu size='32' color='white' />
                </div>
                <div className='w-full h-20  flex justify-center items-center gap-5 text-3xl pr-5 cursor-pointer'>
                    <Home onClick={() => navigate('/')} size='32' color='white' />
                </div>
                <div className='w-full h-20  flex justify-center items-center gap-5 text-3xl pr-5 cursor-pointer'>
                    <User onClick={() => navigate('/login')} size='32' color='white' />
                </div>
                <div className='w-full h-20  flex justify-center items-center gap-5 text-3xl pr-5 cursor-pointer'>
                    <User onClick={() => navigate('/login')} size='32' color='white' />
                </div>
                <div className='w-full h-20  flex justify-center items-center gap-5 text-3xl pr-5 cursor-pointer'>
                    <User onClick={() => navigate('/login')} size='32' color='white' />
                </div>
            </div>

        </motion.div>
    );
}

export default Navbar;
