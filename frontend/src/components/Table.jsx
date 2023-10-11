import React from 'react';
import {BsFillTrashFill , BsFillPencilFill} from "react-icons/Bs";

export const Table = () => {
  return (
    <div id='table' className='m-0 p-2 max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      
      <div className='w-full h-full'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Tableau des reclamations </h1>
        <table className="block overflow-hidden whitespace-no-wrap max-w-full m-auto overflow-x-auto bg-slate-100">
          <thead className='bg-slate-300'>
            <tr>
              <th className='p-3'>
                NO reclamation 
              </th>
              <th className=" p-3 w-full">
                Objet 
              </th>
              <th className='p-5 pl-5 pr-3' >
                  Etat
              </th>
              <th className='p-3'>
                Details
              </th>
            </tr>

          </thead>
          <tbody>
              <tr>
                <td className=' overflow-hidden center flex justify-center items-center'>1</td>
                <td className='overflow-hidden'>Probleme authentification</td>
                <td>
                  <span className=" center flex justify-center items-center bg-yellow-600">En cours </span>
                </td>
                <td className='overflow-hidden'>
                  <span className="flex justify-around">
                  <BsFillTrashFill  className="text-red-700"/>
                  <BsFillPencilFill className="text-teal-800"/>
                  </span>
                </td>
              </tr>
              <tr>
                <td className='overflow-hidden center flex justify-center items-center'>2</td>
                <td className='overflow-hidden'>Probleme authentification</td>
                <td>
                  <span className="bg-green-600 center flex justify-center items-center">Traitée</span>
                </td>
                <td className='overflow-hidden'>
                  <span className="flex justify-around">
                  <BsFillTrashFill  className="text-red-700"/>
                  <BsFillPencilFill className="text-teal-800"/>
                  </span>
                </td>
              </tr>
              <tr>
                <td className=' overflow-hidden center flex justify-center items-center'>3</td>
                <td className='overflow-hidden'>Probleme authentification</td>
                <td>
                  <span className=" center flex justify-center items-center bg-yellow-600">En cours </span>
                </td>
                <td className='overflow-hidden'>
                  <span className="flex justify-around">
                  <BsFillTrashFill  className="text-red-700"/>
                  <BsFillPencilFill className="text-teal-800"/>
                  </span>
                </td>
              </tr>
              <tr>
                <td className='overflow-hidden center flex justify-center items-center'>4</td>
                <td>Probleme authentification</td>
                <td>
                  <span className= "bg-orange-800 center flex justify-center items-center">En attente</span>
                </td>
                <td className='overflow-hidden'>
                  <span className="flex justify-around">
                  <BsFillTrashFill  className="text-red-700"/>
                  <BsFillPencilFill className="text-teal-800"/>
                  </span>
                </td>
              </tr>
              <tr>
                <td className='overflow-hidden center flex justify-center items-center'>5</td>
                <td>Deconnexion automatique</td>
                <td>
                  <span className=" center flex justify-center items-center bg-green-600">Traitée </span>
                </td>
                <td className='overflow-hidden'>
                  <span className="flex justify-around">
                  <BsFillTrashFill  className="text-red-700"/>
                  <BsFillPencilFill className="text-teal-800"/>
                  </span>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
      
      </div>

  );
};
export default Table;