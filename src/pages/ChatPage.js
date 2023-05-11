import React from 'react';
import './../styles/login.css'
import './../styles/chats.css'
import MessageInput from '../chatComponents/MessageInput';
import TopBar from '../chatComponents/Topbar';
import Contact from '../chatComponents/Contact';
import ChatsContainer from '../chatComponents/ChatsContainer';

function ChatPage() {
    const mesage1 = { messageId: 1, messageText:"Hey CSS, you're looking stylish today. 😎 What's new?",time:"13:39",sender:1 };
    const mesage2 = { messageId: 2, messageText:"Not much, just making the web pages look pretty 💅 , and singing a song to help learnthe principles of advanced programming 1🎶."
    ,time:"13:40",sender:2 };
    let mesages = [mesage1,mesage2]
    return (
        <div className="background center_content">


            <div className="main">
                <TopBar nameMe="me" nameOther="CSS" myImg="https://www.lbscience.org/wp-content/uploads/2018/07/1-1-e1531677297836-1.jpg" otherImg="https://play-lh.googleusercontent.com/TxjQBGYHvMJsBX5dCvxQ4R-_4N-XrVhW6-p7D7TXanXKZMD8L-UkeMBWO1dtubGVNqU" />
                <div className="content">
                    <div className="contacts">
                        <Contact otherName="CSS" otherImg="https://play-lh.googleusercontent.com/TxjQBGYHvMJsBX5dCvxQ4R-_4N-XrVhW6-p7D7TXanXKZMD8L-UkeMBWO1dtubGVNqU"
                            date="3/31/2023 3:24" lastMsg="Agreed, HTML. Here's to more beautiful websites 🎉" />
                    </div>
                    <div className="chats">
                        <ChatsContainer id={1}messages={mesages}/>
                        <MessageInput />
                    </div>


                </div>

            </div>
        </div>
    );
}

export default ChatPage;