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

      console.log('mounting fetcher');

      const controller = new AbortController();
      const signal = controller.signal;

      let pokemons = [...pokedex];
    
      if(loadNext && limit < 151){
        if(limit+6 > 151){
          setLimit(151)
        } else {
          setLimit(limit+6)
        }
      }

      if(pokedex.length < limit){
        let startingPoint = 1;
        pokedex.length > 0 ? startingPoint = pokedex.length + 1 : startingPoint = 1;

        async function retrievePokemon(){

          const options = {
            signal: signal,
          }

          for(let i=startingPoint; i<=limit; i++){
            if(i >151){ break}
            
            try{
              const pokemonJson = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, options);
              console.log('Fetching pokemon', i)
              const pokemonDetails = await pokemonJson.json()
              console.log('received pokemon ', i)
              console.log(pokemonDetails.name, pokemonDetails.id)
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

            }catch (e){
              // console.log('something went wrong')
              // console.log(e)
            }

            // console.log(`limit is ${limit}`)
            // console.log(`pokemons.length is ${pokemons.length}`)

            if(pokemons.length === limit){
              // console.log("setting pokedex")
              setPokedex(pokemons);
              setLoadNext(false);
            }

          } 
          
        }

        retrievePokemon()

      }      

      return () => {
        console.log("unmounting fetcher")
        //cancel the request before the component unmounts
        controller.abort();
      }
    },[pokedex, loadNext, limit])
 
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