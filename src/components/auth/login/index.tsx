import { TextField, Button, Typography } from "@mui/material";
import { IPropsLogin } from "../../common/types/auth";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { setEmail, setPassword, navigate } = props;
  return (
    <div>
      <Typography variant="h3" textAlign={"center"}>
        Avtorizasiya
      </Typography>
      <Typography variant="body2" textAlign={"center"}>
        O`zingizning login va maxfiy kalitingizni kiriting
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        placeholder="Email aderesingizni kiriting"
        fullWidth={true}
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        placeholder="maxfiy so`zni kiriting "
        fullWidth={true}
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="true"
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ marginBottom: "10px" }}
      >
        Kirish
      </Button>
      <Typography variant="body1" textAlign={"center"}>
        Sizda accaunt yo`qmi?
        <span className="incitingText" onClick={() => navigate("/register")}>
          Кo'yxatdan o'tish
        </span>
      </Typography>
    </div>
  );
};

export default LoginPage;
