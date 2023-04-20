import ModalItems from "./ModalItems";

const Modal = () => {

  return(
    <div className="border flex flex-col m-20 p-2 gap-5">
      <h3 className="text-xl font-bold">Your Shopping Cart</h3>
      <ModalItems />
    </div>
  )
}

export default Modal;
