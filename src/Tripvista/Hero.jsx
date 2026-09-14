import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';

function Hero({ darkMode: propDarkMode }) {
    const theme = useTheme();
    const isDark = propDarkMode !== undefined ? propDarkMode : theme.palette.mode === 'dark';

    return (
        <Box
            sx={{
                minHeight: { xs: 'auto', md: 'calc(100vh - 72px)' },
                backgroundColor: isDark ? '#0c1124' : '#F3EFE6',
                display: 'flex',
                alignItems: 'center',
                px: { xs: 2, sm: 3, md: 2, lg: 6 },
                py: { xs: 3, md: 2 },
                transition: 'background-color 0.3s ease',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: { xs: 'auto', md: '600px' },
                    minHeight: { xs: '540px', md: '600px' },
                    mx: 'auto',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: { xs: '24px', sm: '28px', md: '34px' },

                    /* IMAGE */
                    backgroundImage: `
            linear-gradient(
              90deg,
              rgba(5, 10, 48, 0.88) 0%,
              rgba(5, 10, 48, 0.65) 40%,
              rgba(5, 10, 48, 0.18) 100%
            ),
            url('https://media.cntraveler.com/photos/607ef41f211142d4f98867a3/3:2/w_2560%2Cc_limit/Will%2520Cheaper%2520Pandemic%2520Airfares%2520Last%2520through%2520the%2520Summer_GettyImages-1140598797.jpg')
          `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                    boxShadow: '0 25px 60px rgba(62, 22, 12, 0.25)',

                    transition: 'transform 0.5s ease, box-shadow 0.5s ease',

                    '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: '0 35px 75px rgba(62, 22, 12, 0.35)',
                    },

                    '&:hover .hero-bg': {
                        transform: 'scale(1.06)',
                    },

                    '&:hover .hero-button': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 12px 25px rgba(0, 0, 0, 0.25)',
                    },
                }}
            >
                {/* Background Image Layer */}
                <Box
                    className="hero-bg"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: "url('/travel.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transition: 'transform 0.8s ease',
                        zIndex: 0,
                    }}
                />

                {/* Dark Overlay */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background: `
              linear-gradient(
                90deg,
                rgba(5, 10, 48, 0.94) 0%,
                rgba(5, 10, 48, 0.70) 42%,
                rgba(5, 10, 48, 0.15) 100%
              )
            `,
                        zIndex: 1,
                    }}
                />

                {/* CONTENT */}
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        px: { xs: 2.5, sm: 5, md: 8, lg: 10 },
                        py: { xs: 5, sm: 6, md: 0 },
                    }}
                >
                    <Box
                        sx={{
                            maxWidth: '650px',
                            color: '#E8D9C4',
                        }}
                    >
                        {/* Small Badge */}
                        <Box
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                px: { xs: 1.5, sm: 2 },
                                py: 0.8,
                                mb: 3,
                                border: '1px solid rgba(232,217,196,0.45)',
                                borderRadius: '30px',
                                backgroundColor: 'rgba(232,217,196,0.08)',
                                backdropFilter: 'blur(8px)',
                                fontSize: { xs: '11px', sm: '12px' },
                                fontWeight: 600,
                                letterSpacing: { xs: '1.2px', sm: '2px' },
                                color: '#E8D9C4',

                                ml: { xs: 0, md: '-320px' },
                            }}
                        >
                            ✦ DISCOVER THE WORLD
                        </Box>

                        {/* Heading */}
                        <Typography
                            sx={{
                                fontSize: { xs: '38px', sm: '54px', md: '76px' },
                                fontWeight: 800,
                                lineHeight: 1.05,
                                letterSpacing: { xs: '-1px', sm: '-2px' },
                                mb: 3,
                                textAlign: "left",
                            }}
                        >
                            Your Journey
                            <br />
                            <Box
                                component="span"
                                sx={{
                                    color: '#E8D9C4',
                                    textShadow: '0 5px 25px rgba(0,0,0,0.25)',
                                }}
                            >
                                Begins Here.
                            </Box>
                        </Typography>

                        {/* Description */}
                        <Typography
                            sx={{
                                maxWidth: '540px',
                                color: 'rgba(232,217,196,0.88)',
                                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                                lineHeight: 1.7,
                                mb: 4,
                                textAlign: "left",
                            }}
                        >
                            Find places that inspire you, experiences that stay with you,
                            and journeys that become unforgettable memories.
                        </Typography>

                        {/* Button */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                            }}
                        >
                            <Button
                                className="hero-button"
                                variant="contained"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    backgroundColor: '#E8D9C4',
                                    color: '#050A30',
                                    px: { xs: 2.8, sm: 3.5 },
                                    py: { xs: 1.3, sm: 1.6 },
                                    borderRadius: '30px',
                                    textTransform: 'none',
                                    fontSize: { xs: '14px', sm: '16px' },
                                    fontWeight: 700,

                                    ml: '0',

                                    transition:
                                        'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',

                                    '&:hover': {
                                        backgroundColor: '#785D32',
                                        color: '#E8D9C4',
                                    },
                                }}
                            >
                                Explore Destinations
                            </Button>
                        </Box>

                        {/* Bottom mini info */}
                        <Box
                            sx={{
                                display: "flex",
                                gap: { xs: "24px", sm: "36px", md: "45px" },
                                alignItems: "flex-start",
                                mt: { xs: "30px", sm: "40px" },
                                flexWrap: "wrap",
                            }}
                        >
                            <Box>
                                <Typography sx={{ fontWeight: 700, fontSize: { xs: '18px', sm: '20px' } }}>
                                    120+
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '13px', sm: '15px' },
                                        color: 'rgba(232,217,196,0.65)',
                                    }}
                                >
                                    Destinations
                                </Typography>
                            </Box>

                            <Box>
                                <Typography sx={{ fontWeight: 700, fontSize: { xs: '18px', sm: '20px' } }}>
                                    24/7
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '13px', sm: '15px' },
                                        color: 'rgba(232,217,196,0.65)',
                                    }}
                                >
                                    Travel Support
                                </Typography>
                            </Box>

                            <Box>
                                <Typography sx={{ fontWeight: 700, fontSize: { xs: '18px', sm: '20px' } }}>
                                    ✈️
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '13px', sm: '15px' },
                                        color: 'rgba(232,217,196,0.65)',
                                    }}
                                >
                                    Your Journey Awaits
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Hero;