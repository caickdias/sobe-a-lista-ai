import React, { useState, useEffect } from 'react';

import AppContext from './AppContext';

import * as DB from '../services/db';

const AppProvider = ({ children }) => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        DB.setList(players);
    }, [players]);

    const addPlayer = player => {
        setPlayers([...players, player])        
    }

    const deletePlayer = name => {
        const updatedPlayers = players.filter(player => player != name);
        setPlayers(updatedPlayers);        
    }

    return(
        <AppContext.Provider value={{ players, setPlayers, addPlayer, deletePlayer }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;