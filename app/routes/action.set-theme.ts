import { createThemeAction } from "remix-themes"

import { themeSessionResolver } from "../lib/themeSessionResolver"

export const action = createThemeAction(themeSessionResolver)
