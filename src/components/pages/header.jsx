import React, {useState} from 'react'

import { NavLink } from 'react-router-dom';

const Header = () => {
    const [click, SetClick] = useState(false);

    const Open = () => SetClick(!click);
    const Close = () => SetClick(false);

    return (
        <section>
            <header className='header'>
                <div className='logo'>
                    <NavLink to="/">PEPS' CAKE</NavLink>
                </div>
                <nav className={click ? 'navbar active' : 'navbar'}>
                    <li><NavLink to="/" onClick={Close}>Home</NavLink></li>
                    <li><NavLink to="/about" onClick={Close}>About Us</NavLink></li>
                    <li><NavLink to="/contact" onClick={Close}>Contact</NavLink></li>

                </nav>
                <div className='cart'>
                    <button>cart</button>
                </div>
                <div className="hamburger" onClick={Open}>
                    {click ? (<p>X</p>) : (<p>=</p>)}
                </div>

            </header>

        </section>
    )
}

export default Header
