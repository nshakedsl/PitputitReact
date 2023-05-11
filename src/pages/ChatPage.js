import './../styles/login.css'
import './../styles/chats.css'
import MessageInput from '../chatComponents/MessageInput';
import TopBar from '../chatComponents/Topbar';

function ChatPage() {
    return (
        <div class="background center_content">


            <div class="main">
                <TopBar nameMe="me" nameOther="CSS" myImg="https://www.lbscience.org/wp-content/uploads/2018/07/1-1-e1531677297836-1.jpg" otherImg="https://play-lh.googleusercontent.com/TxjQBGYHvMJsBX5dCvxQ4R-_4N-XrVhW6-p7D7TXanXKZMD8L-UkeMBWO1dtubGVNqU"/>
                <div class="content">
                    <div class="contacts">
                        <div class="chat_box">
                            <div class="image-cropper">
                                <img
                                    src="https://play-lh.googleusercontent.com/TxjQBGYHvMJsBX5dCvxQ4R-_4N-XrVhW6-p7D7TXanXKZMD8L-UkeMBWO1dtubGVNqU" />
                            </div>
                            <div class="container_contact">
                                <div class="text_and_date_container">
                                    <div class="text_title">CSS</div>
                                    <div class="date">3/31/2023 3:24</div>
                                </div>
                                <div class="text_message">Agreed, HTML. Here's to more beautiful websites 🎉</div>
                            </div>

                        </div>
                    </div>
                    <div class="chats">
                        <div class="chats-container">
                            <div class="bubble_container bubble_container_me">
                                <div class="bubble me">
                                    <div class="text">Hey CSS, you're looking stylish today. 😎 What's new?</div>
                                    <div class="hour">13:39</div>
                                </div>
                                <div class="triangle triangle_me"></div>
                            </div>
                        </div>
                        <div class="bubble_container bubble_container_other">
                            <div class="bubble other">
                                <div class="text">Not much, just making the web pages look pretty 💅 , and singing a song to help learn
                                    the principles of advanced programming 1🎶.
                                </div>
                                <div class="hour">13:40</div>
                            </div>
                            <div class="triangle triangle_other"></div>
                        </div>
                        <MessageInput/>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default ChatPage;