import { Box, Typography } from "@mui/material";
import grassType from "../assets/120px-Battrio_Grass_type.png";
import poisonType from "../assets/120px-Battrio_Poison_type.png";
import fireType from "../assets/120px-Battrio_Fire_type.png";
import flyType from "../assets/120px-Battrio_Flying_type.png";
import waterType from "../assets/120px-Battrio_Water_type.png";
import fairyType from "../assets/Pokémon_Fairy_Type_Icon.svg.png";
import fightType from "../assets/120px-Battrio_Fighting_type.png";
import steelType from "../assets/120px-Battrio_Steel_type.png";
import rockType from "../assets/120px-Battrio_Rock_type.png";
import groundType from "../assets/120px-Battrio_Ground_type.png";
import eletricType from "../assets/120px-Battrio_Electric_type.png";
import ghostType from "../assets/120px-Battrio_Ghost_type.png";
import darkType from "../assets/120px-Battrio_Dark_type.png";
import dragonType from "../assets/120px-Battrio_Dragon_type.png"
import bugType from "../assets/120px-Battrio_Bug_type.png"
import iceType from "../assets/120px-Battrio_Ice_type.png"
import normalType from "../assets/120px-Battrio_Normal_type.png"
import psychicType from "../assets/120px-Battrio_Psychic_type.png"
interface Props {
  name: string | undefined;
  image: string | undefined;
  types: string[] | undefined;
}

export function Container({ name, types, image }: Props) {
  console.log(types);
  let typeImage = grassType;
  return (
    <>
      <Box
        height={"22rem"}
        width={"22rem"}
        bgcolor={"#d1d1d1"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={"1em"}
      >
        <img
          src={image}
          alt=""
          style={{
            backgroundColor: "white",
            borderRadius: "100%",
            height: "10em",
            marginTop: "1em",
          }}
        />
        <Box my={2}>
          <Typography variant="h5">{name}</Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
          >
            <Typography>Type:</Typography>
            {types?.map((type) => {
              if (type == "grass") {
                typeImage = grassType;
              } else if (type == "poison") {
                typeImage = poisonType;
              } else if (type == "fire") {
                typeImage = fireType;
              } else if (type == "flying") {
                typeImage = flyType;
              } else if (type == "water") {
                typeImage = waterType;
              } else if (type == "fairy") {
                typeImage = fairyType;
              } else if (type == "fighting") {
                typeImage = fightType;
              } else if (type == "steel") {
                typeImage = steelType;
              } else if (type == "ground") {
                typeImage = rockType;
              } else if (type == "rock") {
                typeImage = groundType;
              } else if (type == "electric") {
                typeImage = eletricType;
              } else if (type == "ghost") {
                typeImage = ghostType;
              } else if (type == "dark") {
                typeImage = darkType;
              } else if (type == "dragon") {
                typeImage = dragonType;
              } else if (type == "bug") {
                typeImage = bugType;
              } else if (type == "ice") {
                typeImage = iceType;
              } else if (type == "normal") {
                typeImage = normalType;
              } else if (type == "psychic") {
                typeImage = psychicType;
              } else {
                typeImage = "grey";
              }
              return <img src={typeImage} height={"35px"} />;
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}
