import './../styles/login.css'
import Background from '../components/Background';
import ImageUploader from '../components/ImageUploader';

function RegisterPage() {
  return (
    <div class="center_content background">
        <Background/>
        <ImageUploader/>
    <div class="element_width slide-in-right">
        <input class="input regular" type="text" name="user" placeholder="Username"/>
        <input class="input regular" type="text" name="nick" placeholder="Nickname"/>
        <div class="containLoginInput">
            <input class="input password " type="password" name="pass" placeholder="Password"/>
            <img class="eye" src="images/eye-solid.svg" alt="eye" />
        </div>
        <div class="containLoginInput">
            <input class="input password " type="password_ver" name="pass" placeholder="Verify Password"/>
            <img class="eye" src="images/eye-solid.svg" alt="eye" />
        </div>
        <button type="button" onclick="window.location.href='login.html'" class="btn btn-info">Rgister</button>
        <text>Already registered? <a href="login.html">Click here</a> to login</text>
    </div>
</div>
  );
}

export default RegisterPage;
