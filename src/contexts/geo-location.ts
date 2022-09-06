import { createContext } from "react";

const GeoLocationContext = createContext({
  hasGeolocation: false,
  setHasGeoLocation: () => {},
});

export default GeoLocationContext;
