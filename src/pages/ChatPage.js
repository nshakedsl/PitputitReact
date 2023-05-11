import './../styles/login.css'
import './../styles/chats.css'

function ChatPage() {
    return (
        <div class="background center_content">


            <div class="main">
                <div class="topBar">
                    <div class="left_topbar">
                        <button type="button" class="transparent-btn button4 btn-img-self ">
                            <img src="https://www.lbscience.org/wp-content/uploads/2018/07/1-1-e1531677297836-1.jpg" alt="buttonpng"
                                class="btn-img image-cropper ico" />
                        </button>

                        <div class="add">

                            <button type="button" class="transparent-btn btn-bar-size" data-bs-toggle="modal"
                                data-bs-target="#exampleModal"><img src="../pictures/add-contact.png" alt="buttonpng" class="btn-img" />
                            </button>
                        </div>
                    </div>
                    <div class="right_topbar">
                        <div class="image_and_name">
                            <button type="button" class="transparent-btn button5" data-bs-toggle="modal" data-bs-target="#PicModal">
                                <img
                                    src="https://play-lh.googleusercontent.com/TxjQBGYHvMJsBX5dCvxQ4R-_4N-XrVhW6-p7D7TXanXKZMD8L-UkeMBWO1dtubGVNqU"
                                    alt="buttonpng" width="60" class="btn-img image-cropper" />
                            </button>
                            <text> CSS</text>
                        </div>
                        <div class="image_and_name">
                            <div class="form-check form-switch">
                                <input class="form-check-input " type="checkbox" id="flexSwitchCheckChecked" checked />
                            </div>
                            <img class="logo" src="../pictures/logo-color.svg" />
                        </div>
                    </div>



                </div>
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
                        <footer class="footer">
                            <input class="message" placeholder="Type a message" />
                            <svg class="send" viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet"
                                version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                <path fill="#54656f"
                                    d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path>
                            </svg>
                        </footer>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default ChatPage;