
import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../../Pages/News/News.module.css'


function NewsComponentRight(props) {
    return (
        <div className="row" style={{textAlign:'center'}} >
            <div className={'col s12 l6 push-l6 ' + styles.hovering}>
                <img src={props.img} alt={props.alt} className="responsive-img  materialboxed" />
            </div>
            <div className="col s12 l6 pull-l6">
                <h4 className="white-text" style={{ fontWeight: 'bold'}}>{props.title}</h4>
                <p className="white-text">A story is basically a narrating of real or imaginary events, involving real or imaginary people. A story needs to be represented in words necessarily. Even images or moving pictures (movies) can narrate a story. A story is generally designed to entertain, and/or send a message across.</p>
                <Link className={'waves-effect waves-light btn ' + styles.buttonColor} to="#">View More</Link>
            </div>
        </div>
    )
}

export default NewsComponentRight

