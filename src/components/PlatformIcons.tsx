import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaAndroid,
  FaLinux,
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { Platform } from '../Hooks/useGames'
import { HStack, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface Props {
  platforms: Platform[]
}

const PlatformIcons = ({ platforms }: Props) => {
  const icons: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    ios: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    mac: FaApple,
    nintendo: SiNintendo,
    web: BsGlobe,
    iphone: MdPhoneIphone,
  }
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          as={icons[platform.slug]}
          key={platform.slug}
          color={'gray.500'}
        />
      ))}
    </HStack>
  )
}

export default PlatformIcons
