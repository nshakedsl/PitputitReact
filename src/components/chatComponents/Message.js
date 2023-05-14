import React, { useContext } from "react";
import { UserContext } from "../../ctx/userContext"


function Message({MessageInfo}) {
    const Userctx = useContext(UserContext);

    return (

        Userctx.userName === MessageInfo.name ?
            (<div className="bubble_container bubble_container_me">
                <div className="bubble me">
                    <div className="text">{MessageInfo.messageText}
                    </div>
                    <div className="hour">{MessageInfo.time}</div>
                </div>
                <div className="triangle triangle_me"></div>
            </div>) :
            (<div className="bubble_container bubble_container_other">
                <div className="bubble other">
                    <div className="text">{MessageInfo.messageText}
                    </div>
                    <div className="hour">{MessageInfo.time}</div>
                </div>
                <div className="triangle triangle_other"></div>
            </div>)

    );
}
export default Message;