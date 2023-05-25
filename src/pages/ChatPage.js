import React, { useContext, useEffect, useState } from 'react';
import './../styles/login.css'
import './../styles/chats.css'
import MessageInput from '../components/chatComponents/MessageInput';
import TopBar from '../components/chatComponents/Topbar';
import Contact from '../components/chatComponents/Contact';
import ChatsContainer from '../components/chatComponents/ChatsContainer';
import { UserContext } from "../ctx/userContext"
import { useNavigate } from 'react-router-dom';


function ChatPage() {


    const Userctx = useContext(UserContext);
    const [contact, setContact] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        // no token
        if (!localStorage.getItem("token")) {
            navigate('/login')
        }
        // have token
        else {
            // no name
            if (!Userctx.userName) {
                if (localStorage.getItem("username")) {
                    Userctx.setUserName(localStorage.getItem("username"))
                    getUserDetails(localStorage.getItem("username"))
                }
                // no name in local storage
                else {
                    localStorage.setItem("token", '')
                    navigate('/login')
                }
            }
            // have name
            else {
                // no user details
                if (!Userctx.user || Userctx && Userctx.user && Object.keys(Userctx.user).length === 0) {
                    getUserDetails(Userctx.userName);
                }
            }


        }



    }, []);



    const getUserDetails = async (username) => {
        try {
            const res = await fetch(`http://localhost:5000/api/Users/${username}`, {
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })
            if (res.status === 401) {
                navigate('/login')
                return
            }
            else {
                if (res.status === 200) {
                    const responseData = await res.json()
                    Userctx.setUser(responseData)
                    return responseData
                }
            }

        }
        catch (err) {
            console.log('err: ', err);

        }
    }

    useEffect(() => {
        if (Userctx && Userctx.currentChat)
            setContact(Userctx.findUserByName(Userctx.currentChat.user2))

    }, [Userctx.currentChat])

    return (

        <div className="background center_content">
            <div className="main">
                <TopBar otherName={contact.nick} otherImg={contact.image ? contact.image : ''} />
                <div className="content">
                    <div className="contacts">

                        {
                            Userctx && Userctx.user && Userctx.user.dialogList && Userctx.user.dialogList.map(
                                item => {
                                    let contact = Userctx.findUserByName(item.user2)
                                    let lastMessage = item.messages && item.messages.at(-1)
                                    return lastMessage ?
                                        <Contact
                                            key={contact.userName}
                                            otherName={contact.nick}
                                            otherImg={contact.image}
                                            date={lastMessage.time}
                                            lastMsg={lastMessage.messageText}
                                            dialog={item} />
                                        :
                                        <Contact
                                            key={contact.userName}
                                            otherName={contact.nick}
                                            otherImg={contact.image}
                                            date=''
                                            lastMsg=''
                                            dialog={item}
                                        />

                                })


                        }
                    </div>

                    {

                        Userctx && Userctx.currentChat == undefined ?
                            <div className=" before_chats">
                                <img src="images/logo-color.svg" className="logo_big" alt="default_user" />
                            </div>
                            :
                            <div className="chats" style={{
                                backgroundColor: !Userctx.checkboxChecked ? "black" : "#EFEAE2",
                                backgroundImage: `url("/images/chat-background.png")`
                            }}>
                                <ChatsContainer />
                                <MessageInput />

                            </div>
                    }


                </div>

            </div>
        </div >
    );
}

export default ChatPage;