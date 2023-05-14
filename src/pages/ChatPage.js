import React from "react";
import './../styles/login.css'
import './../styles/chats.css'
import MessageInput from '../components/chatComponents/MessageInput';
import TopBar from '../components/chatComponents/Topbar';
import Contact from '../components/chatComponents/Contact';
import ChatsContainer from '../components/chatComponents/ChatsContainer';


function ChatPage() {


    const mesage1 = { name : Userctx.userName, messageText: "Hey CSS, you're looking stylish today. 😎 What's new?", time: "13:39" };
    const mesage2 = {
        name: "2", messageText: "Not much, just making the web pages look pretty 💅 , and singing a song to help learnthe principles of advanced programming 1🎶."
        , time: "13:40"
    };
    let mesages = [mesage1, mesage2]
    return (
        <div className="background center_content">
            <div className="main">
                <TopBar nameOther="CSS" otherImg="https://play-lh.googleusercontent.com/TxjQBGYHvMJsBX5dCvxQ4R-_4N-XrVhW6-p7D7TXanXKZMD8L-UkeMBWO1dtubGVNqU" />
                <div className="content">
                    <div className="contacts">
                        <Contact otherName="CSS" otherImg="https://play-lh.googleusercontent.com/TxjQBGYHvMJsBX5dCvxQ4R-_4N-XrVhW6-p7D7TXanXKZMD8L-UkeMBWO1dtubGVNqU"
                            date="3/31/2023 3:24" lastMsg="Agreed, HTML. Here's to more beautiful websites 🎉" />
                    </div>
                    <div className="chats" style={{ backgroundImage: `url("/images/chat-background.png")` }}>
                        <ChatsContainer messages={mesages} />
                        <MessageInput messages={mesages}/>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default ChatPage;