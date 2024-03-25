
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";



export default function Navbar() {
    return (
        <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography to='/recipes' component={Link} variant="h6" color='inherit' sx={{ flexGrow: 1 }}>
            Recipe App
          </Typography>
          <Button component={Link} to="/add-recipe" color="inherit">ADD NEW RECIPE</Button>
        </Toolbar>
      </AppBar>
    );
}