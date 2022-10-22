
import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Main from './components/Main'
import ItemListContainer from './components/itemListContainer'
import Cart from './components/Cart'
import ItemDetail from './components/ItemDetail';
import { CartContextProvider } from './components/context/cartContext';

function App() {
  return (
    <div>
      <CartContextProvider>
      <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path = {'/'} element={<Main/>}></Route>
    <Route path = {'/productos'} element={<ItemListContainer greetings={'DANCE COMPANY'}/>}></Route>
    <Route path = {'/cart'} element={<Cart/>}></Route>
    <Route path = {'Detail/:id'} element={<ItemDetail/>}></Route>
    </Routes>
   </BrowserRouter>
   </CartContextProvider>
    </div>
  );
}

export default App;
