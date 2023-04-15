import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

export default function Root() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
