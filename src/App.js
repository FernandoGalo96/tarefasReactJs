import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./pages/routes";
import './app.css'

export default function App () {
  return(
    <BrowserRouter>
    <RoutesApp/>
    </BrowserRouter>
  );
}