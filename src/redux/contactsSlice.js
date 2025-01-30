import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

const persistContactsConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

export const contactsReducer = persistReducer(
  persistContactsConfig,
  contactsSlice.reducer
);
export const { addContact, deleteContact } = contactsSlice.actions;
