import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const destinations = [
  {
    name: "Goa",
    category: "Beaches & Relaxation",
    price: "₹8,999",
    description:
      "Relax beside golden beaches, enjoy peaceful sunsets and experience the perfect tropical escape.",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Manali",
    category: "Mountains & Adventure",
    price: "₹11,999",
    description:
      "Discover snow-covered mountains, beautiful valleys and unforgettable Himalayan adventures.",
    image:
      "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Jaipur",
    category: "Culture & Heritage",
    price: "₹7,999",
    description:
      "Explore royal palaces, colourful streets, timeless architecture and the rich culture of Rajasthan.",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Kerala",
    category: "Nature & Backwaters",
    price: "₹10,999",
    description:
      "Cruise through peaceful backwaters, discover lush landscapes and enjoy Kerala's natural beauty.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=90",
  },
];

export default function PopularDestinations({ darkMode: propDarkMode }) {
  const theme = useTheme();
  const isDark = propDarkMode !== undefined ? propDarkMode : theme.palette.mode === "dark";

  const [activeDestination, setActiveDestination] = useState(null);
  const hoverTimer = useRef(null);

  const handleEnter = (destination) => {
    clearTimeout(hoverTimer.current);

    hoverTimer.current = setTimeout(() => {
      setActiveDestination(destination);
    }, 150);
  };

  const handleLeave = () => {
    clearTimeout(hoverTimer.current);
  };

  const closeDestination = () => {
    clearTimeout(hoverTimer.current);
    setActiveDestination(null);
  };

  useEffect(() => {
    return () => {
      clearTimeout(hoverTimer.current);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: isDark ? "#0a0f21" : "#F3EFE6",
        py: {
          xs: 7,
          sm: 8,
          md: 11,
        },
        position: "relative",
        overflow: "visible",
        transition: "background-color 0.3s ease",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          overflow: "visible",
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* =====================================================
                         SECTION HEADER
        ===================================================== */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            mb: {
              xs: 5,
              sm: 6,
              md: 8,
            },
          }}
        >
          <Typography
            sx={{
              color: "#C7A269",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "3px",
              mb: 1.5,
            }}
          >
            ✦ EXPLORE DESTINATIONS
          </Typography>

          <Typography
            sx={{
              color: isDark ? "#F4EFE6" : "#25231F",
              fontSize: {
                xs: "32px",
                sm: "44px",
                md: "58px",
              },
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              transition: "color 0.3s ease",
            }}
          >
            Popular Destinations
          </Typography>

          <Typography
            sx={{
              color: isDark ? "rgba(255,255,255,0.65)" : "#756F66",
              fontSize: {
                xs: "13px",
                md: "15px",
              },
              lineHeight: 1.8,
              maxWidth: "760px",
              mt: 2,
              px: { xs: 1, sm: 0 },
            }}
          >
            Explore breathtaking places, unforgettable experiences,
            and journeys that are waiting for you.
          </Typography>
        </Box>

        {/* =====================================================
                            CARDS AREA
        ===================================================== */}

        <Box
          onMouseLeave={closeDestination}
          sx={{
            position: "relative",
            width: {
              xs: "100%",
              md: "92%",
              lg: "90%",
            },
            margin: "0 auto",
            overflow: "visible",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: {
              xs: 3,
              sm: 3,
              md: 3,
            },
          }}
        >
          {/* =================================================
                         DESTINATION CARDS
          ================================================= */}

          {destinations.map((destination) => (
            <Box
              key={destination.name}
              onMouseEnter={() => handleEnter(destination)}
              onMouseLeave={handleLeave}
              sx={{
                position: "relative",
                height: {
                  xs: "440px",
                  sm: "480px",
                  md: "500px",
                },
                borderRadius: "24px",
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: "#11183F",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
                transition: "all 0.7s cubic-bezier(0.2,0.7,0.2,1)",
                filter: activeDestination
                  ? "blur(3px) brightness(0.48)"
                  : "blur(0px) brightness(1)",
                transform: activeDestination
                  ? "scale(0.985)"
                  : "scale(1)",

                ...(activeDestination?.name === destination.name
                  ? {
                      filter: "blur(0px) brightness(0.62)",
                      transform: "scale(1.015)",
                      boxShadow: "0 25px 70px rgba(0,0,0,0.50)",
                    }
                  : {}),
              }}
            >
              {/* IMAGE */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${destination.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform:
                    activeDestination?.name === destination.name
                      ? "scale(1.08)"
                      : "scale(1)",
                  transition: "transform 1.1s cubic-bezier(0.2,0.7,0.2,1)",
                }}
              />

              {/* DARK GRADIENT */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(5,10,48,0.05), rgba(5,10,48,0.28) 45%, rgba(5,10,48,0.95) 100%)",
                  zIndex: 1,
                }}
              />

              {/* PRICE */}
              <Box
                sx={{
                  position: "absolute",
                  top: 18,
                  right: 18,
                  zIndex: 4,
                  backgroundColor: "#F4E8D2",
                  color: "#071033",
                  px: 2,
                  py: 1,
                  borderRadius: "30px",
                  fontSize: "12px",
                  fontWeight: 800,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
                  transition: "opacity 0.5s ease",
                }}
              >
                From {destination.price}
              </Box>

              {/* NORMAL CARD CONTENT */}
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 4,
                  textAlign: "center",
                  px: { xs: 2.5, sm: 3 },
                  pb: 3,
                  transition: "all 0.65s cubic-bezier(0.2,0.7,0.2,1)",
                  opacity: activeDestination ? 0.15 : 1,
                  transform: activeDestination
                    ? "translateY(12px)"
                    : "translateY(0)",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: { xs: "22px", sm: "25px" },
                    fontWeight: 800,
                    mb: 0.7,
                  }}
                >
                  {destination.name}
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "14px",
                    mb: 2,
                  }}
                >
                  {destination.category}
                </Typography>

                <Button
                  sx={{
                    width: "100%",
                    border: "1px solid rgba(255,255,255,0.30)",
                    color: "#F4E8D2",
                    borderRadius: "30px",
                    py: 1.1,
                    fontSize: "12px",
                    fontWeight: 800,
                    textTransform: "none",
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                >
                  View Details →
                </Button>
              </Box>
            </Box>
          ))}

          {/* =====================================================
                      SOFT GLASS LAYER
          ===================================================== */}

          <Box
            sx={{
              position: "absolute",
              inset: "-10px",
              zIndex: activeDestination ? 10 : -1,
              borderRadius: "35px",
              background: activeDestination
                ? "rgba(3,7,35,0.10)"
                : "transparent",
              backdropFilter: activeDestination ? "blur(1px)" : "blur(0px)",
              opacity: activeDestination ? 1 : 0,
              transition: "opacity 0.8s ease",
              pointerEvents: "none",
            }}
          />

          {/* =====================================================
                       CENTER INFORMATION BOX
          ===================================================== */}

          <Box
            onMouseEnter={() => {
              clearTimeout(hoverTimer.current);
            }}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: {
                xs: "92%",
                sm: "480px",
                md: "520px",
              },
              zIndex: 30,
              pointerEvents: activeDestination ? "auto" : "none",
              opacity: activeDestination ? 1 : 0,
              visibility: activeDestination ? "visible" : "hidden",
              transform: activeDestination
                ? "translate(-50%, -50%) scale(1)"
                : "translate(-50%, -50%) scale(0.86)",
              transition:
                "opacity 0.75s cubic-bezier(0.2,0.7,0.2,1), transform 0.8s cubic-bezier(0.2,0.7,0.2,1), visibility 0.75s",
              background: isDark
                ? "rgba(12, 17, 43, 0.96)"
                : "rgba(255,255,255,0.97)",
              color: isDark ? "#FFFFFF" : "#071033",
              backdropFilter: "blur(22px)",
              borderRadius: "30px",
              padding: {
                xs: "22px 18px",
                sm: "34px",
                md: "38px",
              },
              textAlign: "center",
              boxShadow: "0 35px 100px rgba(0,0,0,0.58)",
              border: isDark
                ? "1px solid rgba(255,255,255,0.15)"
                : "1px solid rgba(255,255,255,0.9)",
            }}
          >
            {activeDestination && (
              <>
                {/* SMALL LABEL */}
                <Typography
                  sx={{
                    color: "#A27D4F",
                    fontSize: "9px",
                    fontWeight: 800,
                    letterSpacing: "3px",
                    mb: 1.5,
                    opacity: 1,
                  }}
                >
                  ✦ DISCOVER
                </Typography>

                {/* DESTINATION NAME */}
                <Typography
                  sx={{
                    color: isDark ? "#FFFFFF" : "#071033",
                    fontSize: {
                      xs: "28px",
                      sm: "42px",
                    },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    mb: 1.2,
                  }}
                >
                  {activeDestination.name}
                </Typography>

                {/* CATEGORY */}
                <Typography
                  sx={{
                    color: "#A27D4F",
                    fontSize: "12px",
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  {activeDestination.category}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  sx={{
                    color: isDark ? "rgba(255,255,255,0.7)" : "#66645F",
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                    },
                    lineHeight: 1.7,
                    maxWidth: "420px",
                    mx: "auto",
                    mb: 2.2,
                  }}
                >
                  {activeDestination.description}
                </Typography>

                {/* PRICE */}
                <Typography
                  sx={{
                    color: isDark ? "#F4E8D2" : "#071033",
                    fontSize: "14px",
                    fontWeight: 800,
                    mb: 2.2,
                  }}
                >
                  Starting from {activeDestination.price}
                </Typography>

                {/* BUTTON */}
                <Button
                  fullWidth
                  sx={{
                    backgroundColor: isDark ? "#4FC3F7" : "#071033",
                    color: isDark ? "#071033" : "#F4E8D2",
                    borderRadius: "30px",
                    py: 1.35,
                    fontSize: "12px",
                    fontWeight: 800,
                    textTransform: "none",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      backgroundColor: "#A27D4F",
                      color: "#FFFFFF",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 30px rgba(162,125,79,0.30)",
                    },
                  }}
                >
                  Explore {activeDestination.name} →
                </Button>
              </>
            )}
          </Box>
        </Box>

        {/* =====================================================
                          BOTTOM LABEL
        ===================================================== */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 6,
          }}
        >
          <Typography
            sx={{
              color: isDark ? "rgba(255,255,255,0.42)" : "rgba(37,35,31,0.45)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "2px",
              textAlign: "center",
            }}
          >
            DISCOVER · EXPLORE · EXPERIENCE
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}