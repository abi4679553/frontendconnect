import { Route, Routes } from "react-router-dom";
import Form from "./components/Form"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/user" element= {<Form/>}/>
      </Routes>

      <Form />
   
    </div>
  );
}

export default App;
