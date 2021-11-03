import { useState, useEffect } from 'react';
import {character} from './services/RickMortyApi';

function App() {
    const [data, setData] = useState([]);

    const fetchData = async() => {
        try {
            //consumo
            //const result = await fetch('https://rickandmortyapi.com/api/character');
           /* const info = await result.json();
			console.log(info.results,typeof info.results);
           setData(info.results); //data en state */
		
		  const personaje = await character(); // esto es con axios
		  console.log(personaje);

		  setData(personaje);
        } catch (error) {
            console.log(error);
        }
    }

    //esto se ejecuta unicamente al iniciio
    useEffect(() => {
        fetchData();
    }, [])

    return ( 
		<>
		<h1> Hola Mundo </h1> 
		{data.length > 0 && data.map( ({name, id}) => 
			<h1>{name}</h1>
		)}

		</>
    );
}

export default App;
