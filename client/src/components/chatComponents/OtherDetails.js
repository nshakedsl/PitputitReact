import React from 'react';

function OtherDetails({ otherImg, otherName }) {
    return (
        <div className="image_and_name">
            <button type="button" className="transparent-btn button5" data-bs-toggle="modal" data-bs-target="#PicModal">
                {otherImg && <img
                    src={otherImg}
                    alt="buttonpng" width="60" className="btn-img image-cropper" />}
            </button>
            <div> {otherName}</div>
        </div>
    );
}

export default OtherDetails;