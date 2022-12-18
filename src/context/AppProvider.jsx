import React, { useState } from 'react';

import AppContext from './AppContext';

const AppProvider = ({ children }) => {

    const [players, setPlayers] = useState([]);

    const addPlayer = player => {
        setPlayers([...players, player])
    }

    const deletePlayer = name => {
        const updatedPlayers = players.filter(player => player != name);
        setPlayers(updatedPlayers);
    }

    return(
        <AppContext.Provider value={{ players, addPlayer, deletePlayer }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;