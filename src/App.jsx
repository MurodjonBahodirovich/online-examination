import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Body/Home/Home";
import Tests from "./components/routes/TestsPage/Tests";
import TeacherSection from "./components/routes/TeacherPage/TeacherSection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/test" element={<Tests />} />
        <Route path="/teacher-section" element={<TeacherSection />} />
      </Route>
    </Routes>
  );
}

export default App;
