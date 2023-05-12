import './../styles/login.css'

function RegularInput({ placeholder, value, setValue }) {
  console.log('setValue: ', setValue);
  return (
    <div>
      {setValue && (<input data-toggle="tooltip" data-placement="left" data-html="true" title="This is mandatory field. Must contain 2-32 charcters."
        data-bs-trigger="click" className="input regular" type="text" name="user" placeholder={placeholder} value={value}
        onChange={(e) => setValue(e.target.value)} />)}
    </div>
  );
}

export default RegularInput;

