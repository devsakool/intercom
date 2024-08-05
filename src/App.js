import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setFilteredData(data); // เริ่มต้นด้วยการแสดงข้อมูลทั้งหมด
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setError(error);
      });
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredData(data); // ถ้าไม่มีคำค้นหา ให้แสดงข้อมูลทั้งหมด
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filtered = data.filter(item => 
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(lowerCaseSearchTerm)
        )
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, data]);

  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App container">
      <h1 className="mt-5">Data from JSON</h1>
      <div className="form-group mt-3 mb-3">
        <label htmlFor="search">ค้นหาข้อมูล:</label>
        <input
          type="text"
          id="search"
          className="form-control"
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </div>
      {error && <div className="alert alert-danger mt-3">Error: {error.message}</div>}
      <Table data={filteredData} />
    </div>
  );
}

export default App;
