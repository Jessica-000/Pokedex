import { useState } from 'react'
import { Pokedex } from './components' 
import './App.css'

function App() {


  return (
   <div className="cardContainer">
    <header id='pageTitle'>ඞPokedexඞ</header>
    <Pokedex />
   </div>
  )
}
//It goes App -> Pokedex -> Pokecard
export default App
