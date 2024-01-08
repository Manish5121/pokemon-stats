import React from "react"

const PokemonCard = ({ name, attack, hp, img, species, defense, type }) => {
  return (
    <div className="w-[400px] h-[500px] bg-[#FFCEC9] rounded-2xl p-5 flex justify-center  display-center drop-shadow-2xl">
      <div className=" bg-[#FFF2E4] w-full flex flex-col gap-2 p-2">
        <div className="text-3xl text-center font-semibold">{name}</div>
        <div className="flex justify-center ">
          <img
            className="w-auto object-cover border-orange-200 border-4  h-[250px]"
            src={img}
            alt=""
          />
        </div>
        <div className="text-xl w-full justify-between px-4 py-2 flex">
          <h2>hp: {hp}</h2>
          <h2>defense: {defense}</h2>
          <h2>attack: {attack}</h2>
        </div>

        <div className="flex px-4 gap-2 items-center">
          <h1> Type: </h1>
          <p className="px-2 py-1 rounded-xl bg-slate-700 text-white">{type}</p>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
