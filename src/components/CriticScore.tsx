import React from 'react'
import { Badge } from '@chakra-ui/react'

interface Props {
  score: number
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      paddingX={2}
      fontSize={'14px'}
      borderRadius={'25%'}
      colorScheme={score > 75 ? 'green' : score > 50 ? 'yellow' : 'red'}
    >
      {score}
    </Badge>
  )
}

export default CriticScore
