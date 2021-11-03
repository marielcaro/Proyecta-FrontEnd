import axios from "axios";
const RM = axios.create({
	baseURL: 'https://rickandmortyapi.com/api'
	
  });

 export const character  = async () =>
  {
	  try {
		  const result= await RM('/character');
		  return result.data.results;

	  } catch (error) {
		  console.log(error);
		  
	  }

  }




