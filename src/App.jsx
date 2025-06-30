import ButtonGradient from "./assets/svg/ButtonGradient";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../src/routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <AppRoutes />
      <ButtonGradient />
    </BrowserRouter>
  );
};

export default App;
