import React, { useEffect } from 'react'
import Card from '../../Components/Merchandise/Card'
import M from 'materialize-css';
import styles from './Merchandise.module.css'
import SideDrawer from '../../Components/SideDrawer/SideDrawer'

function Merchandise() {

    useEffect(() => {
            var elems = document.querySelectorAll('.parallax');
            M.Parallax.init(elems);
    },);
    return (
        <div>
            <div>
                <div id="parallax" className="parallax-container" >
                    <div className="parallax">
                        <img src="dungeonmerch.jpg" alt="source_img" className="responsive-img" />
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '50px' }}  >
                    <SideDrawer/>
                </div>
                <div className={"whitesmoke "+styles.box}>
                <div className="row" style={{height:'50%'}}>
                    <Card img="merch1.jfif" title="DUNGEON MASTER T-SHIRT" price="1000" />
                        <Card img="merch2.jpg" title="DUNGEON MASTER T-SHIRT" price="1200"/>
                        <Card img="merch3.jpg" title="DUNGEON MASTER T-SHIRT" price="1500"/>
                </div>
                <div className="row">
                        <Card img="merch4.jfif" title="DUNGEON JETT MODEL" price="2000" />
                        <Card img="merch5.jfif" title="DUNGEON OMEN MODEL" price="2500" />
                        <Card img="merch6.jfif" title="DUNGEON PHOENIX MODEL" price="3000" />
                </div>
                <div className="row">
                        <Card img="merch7.jfif" title="DUNGEON MOUSEPAD" price="700" />
                        <Card img="merch8.jfif" title="DUNGEON PILLOW" price="1000" />
                        <Card img="merch9.jpg" title="DUNGEON BAG" price="2500" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Merchandise
