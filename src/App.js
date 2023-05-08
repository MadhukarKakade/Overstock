import Navbar from "./Components/Navbar";
import { All_Routes } from "./Pages/All_Routes";
import Footer from "./Components/Footer";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/checkout" && <Navbar />}
      <All_Routes />
      {location.pathname !== "/checkout" && <Footer />}
    </div>
  );
}

export default App;
