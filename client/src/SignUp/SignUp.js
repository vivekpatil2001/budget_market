import React, { useState } from 'react';
import "./SignUp.css";

function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  return (
    <div>
     <form>
      <div className='signup-form'>
        <div>
        <h1 className='text-center'>SignUp</h1>
        <label htmlFor='name'>Name</label>
        <input type='text' 
        value={name} id='name' 
        className='form-handle'
        placeholder='Enter your name' 
        onChange={(e)=>{
          setName(e.target.value)
        }} />
        </div>
        <div>
     
        <label htmlFor='name'>Email</label>
        <input type='text' 
        value={name} id='name' 
        className='form-handle'
        placeholder='Enter your name' 
        onChange={(e)=>{
          setName(e.target.value)
        }} />
        </div>
        <div>
       
        <label htmlFor='name'>Password</label>
        <input type='text' 
        value={name} id='name' 
        className='form-handle'
        placeholder='Enter your name' 
        onChange={(e)=>{
          setName(e.target.value)
        }} />
        </div>
        <div>
        
        <label htmlFor='name'>name</label>
        <input type='text' 
        value={name} id='name' 
        className='form-handle'
        placeholder='Enter your name' 
        onChange={(e)=>{
          setName(e.target.value)
        }} />
        </div>
        <div>
     
        <label htmlFor='name'>name</label>
        <input type='text' 
        value={name} id='name' 
        className='form-handle'
        placeholder='Enter your name' 
        onChange={(e)=>{
          setName(e.target.value)
        }} />
        </div>
        <div>

        <label htmlFor='name'>name</label>
        <input type='text' 
        value={name} id='name' 
        className='form-handle'
        placeholder='Enter your name' 
        onChange={(e)=>{
          setName(e.target.value)
        }} />
        </div>
      </div>
     </form>
    </div>
  )
}

export default SignUp
