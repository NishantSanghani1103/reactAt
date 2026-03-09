import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';


function App() {

  const [mainResult, setmainResult] = useState([])
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState("")
  const [searchData, setsearchData] = useState("")
  const factPokemo = async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
      const mainResult = res.data.results
      const ans = await Promise.all(
        mainResult.map(async (val) => {
          const answer = await axios.get(val.url)
          return answer.data
        })
      )
      console.log(ans);
      setmainResult(ans)
      setloading(false)
    }
    catch (error) {
      seterror(error.message);
      setloading(false)
    }
  }

  const search = mainResult.filter((value, index) => (value.name.includes(searchData)))

  useEffect(() => {
    factPokemo()
  }, [])

  return (
    <>
      <div className="container py-5">
        <div className='my-3'>
          <h1 className='text-capitalize text-center'>lets catch pokemon</h1>
        </div>
        <div className='d-flex justify-content-center my-4 ' id='search'>
          <input className=' text-secondary px-2' type="text" name="" id="" placeholder='Search Pokemon ' onChange={(e) => setsearchData(e.target.value)} />
        </div>
        <div className="row g-4">
          {
            loading
              ?
              <p>Loading....</p>
              :
              error
                ?
                <p>{error}</p>
                :
                search.length == 0
                  ?
                  <p className='text-capitalize'>pokemon not found....</p>
                  :
                  search.map((pokemon, index) => <PokemonCard pokemon={pokemon} key={index} />)
          }
        </div>
      </div>
    </>
  )
}
function PokemonCard({ pokemon }) {

  return (
    <div
      className="col-12 col-md-6 col-lg-3"
    >
      <div className="pokemon-card text-center p-4 h-100">

        <div className="pokemon-img">
          <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
        </div>

        <h4 className="mt-3 fw-bold">{pokemon.name}</h4>

        <span className="type-badge text-capitalize">
          {pokemon.types.map((val, ind) => val.type.name).join(", ")}
        </span>

        <div className="row mt-4 small text-muted">
          <div className="col-4">
            <p className="mb-1">Height</p>
            <strong>{pokemon.height}</strong>
          </div>

          <div className="col-4">
            <p className="mb-1">Weight</p>
            <strong>{pokemon.weight}</strong>
          </div>

          <div className="col-4">
            <p className="mb-1">Speed</p>
            <strong>{pokemon.stats[5].base_stat}</strong>
          </div>
        </div>

        <div className="row mt-3 small text-muted">
          <div className="col-4">
            <p className="mb-1">Experience</p>
            <strong>{pokemon.base_experience}</strong>
          </div>

          <div className="col-4">
            <p className="mb-1">Attack</p>
            <strong>{pokemon.stats[1].base_stat}</strong>
          </div>

          <div className="col-4">
            <p className="mb-1">Abilities</p>
            <strong>{pokemon.abilities.map((val, ind) => val.ability.name).slice(0, 1).join(",")}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
