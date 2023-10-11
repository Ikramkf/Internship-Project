import React from 'react'

const Claim = () => {
  return (
    <div id='claim' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Formulaire</h1>
      <form action="" method='POST' encType='multipart/form-data'>
         <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
               <label className='uppercase text-sm py-2'>Nom&Prenom</label>
               <input className=' border-2 rounded-lg p-3 flex border-gray-300 ' type="text" name='name' />
            </div>
            <div className='flex flex-col'>
               <label className='uppercase text-sm py-2'>Email</label>
               <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="text" name="email" />
            </div>
            <div className='flex flex-col py-2'>
               <label className='uppercase text-sm py-2'>Objet</label>
               <input className='border-2 rounded-lg p-3 flex border-gray-300 'type="text" name="objet" />
            </div>
            <div className='flex flex-col py-2'>
               <label className='uppercase text-sm py-2'>Sujet</label>
               <input className='border-2 rounded-lg p-3 flex border-gray-300 'type="text" name="sujet" />
            </div>
            <div className='flex flex-col py-2'>
               <label className='uppercase text-sm py-2'>Description</label>
               <textarea className='border-2 rounded-lg p-3  border-gray-300 'name="description" id="1" rows='10'></textarea>
            </div>
            <div className='flex flex-col py-2'>
               <label className='uppercase text-sm py-2'>Pieces jointes</label>
               <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="file" name="upload" />
               <button className='bg-[#001b5e] text-gray-100 mt-2 w-full p-2 rounded-lg '>Upload</button>
               <label className=' uppercase text-sm py-5 '>Vous pouvez coisir une date pour une intervention </label>
               <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="date" name="intervention" />
            </div>
            
            
         </div>
         <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg '>Envoyer</button>
      </form>

    </div>
  )
}

export default Contact