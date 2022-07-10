import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

export const Navbar: React.FC = () => {
  return (
    <>
      <AppBar color='secondary'>
        <Toolbar>
          <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
            <FitnessCenterIcon /> Fit Gym
          </Typography>
          <Box
            sx={{
              width: "200px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: "5px",
            }}
          >
            <Link href='/Home' underline='none' variant='h6' color='white'>
              Inicio
            </Link>
            <Link href='/Sobre' underline='none' variant='h6' color='white'>
              Sobre
            </Link>
            <Link href='/Contato' underline='none' variant='h6' color='white'>
              Contato
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
