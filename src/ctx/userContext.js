import React, { useState } from "react";


export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {

    const [userName, setUserName] = useState(null);
    const [userList, setUserList] = useState([]);

    const getCurrentUser = () => userList.find(element => element.userName === userName)


    const ctxuValue = {
        userName,
        setUserName,
        userList,
        setUserList,
        getCurrentUser
    };

    return (
        <UserContext.Provider value={ctxuValue}>{children}</UserContext.Provider>
    );
};
