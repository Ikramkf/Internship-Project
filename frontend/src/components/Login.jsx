import React, { useState } from "react";

import Loginimage from "../assets/login.jpg";

import Axios from "axios";

export default function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [LoginStatus, setLoginStatus] = useState("");


  const login = () => {
    Axios.post("http://localhost:3005/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  {
    return (
      <div id="login" className="relative w-full h-screen bg-zinc-900/80">
        <img
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={Loginimage}
          alt="/"
        />

        <div className="flex justify-center items-center h-full">
          <form className="max-w-[400px] w-full mx-auto bg-white p-8">
            <h1 className="text-4xl font-bold text-center tracking-widepy-8">
              {LoginStatus}
            </h1>
            <div>
              <h2 className="text-4xl font-bold text-center tracking-widepy-8">
                Connexion
              </h2>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="username">Nom d'utilisateur :</label>
              <input
                className="outline-none h-10 px-5 border relative bg-gray-100 p-2"
                id="username" // Ajoutez l'attribut id
                name="username"
                type="text"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-zinc-900 font-semibold">
                Mot de passe
              </label>
              <input
                className="outline-none h-10 px-5 border relative bg-gray-100 p-2"
                id="password" // Ajoutez l'attribut id
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="">
                <input type="checkbox" />
                Se souvenir de moi
              </p>
            </div>
            <button
              className="w-full py-3 mt-8 h-10 rounded-full bg-indigo-600 hover:bg-indigo-500 relative text-white duration-300 "
              onClick={login}
            >
              Se connecter
            </button>

            <p className="text-end">Oublier votre mot de passe </p>
            {/*<p className='text-zinc-500  text-center mt-8'>Vous n'etes pas inscrit ? <span className='text-black font-bol underline underline-offset-4'>Inscription</span>Link to={'/register'}</p>  */}
          </form>
        </div>
      </div>
    );
  }
}
