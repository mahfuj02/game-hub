import React from "react";
import useScreesots from "../hooks/useGameScreensots";
import { Image, SimpleGrid } from "@chakra-ui/react";
interface Props {
  gameId: number;
}

const GameScreensort = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreesots(gameId);
  console.log("data: ", data);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <>
      <SimpleGrid columns={{base:1, md: 2}} spacing={2}>
      {data?.results.map((data) => (
        <Image key={data.id} src={data.image} />
          
        
      ))}
      </SimpleGrid>
      
    </>
  );
};

export default GameScreensort;
