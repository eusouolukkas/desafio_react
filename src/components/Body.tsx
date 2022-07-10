import { Box, Stack, Typography } from "@mui/material";

export const Body: React.FC = () => {
  return (
    <>
      <Stack spacing={2} mt={30}>
        <Typography variant='h4' color='white' align='center'>
          Academia fundada em 2000
        </Typography>
        <Box>
          <Typography variant='h4' color='white' align='center'>
            O nosso objetivo é saúde
          </Typography>
        </Box>
        <Box>
          <Typography variant='h4' color='white' align='center'>
            Instrutores capacitados
          </Typography>
        </Box>
        <Box>
          <Typography variant='h4' color='white' align='center'>
            Toda linha de suplementação de qualidade
          </Typography>
        </Box>
      </Stack>
    </>
  );
};
