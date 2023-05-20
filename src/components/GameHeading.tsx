import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres()
  const genre = genres?.results.find(g => g.id === gameQuery.genreID)
  const platform = genres?.results.find(p => p.id === gameQuery.platformID)
  const header = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return <Heading as="h1" marginY={5} fontSize='5xl'>{header}</Heading>;
};

export default GameHeading;
