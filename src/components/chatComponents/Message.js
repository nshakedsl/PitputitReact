import React, { useContext, useEffect } from "react";
import { UserContext } from "../../ctx/userContext"
import { useNavigate } from 'react-router-dom';


function Message({ MessageInfo }) {
    const navigate = useNavigate();

    const Userctx = useContext(UserContext);
    useEffect(() => {
        if (!Userctx.userName) {
            if (localStorage.getItem("username")) {
                Userctx.setUserName(localStorage.getItem("username"))
            }
            // no name in local storage
            else {
                localStorage.setItem("token", '')
                navigate('/login')
            }
        }
    }, [])

    const getTime = (t) => {
        // Create a new Date object
        var currentDate = new Date(t);

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

        Userctx.userName === MessageInfo.sender.username ?
            (<div className="bubble_container bubble_container_me">
                <div className="bubble me">
                    <div className="text">{MessageInfo.content}
                    </div>
                    <div className="hour">{getTime(MessageInfo.created)}</div>
                </div>
                <div className="triangle triangle_me"></div>
            </div>) :
            (<div className="bubble_container bubble_container_other">
                <div className="bubble other">
                    <div className="text">{MessageInfo.content}
                    </div>
                    <div className="hour">{getTime(MessageInfo.created)}</div>
                </div>
                <div className="triangle triangle_other"></div>
            </div>)

    );
}
export default Message;