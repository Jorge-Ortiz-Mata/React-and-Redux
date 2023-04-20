import CustomButton from "../common/CustomButton";

const Item = () => {

  return(
    <div className="border flex flex-col gap-2 p-5">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-base">Eggs</h4>
        <p>6.00</p>
      </div>
      <p>This is short description</p>
      <div className="flex items-center justify-end">
        <CustomButton text='Add to the cart' />
      </div>
    </div>
  )
}

export default Item;
