import './../styles/login.css'
import './../styles/chats.css'
function OtherDetails({ nameOther, otherImg }) {
    return (
        <div className="image_and_name">
            <button type="button" className="transparent-btn button5" data-bs-toggle="modal" data-bs-target="#PicModal">
                <img
                    src={otherImg}
                    alt="buttonpng" width="60" className="btn-img image-cropper" />
            </button>
            <text> {nameOther}</text>
        </div>
    );
}

export default OtherDetails;