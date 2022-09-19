import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  Switch
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";


const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const label = { inputProps: { 'aria-label': 'Switch demo' } };
function Header() {
  const classes = useStyles();
  const history = useHistory();

  const { currency, setCurrency } = CryptoState();

  console.log(currency);

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push("/")}
              variant="h6"
              className={classes.title}>
              EncrypTo-App
            </Typography>

            {/* <div style={{display: "flex"}}>
              <h4 style={{marginTop: "10px"}}>Light Mode</h4>
              <Switch {...label} />
            </div> */}
            
            <Select
              variant="outlined"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              style={{ width: 100, height: 40, marginLeft: 20 }}>
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
