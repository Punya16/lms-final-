import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentInfo from "./components/stdinfo";
import Dashboard from "./components/dashboard";
import Update from "./components/update";



function App() {
  return (
    <div>
     
    
      <center>
        <h2 style={{backgroundColor : "red"}}>Learning Management System </h2>
      </center>

      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentInfo />} />
          <Route path="/dashbord" element={<Dashboard />} />
          <Route path="/update/:id" element={<Update />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;