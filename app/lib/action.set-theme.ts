import { createThemeAction } from "remix-themes"

import { themeSessionResolver } from "./themeSessionResolver"

export const action = createThemeAction(themeSessionResolver)
