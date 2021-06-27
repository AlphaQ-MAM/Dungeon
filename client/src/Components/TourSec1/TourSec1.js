import React, { useEffect, useState } from 'react';
import TourCards from '../TourCards/TourCards';
import M from 'materialize-css';

const TourSec1 = () => {
    const [type, setType] = useState('Live')
    useEffect(() => {

        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);

    }, []);
    return (
        <>
            <div className='row center' style={{ marginTop: '0%', paddingLeft: '15%', paddingRight: '10%', paddingTop: '2%', backgroundColor: '#161d22', paddingBottom: '2%', marginBottom: '0' }}>
                <div className="col s12 l3 m3">
                    <label>Region</label>
                    <select className="browser-default">
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">India</option>
                        <option value="2">Israel</option>
                        <option value="3">Palestine</option>
                    </select>
                </div>
                <div className="col l1"></div>
                <div className="col s12 l3 m3">
                    <label>Type</label>
                    <select
                        className="browser-default"
                        onChange={e => {
                            setType(e.target.value)
                        }}
                    >
                        <option value="" disabled selected>Choose your option</option>
                        <option value="Live">Live</option>
                        <option value="Upcoming">Upcoming</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="col l1"></div>

                <div className="col s12 l3 m3">
                    <label>Language</label>
                    <select className="browser-default">
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">English</option>
                        <option value="2">Persian</option>
                        <option value="3">German</option>
                    </select>
                </div>
            </div>
            <TourCards type={type} />
        </>
    )
}

export default TourSec1
