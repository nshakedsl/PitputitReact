import './../styles/login.css'

function RegularInput({ placeholder, value, setValue }) {
  console.log('setValue: ', setValue);
  return (
    <>
      {setValue && (<input className="input regular" type="text" name="user" placeholder={placeholder} value={value}
        onChange={(e) => setValue(e.target.value)} />)}
    </>
  );
}

export default RegularInput;