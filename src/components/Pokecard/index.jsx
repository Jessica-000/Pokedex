import { useState, useEffect } from "react";
import React from 'react'

function Pokecard({pokemon, i}) {

  return (
    <div className="card">
        <h1 className="pokeName">ඞ{pokemon.name}</h1>
        <img className="pokeImage"src={pokemon.image} alt={pokemon.name} />
        <p className="pokeType">{pokemon.type}ඞ</p>
    </div>
  )
}

export default Pokecard