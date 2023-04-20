import { useDispatch } from "react-redux";
import CustomButton from "../common/CustomButton";
import { uiActions } from "../../store/ui-slice";

const Header = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(uiActions.toggleModal());
  }

  return(
    <nav className="flex items-center justify-between w-full border p-3">
      <h3 className="font-bold text-xl">My App</h3>
      <CustomButton text="Add to the cart" onPress={handleClick} />
    </nav>
  )
}

export default Header;
