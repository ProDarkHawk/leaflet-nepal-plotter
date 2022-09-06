import { IWrapper } from "@interfaces/wrapper";

export default function DefaultLayout({ children }: IWrapper) {
  return <div id="leaflet-plotter-container">{children}</div>;
}
