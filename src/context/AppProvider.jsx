import React, { useContext } from 'react';

import AppContext from './AppContext';

const AppProvider = ({ children }) => {

    return(
        <AppContext.Provider values={{}}>
            {children}
        </AppContext.Provider>
    )
}