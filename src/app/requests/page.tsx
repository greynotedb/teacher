import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import EmptyPageCard from '@/components/EmptyPageCard'

interface RequestsProps {
  
}

const Requests: FC<RequestsProps> = ({}) => {
  return (
    <Box>
      <EmptyPageCard />
    </Box>
  )
}

export default Requests