import React from 'react';
//import { useState } from 'react';
import './styles/App.css'
import Mybutton from './Components/UI/button/Mybutton';
function App() {
    return(
        <div className='App'>
            <header className='header'>
                <div className='logo'></div>
                <nav className='buttons-container'>
                    <Mybutton href="https://vk.com/mister_anub">Главная</Mybutton>
                    <Mybutton href="https://vk.com/e.prikhodko0">Прога</Mybutton>
                    <Mybutton>Мысли</Mybutton>
                    <Mybutton>Хобби</Mybutton>
                    <Mybutton>Путь</Mybutton>
                </nav>
            </header>
            <div className='main-part'>
                    <div className='picture-part'>
                        <div>
                            <div className='image-place'></div>
                        </div>
                    </div>
                    <div className='description-part'>
                        <div className='description'>
                            <h1>
                                1 Курс
                            </h1>
                            <div className='text'>
                                <p >
                                    mfjnvfdivdfvnifjnvifnvijndfjnvfjidnvijdnfvifdni
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );

}
export default App;