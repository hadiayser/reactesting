import ProductCategory from "./ProductCategory"
import ProductPrice from "./ProductPrice"
import ProductTitle from "./ProductTitle"


export default function ProductCard({name, price, cat}){
    return (
      <article className="product-card">
      {/* first "name" is from the function ProductTitle, second "name" is from productCard osv osv */}
      <ProductTitle name={name}/>
      <ProductPrice price={price}/>
      <ProductCategory cat={cat}/>
      <button>Legg til i handlekurv</button>
      </article>
    )
  
    
  }