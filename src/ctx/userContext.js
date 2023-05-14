import React, { useState } from "react";


export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {

    const [userName, setUserName] = useState(null);
    const [userList, setUserList] = useState([]);

    const ctxuValue = {
        userName,
        setUserName,
        userList,
        setUserList
    };

    return (
        <UserContext.Provider value={ctxuValue}>{children}</UserContext.Provider>
    );
};
