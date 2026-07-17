import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Getmethod from "./components/getmethod";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/users" element={<Getmethod />} />
      </Routes>
    </div>
  );
}

export default App;