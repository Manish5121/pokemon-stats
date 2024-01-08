import { useState } from "react"
import { TbPokeball } from "react-icons/tb"
import PokemonCard from "./Components/PokemonCard"
import Axios from "axios"

function App() {
  const [pokemonName, setPokemonName] = useState("")
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  })

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`).then(
      (res) => {
        console.log(res)
        setPokemon({
          name: pokemonName,
          species: res.data.species.name,
          img: `https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          type: res.data.types[0].type.name,
        })

        console.log(pokemon)
      }
    )
  }

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        className="flex h-1/4 flex-col items-center gap-4 
     bg-yellow-100 p-10"
      >
        <h1 className=" text-4xl font-semibold ">Pokemon Stats</h1>

        <div className="flex items-center relative">
          <button
            onClick={(e) => {
              e.preventDefault()
              searchPokemon()
            }}
            className="w-8 h-8 absolute right-0"
          >
            <TbPokeball />
          </button>
          <input
            type="text"
            placeholder="bulbasaur"
            name="pokemonName"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
            className="w-[250px]  h-[40px] px-4 py-2 rounded-lg border-none font-semibold ring-2 ring-zinc-500 focus:ring-zinc-800 focus:ring-2"
          />
        </div>
      </div>
      <div
        className=" h-3/4
       bg-blue-200  flex justify-center items-center "
      >
        <PokemonCard {...pokemon} />
      </div>
    </div>
  )
}

export default App
