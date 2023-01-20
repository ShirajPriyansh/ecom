import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";
import Authentication from "./routes/Authentication/Authentication";
import Contact from "./routes/Contact/Contact";
import Shop from "./routes/Shop/Shop";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
