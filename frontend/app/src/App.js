import logo from './logo.svg';
import './App.css';
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form onSubmit={handleSubmit}>
          <label>Enter your name:
            <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </label>
        </form>

        <form action = "http://127.0.0.1:5000/file" method = "POST" 
         enctype = "multipart/form-data">
         <input type = "file" name = "file" />
         <input type = "submit"/>
        </form> 

        <button onClick={retrieveData}>Default</button>
      </header>
    </div>
  );
}

export default App;
