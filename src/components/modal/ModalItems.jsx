import { useSelector } from "react-redux";
import ModalItem from "./ModalItem";

const ModalItems = () => {
  const itemsAdded = useSelector(state => state.cart.items);

  return(
    <>
      {
        itemsAdded.map(item => {
          return <ModalItem key={item.id} item={item} />
        })
      }
    </>
  )
}

export default ModalItems;
