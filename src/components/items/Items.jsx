import { products } from "../../utilities/products";
import Item from "./Item";

const Items = () => {

  return(
    <div className="flex flex-col m-20 p-2 gap-5">
      <h2 className="text-center font-semibold text-lg">Buy your favorite products</h2>
      {
        products.map(product => {
          return(
            <Item key={product.id} product={product}/>
          )
        })
      }
    </div>
  )
}

export default Items;
