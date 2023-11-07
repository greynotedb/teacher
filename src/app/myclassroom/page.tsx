import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import EmptyPageCard from '@/components/EmptyPageCard'

interface MyClassroomProps {
  
}

const MyClassroom: FC<MyClassroomProps> = ({}) => {
  return (
    <Box>
      <EmptyPageCard />
    </Box>
  )
}

export default MyClassroom