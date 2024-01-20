import { Routes, Route } from "react-router-dom";

import {
  HomePage,
  LoginPage,
  SignupPage,
  // CreateListingPage,
  // ProductDetailsPage,
} from "./routes/Routes.js";
import CrateListing from "./components/CrateListing.jsx";

function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage  />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
      <Route path="/create-list" element={<CrateListing />} />
    </Routes>
  );
}

export default App;
