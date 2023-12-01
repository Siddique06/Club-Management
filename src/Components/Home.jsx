import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className="bc">
            <div className='Heading'>
                <h1>BURN' YOUR NIGHT</h1>
            </div>
            <div className="desc">
                <h4>Nightclubs are the perfect escape from reality,where the beats of the</h4>
                <div className="wesy">
                    <h4>music and the energy of the crowd take over.</h4>
                </div>

            </div>
            <div className="button">
                <button type="submit">MAKE AN ORDER</button>
            </div>
            <div className="events">
                <h4>See our events</h4>
            </div>
        </div>
    )
}
export default Home;