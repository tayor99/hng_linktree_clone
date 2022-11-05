import Footer from "./components/Footer";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Footer />}>
          <Route index element={<Profile />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
