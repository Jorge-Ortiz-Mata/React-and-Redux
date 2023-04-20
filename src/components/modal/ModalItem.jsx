import CustomButton from "../common/CustomButton";

const ModalItem = ({item}) => {

  const handlePlus = () => {}

  const handleMinnus = () => {}

  return(
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h5 className="font-semibold text-lg">{item.name}</h5>
        <div className="flex items-center gap-5">
          <p className="font-semibold">${item.price * item.quantity} USD</p>
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
