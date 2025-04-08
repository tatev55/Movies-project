import { Box, Typography,  Grid } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 5,
        color: '#B5B1B1',
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          width: '90%',
          height: '90%',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'rgb(181, 177, 177)' }}>
            © 2025 MovieHub. All Rights Reserved.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Disclaimer:</strong> The content on this site is for entertainment purposes only. All movie titles, posters, and images are the property of their respective owners.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }} sx={{ textAlign: 'center' }}>
          <Typography variant="body2">
            <strong>Phone:</strong>
            <span sx={{ color: '#DB202C',  }}>
              +3377990011
            </span>
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Email:</strong>
            <span sx={{ color: '#DB202C', }}>
              moviespage@gmail.com
            </span>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};


