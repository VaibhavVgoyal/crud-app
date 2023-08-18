
import { useState } from 'react';
import './App.css';
import Form from './components/form.js'
import Navbar from './components/Navbar'
import Table from './components/table'
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom";
function App() {
  const [tabledata , settabledata] = useState([])
  const [ip, setip] = useState({
    names:'',
    email:'',
    pass:''
    
  })

  const changehandle = (e)=>{
    setip({...ip,[e.target.names]:e.target.value})
  }


const handleform = ()=>{
  settabledata(tabledata);
  setip({
    name:'',
    email:'',
    pass:''
  })
}
  return (
       <>
        <Navbar title='CRUD'/>
        <Router>
        <Routes>
         <Route path="/" element={ <Form onhandle={handleform} imput={ip} changehandle={changehandle}/>} />

        <Route path="/submit" element={<Table arry={tabledata}/>}/>
         </Routes>
       </Router>
       </>
  );
}

export default App;
