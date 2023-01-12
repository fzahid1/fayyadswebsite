import React from 'react'
import './AboutMeStyles.css'
import { Typewriter } from 'react-simple-typewriter'

const AboutMe = () => {
    return (
        <div name='aboutme' className='aboutme'>
            <div className="container">
                <div className="top">
                    <h1>About Me</h1>
                </div>
                <div className='body'>
                    <Typewriter 
                    words={'Hello, '} />
                </div>
                <div className="bottom">
                    <button className="btn btn-dark">Replay</button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe