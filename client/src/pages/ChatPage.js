import React, { useContext, useEffect } from 'react';
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
                    getContacts()
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
                if ((!Userctx.user) || (Userctx && Userctx.user && Object.keys(Userctx.user).length === 0)) {
                    getUserDetails(Userctx.userName);
                    getContacts()
                }
            }


        }



    }, []);


    const getContacts = async () => {
        try {
            const res = await fetch(`http://localhost:8080/api/Chats/`, {
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
                    Userctx.setUser((prevUser) => {
                        let temp = { ...prevUser }
                        temp.dialogList = responseData
                        return temp
                    })
                    return responseData
                }
            }

        }
        catch (err) {
            console.log('err: ', err);

        }
    }
    const getUserDetails = async (username) => {
        try {
            const res = await fetch(`http://localhost:8080/api/Users/${username}`, {
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
                    Userctx.setUser(responseData)
                    return responseData
                }
            }

        }
        catch (err) {
            console.log('err: ', err);

        }
    }


    const calcDisplayDate = (curDate) => {
        const date = new Date(curDate);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1); // Set yesterday's date

        if (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        ) {
            return getTime(date);
        } else if (
            date.getDate() === yesterday.getDate() &&
            date.getMonth() === yesterday.getMonth() &&
            date.getFullYear() === yesterday.getFullYear()
        ) {
            return 'yesterday';
        }

        return date.toLocaleDateString();
    }

    const getTime = (t) => {
        // Create a new Date object
        var currentDate = t;

        // Get the current hours and minutes
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();

        // Format the hours and minutes with leading zeros if necessary
        var formattedHours = hours < 10 ? '0' + hours : hours;
        var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

        // Create the final time string
        var time = formattedHours + ':' + formattedMinutes;

        return time// Output: "hh:mm" format of the current time
    }
    return (

        <div className="background center_content">
            <div className="main">
                <TopBar
                    otherName={Userctx && Userctx.currentChatUser && Userctx.currentChatUser.displayName}
                    otherImg={Userctx && Userctx.currentChatUser && Userctx.currentChatUser.profilePic ?
                        Userctx.currentChatUser.profilePic : ''} />
                <div className="content">
                    <div className="contacts">

                        {
                            Userctx && Userctx.user && Userctx.user.dialogList && Userctx.user.dialogList.map(
                                item => {
                                    let lastMessage = item.lastMessage
                                    return lastMessage ?
                                        <Contact
                                            key={item.id}
                                            otherName={item && item.user && item.user.displayName}
                                            otherImg={item && item.user && item.user.profilePic}
                                            date={calcDisplayDate(lastMessage.created)}
                                            lastMsg={lastMessage.content}
                                            chatId={item.id}
                                            user={item.user}
                                        />
                                        :
                                        <Contact
                                            key={item.id}
                                            otherName={item.user.displayName}
                                            otherImg={item.user.profilePic}
                                            date=''
                                            lastMsg=''
                                            chatId={item.id}
                                            user={item.user}

                                        />

                                })


                        }
                    </div>

                    {

                        Userctx && Userctx.currentChatId === undefined ?
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