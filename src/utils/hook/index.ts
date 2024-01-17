// Импорт хуков из библиотеки react-redux
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

// Импорт типов для диспетчера и состояния хранилища из файла "../../store"
import { AppDispatch, RootState } from "../../store";

// Хук для использования диспетчера Redux в компонентах
export const useAppDispatch = () => useDispatch<AppDispatch>();

// export const useAppDispatch = () => AppDispatch = useDispatch;

// Хук для использования селекторов Redux с типизированным состоянием хранилища
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Кастомный хук для удобного доступа к состоянию авторизации
export const useAuth = () => {
  // Используем хук useAppSelector для получения данных из состояния хранилища
  const { isLogged } = useAppSelector((state) => state.auth);

  // Возвращаем нужные данные из состояния
  return isLogged;
};
