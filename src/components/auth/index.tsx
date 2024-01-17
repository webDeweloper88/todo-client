import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import { Box } from "@mui/material";
import "./style.scss";
import { instance } from "../../utils/axios";
import { useAppDispatch } from "../../utils/hook";
import { login } from "../../store/slice/auth";
import { AppError } from "../common/types/auth/errors";

const AuthRootComponent: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (location.pathname === "/login") {
      try {
        const UserData = {
          email,
          password,
        };
        const user = await instance.post("auth/login", UserData);
        await dispatch(login(user.data));
        navigate("/");
      } catch (e) {
        return e;
      }
    } else {
      if (password === repeatPassword) {
        const UserData = {
          firstName,
          userName,
          email,
          password,
        };
        const newUser = await instance.post("auth/register", UserData);
        console.log(newUser.data);
      } else {
        throw new Error(AppError.PasswordDoNotMAtch);
      }
    }
  };

  return (
    <>
      <div className="root">
        <form onSubmit={onSubmitHandler} className="form">
          <Box
            bgcolor={"#fff"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            maxWidth={500}
            margin="auto"
            padding={3}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc "}
          >
            {location.pathname === "/login" ? (
              <LoginPage
                setEmail={setEmail}
                setPassword={setPassword}
                navigate={navigate}
              />
            ) : null}
            {location.pathname === "/register" ? (
              <RegisterPage
                setEmail={setEmail}
                setPassword={setPassword}
                setRepeatPassword={setRepeatPassword}
                setFirstName={setFirstName}
                setUserName={setUserName}
                navigate={navigate}
              />
            ) : null}
          </Box>
        </form>
      </div>
    </>
  );
};

export default AuthRootComponent;
