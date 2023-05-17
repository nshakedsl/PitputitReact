import React, { useContext } from "react";
import UserDetails from './UserDetails';
import OtherDetails from './OtherDetails';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../ctx/userContext"

function TopBar({ otherImg, otherName }) {
    const navigate = useNavigate();

    const Userctx = useContext(UserContext)
    let logout = () => {
        Userctx.setUserList(prevUserList => {
            let temp = [...prevUserList]
            temp.forEach(item => item.dialogList = []);
            return temp;
        })
        Userctx.setUser({});
        Userctx.setUserName('')
        Userctx.setCurrentChat(undefined)
        navigate('/')


    }
    return (
        <div className="topBar">
            <UserDetails />
            <div className="right_topbar">
                <OtherDetails otherName={otherName} otherImg={otherImg} />
                <div className="image_and_name">
                    {/* <div className="form-check form-switch">
                        <input className="form-check-input " type="checkbox" id="flexSwitchCheckChecked" />
                    </div> */}
                    <img onClick={logout} className="exit" src="images/exit.png" />
                    {/* <img className="logo" src="images/logo-color.svg" /> */}
                </div>
            </div>
        </div>
    );
}

export default TopBar;