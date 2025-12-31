import React, {useState} from "react"
import'./css/Register.css'

function Register(){
    

    const[Name,setName]=useState();
    const[email,setEmail]=useState();
    const[password, setpassword]=useState();

    function handleNameChange(event)
{
setName(event.target.value);
console.log(event.target.value);

}
function handleEmailChange(event)
{
    setEmail(event.target.value);
    
}
function handlePasswordChange(event)
{
    setpassword(event.target.value);
    
}

function submitbutton(event)
{
    event.preventDefault();
    alert("register succesfull");
}

return(
    <div>
        <form>
            <label>Name</label>
            <input type='text'placeholder='Enter your name' value={Name}onChange={handleNameChange}/><br></br>

            <label> Email </label>
            <input type='Email'placeholder='Enter your email'value={email}onChange={handleEmailChange}/><br></br>

            <label> Password </label>
            <input type='password'placeholder='Enter your password' onChange={handlePasswordChange}/><br></br>

            <button onClick={submitbutton}>Register</button>

        </form>
    </div>
)
}

export default Register