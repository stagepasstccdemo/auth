import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import "./styles.css";

export default function Root() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
