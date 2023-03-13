import React from 'react';
import MyNavbar from './CNavbar';

const MyHeader = () => {    
    return(
        <header className='header'>
                <div className='logo'></div>
                <MyNavbar/>
        </header>
    )
}
export default MyHeader;