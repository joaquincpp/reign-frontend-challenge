import { createContext, useState, useEffect } from 'react';

export const Provider = ({ children }) =>{

    let storage = localStorage.getItem('reign.localStorage');

    const [state,setState] = useState({
        tab: JSON.parse(storage)?.tab || "All",
        option: JSON.parse(storage)?.option || undefined,
        page: 1,
        favorites: JSON.parse(storage)?.favorites || [],
    });

    useEffect(() => {
        localStorage.setItem('reign.localStorage', JSON.stringify(state));
      }, [state]);

    return (            
        <AppContext.Provider value={[state,setState]}>
            {children}
        </AppContext.Provider>  
    );
}

export const AppContext = createContext();