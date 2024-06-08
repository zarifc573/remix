import clsx from "clsx";
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes";
import { themeSessionResolver } from "./lib/themeSessionResolver";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import  "./tailwind.css";



// Loader function to get theme from session storage
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

// App component wrapped with ThemeProvider
export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();

  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

// Main App component
export function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
        {/* Add additional meta tags, scripts, or stylesheets here if needed */}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {/* Add additional scripts here if needed */}
      </body>
    </html>
  );
}
