import './../styles/login.css'
import './../styles/chats.css'
import MessageInput from '../chatComponents/MessageInput';
import TopBar from '../chatComponents/Topbar';
import Contact from '../chatComponents/Contact';
import MessageContainer from '../chatComponents/ChatsContainer';

function ChatPage() {
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
                        <MessageContainer id={1}/>
                        <MessageInput />
                    </div>


                </div>

            </div>
        </div>
    );
}

export default ChatPage;