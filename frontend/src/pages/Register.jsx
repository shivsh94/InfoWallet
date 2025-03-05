import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-hot-toast';


const Register = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    const HandleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/register', form);
            console.log(response.data);
            if(response.data.success) {
                toast.success("User registered successfully!")
            }
            else {
                toast.error(" User already exists!")
            }
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='w-full h-screen bg-gray-950 flex justify-center items-center font-serif text-xl text-[#57A6A1]'>
            <div className='w-96 h-fit bg-[#020a15] p-4 rounded'>
                <h1 className='text-4xl font-bold mb-4 text-center'>Register</h1>
                <form >
                    <div className='mb-4'>
                        <label className='block'>Name</label>
                        <input
                            type='text'
                            name='name'
                            onChange={HandleChange}
                            value={form.name}
                            required
                            className='w-full bg-transparent outline-none p-2 border-b-2 rounded' />
                    </div>

                    <div className='mb-4'>
                        <label className='block'>Email</label>
                        <input
                            type='email'
                            name='email'
                            onChange={HandleChange}
                            value={form.email}
                            required
                            className='w-full bg-transparent p-2 border-b-2 outline-none rounded' />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='password' className='block'>Password</label>
                        <input
                            type='password'
                            name='password'
                            onChange={HandleChange}
                            value={form.password}
                            required
                            className='w-full bg-transparent p-2 border-b-2 outline-none rounded' />
                    </div>

                    <motion.button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full mt-2 p-2 bg-[#1679AB] text-white rounded"
                        whileHover={{ scale: 1.05, }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Register
                    </motion.button>

                    <div>
                        <p className='mt-4 text-center'>Already have an account? <a href='/login' className='text-[#1679AB]'>Login</a></p>
                    </div>

                </form>

            </div>

        </div>
    );
}

export default Register;
