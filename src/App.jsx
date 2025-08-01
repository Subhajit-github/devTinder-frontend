import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
    </>
  )
}

export default App;
