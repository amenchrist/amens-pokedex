import React, { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext();


export const ContextProvider = ({ children }) => {

    const [pokedex, setPokedex ] = useState(() => {
        const localData = localStorage.getItem('pokedex');
        return localData ? JSON.parse(localData) : []
    })
    const [ filteredList, setFilteredList ] = useState(pokedex);
    const [ loadNext, setLoadNext ] = useState(false);
    const [ limit, setLimit ] = useState(9);
    const [ pokemon, setPokemon ] = useState({})

    function capitalize(word){
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    useEffect(() => {
        localStorage.setItem('pokedex', JSON.stringify(pokedex))
        setFilteredList(pokedex)
    }, [pokedex])

    useEffect(() => {
        let pokemons = [...pokedex];
      
        if(loadNext && limit < 151){
          setLimit(limit+6)
        }

        if(pokedex.length < limit){
            for(let i=pokedex.length+1; i<=limit; i++){
              if(i >151){ break}
                fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(result => result.json()).then(pokemonDetails => {
                  
                    const { id, name, height, weight, types, abilities } = pokemonDetails
                    const pok = {
                      id,
                      name: capitalize(name),
                      imageUrl : pokemonDetails.sprites.other['official-artwork']['front_default'],
                      height,
                      weight,
                      types: types.map(index => capitalize(index.type.name)).join(", "),
                      abilities: abilities.map(index => capitalize(index.ability.name)).join(", ")
                    }
                    pokemons.push(pok);     
                    setPokedex(pokemons);
                    setLoadNext(false);
                })
            }    
        }
    },[pokedex, loadNext, limit,])
 
  const contextStateVars = {

    filteredList, setFilteredList, pokedex, setLoadNext, pokemon, setPokemon

  }

  return (
    <StateContext.Provider value={contextStateVars}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);