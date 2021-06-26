import React, { useEffect } from 'react';
import './Navigation.css'
import Maze from '../../Images/maze.png';
import Dungeon from '../../Images/dungeon.png';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
const Navbar = () => {
    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);

    }, []);
    return (
        <div>
            <nav style={{ height: '80px' }}>
                <div className="nav-wrapper black">
                    {/* <span style={{ fontSize: '90%' }}>JU-Placements</span> */}
                    <a href="/" className="brand-logo hover-switch">
                        <img alt="Dungeons" src={Maze} style={{ height: '60px', width: '60px', marginLeft: '20px', marginTop: '10px' }} />
                        <img alt="Dungeons" src={Dungeon} style={{ height: '60px', width: '60px', marginLeft: '20px', marginTop: '10px' }} />
                    </a>
                    <div class="vertical"></div>
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down" style={{ verticalAlign: 'baseline' }}>
                        <li><Link className="btn black" to="/agents">Agents</Link></li>
                        <li><Link className="btn black" to="/news">News</Link></li>
                        <li><Link className="btn black" to="/merch">Merch</Link></li>
                        <li><Link className="btn black" to="/leader">LearderBoard</Link></li>
                        <li><Link className="btn black" to="/tournaments">Tournaments</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav black" id="mobile-demo">
                <li><Link className="btn black" to="/agents">Agents</Link></li>
                <li><Link className="btn black" to="/news">News</Link></li>
                <li><Link className="btn black" to="/merch">Merch</Link></li>
                <li><Link className="btn black" to="/leader">LearderBoard</Link></li>
                <li><Link className="btn black" to="/tournaments">Tournaments</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;