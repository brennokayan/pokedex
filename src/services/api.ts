import axios from "axios";

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})


export async function GetAllPokemons(){
    const results = await api.get("pokemon?limit=100000&offset=0");
    return results
}
export async function GetUniquePokemon(name: string){
    const result = await api.get(`pokemon-form/${name}`);
    return result
}