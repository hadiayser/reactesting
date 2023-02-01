import logo from './logo.svg';
import './App.css';
import ProductCard from './components/ProductCard';
import products from './product.json'



// props inni parantensen med {}



// <> og </> er fragments, og gjør at barneelementer slipper et forelderelement



function App() {
  return (
    <div className="App">
      {products.map((product)=>
        // bør bruke key when mapping
        <ProductCard key={product.prodid} name={product.title} cat={product.category} price={product.price}/>
      )}
      {/* <ProductCard name="Master Wu :D" price="89 kr" cat="Ninjago"/>
      <ProductCard name="Dragon Zane :o" price="99 kr" cat="Ninjago"/>
      <ProductCard name="Scubadive Kai :p" price=" 59 kr" cat="Ninjago"/>
      <ProductCard name="Master who :3" price="39 kr" cat="Ninjago"/> */}
    </div>
  );
}

export default App;
