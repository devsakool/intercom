// src/App.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from './components/Table';
import AddEditForm from './components/AddEditForm';

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [editData, setEditData] = useState(null);

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
        setFilteredData(data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setError(error);
      });
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredData(data);
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

  const handleAddEdit = (item) => {
    if (editData) {
      setData(prevData =>
        prevData.map(d => (d.id === item.id ? item : d))
      );
      setEditData(null);
    } else {
      setData(prevData => [...prevData, { ...item, id: prevData.length + 1 }]);
    }
    setSearchTerm('');
  };

  const handleEdit = (item) => {
    setEditData(item);
  };

  const handleDelete = (id) => {
    const confirmation = prompt("Type 'delete' to confirm deletion:");
    if (confirmation === 'delete') {
      setData(prevData => prevData.filter(item => item.id !== id));
      setSearchTerm('');
    }
  };

  return (
    <div className="App container">
      <h1 className="mt-5">เบอร์โทรภายใน</h1>
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
      <Table data={filteredData} onEdit={handleEdit} onDelete={handleDelete} />
      <AddEditForm onAddEdit={handleAddEdit} editData={editData} />
    </div>
  );
}

export default App;
