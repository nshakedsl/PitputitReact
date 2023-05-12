import React from "react";
// import './../styles/login.css'

function ImageUploader() {
  return (
    <div class="element_width center_content slide-in-left">
    <img src="images/user.png" alt="default_user" class="picture_width"/>
    <label for="file-upload" class="custom-file-upload">
        Choose Photo
        <i class="bi bi-arrow-repeat"></i>
    </label>
    <input id="file-upload" type="file" name="fileUpload" class="debug" accept="image/png, image/jpeg"/>
</div>
  );
}

export default ImageUploader;
