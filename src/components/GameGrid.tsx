import useGames from '../Hooks/useGames'
import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import SkeletonGameCard from './SkeletonGameCard'

const GameGrid = () => {
  const { games, error, isLoading } = useGames()
  const skeletons = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
        padding={'10px'}
        spacing={'10px'}
      >
        {isLoading &&
          skeletons.map((skeleton) => <SkeletonGameCard key={skeleton} />)}
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
