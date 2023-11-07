import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import EmptyPageCard from '@/components/EmptyPageCard'

interface MyNotesProps {
  
}

const MyNotes: FC<MyNotesProps> = ({}) => {
  return (
    <Box>
      <EmptyPageCard />
    </Box>
  )
}

export default MyNotes