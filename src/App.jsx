// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
// The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <div className="content-background">
        <Outlet />
      </div>
      <div className="footer-background">
        <Footer />
      </div>
    </>
  );
}
export default App;