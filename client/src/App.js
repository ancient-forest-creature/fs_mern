import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home"
import Detail from "./components/Detail"
import Update from "./components/Update"
// import PersonForm from './components/PersonFrom';
// import DisplayPeople from './components/DisplayPeople';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/new" element={<PersonForm />} /> */}
          <Route path="/person" element={<Home />} />
          <Route path="/person/:id" element={<Detail />} />
          <Route path="/person/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
