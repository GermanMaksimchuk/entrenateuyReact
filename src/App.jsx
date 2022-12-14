import React from 'react';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import '../src/index.css'
import Banner from './components/Banner';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListconteiner';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import Error404 from './components/Error404';



function App() {
  return (
<div>
<BrowserRouter>
<NavBar />
<Banner />
<Routes>
<Route path={"/"} element={<ItemListContainer />} />
<Route path={"/category/:id"} element={<ItemListContainer />} />
<Route path={"/item/:id"} element={<ItemDetailConteiner />} />
<Route path={"*"} element={<Error404 />} />
</Routes>
<Footer />
</BrowserRouter>
</div>
  );
}

export default App;
