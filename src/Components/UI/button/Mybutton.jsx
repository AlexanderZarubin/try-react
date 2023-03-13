import React from 'react';
import classes from './Mybutton.module.css'
const Mybutton = (props) => {    
    return(
        <button {...props} className={classes.myBtn}>
            {props.children}
        </button>
    )
}

export default Mybutton;