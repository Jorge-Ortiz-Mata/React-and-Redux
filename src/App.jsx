import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import './App.css';
import Items from './components/items/Items';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './components/notification/Notification';
import { uiActions } from './store/ui-slice';

function App() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.handleNotification({ status: 'sending', message: 'Sending http request' }))

      const response = await fetch(
        'https://other-60f25-default-rtdb.firebaseio.com/cart.json',{
          method: 'PUT',
          body: JSON.stringify(cart.items)
        }
      )

      if(!response.ok){
        throw new Error('Send cart failed.');
      }

      dispatch(uiActions.handleNotification({ status: 'success', message: 'Send cart data successfully' }))
    }

    sendCartData().catch(error => {
      dispatch(uiActions.handleNotification({ status: 'error', message: 'Something went wrong.' }))
    });
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
