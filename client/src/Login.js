import React,{ useState} from 'react'
import'./css/Login.css'
import { useNavigate} from 'react-router-dom';

function Login(){

  const[ email, setEmail]=useState();
  const[password,setPassword]=useState();
  const khushi=useNavigate();

  function
  handleEmailChange(event){
    setEmail(event.target.value);
    console.log(event.target.value);//not mendatory
  }
  function
  handlePasswordChange(event){
    setPassword(event.target.value);
    console.log(event.target.value);//not mendatory
  }

  function submitbutton(event){
    event.preventDefault();
    // alert("login succesfull");
    khushi('/Home');
  }
  return(
    <div>
      <form>

        <label> Email </label>
        <input type='email'placeholder='enter your email'value={email}onChange={handleEmailChange}/><br></br>

        <label> password </label>
        <input type='password'placeholder='enter your password'value={password} onChange={handlePasswordChange}/><br></br>

        <button onClick={submitbutton}>submit</button>
      </form>
    </div>
  )
}
export default Login
