import { useDispatch } from 'react-redux';
import { cartActions } from "../../store/cart-slice";
import CustomButton from "../common/CustomButton";

const Item = ({product}) => {
  const dispatch = useDispatch();

  const hanldleClick = () => {
    dispatch(cartActions.addItem(product))
  }

  return(
    <div className="border flex p-5 justify-between">
      <div className="flex items-center justify-between gap-5">
        <h4 className="font-semibold text-base">{product.name}</h4>
        <p className='font-semibold italic text-sm'>${product.price} USD</p>
      </div>
      <div className="flex items-center justify-end">
        <CustomButton text='Add to the cart' onPress={hanldleClick} />
      </div>
    </div>
  )
}

export default Item;
