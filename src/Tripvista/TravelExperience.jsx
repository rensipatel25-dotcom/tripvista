import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const travelMoods = [
    {
        number: "01",
        title: "ESCAPE",
        place: "Maldives",
        subtitle: "Slow mornings. Endless blue.",
        image:
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1400&q=90",
    },
    {
        number: "02",
        title: "DISCOVER",
        place: "Kyoto",
        subtitle: "Old streets. New stories.",
        image:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=90",
    },
    {
        number: "03",
        title: "ADVENTURE",
        place: "Switzerland",
        subtitle: "Higher mountains. Bigger dreams.",
        image:
            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1400&q=90",
    },
    {
        number: "04",
        title: "UNWIND",
        place: "Kerala",
        subtitle: "Green waters. Quiet moments.",
        image:
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=90",
    },
];

export default function TravelExperience({ darkMode: propDarkMode }) {
    const theme = useTheme();
    const isDark = propDarkMode !== undefined ? propDarkMode : theme.palette.mode === "dark";

    return (
        <Box
            sx={{
                backgroundColor: isDark ? "#090e21" : "#F7F3EC",
                py: { xs: 7, sm: 9, md: 12 },
                overflow: "hidden",
                transition: "background-color 0.3s ease",
            }}
        >
            <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
                {/* =====================================================
                         CENTERED HEADER
                ===================================================== */}
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        mb: { xs: 5, sm: 6, md: 8 },
                    }}
                >
                    <Typography
                        sx={{
                            color: "#A27D4F",
                            fontSize: "11px",
                            fontWeight: 800,
                            letterSpacing: "3px",
                            mb: 2,
                            textAlign: "center",
                        }}
                    >
                        ✦ FIND YOUR ESCAPE
                    </Typography>

                    <Typography
                        sx={{
                            color: isDark ? "#F4EFE6" : "#071033",
                            fontSize: {
                                xs: "34px",
                                sm: "48px",
                                md: "68px",
                            },
                            fontWeight: 800,
                            lineHeight: 1.02,
                            letterSpacing: {
                                xs: "-1px",
                                md: "-3px",
                            },
                            textAlign: "center",
                            m: 0,
                            transition: "color 0.3s ease",
                        }}
                    >
                        How do you want
                        <br />
                        <Box
                            component="span"
                            sx={{
                                color: "#A27D4F",
                                fontFamily: "Georgia, serif",
                                fontStyle: "italic",
                                fontWeight: 400,
                            }}
                        >
                            to feel?
                        </Box>
                    </Typography>

                    <Typography
                        sx={{
                            color: isDark ? "rgba(255,255,255,0.65)" : "#77736B",
                            maxWidth: "550px",
                            fontSize: { xs: "13px", sm: "14px" },
                            lineHeight: 1.8,
                            mt: 2.5,
                            textAlign: "center",
                            px: 2,
                        }}
                    >
                        Choose the feeling you want from your next journey.
                        From peaceful escapes to unforgettable adventures,
                        find a destination that feels like you.
                    </Typography>
                </Box>

                {/* =====================================================
                           TRAVEL CARDS
                ===================================================== */}
                <Box
                    className="travel-wrapper"
                    sx={{
                        display: "flex",
                        width: {
                            xs: "100%",
                            md: "90%",
                        },
                        margin: "0 auto",
                        gap: "14px",
                        height: {
                            xs: "auto",
                            md: "520px",
                        },
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                        alignItems: "stretch",
                    }}
                >
                    {travelMoods.map((mood, index) => (
                        <Box
                            key={mood.number}
                            className="travel-card"
                            sx={{
                                position: "relative",
                                overflow: "hidden",
                                width: {
                                    xs: "100%",
                                    md: "25%",
                                },
                                height: {
                                    xs: "380px",
                                    sm: "420px",
                                    md: "100%",
                                },
                                flex: {
                                    xs: "none",
                                    md: "1 1 0",
                                },
                                cursor: "pointer",

                                borderRadius: {
                                    xs: "24px",
                                    md:
                                        index === 0
                                            ? "30px 12px 30px 12px"
                                            : index === 1
                                                ? "12px 30px 12px 30px"
                                                : index === 2
                                                    ? "30px 12px 12px 30px"
                                                    : "12px 30px 30px 12px",
                                },

                                boxShadow: "0 12px 35px rgba(7,16,51,0.10)",
                                transition:
                                    "flex 0.75s cubic-bezier(0.22,0.61,0.36,1), transform 0.5s ease, box-shadow 0.5s ease",

                                "&:hover": {
                                    flex: {
                                        md: "2.5 1 0",
                                    },
                                    transform: {
                                        md: "translateY(-8px)",
                                    },
                                    boxShadow:
                                        "0 28px 70px rgba(7,16,51,0.25)",
                                },

                                /* Image Hover */
                                "&:hover .travel-image": {
                                    transform: "scale(1.1)",
                                },

                                /* Overlay Hover */
                                "&:hover .travel-overlay": {
                                    opacity: 0.75,
                                },

                                /* ફિક્સ: હોવર થતાં જ મૂળ ટેક્સ્ટ સુપેરે ગાયબ થઈ જશે જેથી બટન સાથે કટ ન થાય */
                                "&:hover .travel-default-content": {
                                    opacity: 0,
                                    transform: "translateY(-15px)",
                                },

                                /* Hover Content Fade In */
                                "&:hover .travel-hover-content": {
                                    opacity: 1,
                                    transform: "translateY(0)",
                                },

                                /* Button Fade In */
                                "&:hover .travel-button": {
                                    opacity: 1,
                                    transform: "translateY(0)",
                                    pointerEvents: "auto",
                                },

                                /* Arrow Hover */
                                "&:hover .travel-arrow": {
                                    transform: "rotate(0deg)",
                                    backgroundColor: "#E8D9C4",
                                    color: "#071033",
                                    borderColor: "#E8D9C4",
                                },

                                /* Number Hover */
                                "&:hover .travel-number": {
                                    backgroundColor: "#E8D9C4",
                                    color: "#071033",
                                },
                            }}
                        >
                            {/* IMAGE */}
                            <Box
                                className="travel-image"
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    backgroundImage: `url(${mood.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    transform: "scale(1)",
                                    transition:
                                        "transform 0.9s cubic-bezier(0.2,0.7,0.2,1)",
                                }}
                            />

                            {/* OVERLAY */}
                            <Box
                                className="travel-overlay"
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "linear-gradient(to top, rgba(5,10,48,0.95) 0%, rgba(5,10,48,0.3) 60%, transparent 100%)",
                                    opacity: { xs: 0.55, md: 0.3 },
                                    transition: "opacity 0.45s ease",
                                    zIndex: 2,
                                }}
                            />

                            {/* NUMBER */}
                            <Box
                                className="travel-number"
                                sx={{
                                    position: "absolute",
                                    top: 20,
                                    left: 20,
                                    width: 38,
                                    height: 38,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor:
                                        "rgba(255,255,255,0.15)",
                                    backdropFilter: "blur(12px)",
                                    color: "#FFFFFF",
                                    fontSize: "10px",
                                    fontWeight: 800,
                                    transition: "all 0.4s ease",
                                    zIndex: 5,
                                }}
                            >
                                {mood.number}
                            </Box>

                            {/* ARROW */}
                            <Box
                                className="travel-arrow"
                                sx={{
                                    position: "absolute",
                                    top: 20,
                                    right: 20,
                                    width: 42,
                                    height: 42,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    border: "1px solid rgba(255,255,255,0.45)",
                                    color: "#FFFFFF",
                                    fontSize: "17px",
                                    transform: "rotate(-45deg)",
                                    transition: "all 0.4s ease",
                                    zIndex: 5,
                                }}
                            >
                                ↗
                            </Box>

                            {/* DEFAULT BOTTOM CONTENT (KERALA, SWITZERLAND, etc.) */}
                            <Box
                                className="travel-default-content"
                                sx={{
                                    position: "absolute",
                                    left: 24,
                                    right: 24,
                                    bottom: 26,
                                    zIndex: 5,
                                    transition: "opacity 0.35s ease, transform 0.35s ease",
                                    pointerEvents: "none",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#E8D9C4",
                                        fontSize: "11px",
                                        fontWeight: 800,
                                        letterSpacing: "2.5px",
                                        mb: 0.5,
                                    }}
                                >
                                    {mood.place.toUpperCase()}
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#FFFFFF",
                                        fontSize: {
                                            xs: "28px",
                                            md: "36px",
                                        },
                                        fontWeight: 800,
                                        lineHeight: 0.95,
                                        letterSpacing: "-1px",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {mood.title}
                                </Typography>
                            </Box>

                            {/* HOVER DETAILS */}
                            <Box
                                className="travel-hover-content"
                                sx={{
                                    position: "absolute",
                                    left: 24,
                                    right: 24,
                                    bottom: 84,
                                    zIndex: 6,
                                    opacity: 0,
                                    transform: "translateY(15px)",
                                    transition:
                                        "all 0.4s cubic-bezier(0.2,0.7,0.2,1)",
                                    pointerEvents: "none",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#E8D9C4",
                                        fontSize: "11px",
                                        fontWeight: 800,
                                        letterSpacing: "2.5px",
                                        mb: 0.5,
                                    }}
                                >
                                    {mood.place.toUpperCase()}
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#FFFFFF",
                                        fontSize: { xs: "26px", md: "32px" },
                                        fontWeight: 800,
                                        lineHeight: 1,
                                        mb: 1,
                                    }}
                                >
                                    {mood.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "rgba(255,255,255,0.85)",
                                        fontSize: "13px",
                                        lineHeight: 1.6,
                                        mb: 0.5,
                                    }}
                                >
                                    {mood.subtitle}
                                </Typography>
                            </Box>

                            {/* BUTTON */}
                            <Button
                                className="travel-button"
                                sx={{
                                    position: "absolute",
                                    left: 24,
                                    right: 24,
                                    bottom: 24,
                                    zIndex: 7,
                                    opacity: 0,
                                    transform: "translateY(15px)",
                                    transition: "all 0.35s ease",
                                    backgroundColor: "#E8D9C4",
                                    color: "#071033",
                                    borderRadius: "30px",
                                    py: 1.2,
                                    fontSize: "12px",
                                    fontWeight: 800,
                                    textTransform: "none",
                                    pointerEvents: "none",
                                    "&:hover": {
                                        backgroundColor: "#FFFFFF",
                                        color: "#071033",
                                    },
                                }}
                            >
                                Explore {mood.place} →
                            </Button>
                        </Box>
                    ))}
                </Box>

                {/* =====================================================
                           BOTTOM INFORMATION
                ===================================================== */}
                <Box
                    sx={{
                        mt: 4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    <Typography
                        sx={{
                            color: isDark ? "rgba(255,255,255,0.45)" : "#918C83",
                            fontSize: { xs: "12px", sm: "14px" },
                            fontWeight: 700,
                            letterSpacing: "2px",
                        }}
                    >
                        FOUR MOODS · ENDLESS POSSIBILITIES
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}