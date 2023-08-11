import { useEffect, useState } from "react";
import { GetAllPokemons, GetUniquePokemon } from "./services/api";
import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { Container } from "./components/Container";

interface IPokemons {
  results: {
    name: string;
    url: string;
  }[];
}

interface IPokemon {
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
  };
}

export default function App() {
  const [data, setData] = useState<IPokemons>({ results: [] });
  const [pokemon, setPokemon] = useState<string | null>(null);
  const [dataNamePokemon, setDataNamePokemon] = useState<IPokemon | undefined>(
    undefined
  );
  const namePokemons = data.results.map((pokemon) => pokemon.name);
  async function getAll() {
    const res = await GetAllPokemons();
    setData(res.data);
  }

  async function getPokemon() {
    const res = await GetUniquePokemon(pokemon == null ? "" : pokemon);
    setDataNamePokemon(res.data);
  }

  const handleSubmitActionBuscar = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    getPokemon();
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <Box
        height={"100vh"}
        display="flex"
        flexDirection="column"
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <form onSubmit={handleSubmitActionBuscar}>
          <Box display={"flex"} flexDirection={"column"} gap={2} alignItems={"center"}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={namePokemons}
              sx={{ width: 300 }}
              onChange={(_e, newValue: string | null) => {
                setPokemon(newValue);
              }}
              
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  label="Buscar Pokemons"
                  onChange={(e) => {
                    setPokemon(e.target.value);
                  }}
                  required
                />
              )}
            />
            <Button type="submit" variant={"contained"} sx={{ width:"10em" }}>
              Buscar
            </Button>
          </Box>
        </form>

        {dataNamePokemon == null ? (
          <h1>Selecione um pokemon</h1>
        ) : (
          <Container
            name={dataNamePokemon?.name}
            image={dataNamePokemon?.sprites.front_default}
            types={dataNamePokemon?.types.map((e) => e.type.name)}
          />
        )}
      </Box>
    </>
  );
}
