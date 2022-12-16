import React, { useState } from 'react';

import AppContext from './AppContext';

const AppProvider = ({ children }) => {

    const [players, setPlayers] = useState([]);

    return(
        <AppContext.Provider value={{ players, setPlayers }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;