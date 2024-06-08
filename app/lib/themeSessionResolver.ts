// Import necessary modules
import { createThemeSessionResolver } from "remix-themes";
import { createCookieSessionStorage } from "@remix-run/node";

// Determine if in production or development
const isProduction = process.env.NODE_ENV === "production";

// Create sessionStorage with appropriate options
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["s3cr3t"],
    ...(isProduction
      ? { domain: "your-production-domain.com", secure: true }
      : {}),
  },
});

// Create the theme session resolver
export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
