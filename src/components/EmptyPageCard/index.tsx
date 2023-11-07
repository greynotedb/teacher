import { FC } from 'react'
import { Card,
         Box,
         Image,
         Text,
} from '@chakra-ui/react'

interface EmptyPageCardProps {
  
}

const EmptyPageCard: FC<EmptyPageCardProps> = ({}) => {
  return(
    <Card
      border={"1px solid"}
      borderColor={"gray.300"}
      w={"full"}
      h={'full'}
      shadow={'none'}
      p={10}
    >
      <Box textAlign={"center"}>
        <Image
          src="/images/emptyPage.svg"
          w={'50%'}
          height={'50%'}
          h={'full'}
          alt="card"
          mx={"auto"}
          pointerEvents={'none'}
        />
        <Text fontWeight={"500"} fontSize={'lg'} mt={'10'}>No Content here</Text>
      </Box>
    </Card>
  )
}

export default EmptyPageCard