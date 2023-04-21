import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import './App.css';
import Items from './components/items/Items';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './components/notification/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let initialize = true;

function App() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if(initialize){
      initialize = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch])

  return (
    <main className="flex flex-col">
      <Notification />
      <Header />
      <Modal />
      <Items />
    </main>
  );
}

export default App;
