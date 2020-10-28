import React, { createContext, useReducer } from 'react';
import Drone from './pages/drone/drone';
import Produtos from './pages/produtos/produtos';
import './pages/style/title.css';

import { api } from './services/api'

const globalState = {
    produtos: []
};

const GlobalStateContext = createContext(globalState);
const DispatchStateContext = createContext(undefined);

const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        (state, newValue) => ({...state, ...newValue}),
        globalState
    );
    return (
        <GlobalStateContext.Provider value={state}>
            <DispatchStateContext.Provider value={dispatch}>
                {children}
            </DispatchStateContext.Provider>
        </GlobalStateContext.Provider>
    )
}

export const useGlobalState = () => [
    React.useContext(GlobalStateContext),
    React.useContext(DispatchStateContext)
]

function App() {
    return (
        <GlobalStateProvider>
            <div style={{ minHeight: '99vh', maxWidth: '99vw' }}>
                <div className="row">
                    <Drone />
                    <Produtos />
                </div>
            </div>
        </GlobalStateProvider>
    );
}

export default App;
