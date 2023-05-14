import React from "react";
// i\
function OtherDetails({ nameOther, otherImg }) {
    return (
        <div className="image_and_name">
            <button type="button" className="transparent-btn button5" data-bs-toggle="modal" data-bs-target="#PicModal">
                <img
                    src={otherImg}
                    alt="buttonpng" width="60" className="btn-img image-cropper" />
            </button>
            <div> {nameOther}</div>
        </div>
    );
}

export default OtherDetails;