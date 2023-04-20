# Readt and Redux.

## Redux Setup.

These steps you need to install and congifure Redux in your React application.
### Install the packages.

Open a new terminal and install the next packages:

```bash
$ yarn add @reduxjs/toolkit react-redux
```

### Store Folder, Slices and Actions.

Create a new folder under the src folder called **store**. Create an index.js file and separate files to store your slices.

* ui-slice.js

```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = { showModal: false }

export const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    toggleModal(state){ // It gets the latest state from initialState.
      state.showModal = !state.showModal;
    }
  }
});

export const uiActions = uiSlice.actions;
```

* index.js

```javascript
import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui-slice";

export const store = configureStore({
  reducer: { ui: uiSlice.reducer }
});
```

### Provider in Index.jsx

In your index.jsx file, import Provider to make available the store provider in all the web application.

* index.jsx

```javascript
import { Provider } from 'react-redux';
import { store } from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

That's all.

## How to implement Redux.

In order to use the reducers defined in Redux under your application, follow these steps.

### Active a reducer (function inside of a slice).

We have a custom button where it activates a reducer from our uiActions.

* src/components/header/Header.jsx

```javascript
import { useDispatch } from "react-redux";
import CustomButton from "../common/CustomButton";
import { uiActions } from "../../store/ui-slice";

const Header = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(uiActions.toggleModal());
  }

  return(
    <nav className="flex items-center justify-between w-full border p-3">
      <h3 className="font-bold text-xl">My App</h3>
      <CustomButton text="Add to the cart" onPress={handleClick} />
    </nav>
  )
}

export default Header;
```
### Get value from redux

* src/components/modal/Modal.jsx

```javascript
import { useSelector } from "react-redux";
import ModalItems from "./ModalItems";

const Modal = () => {
  const modalState = useSelector((state) => state.ui.showModal); // This is the key on store/index.js

  if (modalState) return;

  return(
    <div className="border flex flex-col m-20 p-2 gap-5">
      <h3 className="text-xl font-bold">Your Shopping Cart</h3>
      <ModalItems />
    </div>
  )
}

export default Modal;

```

### Passing arguments

We can pass arguments to our reducers and access them by the payload parameter.

* Example Component:

```javascript
import { useDispatch } from "react-redux";
import { cartActions } from '../../store/cart-slice'
import CustomButton from "../common/CustomButton";

const ModalItem = ({item}) => {
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(cartActions.addItem(item));
  }

  return(
    <div className="flex flex-col gap-2">
      ....
      <CustomButton text='+' onPress={handlePlus} />
    </div>
  )
}

```

* Reducer function.

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalItems: 0,
  totalAmount: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem(state, action){
      const newItem = action.payload;
      const currentItem = state.items.find(item => newItem.id === item.id);

      if (currentItem){
        currentItem.quantity++;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          price: newItem.price,
        });
      }
    },
  }
})

export const cartActions = cartSlice.actions;
```
