import { useDispatch } from 'react-redux';
import { cartActions } from "../../store/cart-slice";
import CustomButton from "../common/CustomButton";

const Item = ({product}) => {
  const dispatch = useDispatch();

  const hanldleClick = () => {
    dispatch(cartActions.addItem(product))
  }

  return(
    <div className="border flex flex-col gap-2 p-5">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-base">{product.name}</h4>
        <p>${product.price}</p>
      </div>
      <p>This is short description</p>
      <div className="flex items-center justify-end">
        <CustomButton text='Add to the cart' onPress={hanldleClick} />
      </div>
    </div>
  )
}

export default Item;
