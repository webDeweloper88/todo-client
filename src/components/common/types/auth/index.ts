export interface IPropsLogin {
  setPassword: (value: string) => void;
  setEmail: (value: string) => void;
  navigate: (to: string) => void;
}
export interface IPropsRegister {
  setFirstName: (value: string) => void;
  setUserName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setRepeatPassword: (value: string) => void;
  navigate: (to: string) => void;
}

export interface User {
  userId: number;
  firstName: string;
  userName: string;
  email: string;
  password: string;
  token: string;
}

export interface IAuthState {
  user: IPublicUser;
  isLogged: boolean;
}
export interface IPublicUser {
  userId: number | null;
  firstName: string;
  userName: string;
  email: string;
  createdAt: string;
  updateAt: string;
  categoriy: [ICategoriy];
}

export interface ICategoriy {
  categoryId: number | null;
  name: string;
  createdAt: string;
  updateAt: string;
  userId: number | null;
}
