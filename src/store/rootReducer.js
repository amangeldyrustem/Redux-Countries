import { combineReducers } from "redux";
import { themeReducer } from "./theme/themeReducers";
import { countriesReducer } from "./countries/countriesReducers";
import { controlsReducer } from "./controls/controlsReducers";
import { detailsReducer } from "./details/detailsReducers";

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducer,
    controls: controlsReducer,
    details: detailsReducer,
})