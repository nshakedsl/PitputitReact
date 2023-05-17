import React from "react";
import UserDetails from './UserDetails';
import OtherDetails from './OtherDetails';

function TopBar({ nameOther, otherImg, setDarkMode }) {
    return (
        <div className="topBar">
            <UserDetails />
            <div className="right_topbar">
                <OtherDetails nameOther={nameOther} otherImg={otherImg} />
                <div className="image_and_name">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                            // onChange={() => setDarkMode((prevMode) => !prevMode)} 
                            />
                    </div>
                    <img className="exit" src="images/exit.png" />
                    <img className="logo" src="images/logo-color.svg" />
                </div>
            </div>
        </div>
    );
}

export default TopBar;