import "./styles/app.scss";
import Dashboard from "./pages/Dashboard";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Financial_Info from "./pages/Personal_Info";
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Disallow", "/not-for-robots.html");
    myHeaders.append("User-Agent", "*");
    myHeaders.append("Access-Control-Allow-Origin", "*")
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("name", name);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow',
    };
    
    fetch("http://127.0.0.1:5000", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }

  async function retrieveData (e) {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Disallow", "/not-for-robots.html");
    myHeaders.append("User-Agent", "*");
    myHeaders.append("Access-Control-Allow-Origin", "*")

  

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result.name))
      .catch(error => console.log('error', error));
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/personal-info" element={<Financial_Info />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/budget" element={<Dashboard />} />
          <Route path="/investing" element={<Dashboard />} />
          <Route path="/spending" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
