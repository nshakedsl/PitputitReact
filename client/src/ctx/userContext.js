import React, { useEffect, useState } from "react";


export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {

    const [userName, setUserName] = useState(null);
    const [userList, setUserList] = useState([]);
    const [user, setUser] = useState({});
    const [currentChat, setCurrentChat] = useState(undefined);
    const [currentChatId, setCurrentChatId] = useState(undefined);
    const [currentChatUser, setCurrentChatUser] = useState(undefined);
    const [socket, setSocket] = useState(undefined)
    const [checkboxChecked, setCheckboxChecked] = useState(true)

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
        findUserByName,
        user,
        setUser,
        currentChat,
        setCurrentChat,
        currentChatId,
        setCurrentChatId,
        currentChatUser,
        setCurrentChatUser,
        checkboxChecked,
        setCheckboxChecked,
        socket,
        setSocket
    };

    return (
        <UserContext.Provider value={ctxuValue}>{children}</UserContext.Provider>
    );
};
