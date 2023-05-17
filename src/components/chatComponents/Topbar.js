import React, { useContext, useState } from "react";
import UserDetails from './UserDetails';
import OtherDetails from './OtherDetails';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../ctx/userContext"
import Form from 'react-bootstrap/Form';

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
    let handleChange = (evt) => {
        Userctx.setCheckboxChecked(evt.target.checked)
    }
    return (
        <div className="topBar">
            <UserDetails />
            <div className="right_topbar">
                <OtherDetails otherName={otherName} otherImg={otherImg} />
                <div className="image_and_name">
                    <Form.Check
                        disabled={!Userctx.currentChat}
                        checked={Userctx.checkboxChecked}
                        onChange={handleChange}
                        type="switch"
                        id="custom-switch"
                    />
                    <img onClick={logout} className="exit" src="images/exit.png" />
                    {/* <img className="logo" src="images/logo-color.svg" /> */}
                </div>
            </div>
        </div>
    );
}

export default TopBar;