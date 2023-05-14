import React from "react";
// import './../styles/login.css'
// import './../styles/chats.css'
import UserDetails from './UserDetails';
import OtherDetails from './OtherDetails';

function TopBar({ nameMe, nameOther, myImg, otherImg }) {
    return (
        <div className="topBar">
            <UserDetails nameMe={nameMe} myImg={myImg} />
            <div className="right_topbar">
                <OtherDetails nameOther={nameOther} otherImg={otherImg} />
                <div className="image_and_name">
                    <div className="form-check form-switch">
                        <input className="form-check-input " type="checkbox" id="flexSwitchCheckChecked" />
                    </div>
                    <img className="logo" src="images/logo-color.svg" />
                </div>
            </div>
        </div>
    );
}

export default TopBar;