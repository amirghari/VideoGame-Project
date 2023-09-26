import useGames from '../Hooks/useGames'
import { Text } from '@chakra-ui/react'

const GameGrid = () => {
  const { games, error } = useGames()

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games ? (
          games.map((game) => <li key={game.id}>{game.name}</li>)
        ) : (
          <li>No games available.</li>
        )}
      </ul>
    </>
  )
}

export default GameGrid
