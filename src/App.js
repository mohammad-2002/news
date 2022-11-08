import './App.css';
import MyNews from './myComponents/MyNews';
import Navbar from './myComponents/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
   
     <Router>
    
        <Navbar /> 
        <Routes>

          <Route exact path="/"  element={<MyNews key="general" category="general"/>}> </Route>
          <Route exact path="/business"  element={<MyNews  key="business" category="business"/>}> </Route>
          <Route exact path="/entertainment"  element={<MyNews  key="entertainment" category="entertainment"/>}> </Route>
          <Route exact path="/health" element={<MyNews  key="health"  category="health"/>}> </Route>
          <Route exact path="/science" element={<MyNews key="science" category="science"/>}> </Route>
          <Route exact path="/sports"  element={<MyNews key="sports" category="sports"/>}> </Route>
          <Route exact path="/technology" element={<MyNews key="technology" category="technology"/>}> </Route>

          
        </Routes>
    </Router>
     </>
  );
}

export default App;
