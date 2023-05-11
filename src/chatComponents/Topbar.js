import './../styles/login.css'
import './../styles/chats.css'
import UserDetails from './UserDetails';
function TopBar({nameMe,nameOther,myImg,otherImg}) {
    return (
        <div className="topBar">
            <UserDetails nameMe={nameMe} myImg={myImg}/>
            <div className="right_topbar">
                <div className="image_and_name">
                    <button type="button" className="transparent-btn button5" data-bs-toggle="modal" data-bs-target="#PicModal">
                        <img
                            src={otherImg}
                            alt="buttonpng" width="60" className="btn-img image-cropper" />
                    </button>
                    <text> {nameOther}</text>
                </div>
                <div className="image_and_name">
                    <div className="form-check form-switch">
                        <input className="form-check-input " type="checkbox" id="flexSwitchCheckChecked" checked />
                    </div>
                    <img className="logo" src="images/logo-color.svg" />
                </div>
            </div>
        </div>
    );
}

export default TopBar;