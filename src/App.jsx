import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Body/Home/Home";
import Tests from "./components/routes/Tests/Tests";
import Result from "./components/routes/Result/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/test" element={<Tests />} />
        <Route path="/result" element={<Result />} />
      </Route>
    </Routes>
  );
}

export default App;
