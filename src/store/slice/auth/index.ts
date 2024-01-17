// Импорт функции createSlice из библиотеки Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../../../components/common/types/auth";

// Начальное состояние для редюсера
const initialState: IAuthState = {
  user: {
    userId: null,
    firstName: "",
    userName: "",
    email: "",
    createdAt: "",
    updateAt: "",
    categoriy: [
      {
        categoryId: null,
        name: "",
        createdAt: "",
        updateAt: "",
        userId: null,
      },
    ],
  }, // Объект с данными пользователя
  isLogged: false, // Флаг, указывающий, авторизован ли пользователь
};

// Создание Redux-слайса с помощью createSlice
export const authSlice = createSlice({
  // Уникальное имя слайса
  name: "auth",

  // Начальное состояние слайса
  initialState,

  // Объект с редюсерами и действиями
  reducers: {
    // Действие "login" изменяет состояние при успешной авторизации
    login(state, action) {
      state.user = action.payload; // Устанавливаем данные пользователя из действия
      state.isLogged = true; // Устанавливаем флаг авторизации в true
    },
  },
});

// Экспорт действий из слайса
export const { login } = authSlice.actions;

// Экспорт редюсера из слайса
export default authSlice.reducer;
