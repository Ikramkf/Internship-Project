import React, { useState } from 'react'
import axios from 'axios'
import Loginimage from '../assets/login.jpg'



export default function Register() {
    
    const [email , setEmail]=useState('')
    const [username , setUserName]=useState('')
    const [password , setPassword]=useState('')

    const createUser = ()=>{
      Axios.post('http://localhost:8081/Register',{
        Email: email,
        UserName :username,
        Password:password 
      }).then(()=>{
        console.log("User created")
      })
    }

  
  return (
    <div id='register' className='relative w-full h-screen bg-zinc-900/80'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src={Loginimage} alt="/" />

      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
          <div>
          <h2 className='text-4xl font-bold text-center tracking-widepy-8'>Bienvenue</h2>
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='email' className='text-zinc-900 font-semibold'>Email</label>
            <input className='outline-none h-10 px-5 border border relative bg-gray-100 p-2' type="text" required
            onChange={(event)=> {setEmail(event.target.value)} }/>
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='username' className='text-zinc-900 font-semibold'>Username</label>
            <input className='outline-none h-10 px-5 border border relative bg-gray-100 p-2' type="text" required
            onChange={(event)=> {setUserName(event.target.value)} }/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password' className='text-zinc-900 font-semibold'>Password</label>
            <input className='outline-none h-10 px-5 border border relative bg-gray-100 p-2' type="password" 
            onChange={(event)=> {setPassword(event.target.value)}} />
            <p className=''><input type="checkbox"/>Se souvenir de moi</p>
          </div>
          <button className='w-full py-3 mt-8 h-10 rounded-full bg-indigo-600 hover:bg-indigo-500 relative text-white duration-300' onClick={createUser}>S'enregister</button>
          {/*<p className='text-zinc-500  text-center mt-8'>Vous n'etes pas inscrit ? <span className='text-black font-bol underline underline-offset-4'>Inscription</span>Link to={'/register'}</p>  */}
        </form>
      </div>
    </div>
  )
}
