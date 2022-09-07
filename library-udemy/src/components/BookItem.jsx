import {Link} from 'react-router-dom';
import {Box,Image,Text,Button,Spacer,Center,Tag} from '@chakra-ui/react'
import {FaBook,FaLanguage} from 'react-icons/fa'

export function BookItem(book){


    return (
        <>

        <Box w='100%' p='4' display='flex' borderWidth='1px' borderRadius='lg'>
            <Image src={book.cover} width='100px' borderRadius='lg'/>
            <Box display='flex' p='4' flexDirection='column'>
                <Text as='samp' fontSize='x1'>{book.title}</Text>
                <Text color='teal'>{(book.publisher_date)}</Text>
            <Link to={'/book/'+book.ID}>
                <Button colorScheme='blue' w='100px' mt='4'>Details</Button> 
            </Link> 
            </Box>
            {/* we set the space of the box in a flex */}
            <Spacer/>
            <Box display='flex' p='6' mr='20' flexDirection='column'>
                <Center><FaBook/><Tag m='1' p='2' colorScheme='green' fontSize='sm'>{book.pages}</Tag></Center>
                <Center><FaLanguage/><Text m='1' p='2'>{book.language}</Text></Center>
            </Box>
        </Box>
        </>
    )
}