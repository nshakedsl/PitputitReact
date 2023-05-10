import './../styles/login.css'
import './../styles/chats.css'

function ChatPage() {
    return (
        <div class="background center_content">
            <div class="topBar">
                <div class="left_topbar">
                    <button type="button" class="transparent-btn button4 btn-img-self ">
                        <img src="https://www.lbscience.org/wp-content/uploads/2018/07/1-1-e1531677297836-1.jpg" alt="buttonpng"
                            class="btn-img image-cropper ico" />
                    </button>

                    <div class="add">

                        <button type="button" class="transparent-btn btn-bar-size" data-bs-toggle="modal"
                            data-bs-target="#exampleModal"><img src="images/add-contact.png" alt="buttonpng" class="btn-img" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatPage;