import React, { useState } from "react";


export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {

    const [userId, setUserId] = useState(null);
    const [userList, setUserList] = useState([]);

    const ctxuValue = {
        userId,
        setUserId,
        userList,
        setUserList
    };

    return (
        <UserContext.Provider value={ctxuValue}>{children}</UserContext.Provider>
    );
};
