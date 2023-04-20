import Item from "./Item";

const Items = () => {

  return(
    <div className="flex flex-col m-20 p-2 gap-5">
      <h2 className="text-center font-semibold text-lg">Buy your favorite products</h2>
      <Item />
    </div>
  )
}

export default Items;
