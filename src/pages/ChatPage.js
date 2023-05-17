import React, { useContext, useEffect, useState } from 'react';
import './../styles/login.css'
import './../styles/chats.css'
import MessageInput from '../components/chatComponents/MessageInput';
import TopBar from '../components/chatComponents/Topbar';
import Contact from '../components/chatComponents/Contact';
import ChatsContainer from '../components/chatComponents/ChatsContainer';
import { UserContext } from "../ctx/userContext"


function ChatPage() {
    const Userctx = useContext(UserContext);
    const [contact, setContact] = useState({});
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



                    {console.log('Userctx.currentChat: ', Userctx.currentChat)}
                    {

                        Userctx && Userctx.currentChat == undefined ?
                            <div className=" before_chats">
                                <img src="images/logo-color.svg" className="logo_big" alt="default_user" />
                            </div>
                            :
                            <div className="chats" style={{ backgroundImage: `url("/images/chat-background.png")` }}>
                                <ChatsContainer />
                                <MessageInput />

                            </div>
                    }


                </div>

            </div>
        </div>
    );
}

export default ChatPage;