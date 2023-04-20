import { useDispatch } from "react-redux";
import { cartActions } from '../../store/cart-slice'
import CustomButton from "../common/CustomButton";

const ModalItem = ({item}) => {
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(cartActions.addItem(item));
  }

  const handleMinnus = () => {
    dispatch(cartActions.removeItem(item.id));
  }

  return(
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h5 className="font-semibold text-lg">{item.name}</h5>
        <div className="flex items-center gap-5">
          <p className="font-semibold">${(item.price * item.quantity).toFixed(2)} USD</p>
          <p className="italic font-semibold text-sm">${item.price}/item</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p>x{item.quantity}</p>
        <div className="flex items-center gap-3">
          <CustomButton text='+' onPress={handlePlus} />
          <CustomButton text='-' onPress={handleMinnus} />
        </div>
      </div>
    </div>
  )
}

export default ModalItem;
