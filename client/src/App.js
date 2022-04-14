import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PersonForm from './components/PersonFrom';
import DisplayPeople from './components/DisplayPeople';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/new" element={<PersonForm />} />
          <Route path="/" element={<DisplayPeople />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
