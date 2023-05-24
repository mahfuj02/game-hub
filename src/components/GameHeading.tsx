import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const { data: genres } = useGenres()
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const genre = genres?.results.find(g => g.id === genreId)

  const paltformId = useGameQueryStore(s => s.gameQuery.platformId)
  const platform = genres?.results.find(p => p.id === paltformId)

  const header = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return <Heading as="h1" marginY={5} fontSize='5xl'>{header}</Heading>;
};

export default GameHeading;
