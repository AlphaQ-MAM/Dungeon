import React from 'react'
import err from '../Images/404.svg';

const error = () => {
    return (
        <div className="row container" style={{ height: '60vh' }}>
            <div className="col l6 m6 s12">
                <h1>404 page does not exist</h1>
            </div>
            <div className="col l6 m6 s12" >
                <img src={err} alt="ERROR" style={{ width: '50%', height: 'auto', marginTop: '5%' }} />
            </div>
        </div>
    )
}

export default error