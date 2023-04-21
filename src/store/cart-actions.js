import { uiActions } from "./ui-slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.handleNotification({
      status: 'sending',
      message: 'Sending http request'
    }));

    const sendRequest = async () => {
      const response = await fetch(
        'https://other-60f25-default-rtdb.firebaseio.com/cart.json',{
          method: 'PUT',
          body: JSON.stringify(cart.items)
        }
      )

      if(!response.ok){
        throw new Error('Send cart failed.');
      }
    }

    try {
      await sendRequest();
      dispatch(uiActions.handleNotification({
        status: 'success',
        message: 'Send cart data successfully'
      }))

    } catch (error) {
      dispatch(uiActions.handleNotification({
        status: 'error',
        message: 'Something went wrong.'
      }))
    }
  };
}

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://other-60f25-default-rtdb.firebaseio.com/cart.json',
      )

      if(!response.ok){
        throw new Error('Get cart failed.');
      }

      return await response.json();
    }

    try {
      const cartData = await fetchData();
      return cartData;
    } catch (error) {
      dispatch(uiActions.handleNotification({
        status: 'error',
        message: 'Something went wrong.'
      }))
    }
  }
}
