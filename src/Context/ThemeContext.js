import React, { useState } from 'react';

const ThemeContext = React.createContext({});

export function ThemeContextProvider (props){
    const [theme, setTheme] = useState({
        mode: 'light',
        background: '#EEE',
        color: '#080412'
    });
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;