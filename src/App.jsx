import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import './sass/Index.scss';
import Home from './views/Home.jsx';
import MovieDetail from './views/MovieDetail.jsx';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Header marmota={(inputValue)=>{
        setSearchValue(inputValue)
      }}/>
      <Routes>
        <Route path='/' element={<Home searchValueProp={searchValue} />}/>
        <Route path='/movie/:id' element={<MovieDetail searchValueProp={searchValue} />}/>
      </Routes>
    </>
  )
}

export default App
