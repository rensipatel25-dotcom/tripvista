import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Footer({ darkMode: propDarkMode }) {
  const theme = useTheme();
  const isDark = propDarkMode !== undefined ? propDarkMode : theme.palette.mode === "dark";

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: isDark ? "#070b1a" : "#f4efe3",
        color: isDark ? "#F4EFE6" : "#292621",
        pt: { xs: 7, md: 10 },
        pb: 3,
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4, md: 5 } }}>

        {/* ================= TOP LINE ================= */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 5,
          }}
        >
          <Box
            sx={{
              width: { xs: 35, sm: 55 },
              height: 2,
              backgroundColor: "#C49A55",
            }}
          />

          <Typography
            sx={{
              fontSize: 10,
              letterSpacing: "4px",
              fontWeight: 700,
              color: "#B88943",
            }}
          >
            TRIPVISTA
          </Typography>

          <Box
            sx={{
              width: { xs: 35, sm: 55 },
              height: 2,
              backgroundColor: "#C49A55",
            }}
          />
        </Box>

        {/* ================= MAIN CONTENT ================= */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "1.5fr 1fr 1fr",
            },
            gap: { xs: 4, sm: 5, md: 8 },
            mb: 8,
            textAlign: { xs: "center", sm: "left" },
          }}
        >

          {/* BRAND */}

          <Box sx={{ gridColumn: { xs: "span 1", sm: "span 2", md: "span 1" } }}>
            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: {
                  xs: 36,
                  md: 55,
                },
                lineHeight: 1,
                letterSpacing: "-2px",
                mb: 2,
              }}
            >
              Travel beautifully.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: 20,
                color: "#B88943",
                mb: 2.5,
              }}
            >
              Plan. Explore. Enjoy.
            </Typography>

            <Typography
              sx={{
                maxWidth: 390,
                fontSize: 13,
                lineHeight: 1.9,
                color: isDark ? "rgba(255,255,255,0.7)" : "#6E685E",
                mx: { xs: "auto", sm: 0 },
              }}
            >
              Discover places worth remembering, create journeys
              worth experiencing, and keep every adventure in one place.
            </Typography>
          </Box>

          {/* EXPLORE */}

          <Box>
            <Typography
              sx={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "3px",
                color: "#B88943",
                mb: 2.5,
              }}
            >
              EXPLORE
            </Typography>

            <Stack
              spacing={1.5}
              sx={{
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              {[
                "Destinations",
                "Experiences",
                "Popular Places",
                "Curated Escapes",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: 14,
                    color: isDark ? "rgba(255,255,255,0.75)" : "#4F4A43",
                    cursor: "pointer",
                    width: "fit-content",
                    transition: "0.25s",

                    "&:hover": {
                      color: "#B88943",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Box>

          {/* YOUR JOURNEY */}

          <Box>
            <Typography
              sx={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "3px",
                color: "#B88943",
                mb: 2.5,
              }}
            >
              YOUR JOURNEY
            </Typography>

            <Stack
              spacing={1.5}
              sx={{
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              {[
                "My Trip",
                "Favorites",
                "Saved Places",
                "Travel Stories",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: 14,
                    color: isDark ? "rgba(255,255,255,0.75)" : "#4F4A43",
                    cursor: "pointer",
                    width: "fit-content",
                    transition: "0.25s",

                    "&:hover": {
                      color: "#B88943",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* ================= FEATURE STRIP ================= */}

        <Box
          sx={{
            backgroundColor: "#13112f",
            px: { xs: 3, md: 5 },
            py: 3.5,
            borderRadius: { xs: "18px", md: "0px" },
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: {
              xs: "center",
              md: "center",
            },
            textAlign: {
              xs: "center",
              md: "left",
            },
            justifyContent: "space-between",
            gap: 3,
            mb: 6,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 9,
                letterSpacing: "3px",
                color: "#B88943",
                fontWeight: 700,
                mb: 1,
              }}
            >
              READY FOR YOUR NEXT ADVENTURE?
            </Typography>

            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: {
                  xs: 20,
                  md: 27,
                },
                color: "#B88943",
              }}
            >
              Turn a destination into a memory.
            </Typography>
          </Box>

          <Box
            onClick={goTop}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              cursor: "pointer",
              color: "#B88943",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "1px",

              "&:hover .arrow": {
                transform: "translateY(-4px)",
              },
            }}
          >
            BACK TO TOP

            <Box
              className="arrow"
              sx={{
                width: 38,
                height: 38,
                border: "1px solid #C49A55",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "0.3s",
              }}
            >
              <ArrowUpwardIcon sx={{ fontSize: 18 }} />
            </Box>
          </Box>
        </Box>

        {/* ================= BOTTOM ================= */}

        <Divider
          sx={{
            borderColor: isDark ? "rgba(255,255,255,0.12)" : "#D9D1C3",
            mb: 2.5,
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: { xs: "center", sm: "left" },
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 11,
              color: isDark ? "rgba(255,255,255,0.6)" : "#8B8479",
            }}
          >
            © {new Date().getFullYear()} Tripvista
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              sx={{
                color: isDark ? "#E8D9C4" : "#6E685E",
                width: 34,
                height: 34,

                "&:hover": {
                  color: "#B88943",
                  backgroundColor: "transparent",
                },
              }}
            >
              <InstagramIcon sx={{ fontSize: 17 }} />
            </IconButton>

            <IconButton
              sx={{
                color: isDark ? "#E8D9C4" : "#6E685E",
                width: 34,
                height: 34,

                "&:hover": {
                  color: "#B88943",
                  backgroundColor: "transparent",
                },
              }}
            >
              <FacebookIcon sx={{ fontSize: 17 }} />
            </IconButton>
          </Stack>

          <Typography
            sx={{
              fontSize: 10,
              letterSpacing: "1px",
              color: isDark ? "rgba(255,255,255,0.6)" : "#8B8479",
            }}
          >
            MADE FOR THE LOVE OF TRAVEL
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}