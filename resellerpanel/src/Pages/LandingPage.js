import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f3f7ff',
        display: 'flex',
        alignItems: 'center',
        py: 5,
      }}
    >
      <Container maxWidth="md">

        {/* Heading */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 800,
            color: '#1976D2',
            letterSpacing: 1,
          }}
        >
          ResellerHub Pro
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Choose your role to continue
        </Typography>

        {/* Card Section */}
        <Grid container spacing={4} justifyContent="center">
          
          {/* Admin Card */}
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 4,
                boxShadow: '0 6px 20px rgba(0,0,0,0.07)',
                transition: '0.3s',
                background: '#fff',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 10px 28px rgba(0,0,0,0.12)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', py: 6 }}>
                <AdminPanelSettingsIcon sx={{ fontSize: 65, color: '#1976D2', mb: 3 }} />
                <Typography variant="h5" fontWeight={700}>Admin</Typography>
                <Typography color="text.secondary" sx={{ mt: 1, mb: 3 }}>
                  Manage courses, resellers & invoices
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    textTransform: 'none',
                    borderRadius: 2,
                    px: 4,
                    bgcolor: '#1976D2',
                    '&:hover': { bgcolor: '#0f58a4' },
                  }}
                  onClick={() => (window.location.href = '/admin')}
                >
                  Enter Admin Dashboard
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Reseller Card */}
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 4,
                boxShadow: '0 6px 20px rgba(0,0,0,0.07)',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 10px 28px rgba(0,0,0,0.12)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', py: 6 }}>
                <StorefrontIcon sx={{ fontSize: 65, color: '#1976D2', mb: 3 }} />
                <Typography variant="h5" fontWeight={700}>Reseller</Typography>
                <Typography color="text.secondary" sx={{ mt: 1, mb: 3 }}>
                  Sell courses under your own brand
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    textTransform: 'none',
                    borderRadius: 2,
                    px: 4,
                    bgcolor: '#1976D2',
                    '&:hover': { bgcolor: '#0f58a4' },
                  }}
                  onClick={() => navigate('/login')}
                >
                  Enter Reseller Platform
                </Button>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
