import React from 'react'
import usePeps from './peps'

const About = () => {

    const {cake,className} = usePeps({
        cake: "Welcome to PEP'S CAKE, a place where you can make you choice for any type of event program, ranging from birthday, wedding, child dedication anniversary and other events. Our price is very affordate.Rush now to PEP'S CAKE and make your choice.",
        className: "m-auto flex flex-col py-8 md:px-24 px-8"
    });
    return (
        <div className=''>
            <h1 className='text-center font-semibold mb-4'>About Us</h1>

            <div className={className}>{ cake}</div>
        </div>
    )
}

export default About
