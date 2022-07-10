import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const CardContato: React.FC = () => {
  return (
    <div>
      <Grid ml={20}>
        <Box component='span' mt={30} sx={{ display: "inline-block" }}>
          <Card sx={{ backgroundColor: "#9C27B0" }}>
            <CardContent>
              <Typography variant='h4' gutterBottom>
                Número para Contato
              </Typography>
              <Typography variant='subtitle1' align='center' gutterBottom>
                (XX) X XXXX-XXXX
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box component='span' ml={2} mt={30} sx={{ display: "inline-block" }}>
          <Card sx={{ backgroundColor: "#9C27B0" }}>
            <CardContent>
              <Typography variant='h4' gutterBottom>
                Onde nos encontrar
              </Typography>
              <Typography variant='subtitle1' align='center' gutterBottom>
                <CardMedia
                  component='img'
                  height='100'
                  image='../../src/assets/maps.jpg'
                ></CardMedia>
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box component='span' ml={2} mt={30} sx={{ display: "inline-block" }}>
          <Card sx={{ backgroundColor: "#9C27B0" }}>
            <CardContent>
              <Typography variant='h4' gutterBottom>
                Nossas redes sociais
              </Typography>
              <Typography variant='subtitle1' align='center' gutterBottom>
                <Link href='#' color='inherit'>
                  <FacebookIcon fontSize='large' />
                  <InstagramIcon fontSize='large' />
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </div>
  );
};
