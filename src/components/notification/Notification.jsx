import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector(state => state.ui.notification);

  return(
    <div className="absolute p-2 bg-sky-700 text-white font-semibold w-full">
      <p>{notification?.status}</p>
      <p>{notification?.message}</p>
    </div>
  )
}

export default Notification;
