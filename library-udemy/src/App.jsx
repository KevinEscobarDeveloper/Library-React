
import reactLogo from './assets/react.svg'
import  {BookList} from './components/BookList'
import { Header } from './components/Header'
import {Routes, Route} from 'react-router-dom';
import { BookDetail } from './components/BookDetail';
import {Box} from '@chakra-ui/react'
import { BookSearchList } from './components/BookSearchList';

export function App() {

  return (
    <>
      <Header/>

    <Box ml='15%' mr='15%' mt='50px'>
    <Routes>
          <Route path= '/'element= {<BookList/>}/>
          <Route path='book/:bookId' element={<BookDetail/>}/>
          <Route path='search/:word' element={<BookSearchList/>}/>
      </Routes>
    </Box>
      
    </>
  )
}


