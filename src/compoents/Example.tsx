

import Greet from "./Greet";


import { useState } from "react";


interface Persona {
  nombre: string;
  edad: number;
  profesion?: string;
}

const datos:any [] = ["jhonis", "argueta", "lemus", "Maria", "diaz", "ortez", "munoz"]

const personas: Persona[] = [
  {
    nombre: "Pedro",
    edad: 20,
    profesion: "Abogado",
  },
  {
    nombre: "Maria",
    edad: 30,
  },

  {
    nombre: "Pedro",
    edad: 20,
    profesion: "Abogado",
  },
  {
    nombre: "Maria",
    edad: 30,
  },

  {
    nombre: "Pedro",
    edad: 20,
    profesion: "Abogado",
  },
  {
    nombre: "Maria",
    edad: 30,
  },

  {
    nombre: "Pedro",
    edad: 20,
    profesion: "Abogado",
  },
  {
    nombre: "Maria",
    edad: 30,
  },
];

export default function Example() {

  const [counter, setCounter] = useState(0)
  return (
    <div className="bg-blue-300  pt-[6rem] ">

     

      {personas.map((item, index) => (
        <div
          key={index}
          className="  bg-white border-2 border-white mt-[1rem] w-[40%] items-center mr-auto ml-auto p-[1rem] rounded-[1rem] shadow-lg shadow-blue-500/70"
        >
          <button className="bg-red-300 w-[100px] rounded-[15px]" onClick={()=>setCounter(counter+1)}>{counter}</button>
            <Greet name="Jhonis" />
          <h1>Nombre: {item.nombre}</h1>
          <h1>Edad: {item.edad}</h1>

          {item.profesion && <h1>Profesion: {item.profesion}</h1>}
        </div>
      ))}
    </div>
  );
}
