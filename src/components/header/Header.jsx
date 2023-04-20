import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../common/CustomButton";
import { uiActions } from "../../store/ui-slice";

const Header = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const handleClick = () => {
    dispatch(uiActions.toggleModal());
  }

  return(
    <nav className="flex items-center justify-between w-full border p-3">
      <h3 className="font-bold text-xl">My App</h3>
      <div className="items-center flex gap-3">
        <CustomButton text="Add to the cart" onPress={handleClick} />
        <p className="text-sm font-bold rounded-full py-1 px-2 bg-blue-700 text-white">{items.length}</p>
      </div>
    </nav>
  )
}

export default Header;
