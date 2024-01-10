import React, { useState } from 'react'

const Contact = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>

            <div className='flex justify-center items-center m-auto flex-col pt-24'>
            <h1 className='md:text-3xl text-2xl text-[#1d3044] md:font-bold font-semibold'>Contact us Via</h1>

            <form action="" onSubmit={handleSubmit}
                className='w-[70%] md:w-[400px] py-4 border-2 rounded p-4 my-4 border-[#1d3044]'>
                <input
                    type="text"
                    name='username'
                    placeholder='Name'
                    required
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    className='w-[100%] p-2 mb-2 border-2 rounded' />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className='w-[100%] p-2 mb-2 border-2 rounded' />
                <br />
                <input
                    type="tel"
                    name="phone-number"
                    placeholder='Phone Number'
                    required
                    value={phoneNumber}
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                    className='w-[100%] p-2 mb-2 border-2 rounded' />
                <br />
                <button className='w-[100%] border-2 rounded p-2 mb-2 bg-[#1d3044] text-[#fff]' type='submit'>Submit</button>

            </form><br />

        </div>
        </div>
    )
}

export default Contact
