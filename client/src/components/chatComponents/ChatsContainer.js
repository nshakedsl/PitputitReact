import React, { useContext, useEffect, useState } from 'react';
import Mesage from './Message';
import { UserContext } from "../../ctx/userContext"
import { useNavigate } from 'react-router-dom';
import GetMessage from "./GetMessage"

function MessageContainer() {
    const Userctx = useContext(UserContext);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');


    useEffect(() => {
        Userctx.socket.on('receiveMessage', data => {
            setShow(true)
            setText(`${data.responseData.sender.displayName} : ${data.responseData.content}`)
            Userctx.setUser((prevUser) => {
                let temp = { ...prevUser }
                temp.dialogList.find(item => item.user.username === Userctx.currentChatUser.username).lastMessage = data.responseData
                return temp
            })
            Userctx.setCurrentChatId(prevCurrentChatId => {
                if (data.currentChatId === prevCurrentChatId) {
                    Userctx.setCurrentChat(prevCurrentChat => [...prevCurrentChat, data.responseData]);
                }
                return prevCurrentChatId
            })
        });
        Userctx.socket.emit('myuser', Userctx.userName)

        return () => {
            Userctx.socket.off('receiveMessage');
        };
    }, []);


    useEffect(() => {
        getChat()
    }
        , [Userctx.currentChatId])
    const getChat = async () => {

        try {
            const res = await fetch(`http://localhost:8080/api/Chats/${Userctx.currentChatId}/Messages`, {
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })
            if (res.status === 401) {
                localStorage.setItem("token", '')
                navigate('/login')
                return
            }
            else {
                if (res.status === 200) {
                    const responseData = await res.json()
                    Userctx.setCurrentChat(responseData.reverse())
                    return
                }
            }
        } catch (err) {
            console.log('err: ', err);

        }
    }
    return (

        <div className="chats-container" >
            <GetMessage show={show} text={text} setShow={setShow} />
            {Userctx && Userctx.currentChat && Userctx.currentChat && Userctx.currentChat.map((item) => {
                return <Mesage key={item.id} MessageInfo={item} />
            })}
        </div>
    );
}

export default MessageContainer;
