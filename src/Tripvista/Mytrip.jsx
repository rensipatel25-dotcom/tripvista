import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    IconButton,
    Button,
    Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const trips = [
    {
        day: "01",
        country: "JAPAN",
        title: "Kyoto",
        subtitle: "Where tradition begins",
        description:
            "Quiet temples, hidden gardens and timeless streets waiting to be explored.",
        image:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=90",
    },
    {
        day: "02",
        country: "JAPAN",
        title: "Arashiyama",
        subtitle: "Into the quiet",
        description:
            "Walk beneath towering bamboo and discover Kyoto's peaceful riverside.",
        image:
            "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1600&q=90",
    },
    {
        day: "03",
        country: "JAPAN",
        title: "Gion",
        subtitle: "An evening to remember",
        description:
            "Lantern-lit streets, traditional tea houses and the soul of old Kyoto.",
        image:
            "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1600&q=90",
    },
    {
        day: "04",
        country: "JAPAN",
        title: "Osaka",
        subtitle: "End on a high note",
        description:
            "A final day of food, culture and colourful streets before heading home.",
        image:
            "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1600&q=90",
    },
];

export default function MyTrip({ darkMode: propDarkMode }) {
    const theme = useTheme();
    const isDark = propDarkMode !== undefined ? propDarkMode : theme.palette.mode === "dark";

    const [active, setActive] = useState(0);
    const trip = trips[active];

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                backgroundColor: isDark ? "#080c1d" : "#F4F0E7",
                color: isDark ? "#F4EFE6" : "#25231F",
                py: {
                    xs: 5,
                    sm: 7,
                    md: 9,
                },
                transition: "background-color 0.3s ease, color 0.3s ease",
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    width: "100%",
                    maxWidth: "1280px",
                    mx: "auto",
                    px: {
                        xs: 2.5,
                        sm: 4,
                        md: 5,
                        lg: 6,
                    },
                }}
            >
                {/* ================================================= */}
                {/* HEADER (CENTER ON MOBILE, ORIGINAL ON DESKTOP) */}
                {/* ================================================= */}

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: { xs: "center", md: "flex-end" },
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 3, md: 6 },
                        mb: {
                            xs: 4,
                            md: 6,
                        },
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    {/* LEFT */}

                    <Box
                        sx={{
                            flex: "1 1 58%",
                            minWidth: 0,
                            width: "100%",
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#B88D4A",
                                fontSize: 9,
                                fontWeight: 700,
                                letterSpacing: "3.5px",
                                mb: 1.5,
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            ✦ YOUR JOURNEY
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: "Georgia, serif",
                                fontSize: {
                                    xs: 42,
                                    sm: 64,
                                    md: 78,
                                },
                                fontWeight: 400,
                                lineHeight: { xs: 1.05, md: 0.9 },
                                letterSpacing: { xs: "-1.5px", md: "-4px" },
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            My Trip
                        </Typography>

                        <Typography
                            sx={{
                                mt: 1.5,
                                color: "#B88D4A",
                                fontFamily: "Georgia, serif",
                                fontStyle: "italic",
                                fontSize: {
                                    xs: 18,
                                    md: 24,
                                },
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            Plan. Explore. Remember.
                        </Typography>
                    </Box>

                    {/* RIGHT */}

                    <Box
                        sx={{
                            flex: "0 1 330px",
                            pb: 0.5,
                            display: {
                                xs: "none",
                                md: "block",
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                color: isDark ? "rgba(255,255,255,0.7)" : "#777169",
                                fontSize: 12,
                                lineHeight: 1.8,
                            }}
                        >
                            Your favourite places, experiences and little
                            moments — all gathered into one beautiful journey.
                        </Typography>
                    </Box>
                </Box>

                {/* ================================================= */}
                {/* META BAR */}
                {/* ================================================= */}

                <Box
                    sx={{
                        borderTop: isDark
                            ? "1px solid rgba(255,255,255,.15)"
                            : "1px solid rgba(37,35,31,.15)",
                        borderBottom: isDark
                            ? "1px solid rgba(255,255,255,.15)"
                            : "1px solid rgba(37,35,31,.15)",
                        py: 2,
                        mb: {
                            xs: 4,
                            md: 5,
                        },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                        flexWrap: "wrap",
                    }}
                >
                    {/* destination */}

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.3,
                        }}
                    >
                        <CalendarMonthOutlinedIcon
                            sx={{
                                color: "#B88D4A",
                                fontSize: 19,
                            }}
                        />

                        <Box>
                            <Typography
                                sx={{
                                    color: "#B88D4A",
                                    fontSize: 7.5,
                                    fontWeight: 700,
                                    letterSpacing: "2px",
                                }}
                            >
                                NEXT JOURNEY
                            </Typography>

                            <Typography
                                sx={{
                                    fontFamily: "Georgia, serif",
                                    fontSize: 16,
                                }}
                            >
                                Kyoto, Japan
                            </Typography>
                        </Box>
                    </Box>

                    {/* date */}

                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                sm: "block",
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#B88D4A",
                                fontSize: 7.5,
                                fontWeight: 700,
                                letterSpacing: "2px",
                                mb: 0.4,
                            }}
                        >
                            DATES
                        </Typography>

                        <Typography sx={{ fontSize: 12 }}>
                            12 — 18 October 2026
                        </Typography>
                    </Box>

                    {/* duration */}

                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                sm: "block",
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#B88D4A",
                                fontSize: 7.5,
                                fontWeight: 700,
                                letterSpacing: "2px",
                                mb: 0.4,
                            }}
                        >
                            DURATION
                        </Typography>

                        <Typography sx={{ fontSize: 12 }}>
                            06 Days
                        </Typography>
                    </Box>

                    {/* share */}

                    <Button
                        sx={{
                            border: "1px solid #B88D4A",
                            borderRadius: 0,
                            minWidth: 110,
                            height: 38,
                            px: 2,
                            color: isDark ? "#FFFFFF" : "#25231F",
                            fontSize: 8,
                            fontWeight: 700,
                            letterSpacing: "1.3px",
                        }}
                    >
                        SHARE TRIP
                    </Button>
                </Box>

                {/* ================================================= */}
                {/* MAIN */}
                {/* ================================================= */}

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "0.76fr 1.55fr",
                        },
                        gap: {
                            xs: 4,
                            md: 5,
                            lg: 6,
                        },
                        alignItems: "start",
                    }}
                >
                    {/* ================================================= */}
                    {/* LEFT ITINERARY */}
                    {/* ================================================= */}

                    <Box
                        sx={{
                            minWidth: 0,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 8.5,
                                fontWeight: 700,
                                letterSpacing: "3px",
                                mb: 1.2,
                            }}
                        >
                            YOUR ITINERARY
                        </Typography>

                        <Box
                            sx={{
                                width: 40,
                                height: "1px",
                                backgroundColor: "#B88D4A",
                                mb: 2.5,
                            }}
                        />

                        {/* list */}

                        <Box
                            sx={{
                                borderTop: isDark
                                    ? "1px solid rgba(255,255,255,.14)"
                                    : "1px solid rgba(37,35,31,.14)",
                            }}
                        >
                            {trips.map((item, index) => {
                                const selected = index === active;

                                return (
                                    <Box
                                        key={item.day}
                                        onClick={() => setActive(index)}
                                        sx={{
                                            position: "relative",
                                            py: {
                                                xs: 2.2,
                                                md: 2.6,
                                            },
                                            px: 1.2,
                                            borderBottom: isDark
                                                ? "1px solid rgba(255,255,255,.14)"
                                                : "1px solid rgba(37,35,31,.14)",
                                            cursor: "pointer",
                                            transition: "all .25s ease",
                                            backgroundColor: selected
                                                ? isDark
                                                    ? "rgba(184,141,74,.18)"
                                                    : "rgba(19, 17, 47, 0.05)"
                                                : "transparent",
                                            borderLeft: selected
                                                ? "3px solid #C49A55"
                                                : "3px solid transparent",

                                            "&:hover": {
                                                backgroundColor: "#13112F",
                                                borderLeft: "3px solid #C49A55",
                                                pl: 1.8,
                                                color: "white",
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "grid",
                                                gridTemplateColumns:
                                                    "42px 1fr 20px",
                                                alignItems: "center",
                                                gap: 1.5,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontFamily: "Georgia, serif",
                                                    fontSize: {
                                                        xs: 24,
                                                        md: 27,
                                                    },
                                                    lineHeight: 1,
                                                    color: selected
                                                        ? "#B88D4A"
                                                        : "#B5AEA2",
                                                }}
                                            >
                                                {item.day}
                                            </Typography>

                                            <Box>
                                                <Typography
                                                    sx={{
                                                        color: "#B88D4A",
                                                        fontSize: 7,
                                                        fontWeight: 700,
                                                        letterSpacing: "2px",
                                                        mb: 0.5,
                                                    }}
                                                >
                                                    {item.country}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        fontFamily: "Georgia, serif",
                                                        fontSize: {
                                                            xs: 20,
                                                            md: 22,
                                                        },
                                                        lineHeight: 1.1,
                                                    }}
                                                >
                                                    {item.title}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        color: isDark ? "rgba(255,255,255,0.6)" : "#888177",
                                                        fontSize: 9,
                                                        mt: 0.4,
                                                    }}
                                                >
                                                    {item.subtitle}
                                                </Typography>
                                            </Box>

                                            <ArrowOutwardRoundedIcon
                                                sx={{
                                                    fontSize: 16,
                                                    color: selected
                                                        ? "#B88D4A"
                                                        : "#AAA298",
                                                    transform: selected
                                                        ? "rotate(0deg)"
                                                        : "rotate(-45deg)",
                                                    transition: ".25s",
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>

                        {/* add */}

                        <Box
                            sx={{
                                mt: 1.5,
                                height: 48,
                                border:
                                    "1px dashed rgba(184,141,74,.6)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 0.7,
                                cursor: "pointer",

                                "&:hover": {
                                    backgroundColor:
                                        "rgba(184,141,74,.06)",
                                },
                            }}
                        >
                            <AddRoundedIcon
                                sx={{
                                    fontSize: 17,
                                    color: "#B88D4A",
                                }}
                            />

                            <Typography
                                sx={{
                                    color: "#B88D4A",
                                    fontSize: 8,
                                    fontWeight: 700,
                                    letterSpacing: "1.4px",
                                }}
                            >
                                ADD A PLACE
                            </Typography>
                        </Box>
                    </Box>

                    {/* ================================================= */}
                    {/* RIGHT CARD */}
                    {/* ================================================= */}

                    <Box
                        sx={{
                            minWidth: 0,
                            backgroundColor: isDark ? "#111736" : "#FFFDF8",
                            borderRadius: "24px",
                            overflow: "hidden",
                            boxShadow: "0 16px 45px rgba(37,35,31,.10)",
                            transition: "background-color 0.3s ease",
                        }}
                    >
                        {/* image */}

                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: {
                                    xs: 280,
                                    sm: 380,
                                    md: 405,
                                    lg: 430,
                                },
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                component="img"
                                src={trip.image}
                                alt={trip.title}
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />

                            {/* overlay */}

                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "linear-gradient(180deg, rgba(0,0,0,.12) 0%, transparent 50%, rgba(0,0,0,.55) 100%)",
                                }}
                            />

                            {/* country */}

                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 20,
                                    left: 22,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 5,
                                        height: 5,
                                        borderRadius: "50%",
                                        backgroundColor: "#C9A05B",
                                    }}
                                />

                                <Typography
                                    sx={{
                                        color: "#fff",
                                        fontSize: 8,
                                        fontWeight: 700,
                                        letterSpacing: "2.5px",
                                    }}
                                >
                                    {trip.country}
                                </Typography>
                            </Box>

                            {/* favourite */}

                            <IconButton
                                sx={{
                                    position: "absolute",
                                    top: 16,
                                    right: 16,
                                    width: 44,
                                    height: 44,
                                    backgroundColor:
                                        "rgba(255,255,255,.92)",

                                    "&:hover": {
                                        backgroundColor: "#fff",
                                    },
                                }}
                            >
                                <FavoriteBorderRoundedIcon
                                    sx={{
                                        fontSize: 20,
                                        color: "#25231F",
                                    }}
                                />
                            </IconButton>

                            {/* bottom */}

                            <Box
                                sx={{
                                    position: "absolute",
                                    left: 22,
                                    right: 22,
                                    bottom: 20,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-end",
                                }}
                            >
                                <Box>
                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            fontSize: 8,
                                            fontWeight: 700,
                                            letterSpacing: "2.5px",
                                        }}
                                    >
                                        DAY {trip.day}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            fontFamily: "Georgia, serif",
                                            fontSize: {
                                                xs: 30,
                                                md: 40,
                                            },
                                            lineHeight: 1,
                                            mt: 0.5,
                                        }}
                                    >
                                        {trip.title}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        width: 43,
                                        height: 43,
                                        borderRadius: "50%",
                                        backgroundColor: "#C9A05B",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <ArrowOutwardRoundedIcon
                                        sx={{
                                            fontSize: 18,
                                            color: "#25231F",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>

                        {/* content */}

                        <Box
                            sx={{
                                px: {
                                    xs: 2.5,
                                    sm: 3.5,
                                    md: 4,
                                },
                                py: {
                                    xs: 2.5,
                                    md: 3.5,
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#B88D4A",
                                    fontSize: 8,
                                    fontWeight: 700,
                                    letterSpacing: "2.2px",
                                    mb: 0.8,
                                }}
                            >
                                {trip.subtitle}
                            </Typography>

                            <Typography
                                sx={{
                                    fontFamily: "Georgia, serif",
                                    fontSize: {
                                        xs: 26,
                                        md: 34,
                                    },
                                    lineHeight: 1.05,
                                    mb: 1,
                                }}
                            >
                                {trip.title}
                            </Typography>

                            <Typography
                                sx={{
                                    color: isDark ? "rgba(255,255,255,0.7)" : "#777169",
                                    fontSize: 11,
                                    lineHeight: 1.7,
                                    maxWidth: 500,
                                    mb: 2.5,
                                }}
                            >
                                {trip.description}
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 1.2,
                                    flexWrap: { xs: "wrap", sm: "nowrap" },
                                }}
                            >
                                <Button
                                    startIcon={
                                        <MapOutlinedIcon
                                            sx={{ fontSize: 16 }}
                                        />
                                    }
                                    sx={{
                                        flex: 1,
                                        minWidth: { xs: "100%", sm: "auto" },
                                        height: 43,
                                        border: "1px solid #B88D4A",
                                        borderRadius: 0,
                                        color: isDark ? "#FFFFFF" : "#25231F",
                                        fontSize: 8,
                                        fontWeight: 700,
                                        letterSpacing: "1.2px",
                                    }}
                                >
                                    VIEW MAP
                                </Button>

                                <Button
                                    startIcon={
                                        <AddRoundedIcon
                                            sx={{ fontSize: 16 }}
                                        />
                                    }
                                    sx={{
                                        flex: 1.3,
                                        minWidth: { xs: "100%", sm: "auto" },
                                        height: 43,
                                        backgroundColor: "#B88D4A",
                                        borderRadius: 0,
                                        color: "#fff",
                                        fontSize: 8,
                                        fontWeight: 700,
                                        letterSpacing: "1.2px",

                                        "&:hover": {
                                            backgroundColor: "#9E773E",
                                        },
                                    }}
                                >
                                    ADD EXPERIENCE
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* ================================================= */}
                {/* BOTTOM */}
                {/* ================================================= */}

                <Box
                    sx={{
                        mt: {
                            xs: 4,
                            md: 5,
                        },
                        pt: 2,
                        borderTop: isDark
                            ? "1px solid rgba(255,255,255,.13)"
                            : "1px solid rgba(37,35,31,.13)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        sx={{
                            color: "#827B71",
                            fontSize: 8,
                            fontWeight: 700,
                            letterSpacing: "1.8px",
                        }}
                    >
                        04 PLACES SAVED
                    </Typography>

                    <Typography
                        sx={{
                            color: "#B88D4A",
                            fontSize: 8,
                            fontWeight: 700,
                            letterSpacing: "1.8px",
                            display: {
                                xs: "none",
                                sm: "block",
                            },
                        }}
                    >
                        YOUR STORY IS TAKING SHAPE →
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}