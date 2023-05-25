import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  console.log("data ", data);
  if (isLoading) return null;
  if (error) throw error;
  const first = data?.results[0];
  console.log(" check info... ", first);

  return first ? (
    <video src={first?.data[480]} poster={first?.preview} controls />
  ) : (
    <p>Hello guys</p>
  );
};

export default GameTrailer;
