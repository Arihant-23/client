import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardPage from "./CardPage";
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Make an API request to fetch the project data
    axios
      .get("http://localhost:5000/api/projects")
      .then((response) => {
        setProjects(response.data.myProjects);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  }, []);

  useEffect(() => {
    const filtered = projects.filter((item) =>
      item.ProjectTechnologies.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filtered);
  }, [inputValue, projects]);

  // Handle input value changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Here our project cards will come</h1>
      </header>
      <div className="search-tag">
        <span>Search your project</span>
        <input
          type="text"
          className="search-box"
          placeholder="Enter your project Title"
          onChange={handleInputChange}
        />
      </div>
      <br />

      <CardPage backendData={filteredData == [] ? projects : filteredData} />
    </div>
  );
};

export default App;
