import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const destinations = [
    {
        id: "01",
        country: "JAPAN",
        name: "Kyoto",
        description:
            "Quiet temples, hidden gardens and timeless streets waiting to be explored.",
        image:
            "https://images.unsplash.com/photo-1705773335970-78a711bf502c?auto=format&fit=crop&fm=jpg&q=85&w=1600",
    },
    {
        id: "02",
        country: "PORTUGAL",
        name: "Madeira",
        description:
            "Wild coastlines, mountain roads and endless Atlantic views.",
        image:
            "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=90",
    },
    {
        id: "03",
        country: "ARGENTINA",
        name: "Patagonia",
        description:
            "A breathtaking escape where mountains, glaciers and open skies meet.",
        image:
            "https://images.unsplash.com/photo-1529414988992-52e2db9372b2?auto=format&fit=crop&w=1600&q=85",
    },
];

export default function CuratedEscapes({ darkMode: propDarkMode }) {
    const theme = useTheme();
    const isDark = propDarkMode !== undefined ? propDarkMode : theme.palette.mode === "dark";

    const [active, setActive] = useState(null);

    return (
        <Box
            sx={{
                bgcolor: isDark ? "#0c1124" : "#F3EFE6",
                color: isDark ? "#F4EFE6" : "#25231F",
                py: {
                    xs: 7,
                    sm: 9,
                    md: 15,
                },
                transition: "background-color 0.3s ease, color 0.3s ease",
            }}
        >
            <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4, md: 5 } }}>

                {/* ================= HEADER ================= */}

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1.15fr .85fr",
                        },
                        gap: {
                            xs: 3,
                            md: 10,
                        },
                        pb: {
                            xs: 5,
                            md: 9,
                        },
                        borderBottom: isDark
                            ? "1px solid rgba(255,255,255,.12)"
                            : "1px solid rgba(37,35,31,.18)",
                        textAlign: {
                            xs: "center",
                            md: "left",
                        },
                    }}
                >
                    {/* LEFT */}
                    <Box>
                        <Typography
                            sx={{
                                color: "#C7A269",
                                fontSize: 9,
                                fontWeight: 700,
                                letterSpacing: "4px",
                                mb: 2,
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            ✦ BEYOND THE ORDINARY
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: '"Georgia", serif',
                                fontSize: {
                                    xs: 36,
                                    sm: 52,
                                    md: 72,
                                },
                                lineHeight: { xs: 1.05, md: 0.92 },
                                fontWeight: 400,
                                letterSpacing: { xs: "-1px", md: "-3px" },
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            Places that stay
                            <br />

                            <Box
                                component="span"
                                sx={{
                                    color: "#C7A269",
                                    fontStyle: "italic",
                                }}
                            >
                                with you.
                            </Box>
                        </Typography>
                    </Box>

                    {/* RIGHT */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: { xs: "center", md: "flex-end" },
                            justifyContent: { xs: "center", md: "flex-start" },
                            pb: 1,
                        }}
                    >
                        <Typography
                            sx={{
                                maxWidth: { xs: 450, md: 350 },
                                color: isDark ? "rgba(255,255,255,0.7)" : "#756F66",
                                fontSize: { xs: 12.5, sm: 13 },
                                lineHeight: 1.8,
                                textAlign: { xs: "center", md: "left" },
                                mx: { xs: "auto", md: 0 },
                            }}
                        >
                            Some journeys become memories. Others become
                            part of who you are. Discover the places that
                            leave something behind.
                        </Typography>
                    </Box>
                </Box>

                {/* ================= DESTINATIONS ================= */}

                <Box sx={{ mt: 2 }}>
                    {destinations.map((destination, index) => {
                        const isActive = active === index;

                        return (
                            <Box
                                key={destination.id}
                                onMouseEnter={() => setActive(index)}
                                onMouseLeave={() => setActive(null)}
                                sx={{
                                    position: "relative",
                                    display: "grid",
                                    gridTemplateColumns: {
                                        xs: "1fr",
                                        md: "45% 55%",
                                    },
                                    minHeight: {
                                        xs: "auto",
                                        md: 265,
                                    },
                                    py: {
                                        xs: 3.5,
                                        md: 5,
                                    },
                                    borderBottom: isDark
                                        ? "1px solid rgba(255,255,255,.12)"
                                        : "1px solid rgba(37,35,31,.18)",
                                    cursor: "pointer",
                                    transition: "padding .45s ease",
                                    "&:hover": {
                                        py: {
                                            xs: 3.5,
                                            md: 6,
                                        },
                                    },
                                }}
                            >
                                {/* ================= LEFT CONTENT ================= */}

                                <Box
                                    sx={{
                                        position: "relative",
                                        display: "grid",
                                        gridTemplateColumns: {
                                            xs: "45px 1fr",
                                            sm: "55px 1fr",
                                            md: "70px 1fr",
                                        },
                                        alignItems: "center",
                                        pr: {
                                            xs: 1,
                                            md: 7,
                                        },
                                    }}
                                >
                                    {/* BIG FAINT NUMBER */}
                                    <Typography
                                        sx={{
                                            position: "absolute",
                                            left: {
                                                xs: 0,
                                                md: 5,
                                            },
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            fontFamily: '"Georgia", serif',
                                            fontSize: {
                                                xs: 70,
                                                sm: 90,
                                                md: 120,
                                            },
                                            lineHeight: 1,
                                            color: "rgba(199,162,105,.12)",
                                            pointerEvents: "none",
                                        }}
                                    >
                                        {destination.id}
                                    </Typography>

                                    {/* SMALL NUMBER */}
                                    <Typography
                                        sx={{
                                            position: "relative",
                                            zIndex: 2,
                                            color: "#C7A269",
                                            fontSize: 9,
                                            fontWeight: 700,
                                            letterSpacing: "2px",
                                        }}
                                    >
                                        {destination.id}
                                    </Typography>

                                    {/* TEXT */}
                                    <Box sx={{ position: "relative", zIndex: 2 }}>
                                        <Typography
                                            sx={{
                                                color: "#C7A269",
                                                fontSize: 8,
                                                fontWeight: 700,
                                                letterSpacing: "4px",
                                                mb: 1.2,
                                            }}
                                        >
                                            {destination.country}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily: '"Georgia", serif',
                                                fontSize: {
                                                    xs: 32,
                                                    sm: 42,
                                                    md: 50,
                                                },
                                                lineHeight: 1.05,
                                                fontWeight: 400,
                                                letterSpacing: "-2px",
                                                color: isActive
                                                    ? "#C7A269"
                                                    : isDark
                                                    ? "#FFFFFF"
                                                    : "#25231F",
                                                transition: "color .35s ease",
                                            }}
                                        >
                                            {destination.name}
                                        </Typography>

                                        {/* GOLD LINE */}
                                        <Box
                                            sx={{
                                                width: isActive ? 55 : 28,
                                                height: 1,
                                                bgcolor: "#C7A269",
                                                my: { xs: 1.5, md: 2 },
                                                transition: "width .4s ease",
                                            }}
                                        />

                                        <Typography
                                            sx={{
                                                maxWidth: 300,
                                                color: isDark
                                                    ? "rgba(255,255,255,0.7)"
                                                    : "#756F66",
                                                fontSize: 11,
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {destination.description}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* ================= IMAGE ================= */}

                                <Box
                                    sx={{
                                        position: "relative",
                                        mt: {
                                            xs: 3,
                                            md: 0,
                                        },
                                        height: {
                                            xs: 190,
                                            sm: 230,
                                            md: 225,
                                        },
                                        overflow: "hidden",
                                        borderRadius: "2px 32px 2px 32px",
                                        mx: {
                                            xs: 0,
                                            md: 2,
                                        },
                                        transform: isActive
                                            ? "translateY(-4px)"
                                            : "translateY(0)",
                                        boxShadow: isActive
                                            ? "0 20px 45px rgba(0,0,0,.25)"
                                            : "0 8px 20px rgba(0,0,0,.10)",
                                        transition:
                                            "all .5s cubic-bezier(.2,.7,.2,1)",
                                    }}
                                >
                                    {/* IMAGE */}
                                    <Box
                                        component="img"
                                        src={destination.image}
                                        alt={destination.name}
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            display: "block",
                                            transform: isActive
                                                ? "scale(1.06)"
                                                : "scale(1)",
                                            transition:
                                                "transform .8s cubic-bezier(.2,.7,.2,1)",
                                        }}
                                    />

                                    {/* DARK OVERLAY */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            inset: 0,
                                            background:
                                                "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,.55) 100%)",
                                            opacity: isActive ? 1 : 0.55,
                                            transition: "opacity .4s ease",
                                        }}
                                    />

                                    {/* TOP LABEL */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 15,
                                            left: 18,
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
                                                bgcolor: "#C7A269",
                                            }}
                                        />

                                        <Typography
                                            sx={{
                                                color: "#fff",
                                                fontSize: 8,
                                                fontWeight: 700,
                                                letterSpacing: "3px",
                                            }}
                                        >
                                            {destination.country}
                                        </Typography>
                                    </Box>

                                    {/* EXPLORE BUTTON */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 15,
                                            right: 15,
                                            width: 42,
                                            height: 42,
                                            borderRadius: "50%",
                                            bgcolor: isActive
                                                ? "#C7A269"
                                                : isDark
                                                ? "#182252"
                                                : "#F3EFE6",
                                            color: isActive
                                                ? "#25231F"
                                                : isDark
                                                ? "#E8D9C4"
                                                : "#25231F",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transform: isActive
                                                ? "rotate(0deg)"
                                                : "rotate(-15deg)",
                                            transition: "all .4s ease",
                                            boxShadow:
                                                "0 8px 20px rgba(0,0,0,.15)",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: 18,
                                                lineHeight: 1,
                                            }}
                                        >
                                            ↗
                                        </Typography>
                                    </Box>

                                    {/* BOTTOM IMAGE TEXT */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: 18,
                                            left: 20,
                                            right: 20,
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-end",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: "#fff",
                                                fontSize: 9,
                                                fontWeight: 700,
                                                letterSpacing: "3px",
                                            }}
                                        >
                                            DISCOVER
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: "#C7A269",
                                                fontSize: 9,
                                                fontWeight: 700,
                                                letterSpacing: "2px",
                                                opacity: isActive ? 1 : 0,
                                                transform: isActive
                                                    ? "translateX(0)"
                                                    : "translateX(15px)",
                                                transition: "all .4s ease",
                                            }}
                                        >
                                            EXPLORE →
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>

                {/* ================= FOOTER LINE (CENTER IN MOBILE, ORIGINAL IN DESKTOP) ================= */}

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        textAlign: { xs: "center", sm: "left" },
                        mt: 5,
                        gap: { xs: 1.5, sm: 2 },
                    }}
                >
                    <Typography
                        sx={{
                            color: isDark ? "rgba(255,255,255,0.5)" : "#756F66",
                            fontSize: 9,
                            letterSpacing: "3px",
                            fontWeight: 700,
                        }}
                    >
                        CURATED FOR THE CURIOUS
                    </Typography>

                    <Typography
                        sx={{
                            color: "#C7A269",
                            fontFamily: '"Georgia", serif',
                            fontSize: 16,
                            fontStyle: "italic",
                        }}
                    >
                        Go somewhere beautiful.
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
}