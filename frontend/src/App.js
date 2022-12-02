import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import DefaultComponent from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DefaultComponent/>}></Route>
        <Route path="/test" element={<TestComponent/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
