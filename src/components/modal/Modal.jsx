import { useSelector } from "react-redux";
import ModalItems from "./ModalItems";

const Modal = () => {
  const modalState = useSelector((state) => state.ui.showModal);
  const currentItems = useSelector((state) => state.cart.items);

  if (modalState) return;

  return(
    <div className="border flex flex-col mt-20 mx-20 p-5 rounded-lg gap-5">
      <h3 className="text-xl font-bold">Your Shopping Cart</h3>
      {
        currentItems.length > 0
        ? <ModalItems />
        : <p className="font-semibold text-base">You haven't added products to your cart.</p>
      }
    </div>
  )
}

export default Modal;
