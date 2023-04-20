const CustomButton = ({text, onPress}) => {

  return(
    <button
      onClick={onPress}
      className="bg-gray-500 text-white text-sm font-semibold px-3 py-1 rounded-lg"
    >
      {text}
    </button>
  )
}

export default CustomButton;
