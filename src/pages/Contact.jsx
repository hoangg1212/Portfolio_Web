import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
    return (
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>
                    About Me
                </h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <div className='flex-1'>
                        <h3>hihi</h3>
                        <p>scdgscshsa svhahbv hba</p>
                        <div className='mb-4 mt-8'>
                            <FaEnvelope className='inline-block text-green-400 mr-2' />
                            <a href='mailto:hihi@gmail.com' className='hover:underline'>hihi@gmai.com</a>
                        </div>
                        <div className='mb-4'>
                            <FaPhone className='inline-block text-green-400 mr-2' />
                            <span>01234</span>
                        </div>
                        <div className='mb-4'>
                            <FaMapMarkerAlt className='inline-block text-green-400 mr-2' />
                            <span>gshhsshss</span>
                        </div>
                    </div>

                    <div className='flex-1 w-full'>
                        <form className='space-y-4'>
                            <div>
                                <label htmlFor='name'>Yoru name</label>
                                <input
                                    type='text'
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter you name' />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2'>Email</label>
                                <input
                                    type='email'
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter emai' />
                            </div>
                            <div>
                                <label htmlFor='message' className='block mb-2'>message</label>
                                <textarea
                                    type='text'
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    rows='S'
                                    placeholder='Enter you name' />
                            </div>
                            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
