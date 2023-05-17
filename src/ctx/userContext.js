import React, { useEffect, useState } from "react";


export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {

    const [userName, setUserName] = useState(null);
    const [userList, setUserList] = useState([]);
    const [curChat, setCurChat] = useState([]);
    const [user, setUser] = useState({});
    const [currentChat, setCurrentChat] = useState(undefined);
    useEffect(() => {
        setUser(getCurrentUser())
    }, [userName])
    const getCurrentUser = () => userList.find(element => element.userName === userName)
    const findUserByName = (name) => userList.find(element => element.userName === name)

    const ctxuValue = {
        userName,
        setUserName,
        userList,
        setUserList,
        curChat,
        setCurChat,
        findUserByName,
        user,
        setUser,
        currentChat,
        setCurrentChat

    };

    return (
        <UserContext.Provider value={ctxuValue}>{children}</UserContext.Provider>
    );
};
