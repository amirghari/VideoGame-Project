import useGames from '../Hooks/useGames'
import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'

const GameGrid = () => {
  const { games, error } = useGames()

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
        padding={'10px'}
        spacing={'10px'}
      >
        {games ? (
          games.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <li>No games available.</li>
        )}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
