import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: true,
  notification: null
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    toggleModal(state){ // It gets the latest state from initialState.
      state.showModal = !state.showModal;
    },

    handleNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message
      }
    }
  }
});

export const uiActions = uiSlice.actions;
