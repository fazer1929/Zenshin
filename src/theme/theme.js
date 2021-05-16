import { createMuiTheme } from "@material-ui/core";
import { orange, purple, green, blue } from "@material-ui/core/colors";
/*
#5F9595
#FFB7A2
#AAB8BB
*/

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: "#5F27CD",
    },
    secondary: {
      main: "#22AB38",
    },
  },
});

export default theme;
