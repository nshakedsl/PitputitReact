import React from 'react';
import { BsArrowRepeat } from 'react-icons/bs';

function ImageUploader({ imageSrc, setImageSrc }) {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="element_width center_content slide-in-left">
      <img src={imageSrc} alt="default_user" className="picture_width" />
      <label htmlFor="file-upload" className="custom-file-upload">
        Choose Photo
        <BsArrowRepeat />
      </label>
      <input id="file-upload" type="file" name="fileUpload"
        className="debug" accept="image/png, image/jpeg" onChange={handleFileUpload} />
    </div>
  );
}

export default ImageUploader;



