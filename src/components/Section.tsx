import { Box, Grid } from "@mui/material";
import img1 from "../../src/assets/imagem1.jpg";
import img2 from "../../src/assets/imagem2.jpg";
import img3 from "../../src/assets/imagem3.jpg";

export const Section: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container component='section' mt={17}>
          <Grid item xs={12} sm={4}>
            <Box>
              <img src={img1} width='400px' height='400px' />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <img src={img2} width='400px' height='400px' />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <img src={img3} width='400px' height='400px' />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
