import React, { useEffect, useReducer } from 'react'

export default (reducer, actions, initState, initCallback) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initState);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        if (initCallback) {
            useEffect(() => {
                initCallback(dispatch);
            }, []);
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };

    return { Context, Provider };
}