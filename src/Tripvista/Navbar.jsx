import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";

import FlightIcon from "@mui/icons-material/Flight";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LanguageIcon from "@mui/icons-material/Language";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  "Home",
  "Destinations",
  "Explore",
  "My Trips",
  "Favorites",
];

function Navbar({ darkMode: parentDarkMode, setDarkMode: parentSetDarkMode }) {
  const [internalDarkMode, setInternalDarkMode] = useState(false);

  const darkMode = parentDarkMode !== undefined ? parentDarkMode : internalDarkMode;
  const setDarkMode = parentSetDarkMode !== undefined ? parentSetDarkMode : setInternalDarkMode;

  const [activePage, setActivePage] = useState("Home");
  const [openAuth, setOpenAuth] = useState(false);
  const [authType, setAuthType] = useState("welcome");
  const [mobileMenu, setMobileMenu] = useState(false);

  const handlePremium = () => {
    setOpenAuth(true);
    setAuthType("welcome");
    setMobileMenu(false);
  };

  const handleClose = () => {
    setOpenAuth(false);
    setAuthType("welcome");
  };

  const handlePageClick = (page) => {
    setActivePage(page);
    setMobileMenu(false);
  };

  const iconButtonSx = {
    color: "#E8D9C4",
    p: { xs: 0.7, sm: 1 },
    "&:hover": {
      color: "#4FC3F7",
      backgroundColor: "transparent",
    },
  };

  // Drawer styles
  const drawerBg = darkMode ? "#070E26" : "#FFFFFF";
  const drawerTextColor = darkMode ? "#F1F5F9" : "#0F172A";
  const drawerActiveTextColor = darkMode ? "#38BDF8" : "#0284C7";
  const drawerActiveBg = darkMode ? "rgba(56, 189, 248, 0.12)" : "rgba(2, 132, 199, 0.08)";
  const drawerIconColor = darkMode ? "#E2E8F0" : "#475569";
  const drawerDividerColor = darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(15, 23, 42, 0.08)";

  return (
    <>
      {/* ===================== NAVBAR ===================== */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          width: "100%",
          backgroundColor: darkMode ? "#030718" : "#050A30",
          borderBottom: darkMode ? "1px solid rgba(255,255,255,0.08)" : "none",
          transition: "background-color 0.3s ease",
          zIndex: 1100,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            width: "100%",
            boxSizing: "border-box",
            px: {
              xs: 1.5,
              sm: 2,
              md: 3,
            },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              width: "100%",
              minHeight: {
                xs: 58,
                sm: 66,
                md: 72,
              },
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* ========== LEFT: LOGO ========== */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                userSelect: "none",
              }}
              onClick={() => handlePageClick("Home")}
            >
              <FlightIcon
                sx={{
                  color: "#4FC3F7",
                  flexShrink: 0,
                  fontSize: {
                    xs: 24,
                    sm: 30,
                    md: 35,
                  },
                  mr: {
                    xs: 0.5,
                    sm: 0.8,
                    md: 1,
                  },
                }}
              />

              <Typography
                sx={{
                  color: "#E8D9C4",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: {
                    xs: ".02rem",
                    sm: ".05rem",
                    md: ".08rem",
                  },
                  fontSize: {
                    xs: 18,
                    sm: 20,
                    md: 22,
                  },
                  whiteSpace: "nowrap",
                }}
              >
                TripVista
              </Typography>
            </Box>

            {/* ========== DESKTOP NAVIGATION ========== */}
            <Box
              sx={{
                flex: 1,
                display: {
                  xs: "none",
                  md: "flex",
                },
                justifyContent: "center",
                alignItems: "center",
                minWidth: 0,
                mx: {
                  md: 1,
                  lg: 2,
                },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  sx={{
                    minWidth: "auto",
                    px: {
                      md: 1.2,
                      lg: 2,
                    },
                    py: 2,
                    color:
                      activePage === page
                        ? "#4FC3F7"
                        : "#E8D9C4",
                    fontSize: {
                      md: 14,
                      lg: 15,
                    },
                    fontWeight: 500,
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 7,
                      left: "50%",
                      width:
                        activePage === page ? "55%" : "0%",
                      height: "2px",
                      backgroundColor: "#C49A55",
                      transform: "translateX(-50%)",
                      transition: "width .3s ease",
                    },
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#4FC3F7",
                    },
                    "&:hover::after": {
                      width: "65%",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* ========== RIGHT SIDE: DESKTOP ICONS (ONLY ICON FOR DARK MODE) ========== */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                justifyContent: "flex-end",
                flexShrink: 0,
                gap: {
                  sm: 0.5,
                  md: 1,
                  lg: 1.5,
                },
              }}
            >
              {/* ડેસ્કટોપમાં માત્ર ઓરિજિનલ સાદો આઈકન */}
              <IconButton
                onClick={() => setDarkMode(!darkMode)}
                aria-label="toggle theme"
                sx={iconButtonSx}
              >
                {darkMode ? (
                  <LightModeIcon
                    sx={{
                      fontSize: {
                        xs: 20,
                        sm: 23,
                        md: 24,
                      },
                      color: "#F5C518",
                    }}
                  />
                ) : (
                  <DarkModeIcon
                    sx={{
                      fontSize: {
                        xs: 20,
                        sm: 23,
                        md: 24,
                      },
                    }}
                  />
                )}
              </IconButton>

              <IconButton aria-label="language" sx={iconButtonSx}>
                <LanguageIcon />
              </IconButton>

              <IconButton aria-label="favorites" sx={iconButtonSx}>
                <FavoriteIcon />
              </IconButton>

              <IconButton
                onClick={handlePremium}
                aria-label="account"
                sx={iconButtonSx}
              >
                <AccountCircleIcon sx={{ fontSize: 25 }} />
              </IconButton>

              <Button
                onClick={handlePremium}
                sx={{
                  ml: 0.8,
                  px: 2,
                  py: 0.7,
                  minWidth: "auto",
                  borderRadius: "25px",
                  border: "1px solid #4FC3F7",
                  color: "#4FC3F7",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  "&:hover": {
                    backgroundColor: "#4FC3F7",
                    color: "#06113D",
                  },
                }}
              >
                Premium ✦
              </Button>
            </Box>

            {/* ========== RIGHT SIDE: MOBILE HAMBURGER BUTTON ========== */}
            <IconButton
              onClick={() => setMobileMenu(true)}
              aria-label="open menu"
              sx={{
                ...iconButtonSx,
                display: {
                  xs: "flex",
                  md: "none",
                },
                flexShrink: 0,
                ml: "auto",
              }}
            >
              <MenuIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ===================== MOBILE DRAWER (OPENS FROM RIGHT) ===================== */}
      <Drawer
        anchor="right"
        open={mobileMenu}
        onClose={() => setMobileMenu(false)}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: {
              xs: "84vw",
              sm: 320,
            },
            maxWidth: 360,
            backgroundColor: `${drawerBg} !important`,
            color: drawerTextColor,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            transition: "background-color 0.3s ease",
          },
        }}
      >
        {/* DRAWER TOP HEADER */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2.5,
            py: 2.2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FlightIcon
              sx={{
                color: "#38BDF8",
                mr: 1.2,
                fontSize: 28,
              }}
            />
            <Typography
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".04rem",
                fontSize: 20,
                color: drawerTextColor,
              }}
            >
              TripVista
            </Typography>
          </Box>

          <IconButton
            onClick={() => setMobileMenu(false)}
            sx={{
              color: drawerIconColor,
              p: 1,
              "&:hover": {
                color: "#38BDF8",
              },
            }}
            aria-label="close menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider
          sx={{
            borderColor: drawerDividerColor,
          }}
        />

        {/* NAVIGATION LIST */}
        <List sx={{ px: 1.8, py: 2 }}>
          {pages.map((page) => {
            const isSelected = activePage === page;

            return (
              <ListItemButton
                key={page}
                onClick={() => handlePageClick(page)}
                sx={{
                  minHeight: 50,
                  borderRadius: "12px",
                  mb: 1.2,
                  px: 2,
                  color: isSelected
                    ? drawerActiveTextColor
                    : drawerTextColor,
                  backgroundColor: isSelected
                    ? drawerActiveBg
                    : "transparent",
                  borderLeft: isSelected
                    ? `3px solid ${darkMode ? "#38BDF8" : "#0284C7"}`
                    : "3px solid transparent",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    backgroundColor: darkMode
                      ? "rgba(56, 189, 248, 0.18)"
                      : "rgba(2, 132, 199, 0.12)",
                    color: drawerActiveTextColor,
                  },
                }}
              >
                <ListItemText
                  primary={page}
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: isSelected ? 700 : 500,
                    letterSpacing: "0.3px",
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>

        <Divider
          sx={{
            borderColor: drawerDividerColor,
            mt: "auto",
          }}
        />

        {/* MOBILE DRAWER TOGGLE SWITCH & ACTIONS */}
        <Box sx={{ p: 2 }}>
          {/* DARK / LIGHT MODE SWITCH ROW (ઓન્લી મોબાઇલમાં જ સ્વિચ દેખાશે) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 1.6,
              mb: 1.5,
              borderRadius: "14px",
              backgroundColor: darkMode
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(0, 0, 0, 0.04)",
              border: darkMode
                ? "1px solid rgba(255, 255, 255, 0.08)"
                : "1px solid rgba(0, 0, 0, 0.06)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
              {darkMode ? (
                <DarkModeIcon sx={{ color: "#38BDF8", fontSize: 22 }} />
              ) : (
                <LightModeIcon sx={{ color: "#F59E0B", fontSize: 22 }} />
              )}
              <Typography sx={{ fontSize: 14, fontWeight: 600, color: drawerTextColor }}>
                {darkMode ? "Dark Mode" : "Light Mode"}
              </Typography>
            </Box>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#38BDF8",
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#38BDF8",
                },
              }}
            />
          </Box>

          {/* EXTRA ACTIONS */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              py: 1,
              mb: 2,
            }}
          >
            <IconButton sx={{ color: drawerIconColor, "&:hover": { color: "#38BDF8" } }}>
              <LanguageIcon />
            </IconButton>

            <IconButton sx={{ color: drawerIconColor, "&:hover": { color: "#38BDF8" } }}>
              <FavoriteIcon />
            </IconButton>

            <IconButton
              onClick={handlePremium}
              sx={{ color: drawerIconColor, "&:hover": { color: "#38BDF8" } }}
            >
              <AccountCircleIcon />
            </IconButton>
          </Box>

          {/* PREMIUM BUTTON */}
          <Button
            fullWidth
            onClick={handlePremium}
            sx={{
              minHeight: 46,
              borderRadius: "25px",
              border: "1.5px solid #38BDF8",
              color: darkMode ? "#38BDF8" : "#0284C7",
              backgroundColor: darkMode ? "rgba(56, 189, 248, 0.08)" : "rgba(2, 132, 199, 0.06)",
              textTransform: "none",
              fontWeight: 700,
              fontSize: 15,
              "&:hover": {
                backgroundColor: "#38BDF8",
                color: "#030718",
              },
            }}
          >
            Premium ✦
          </Button>
        </Box>
      </Drawer>

      {/* ===================== AUTH DIALOG ===================== */}
      <Dialog
        open={openAuth}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        sx={{
          "& .MuiDialog-container": {
            p: {
              xs: 1,
              sm: 2,
            },
          },
        }}
        PaperProps={{
          sx: {
            width: {
              xs: "100%",
              sm: "calc(100% - 32px)",
            },
            maxWidth:
              authType === "welcome" ? 520 : 560,
            maxHeight: "calc(100dvh - 20px)",
            m: 0,
            borderRadius: {
              xs: "20px",
              sm: "32px",
            },
            overflowY: "auto",
            overflowX: "hidden",
            boxShadow: "0 25px 80px rgba(0,0,0,.45)",
            backgroundColor: darkMode ? "#070E26" : "#FFFFFF",
            color: darkMode ? "#F1F5F9" : "#07113F",
            transition: "background-color 0.3s ease, color 0.3s ease",
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          aria-label="close dialog"
          sx={{
            position: "absolute",
            right: {
              xs: 10,
              sm: 18,
            },
            top: {
              xs: 10,
              sm: 18,
            },
            zIndex: 5,
            color: darkMode ? "#E2E8F0" : "#07113F",
            "&:hover": {
              backgroundColor: "rgba(56, 189, 248, 0.12)",
              color: "#38BDF8",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            p: {
              xs: 2.5,
              sm: 5,
            },
            pt: {
              xs: 4,
              sm: 6,
            },
          }}
        >
          {authType === "welcome" && (
            <>
              <Typography
                sx={{
                  fontFamily: "Georgia, serif",
                  fontSize: {
                    xs: 26,
                    sm: 40,
                  },
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: darkMode ? "#F1F5F9" : "#07113F",
                  textAlign: "center",
                  mb: 1,
                }}
              >
                Welcome to Tripvista
              </Typography>

              <Typography
                sx={{
                  textAlign: "center",
                  color: darkMode ? "rgba(241, 245, 249, 0.7)" : "#73798A",
                  fontSize: {
                    xs: 13,
                    sm: 16,
                  },
                  mb: {
                    xs: 3,
                    sm: 5,
                  },
                }}
              >
                Continue your journey with us
              </Typography>

              <Button
                fullWidth
                onClick={() => setAuthType("signin")}
                sx={{
                  height: {
                    xs: 48,
                    sm: 58,
                  },
                  borderRadius: "30px",
                  backgroundColor: darkMode ? "#1E293B" : "#07113F",
                  color: "#FFFFFF",
                  fontSize: 16,
                  fontWeight: 700,
                  mb: 2,
                  "&:hover": {
                    backgroundColor: "#38BDF8",
                    color: "#07113F",
                  },
                }}
              >
                SIGN IN
              </Button>

              <Button
                fullWidth
                onClick={() => setAuthType("signup")}
                sx={{
                  height: {
                    xs: 48,
                    sm: 58,
                  },
                  borderRadius: "30px",
                  border: "1px solid #38BDF8",
                  color: darkMode ? "#38BDF8" : "#07113F",
                  fontSize: 16,
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "#38BDF8",
                    color: "#07113F",
                  },
                }}
              >
                SIGN UP
              </Button>
            </>
          )}

          {authType === "signin" && (
            <>
              <Typography
                sx={{
                  fontFamily: "Georgia, serif",
                  fontSize: {
                    xs: 26,
                    sm: 38,
                  },
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: darkMode ? "#F1F5F9" : "#07113F",
                  mb: 1,
                }}
              >
                Welcome Back
              </Typography>

              <Typography
                sx={{
                  color: darkMode ? "rgba(241, 245, 249, 0.7)" : "#73798A",
                  fontSize: 14,
                  mb: 3,
                }}
              >
                Sign in to continue your journey.
              </Typography>

              <TextField
                fullWidth
                label="Email"
                type="email"
                margin="normal"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "14px",
                    color: darkMode ? "#FFFFFF" : "inherit",
                    "& fieldset": {
                      borderColor: darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.23)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#38BDF8",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: darkMode ? "rgba(255,255,255,0.7)" : "#73798A",
                    "&.Mui-focused": {
                      color: "#38BDF8",
                    },
                  },
                }}
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "14px",
                    color: darkMode ? "#FFFFFF" : "inherit",
                    "& fieldset": {
                      borderColor: darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.23)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#38BDF8",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: darkMode ? "rgba(255,255,255,0.7)" : "#73798A",
                    "&.Mui-focused": {
                      color: "#38BDF8",
                    },
                  },
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: 1,
                }}
              >
                <Typography
                  sx={{
                    color: darkMode ? "#38BDF8" : "#07113F",
                    fontSize: 13,
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Forgot password?
                </Typography>
              </Box>

              <Button
                fullWidth
                sx={{
                  mt: 3,
                  height: {
                    xs: 48,
                    sm: 58,
                  },
                  borderRadius: "30px",
                  backgroundColor: darkMode ? "#1E293B" : "#07113F",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "#38BDF8",
                    color: "#07113F",
                  },
                }}
              >
                SIGN IN
              </Button>

              <Divider
                sx={{
                  my: 3,
                  borderColor: darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)",
                }}
              />

              <Typography
                sx={{
                  textAlign: "center",
                  color: darkMode ? "rgba(255,255,255,0.7)" : "#777",
                  fontSize: 14,
                }}
              >
                Don't have an account?{" "}
                <Box
                  component="span"
                  onClick={() => setAuthType("signup")}
                  sx={{
                    color: darkMode ? "#38BDF8" : "#07113F",
                    fontWeight: 700,
                    cursor: "pointer",
                    "&:hover": {
                      color: "#38BDF8",
                    },
                  }}
                >
                  Sign Up
                </Box>
              </Typography>
            </>
          )}

          {authType === "signup" && (
            <>
              <Typography
                sx={{
                  fontFamily: "Georgia, serif",
                  fontSize: {
                    xs: 26,
                    sm: 38,
                  },
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: darkMode ? "#F1F5F9" : "#07113F",
                  mb: 1,
                }}
              >
                Create Account
              </Typography>

              <Typography
                sx={{
                  color: darkMode ? "rgba(255,255,255,0.7)" : "#73798A",
                  fontSize: 14,
                  mb: 2,
                }}
              >
                Start your journey with Tripvista.
              </Typography>

              {[
                ["Full Name", "text"],
                ["Email", "email"],
                ["Password", "password"],
                ["Confirm Password", "password"],
              ].map(([label, type]) => (
                <TextField
                  key={label}
                  fullWidth
                  label={label}
                  type={type}
                  margin="normal"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "14px",
                      color: darkMode ? "#FFFFFF" : "inherit",
                      "& fieldset": {
                        borderColor: darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.23)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#38BDF8",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: darkMode ? "rgba(255,255,255,0.7)" : "#73798A",
                      "&.Mui-focused": {
                        color: "#38BDF8",
                      },
                    },
                  }}
                />
              ))}

              <Button
                fullWidth
                sx={{
                  mt: 3,
                  height: {
                    xs: 48,
                    sm: 58,
                  },
                  borderRadius: "30px",
                  backgroundColor: darkMode ? "#1E293B" : "#07113F",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "#38BDF8",
                    color: "#07113F",
                  },
                }}
              >
                CREATE ACCOUNT
              </Button>

              <Divider
                sx={{
                  my: 3,
                  borderColor: darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)",
                }}
              />

              <Typography
                sx={{
                  textAlign: "center",
                  color: darkMode ? "rgba(255,255,255,0.7)" : "#777",
                  fontSize: 14,
                }}
              >
                Already have an account?{" "}
                <Box
                  component="span"
                  onClick={() => setAuthType("signin")}
                  sx={{
                    color: darkMode ? "#38BDF8" : "#07113F",
                    fontWeight: 700,
                    cursor: "pointer",
                    "&:hover": {
                      color: "#38BDF8",
                    },
                  }}
                >
                  Sign In
                </Box>
              </Typography>
            </>
          )}
        </Box>
      </Dialog>
    </>
  );
}

export default Navbar;