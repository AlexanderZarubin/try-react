import React from 'react';
import Mybutton from './UI/button/Mybutton';
const MyNavbar = (props) => {    
    return(
        <nav className="myNav">
                    <a href='/'>
                        <Mybutton>Главная</Mybutton>
                    </a>
                    <a href='/programming'>
                        <Mybutton>Прога</Mybutton>
                    </a>  
                    <a href="/minds">
                        <Mybutton>Мысли</Mybutton>
                    </a>                  
                    <a href="/hobby">
                        <Mybutton>Хобби</Mybutton>
                    </a>                  
                    <a href="/way">
                        <Mybutton>Путь</Mybutton>
                    </a>                  
                </nav>
    )
}
export default MyNavbar;