// Импортируем функцию configureStore из библиотеки Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Импортируем редюсер authSlice из файла "./slice/auth"
import authSlice from "./slice/auth";

// Создаем Redux-хранилище
const store = configureStore({
  // Передаем объект с редюсерами в параметр reducer
  reducer: {
    auth: authSlice, // Редюсер для состояния авторизации
  },
});

// Экспортируем тип для диспетчера Redux
export type AppDispatch = typeof store.dispatch;

// Экспортируем тип для состояния хранилища
export type RootState = ReturnType<typeof store.getState>;

// Экспортируем созданное Redux-хранилище
export default store;
