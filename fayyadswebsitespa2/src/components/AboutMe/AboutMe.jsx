import React from 'react'
import './AboutMeStyles.css'

const AboutMe = () => {
    return (
        <div name='aboutme' className='aboutme'>
            <div className="container">
                <div className="top">
                    <h1>About Me</h1>
                </div>
                <div className="bottom">
                    <button className="btn btn-dark">Next</button>
                    <button className="btn">Previous</button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe