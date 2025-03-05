import React from 'react';
import { motion } from 'framer-motion';

const Login = () => {
    return (
        <div className='w-full h-screen bg-gray-950 flex justify-center items-center font-serif text-xl text-[#57A6A1]'>
            <div className='w-96 h-fit bg-[#020a15] p-4 rounded'>
                <h1 className='text-4xl font-bold mb-4 text-center'>Login</h1>
                <form>
                    <div className='mb-4'>
                        <label className='block'>Email</label>
                        <input type='email' id='email' name='email' className='w-full bg-transparent p-2 border-b-2 outline-none rounded' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='password' className='block'>Password</label>
                        <input type='password' id='password' name='password' className='w-full bg-transparent p-2 border-b-2 outline-none rounded' />
                    </div>

                    <motion.button
                        type="submit"
                        className="w-full mt-2 p-2 bg-[#1679AB] text-white rounded"
                        whileHover={{ scale: 1.05, }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Login
                    </motion.button>

                    <div>
                        <p className='mt-4 text-center'>Don't have an account? <a href='/register' className='text-[#1679AB]'>Register</a></p>
                    </div>

                </form>

            </div>

        </div>
    );
}

export default Login;
