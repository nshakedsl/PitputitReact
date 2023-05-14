import React from "react";

function MessageInput() {
    return (
        <footer className="footer">
            <input className="message" placeholder="Type a message" />
            <svg className="send" viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet"
                version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24">
                <path fill="#54656f"
                    d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path>
            </svg>
        </footer>
    );
}

export default MessageInput;