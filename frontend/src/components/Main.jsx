import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaFacebookF , FaLinkedinIn} from "react-icons/fa"

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/20">
        <div className='max-w-[600px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center '>
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Bienvenue</h1>
          <h2 className="flex sm:text-3xl text-4xl pt-4 text-gray-800 ">
            Vous pouvez
            <TypeAnimation
              sequence={[
                "nous contacter directement",
                500,
                "envoyer vos reclamations",
                500,
                "choisir des interventions ",
                500,
                "consulter vos reclamations préedentes",
                500,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }} 
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaFacebookF  className='cursor-pointer' size={35}/>
            <FaLinkedinIn className='cursor-pointer' size={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
