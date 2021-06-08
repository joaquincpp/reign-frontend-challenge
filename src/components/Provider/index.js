import { createContext, useState } from 'react';

export const Provider = ({ children }) =>{
    const [state,setState] = useState({
        tab: "All",
        option: undefined,
        page: 1,
        favorites: [],
    });
    return (            
        <AppContext.Provider value={[state,setState]}>
            {children}
        </AppContext.Provider>  
    );
}

export const AppContext = createContext();