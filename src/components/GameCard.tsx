import { Game } from '../Hooks/useGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import PlatformIcons from './PlatformIcons'

const GameCard = ({ game }: { game: Game }) => {
  return (
    <>
      <Card borderRadius={10} overflow={'hidden'}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize={'2xl'}>{game.name}</Heading>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </CardBody>
      </Card>
    </>
  )
}

export default GameCard
