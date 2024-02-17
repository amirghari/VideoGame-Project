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
import { HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface Props {
  platforms: Platform[]
}

const PlatformIcons = ({ platforms }: Props) => {
  const icons: { [key: string]: IconType } = {
    windows: FaWindows,
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
    <HStack>
      {platforms.map((platform) => (
        <Icon as={icons[platform.slug]} key={platform.slug} />
      ))}
    </HStack>
  )
}

export default PlatformIcons
