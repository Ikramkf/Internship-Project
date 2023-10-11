import React from 'react'
import InfoItem from "./InfoItem"


const Info = () => {
  return (
    <div id='info' className='pl-10 pr-10 m-20 bg-slate-300 p-10 text-[#001b5e]  flex flex-col mt-20 mb-200'>
        <h3 className='py-6 p-2 pl-3 m-2 text-5xl font-bold text-center text-[#001b5e]'>Chéres Clients , </h3>
        <p className=' pl-6 m-2 text-center text-xl text-lg font-normal mb-10 text-black'>
          nous sommes désolés d'apprendre que vous avez rencontré un problème ou
          que vous avez une réclamation à soumettre. Votre satisfaction est
          notre priorité, et nous sommes là pour vous aider. Veuillez remplir le
          formulaire ci-dessous pour nous faire part de votre réclamation. Nous
          ferons de notre mieux pour résoudre votre problème rapidement.{" "}
        </p>
      </div>
   
  )
}

export default Info