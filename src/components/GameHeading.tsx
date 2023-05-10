import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  //genre
  //platform
  //patform genre
  const header = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  return <Heading as="h1" marginY={5}>{header}</Heading>;
};

export default GameHeading;
