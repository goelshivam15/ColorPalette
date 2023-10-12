import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="top">
                <h1>GERUA</h1>
                <p>© Colors UI by <a href='/'>SHIVAM GOEL</a></p>
            </div>
            <div className="bottom">
                <p>Privacy Policy</p>
                <div className="links">
                    <a href="https://github.com/goelshivam15">
                        <FaGithub className='footer-icons' size={19} />
                    </a>
                    <a href="https://www.linkedin.com/in/shivam-goel1509/">
                        <FaLinkedinIn className='footer-icons' size={19} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer