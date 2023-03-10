import React from 'react';
import classes from './Mybutton.module.css'
const Mybutton = (props) => {    
    return(
        <div>
            <a href={props.href}>
                <button {...props} className={classes.myBtn}>
                    {props.children}
                </button>
            </a>
        </div>
    )
}

export default Mybutton;