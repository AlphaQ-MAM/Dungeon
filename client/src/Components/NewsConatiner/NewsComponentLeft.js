import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../Pages/News/News.module.css'


function NewsComponentLeft(props) {
    return (
        <div className="row" style={{ textAlign: 'center' }} >
            <div className={'col s12 l6 ' + styles.hovering}>
                <img className="responsive-img materialboxed" src={props.img} alt={props.alt} />
            </div>
            <div className="col s12 l6 ">
                <h4 className="white-text">{props.title}</h4>
                {props.children}
                <Link className={'waves-effect waves-light btn ' + styles.buttonColor} to="#">View More</Link>
            </div>
        </div>
    )
}

export default NewsComponentLeft
