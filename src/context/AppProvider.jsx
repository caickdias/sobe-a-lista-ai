import React, { useState } from 'react';

import AppContext from './AppContext';

const AppProvider = ({ children }) => {

    const [players, setPlayers] = useState([]);

    const addPlayer = player => {
        setPlayers([...players, player])
    }

    return(
        <AppContext.Provider value={{ players, addPlayer }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;