import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Body/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
