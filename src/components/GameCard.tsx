import { Game } from '../Hooks/useGames'
import { Card, CardBody, Heading, Image, HStack } from '@chakra-ui/react'
import PlatformIcons from './PlatformIcons'
import CriticScore from './CriticScore'
import getNewImageUrl from '../services/getNewImageUrl'

const GameCard = ({ game }: { game: Game }) => {
  return (
    <>
      <Card borderRadius={10} overflow={'hidden'} marginX={2}>
        <Image src={getNewImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize={'2xl'}>{game.name}</Heading>
          <HStack justifyContent={'space-between'}>
            <PlatformIcons
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  )
}

export default GameCard
