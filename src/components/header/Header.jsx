import CustomButton from "../common/CustomButton";

const Header = () => {

  const handleClick = () => {
    console.log('Hello World')
  }

  return(
    <nav className="flex items-center justify-between w-full border p-3">
      <h3 className="font-bold text-xl">My App</h3>
      <CustomButton text="Add to the cart" onPress={handleClick} />
    </nav>
  )
}

export default Header;
