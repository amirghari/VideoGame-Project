import { List, ListItem, HStack, Image, Text } from '@chakra-ui/react'
import useGenres from '../Hooks/useGenres'
import getNewImageUrl from '../services/getNewImageUrl'

const GenreList = () => {
  const { genres } = useGenres()
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              src={getNewImageUrl(genre.image_background)}
              borderRadius={8}
            />
            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
