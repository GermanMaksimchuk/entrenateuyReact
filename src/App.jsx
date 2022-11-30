import React from 'react';
import NavBar from './components/NavBar';
import '../src/index.css'
import Banner from './components/Banner';
import Footer from './components/Footer';
import ItemListConinter from './components/ItemListconteiner';



function App() {
  return (
<div>
<NavBar />
<Banner />
<ItemListConinter/>
<Footer />
</div>
  );
}

export default App;
