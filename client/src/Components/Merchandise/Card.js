import React from 'react'
import styles from '../../Pages/Merchandise/Merchandise.module.css'

function Card(props) {
    return (
 
        <div className={'col s12 m6 l4 ' + styles.zoom} style={{padding:'2%'}}>
                    <div className={"card "+styles.cardSize} >
                <div className="card-image" >
                            <img src={props.img}/>
        </div>
                <div className="card-content" style={{ backgroundColor: 'whitesmoke',fontWeight:'bold' }}>
                    {props.title}
                    <a class="waves-effect waves-light btn grey lighten-4 black-text right">{props.price}</a>
                            </div>
                <div className="card-action " style={{ backgroundColor: 'whitesmoke' }}>
                    <a class="waves-effect waves-light btn black white-text">ORDER NOW</a>
                            </div>
                    </div>
                    </div>
    )
}

export default Card
