import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";
import SignIn from "./routes/SignIn/SignIn";
import Contact from "./routes/Contact/Contact";

const Shop = () => {
  return <h1>Shopping Page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
