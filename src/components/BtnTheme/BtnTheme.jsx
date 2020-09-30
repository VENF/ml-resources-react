import React, { useContext } from 'react';
import ThemeContext from '../../Context/ThemeContext';
/*Icons*/
import IconMoon from '../Icons/IconMoon';
import IconSun from '../Icons/IconSun';
/*Icons*/
import './style.css';

const BtnTheme = () => {
    const theme = useContext(ThemeContext);
    const handlerTheme = () => {
        if(theme.theme.mode === 'light'){
            theme.setTheme({
                mode: 'dark',
                background: '#080412',
                color: '#EEE'
            })
        }else{
            theme.setTheme({
                mode: 'light',
                background: '#EEE',
                color: '#080412'
            })
        }
    }
    return (
        <button className="btn-switch-theme" onClick={handlerTheme}>
           <div className={`light ${theme.theme.mode === 'light'? 'active': 'waiting'}`}>
               <IconSun 
               width="18" 
               heigth="18" 
               color={
                   theme.theme.mode === 'light'? '#580DF6': '#a7a7a7'
               }/>
           </div>
           <div className={`dark ${theme.theme.mode === 'dark'? 'active': 'waiting'}`}>
               <IconMoon 
               width="18" 
               heigth="18" 
               color={
                theme.theme.mode === 'dark'? '#580DF6': '#a7a7a7'
               }/>
           </div>
        </button>
    )
}

export default BtnTheme;
