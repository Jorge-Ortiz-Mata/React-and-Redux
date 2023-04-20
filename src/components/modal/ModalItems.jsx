import CustomButton from "../common/CustomButton";

const ModalItems = () => {

  const handlePlus = () => {}

  const handleMinnus = () => {}

  return(
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h5 className="font-semibold text-lg">Test item</h5>
        <div className="flex items-center gap-2">
          <p>18.00</p>
          <p>(6.00/item)</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p>x3</p>
        <div className="flex items-center gap-3">
          <CustomButton text='+' onPress={handlePlus} />
          <CustomButton text='-' onPress={handleMinnus} />
        </div>
      </div>
    </div>
  )
}

export default ModalItems;
