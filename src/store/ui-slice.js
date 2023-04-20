import { createSlice } from '@reduxjs/toolkit';

const initialState = { showModal: true }

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
