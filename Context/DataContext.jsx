import { createContext, useState } from 'react';
import React from 'react';

export const DataContext = createContext();

function DataContextWrapper({ children }) {
    const [total, setTotal] = useState(0);
    const [items, setItems] = useState([]);

    return (
        <DataContext.Provider value={{ total, setTotal, items, setItems }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextWrapper;
