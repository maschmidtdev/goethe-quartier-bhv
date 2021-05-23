import React, { useContext, useState } from 'react';

const NavContext = React.createContext();

export const NavProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log('toggle');
        setIsActive(!isActive);
    };

    return (
        <NavContext.Provider value={{ isActive, handleClick }}>
            {children}
        </NavContext.Provider>
    );
};
// make sure use
export const useNavContext = () => {
    return useContext(NavContext);
};
