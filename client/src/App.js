import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import Detail from "./components/Detail"
// import PersonForm from './components/PersonFrom';
// import DisplayPeople from './components/DisplayPeople';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/new" element={<PersonForm />} /> */}
          <Route path="/people" element={<Home />} />
          <Route path="/people/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
