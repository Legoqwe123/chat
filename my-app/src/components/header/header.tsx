import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";

import style from "./header.module.sass";
import { HeaderButton } from "./ui/header.button";

export const Header = (): React.ReactElement => {
  return (
    <AppBar position="static">
      <Typography variant="h6" className={style.title}>
        Chat Room
      </Typography>
      <Toolbar className={style.header}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <ChatIcon></ChatIcon>
        </IconButton>
        <Box>
          <HeaderButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
