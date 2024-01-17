import { Button, TextField, Typography } from "@mui/material";
import { IPropsRegister } from "../../common/types/auth";

const RegisterPage: React.FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
  const {
    setFirstName,
    setUserName,
    setEmail,
    setPassword,
    setRepeatPassword,
    navigate,
  } = props;
  return (
    <div>
      <Typography variant="h3" textAlign={"center"}>
        Ro`yxatdan o`tish
      </Typography>
      <Typography variant="body2" textAlign={"center"}>
        Ro`yxatdan o`tish uchun malumotlaringizni kiriting
      </Typography>
      <TextField
        label="Ism"
        variant="outlined"
        placeholder="Ismingizni kiriting"
        fullWidth={true}
        margin="normal"
        size="small"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Foydalanuvchi"
        variant="outlined"
        placeholder="Foydalanuvchi nomini kiriting"
        fullWidth={true}
        margin="normal"
        size="small"
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        placeholder="email manzilingizni kiriting"
        fullWidth={true}
        margin="normal"
        size="small"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Maxfiy kalit"
        type="password"
        variant="outlined"
        placeholder="sizning maxfiy kalitingiz"
        fullWidth={true}
        margin="normal"
        size="small"
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="true"
      />
      <TextField
        label="maxfiy kalitingizni tasdiqlang"
        type="password"
        variant="outlined"
        placeholder="Maxfiy kalitingizni takroran kiriting"
        fullWidth={true}
        margin="normal"
        size="small"
        onChange={(e) => setRepeatPassword(e.target.value)}
        autoComplete="true"
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          marginTop: "20px",
          marginBottom: "10px",
        }}
      >
        Ro`yxatdan o`tish
      </Button>
      <Typography variant="body1" textAlign={"center"}>
        Siz ro`yxatdan o`tganmisiz?
        <span className="incitingText" onClick={() => navigate("/login")}>
          Tizimga kirish
        </span>
      </Typography>
    </div>
  );
};

export default RegisterPage;
