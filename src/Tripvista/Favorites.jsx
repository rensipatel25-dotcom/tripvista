import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

const favorites = [
  {
    id: "01",
    country: "ITALY",
    name: "Amalfi Coast",
    text: "Cliffside villages, blue water and slow Mediterranean days.",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "02",
    country: "JAPAN",
    name: "Kyoto",
    text: "Quiet streets, ancient temples and timeless Japanese charm.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "03",
    country: "GREECE",
    name: "Santorini",
    text: "Whitewashed villages overlooking the endless Aegean blue.",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "04",
    country: "PORTUGAL",
    name: "Porto",
    text: "Colourful streets, river views and northern Portuguese soul.",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1400&q=90",
  },
];

function Favorites({ darkMode: propDarkMode }) {
  const theme = useTheme();
  const isDark = propDarkMode !== undefined ? propDarkMode : theme.palette.mode === "dark";

  const [active, setActive] = useState(0);
  const selected = favorites[active];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: isDark ? "#0a0f24" : "#F5F1E8",
        py: {
          xs: 7,
          sm: 9,
          md: 12,
        },
        overflow: "hidden",
        transition: "background-color 0.3s ease",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1180px",
          mx: "auto",
          px: {
            xs: 2.5,
            sm: 4,
            md: 5,
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
            alignItems: { xs: "center", sm: "flex-end" },
            flexDirection: { xs: "column", sm: "row" },
            textAlign: { xs: "center", sm: "left" },
            mb: {
              xs: 5,
              md: 7,
            },
            gap: 2,
          }}
        >
          <Box sx={{ width: "100%", textAlign: { xs: "center", sm: "left" } }}>
            <Typography
              sx={{
                color: "#B28A52",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "3.5px",
                mb: 1.5,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              ✦ FAVORITES
            </Typography>

            <Typography
              sx={{
                color: isDark ? "#FFFFFF" : "#292621",
                fontFamily: "Georgia, serif",
                fontSize: {
                  xs: 40,
                  sm: 55,
                  md: 68,
                },
                lineHeight: 0.9,
                letterSpacing: { xs: "-1.5px", md: "-3px" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Places
            </Typography>

            <Typography
              sx={{
                color: "#B28A52",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: {
                  xs: 34,
                  sm: 48,
                  md: 58,
                },
                lineHeight: 0.9,
                ml: {
                  xs: 0,
                  sm: 2,
                  md: 5,
                },
                mt: { xs: 0.5, sm: 0 },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              you kept.
            </Typography>
          </Box>

          {/* CURRENT NUMBER */}
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
              textAlign: "right",
            }}
          >
            <Typography
              sx={{
                color: "#B28A52",
                fontFamily: "Georgia, serif",
                fontSize: 48,
                lineHeight: 1,
              }}
            >
              {selected.id}
            </Typography>

            <Typography
              sx={{
                color: "#8C8377",
                fontSize: 7,
                fontWeight: 700,
                letterSpacing: "2px",
              }}
            >
              OF {String(favorites.length).padStart(2, "0")}
            </Typography>
          </Box>
        </Box>

        {/* ================================================= */}
        {/* MAIN CONTENT */}
        {/* ================================================= */}

        <Box
          sx={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.05fr .95fr",
            },
            minHeight: {
              md: 555,
            },
            borderTop: isDark
              ? "1px solid rgba(255,255,255,.15)"
              : "1px solid rgba(41,38,33,.13)",
            borderBottom: isDark
              ? "1px solid rgba(255,255,255,.15)"
              : "1px solid rgba(41,38,33,.13)",
          }}
        >
          {/* ================================================= */}
          {/* LEFT SIDE (PLACES LIST) */}
          {/* ================================================= */}

          <Box
            sx={{
              position: "relative",
              py: {
                xs: 3,
                md: 5,
              },
              pr: {
                md: 5,
              },
            }}
          >
            {/* Vertical Divider */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                width: "1px",
                backgroundColor: isDark
                  ? "rgba(255,255,255,.15)"
                  : "rgba(41,38,33,.13)",
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            />

            {/* FAVORITE ITEMS */}
            {favorites.map((place, index) => {
              const isActive = index === active;

              return (
                <Box
                  key={place.id}
                  onClick={() => setActive(index)}
                  sx={{
                    position: "relative",
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "42px 78px 1fr",
                      sm: "55px 100px 1fr",
                    },
                    alignItems: "center",
                    gap: { xs: 1.5, sm: 2 },
                    py: 2.5,
                    px: {
                      xs: 1,
                      md: 2,
                    },
                    cursor: "pointer",
                    borderLeft: isActive
                      ? "3px solid #C49A55"
                      : "3px solid transparent",
                    borderBottom: isDark
                      ? "1px solid rgba(255,255,255,.10)"
                      : "1px solid rgba(41,38,33,.10)",
                    backgroundColor: isActive
                      ? "#13112F"
                      : "transparent",
                    transform: isActive
                      ? "translateX(9px)"
                      : "translateX(0)",
                    transition:
                      "all .45s cubic-bezier(.2,.7,.2,1)",
                    "&:hover": {
                      backgroundColor: "#13112f",
                      borderLeft: "6px solid #C49A55",
                      transform: "translateX(9px)",
                    },
                  }}
                >
                  {/* NUMBER */}
                  <Typography
                    sx={{
                      color: isActive
                        ? "#B28A52"
                        : "#B9B0A2",
                      fontFamily: "Georgia, serif",
                      fontSize: {
                        xs: 24,
                        md: 34,
                      },
                      lineHeight: 1,
                    }}
                  >
                    {place.id}
                  </Typography>

                  {/* IMAGE */}
                  <Box
                    sx={{
                      width: "100%",
                      height: {
                        xs: 65,
                        md: 82,
                      },
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={place.image}
                      alt={place.name}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: isActive
                          ? "none"
                          : "grayscale(20%)",
                        transform: isActive
                          ? "scale(1.05)"
                          : "scale(1)",
                        transition:
                          "all .6s ease",
                      }}
                    />
                  </Box>

                  {/* TEXT */}
                  <Box>
                    <Typography
                      sx={{
                        color: "#B28A52",
                        fontSize: 7,
                        fontWeight: 700,
                        letterSpacing: "2px",
                        mb: 0.6,
                      }}
                    >
                      {place.country}
                    </Typography>

                    <Typography
                      sx={{
                        color: isActive ? "#FFFFFF" : "#a57a2fca",
                        fontFamily: "Georgia, serif",
                        fontSize: {
                          xs: 17,
                          md: 23,
                        },
                        lineHeight: 1,
                      }}
                    >
                      {place.name}
                    </Typography>
                  </Box>

                  {/* ACTIVE GOLD LINE */}
                  {isActive && (
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: 3,
                        backgroundColor: "#fcb34c",
                      }}
                    />
                  )}
                </Box>
              );
            })}
          </Box>

          {/* ================================================= */}
          {/* RIGHT IMAGE REVEAL */}
          {/* ================================================= */}

          <Box
            sx={{
              position: "relative",
              minHeight: {
                xs: 400,
                sm: 480,
                md: "auto",
              },
              ml: {
                md: 5,
              },
              mt: {
                xs: 4,
                md: 0,
              },
              overflow: "hidden",
              backgroundColor: "#292621",
            }}
          >
            {/* IMAGE */}
            <Box
              component="img"
              src={selected.image}
              alt={selected.name}
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition:
                  "transform .8s cubic-bezier(.2,.7,.2,1)",
                "&:hover": {
                  transform: "scale(1.035)",
                },
              }}
            />

            {/* SOFT OVERLAY */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(25,23,20,.03) 15%, rgba(25,23,20,.76) 100%)",
              }}
            />

            {/* TOP LABEL */}
            <Box
              sx={{
                position: "absolute",
                top: 20,
                left: 22,
                right: 22,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: 7,
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                }}
              >
                SAVED DESTINATION
              </Typography>

              <IconButton
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "rgba(255,255,255,.92)",
                  color: "#B28A52",
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                }}
              >
                <FavoriteRoundedIcon
                  sx={{
                    fontSize: 18,
                  }}
                />
              </IconButton>
            </Box>

            {/* LARGE BACKGROUND NUMBER */}
            <Typography
              sx={{
                position: "absolute",
                top: 55,
                right: 18,
                color: "rgba(255,255,255,.15)",
                fontFamily: "Georgia, serif",
                fontSize: {
                  xs: 100,
                  md: 150,
                },
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {selected.id}
            </Typography>

            {/* BOTTOM CONTENT */}
            <Box
              sx={{
                position: "absolute",
                left: {
                  xs: 20,
                  md: 28,
                },
                right: {
                  xs: 20,
                  md: 28,
                },
                bottom: {
                  xs: 22,
                  md: 30,
                },
              }}
            >
              <Typography
                sx={{
                  color: "#D0A662",
                  fontSize: 7,
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  mb: 1,
                }}
              >
                {selected.country}
              </Typography>

              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Georgia, serif",
                  fontSize: {
                    xs: 32,
                    sm: 45,
                    md: 50,
                  },
                  lineHeight: 0.95,
                  letterSpacing: "-2px",
                }}
              >
                {selected.name}
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,.74)",
                  fontSize: 9,
                  lineHeight: 1.7,
                  maxWidth: 330,
                  mt: 1.5,
                }}
              >
                {selected.text}
              </Typography>

              {/* EXPLORE BUTTON */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 2,
                  cursor: "pointer",
                  width: "fit-content",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: 7,
                    fontWeight: 700,
                    letterSpacing: "1.7px",
                  }}
                >
                  DISCOVER PLACE
                </Typography>

                <ArrowOutwardRoundedIcon
                  sx={{
                    fontSize: 14,
                    color: "#D0A662",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ================================================= */}
        {/* FOOTER (CENTER ON MOBILE, ORIGINAL ON DESKTOP) */}
        {/* ================================================= */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            textAlign: { xs: "center", sm: "left" },
            gap: { xs: 1.5, sm: 2 },
            pt: 2.5,
          }}
        >
          <Typography
            sx={{
              color: "#8C8377",
              fontSize: 7,
              letterSpacing: "1.7px",
              fontWeight: 700,
            }}
          >
            CLICK A PLACE TO EXPLORE
          </Typography>

          <Typography
            sx={{
              color: "#B28A52",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: 13,
            }}
          >
            Keep the places that matter.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Favorites;